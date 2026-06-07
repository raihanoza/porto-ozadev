"use client";

import { useEffect, useState } from "react";
import FuzzyText from "./shadcn-io/fuzzy-text";

/**
 * Renders a SINGLE FuzzyText canvas instance, sized for the current viewport.
 * Previously two FuzzyText instances were mounted (mobile + desktop) and both
 * ran their own requestAnimationFrame canvas loop even while hidden via CSS.
 */
export default function FuzzyCode() {
  // null = not yet measured (SSR safe); render a static fallback until mounted
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Static, non-animated fallback before hydration/measurement
  if (isDesktop === null) {
    return (
      <span className="text-[#7B91D1] font-black text-2xl lg:text-[60px] leading-none">
        Code
      </span>
    );
  }

  return (
    <FuzzyText
      fontSize={isDesktop ? 60 : 24}
      fontWeight={900}
      color="#7B91D1"
      enableHover={true}
      baseIntensity={0.18}
      hoverIntensity={isDesktop ? 0.5 : 0.01}
    >
      Code
    </FuzzyText>
  );
}
