import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  innerGradient?: string;
  behindGlowEnabled?: boolean;
  behindGlowColor?: string;
  behindGlowSize?: string;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180,
} as const;

const clamp = (v: number, min = 0, max = 100): number =>
  Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number =>
  parseFloat(v.toFixed(precision));
const adjust = (
  v: number,
  fMin: number,
  fMax: number,
  tMin: number,
  tMax: number
): number => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

// Performance optimization: detect if device is low-end
function useIsLowEndDevice() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768;
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // More aggressive detection for better performance
      setIsLowEnd(
        prefersReducedMotion ||
          isMobile ||
          hardwareConcurrency <= 4 ||
          deviceMemory <= 4
      );
    };

    checkDevice();

    // Re-check on resize
    const handleResize = () => checkDevice();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLowEnd;
}

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  // Performance optimization: disable tilt on low-end devices
  const isLowEnd = useIsLowEndDevice();
  const shouldEnableTilt = enableTilt && !isLowEnd;

  // Image loading state to prevent flickering
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [miniAvatarLoaded, setMiniAvatarLoaded] = useState(false);
  const [avatarRetryCount, setAvatarRetryCount] = useState(0);
  const [miniAvatarRetryCount, setMiniAvatarRetryCount] = useState(0);
  const avatarRetryTimeoutRef = useRef<number | null>(null);
  const miniAvatarRetryTimeoutRef = useRef<number | null>(null);

  const enterTimerRef = useRef<number | null>(null);
  const leaveRafRef = useRef<number | null>(null);

  // Preload images on mount
  useEffect(() => {
    const preloadImage = (src: string) => {
      if (!src || src.includes("Placeholder")) return;
      const img = new Image();
      img.src = src;
    };

    preloadImage(avatarUrl);
    if (miniAvatarUrl) {
      preloadImage(miniAvatarUrl);
    }
  }, [avatarUrl, miniAvatarUrl]);

  const tiltEngine = useMemo(() => {
    if (!shouldEnableTilt) return null;

    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    // Reduce animation smoothness on low-end devices for better performance
    const DEFAULT_TAU = isLowEnd ? 0.08 : 0.14;
    const INITIAL_TAU = isLowEnd ? 0.3 : 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(
          Math.hypot(percentY - 50, percentX - 50) / 50,
          0,
          1
        )}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      } as Record<string, string>;

      for (const [k, v] of Object.entries(properties))
        wrap.style.setProperty(k, v);
    };

    const step = (ts: number) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar =
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs: number) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      },
    };
  }, [shouldEnableTilt, isLowEnd]);

  const getOffsets = (evt: PointerEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(
    (event: PointerEvent) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      shell.classList.add("active");
      shell.classList.add("entering");
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove("entering");
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    tiltEngine.toCenter();

    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove("active");
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;

      const centerX = shell.clientWidth / 2;
      const centerY = shell.clientHeight / 2;
      const x = clamp(
        centerX + gamma * mobileTiltSensitivity,
        0,
        shell.clientWidth
      );
      const y = clamp(
        centerY +
          (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        0,
        shell.clientHeight
      );

      tiltEngine.setTarget(x, y);
    },
    [tiltEngine, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!shouldEnableTilt || !tiltEngine) return;

    const shell = shellRef.current;
    if (!shell) return;

    const pointerMoveHandler = handlePointerMove as EventListener;
    const pointerEnterHandler = handlePointerEnter as EventListener;
    const pointerLeaveHandler = handlePointerLeave as EventListener;
    const deviceOrientationHandler = handleDeviceOrientation as EventListener;

    shell.addEventListener("pointerenter", pointerEnterHandler);
    shell.addEventListener("pointermove", pointerMoveHandler);
    shell.addEventListener("pointerleave", pointerLeaveHandler);

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== "https:") return;
      const anyMotion = window.DeviceMotionEvent as any;
      if (anyMotion && typeof anyMotion.requestPermission === "function") {
        anyMotion
          .requestPermission()
          .then((state: string) => {
            if (state === "granted") {
              window.addEventListener(
                "deviceorientation",
                deviceOrientationHandler
              );
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener("deviceorientation", deviceOrientationHandler);
      }
    };
    shell.addEventListener("click", handleClick);

    const initialX =
      (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener("pointerenter", pointerEnterHandler);
      shell.removeEventListener("pointermove", pointerMoveHandler);
      shell.removeEventListener("pointerleave", pointerLeaveHandler);
      shell.removeEventListener("click", handleClick);
      window.removeEventListener("deviceorientation", deviceOrientationHandler);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove("entering");
    };
  }, [
    shouldEnableTilt,
    enableMobileTilt,
    tiltEngine,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation,
  ]);

  const cardStyle = useMemo(
    () =>
      ({
        "--icon": iconUrl ? `url(${iconUrl})` : "none",
        "--grain": isLowEnd ? "none" : grainUrl ? `url(${grainUrl})` : "none", // Disable grain on low-end devices
        "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
        "--behind-glow-color": behindGlowColor ?? "rgba(125, 190, 255, 0.67)",
        "--behind-glow-size": behindGlowSize ?? "50%",
      } as React.CSSProperties),
    [
      iconUrl,
      grainUrl,
      innerGradient,
      behindGlowColor,
      behindGlowSize,
      isLowEnd,
    ]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (avatarRetryTimeoutRef.current) {
        window.clearTimeout(avatarRetryTimeoutRef.current);
      }
      if (miniAvatarRetryTimeoutRef.current) {
        window.clearTimeout(miniAvatarRetryTimeoutRef.current);
      }
    };
  }, []);

  // Handle avatar load with retry logic
  const handleAvatarError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.target as HTMLImageElement;
      console.error(
        "Avatar failed to load:",
        avatarUrl,
        "Retry count:",
        avatarRetryCount
      );

      if (avatarRetryCount < 3) {
        // Retry loading after a delay
        avatarRetryTimeoutRef.current = window.setTimeout(() => {
          setAvatarRetryCount((prev) => prev + 1);
          img.src = `${avatarUrl}?retry=${avatarRetryCount + 1}`;
        }, 1000 * (avatarRetryCount + 1));
      } else {
        // Give up after 3 retries
        img.style.opacity = "0.3";
        img.style.filter = "grayscale(1)";
        setAvatarLoaded(true);
      }
    },
    [avatarUrl, avatarRetryCount]
  );

  // Handle mini avatar load with retry logic
  const handleMiniAvatarError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.target as HTMLImageElement;
      const src = miniAvatarUrl || avatarUrl;
      console.error(
        "Mini avatar failed to load:",
        src,
        "Retry count:",
        miniAvatarRetryCount
      );

      if (miniAvatarRetryCount < 2) {
        // Retry loading
        miniAvatarRetryTimeoutRef.current = window.setTimeout(() => {
          setMiniAvatarRetryCount((prev) => prev + 1);
          img.src = `${src}?retry=${miniAvatarRetryCount + 1}`;
        }, 1000);
      } else {
        // Fallback to main avatar if mini avatar fails
        if (miniAvatarUrl && img.src !== avatarUrl) {
          img.src = avatarUrl;
          setMiniAvatarRetryCount(0);
        } else {
          img.style.opacity = "0.5";
          setMiniAvatarLoaded(true);
        }
      }
    },
    [miniAvatarUrl, avatarUrl, miniAvatarRetryCount]
  );

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle}
    >
      {behindGlowEnabled && !isLowEnd && <div className="pc-behind" />}
      <div ref={shellRef} className="pc-card-shell">
        <section className="pc-card">
          <div className="pc-inside">
            {!isLowEnd && <div className="pc-shine" />}
            {!isLowEnd && <div className="pc-glare" />}
            <div className="pc-content pc-avatar-content">
              <img
                className="avatar"
                src={avatarUrl}
                alt={`${name || "User"} avatar`}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                style={{
                  opacity: avatarLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                  willChange: isLowEnd ? "auto" : "opacity",
                }}
                onLoad={() => setAvatarLoaded(true)}
                onError={handleAvatarError}
              />
              {showUserInfo && (
                <div className="pc-user-info">
                  <div className="pc-user-details">
                    <div className="pc-mini-avatar">
                      <img
                        src={miniAvatarUrl || avatarUrl}
                        alt={`${name || "User"} mini avatar`}
                        loading="eager"
                        decoding="async"
                        fetchPriority="low"
                        style={{
                          opacity: miniAvatarLoaded ? 1 : 0,
                          transition: "opacity 0.3s ease-in-out",
                          willChange: isLowEnd ? "auto" : "opacity",
                        }}
                        onLoad={() => setMiniAvatarLoaded(true)}
                        onError={handleMiniAvatarError}
                      />
                    </div>
                    <div className="pc-user-text">
                      <div className="pc-handle">{handle}</div>
                      <div className="pc-status">{status}</div>
                    </div>
                  </div>
                  <button
                    className="pc-contact-btn"
                    onClick={handleContactClick}
                    style={{ pointerEvents: "auto" }}
                    type="button"
                    aria-label={`Contact ${name || "user"}`}
                  >
                    {contactText}
                  </button>
                </div>
              )}
            </div>
            <div className="pc-content">
              <div className="pc-details">
                <h3>{name}</h3>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
