"use client";

import { useState, useEffect } from "react";

interface DevicePerformance {
  isLowEnd: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  shouldReduceAnimations: boolean;
  devicePixelRatio: number;
  hardwareConcurrency: number;
}

export function useDevicePerformance(): DevicePerformance {
  const [performance, setPerformance] = useState<DevicePerformance>({
    isLowEnd: false,
    isMobile: false,
    prefersReducedMotion: false,
    shouldReduceAnimations: false,
    devicePixelRatio: 1,
    hardwareConcurrency: 4,
  });

  useEffect(() => {
    const checkPerformance = () => {
      // Check if mobile
      const isMobile =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Device pixel ratio
      const devicePixelRatio = window.devicePixelRatio || 1;

      // Hardware concurrency (CPU cores)
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;

      // Check device memory (if available)
      const deviceMemory = (navigator as any).deviceMemory || 4;

      // Connection type check
      const connection = (navigator as any).connection;
      const isSlowConnection =
        connection &&
        (connection.effectiveType === "2g" ||
          connection.effectiveType === "slow-2g");

      // Determine if low-end device
      const isLowEnd =
        hardwareConcurrency <= 4 ||
        deviceMemory <= 4 ||
        isSlowConnection ||
        (isMobile && devicePixelRatio > 2);

      // Should reduce animations?
      const shouldReduceAnimations =
        isLowEnd || prefersReducedMotion || isMobile;

      setPerformance({
        isLowEnd,
        isMobile,
        prefersReducedMotion,
        shouldReduceAnimations,
        devicePixelRatio,
        hardwareConcurrency,
      });
    };

    checkPerformance();

    // Listen for changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => checkPerformance();

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("resize", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return performance;
}

// Static helper for server-side rendering
export function getDefaultPerformance(): DevicePerformance {
  return {
    isLowEnd: false,
    isMobile: false,
    prefersReducedMotion: false,
    shouldReduceAnimations: false,
    devicePixelRatio: 1,
    hardwareConcurrency: 4,
  };
}
