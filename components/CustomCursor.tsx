"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add cursor move listener
    window.addEventListener("mousemove", updateCursor);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Hide cursor when leaving window
    const handleMouseOut = () => setIsVisible(false);
    document.addEventListener("mouseleave", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseleave", handleMouseOut);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isVisible]);

  // Smooth delayed position using lerp (linear interpolation)
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    let animationFrameId: number;

    const animate = () => {
      setDelayedPosition((prev) => ({
        x: lerp(prev.x, position.x, 0.15), // 0.15 = smoothness factor (lower = smoother but slower)
        y: lerp(prev.y, position.y, 0.15),
      }));

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [position]);

  return (
    <>
      {/* Custom cursor circles */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Inner circle (small dot) - follows instantly */}
        <div
          className="absolute bg-white rounded-full transition-transform duration-150 ease-out"
          style={{
            width: isHovering ? "28px" : "20px",
            height: isHovering ? "28px" : "20px",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Outer circle (large ring) - follows with delay */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: `translate(${delayedPosition.x}px, ${delayedPosition.y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="absolute rounded-full transition-all duration-300 ease-out bg-gray-400 bg-opacity-75"
          style={{
            width: isHovering ? "66px" : "52px",
            height: isHovering ? "66px" : "52px",
            transform: "translate(-50%, -50%)",
            opacity: isHovering ? 0.5 : 0.3,
          }}
        />
      </div>
    </>
  );
}
