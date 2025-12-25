"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  // Performance optimization: detect low-end devices
  const [isLowEnd, setIsLowEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768;
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      setIsMobile(mobile);
      setIsLowEnd(
        prefersReducedMotion ||
          mobile ||
          hardwareConcurrency <= 4 ||
          deviceMemory <= 4
      );
    };

    checkDevice();
    const handleResize = () => checkDevice();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Floating icons - optimized for performance
  const floatingIcons = useMemo(() => {
    if (isLowEnd) return []; // Disable on low-end devices

    return [
      {
        src: "/image/react.png",
        left: "8%",
        top: "15%",
        size: 50,
        delay: 0,
        duration: 12,
      },
      {
        src: "/image/typescript.png",
        left: "85%",
        top: "20%",
        size: 45,
        delay: 1.5,
        duration: 14,
      },
      {
        src: "/image/next-dark.png",
        left: "12%",
        top: "70%",
        size: 55,
        delay: 3,
        duration: 13,
      },
      {
        src: "/image/tailwind.png",
        left: "88%",
        top: "65%",
        size: 48,
        delay: 2,
        duration: 15,
      },
      {
        src: "/image/nestjs.png",
        left: "5%",
        top: "45%",
        size: 42,
        delay: 2.5,
        duration: 11,
      },
      {
        src: "/image/postgres.png",
        left: "92%",
        top: "45%",
        size: 46,
        delay: 1,
        duration: 13.5,
      },
    ];
  }, [isLowEnd]);

  // Optimize beams for low-end devices
  const optimizedBeams = useMemo(() => {
    const allBeams = [
      {
        initialX: 10,
        translateX: 10,
        duration: 7,
        repeatDelay: 3,
        delay: 2,
      },
      {
        initialX: 600,
        translateX: 600,
        duration: 3,
        repeatDelay: 3,
        delay: 4,
      },
      {
        initialX: 100,
        translateX: 100,
        duration: 7,
        repeatDelay: 7,
        className: "h-6",
      },
      {
        initialX: 400,
        translateX: 400,
        duration: 5,
        repeatDelay: 14,
        delay: 4,
      },
      {
        initialX: 800,
        translateX: 800,
        duration: 11,
        repeatDelay: 2,
        className: "h-20",
      },
      {
        initialX: 1000,
        translateX: 1000,
        duration: 4,
        repeatDelay: 2,
        className: "h-12",
      },
      {
        initialX: 1200,
        translateX: 1200,
        duration: 6,
        repeatDelay: 4,
        delay: 2,
        className: "h-6",
      },
    ];

    // Reduce beams on low-end devices (only show 4 beams instead of 7)
    return isLowEnd ? allBeams.slice(0, 4) : allBeams;
  }, [isLowEnd]);

  return (
    <div
      ref={parentRef}
      className={cn(
        "bg-[#fefdfb] dark:bg-[#00132d] relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {/* Floating Tech Icons */}
      {floatingIcons.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {floatingIcons.map((icon, i) => (
            <motion.div
              key={`float-icon-${i}`}
              className="absolute opacity-20 dark:opacity-30"
              style={{
                left: icon.left,
                top: icon.top,
                willChange: "transform",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.15, 0.25, 0.15],
                y: [0, -20, 0],
                rotate: [-5, 5, -5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: icon.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: icon.delay,
              }}
            >
              <Image
                src={icon.src}
                alt="tech icon"
                width={icon.size}
                height={icon.size}
                loading="lazy"
                className="select-none pointer-events-none"
                style={{
                  filter: "blur(0.5px)",
                  imageRendering: "auto",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {optimizedBeams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-[#fefdfb] dark:bg-[#00132d] w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement | null>;
    parentRef: React.RefObject<HTMLDivElement | null>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div
      {...(props as any)}
      className={cn("absolute z-50 h-2 w-2", props.className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};
