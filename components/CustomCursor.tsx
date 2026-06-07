"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Refs for direct DOM manipulation (no per-frame React re-render)
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  // Mutable animation state kept out of React
  const target = useRef({ x: 0, y: 0 });
  const delayed = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);

  // Check if device is desktop (not mobile/tablet)
  useEffect(() => {
    const checkIsDesktop = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth >= 1024;
      const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const desktop = !hasTouch || (isLargeScreen && !hasCoarsePointer);
      setIsDesktop(desktop);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    const setVisible = (v: boolean) => {
      if (visible.current === v) return;
      visible.current = v;
      inner.style.opacity = v ? "1" : "0";
      outer.style.opacity = v ? "1" : "0";
    };

    const setHover = (h: boolean) => {
      if (hovering.current === h) return;
      hovering.current = h;
      // Resize the dot/ring via the inner child elements
      const dot = inner.firstElementChild as HTMLElement | null;
      const ring = outer.firstElementChild as HTMLElement | null;
      if (dot) {
        dot.style.width = h ? "28px" : "20px";
        dot.style.height = h ? "28px" : "20px";
      }
      if (ring) {
        ring.style.width = h ? "66px" : "52px";
        ring.style.height = h ? "66px" : "52px";
        ring.style.opacity = h ? "0.5" : "0.3";
      }
    };

    const updateCursor = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      // Inner dot follows instantly via direct transform write
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      setVisible(true);
    };

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const handleMouseOut = () => setVisible(false);

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseleave", handleMouseOut);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Single RAF loop that only writes to the DOM (no setState)
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    let animationFrameId: number;
    const animate = () => {
      delayed.current.x = lerp(delayed.current.x, target.current.x, 0.15);
      delayed.current.y = lerp(delayed.current.y, target.current.y, 0.15);
      outer.style.transform = `translate(${delayed.current.x}px, ${delayed.current.y}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseleave", handleMouseOut);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      {/* Inner circle (small dot) - follows instantly */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      >
        <div
          className="absolute bg-white rounded-full transition-[width,height] duration-150 ease-out"
          style={{
            width: "20px",
            height: "20px",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Outer circle (large ring) - follows with delay */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      >
        <div
          className="absolute rounded-full transition-all duration-300 ease-out bg-gray-400 bg-opacity-75"
          style={{
            width: "52px",
            height: "52px",
            transform: "translate(-50%, -50%)",
            opacity: 0.3,
          }}
        />
      </div>
    </>
  );
}
