"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef, RefObject, useEffect, useId, useState } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>; // Container ref
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#4d40ff",
  gradientStopColor = "#4043ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");

  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : "none";
  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      // For all entries, recalculate the path
      updatePath();
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially and after animation completes
    updatePath();

    // Add a timeout to recalculate after animation (700ms matches your animation duration)
    const animationTimeout = setTimeout(() => {
      updatePath();
    }, 800);

    // Also add an interval to keep updating for smooth transitions
    const intervalId = setInterval(updatePath, 100);

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
      clearTimeout(animationTimeout);
      clearInterval(intervalId);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth,
          strokeOpacity: 0,
        }}
        animate={{
          strokeWidth: pathWidth * 1.5, // or any scale factor you prefer
          strokeOpacity: 1,
        }}
        transition={{
          duration: 2, // adjust as needed
          delay: delay, // use the same delay as the gradient animation
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; description?: string }
>(({ className, children, description }, ref) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-20 w-40 [perspective:1000px] cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      data-cursor-hover
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Front side - Image */}
        <div className="absolute inset-0 [backface-visibility:hidden] object-contain [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.indigo.800)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border z-10 flex items-center justify-center rounded-[35px] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          {children}
        </div>

        {/* Back side - Text */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] object-contain [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.indigo.800)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border z-10 flex items-center justify-center rounded-[35px] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
          <p className="text-primary font-bold text-xs text-center leading-tight">
            {description || "Tech Stack"}
          </p>
        </div>
      </div>
    </div>
  );
});

// Define display name for the component
Circle.displayName = "Circle";
