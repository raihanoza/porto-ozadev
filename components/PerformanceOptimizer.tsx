"use client";

import { useEffect, useState } from "react";

interface PerformanceConfig {
  reduceAnimations: boolean;
  reducedMotion: boolean;
  isLowEndDevice: boolean;
  connectionSpeed: string;
}

export function usePerformanceOptimization(): PerformanceConfig {
  const [config, setConfig] = useState<PerformanceConfig>({
    reduceAnimations: false,
    reducedMotion: false,
    isLowEndDevice: false,
    connectionSpeed: "4g",
  });

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Detect low-end device based on various factors
    const detectLowEndDevice = () => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 1;
      const deviceMemory = (navigator as any).deviceMemory || 1;
      const isSlowDevice = hardwareConcurrency <= 2 || deviceMemory <= 2;

      // Check performance timing
      const timing = performance.timing;
      const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
      const isSlowLoad = pageLoadTime > 3000;

      return isSlowDevice || isSlowLoad;
    };

    // Detect connection speed
    const getConnectionSpeed = () => {
      const connection = (navigator as any).connection;
      if (!connection) return "4g";

      const { effectiveType, downlink } = connection;

      // Slow connection indicators
      if (
        effectiveType === "slow-2g" ||
        effectiveType === "2g" ||
        downlink < 0.5
      ) {
        return "slow";
      }
      if (effectiveType === "3g" || downlink < 1.5) {
        return "3g";
      }
      return "4g";
    };

    const isLowEndDevice = detectLowEndDevice();
    const connectionSpeed = getConnectionSpeed();
    const shouldReduceAnimations =
      prefersReducedMotion || isLowEndDevice || connectionSpeed === "slow";

    setConfig({
      reduceAnimations: shouldReduceAnimations,
      reducedMotion: prefersReducedMotion,
      isLowEndDevice,
      connectionSpeed,
    });

    // Add CSS class for performance optimizations
    if (shouldReduceAnimations) {
      document.documentElement.classList.add("reduce-animations");
    } else {
      document.documentElement.classList.remove("reduce-animations");
    }

    if (isLowEndDevice) {
      document.documentElement.classList.add("low-end-device");
    } else {
      document.documentElement.classList.remove("low-end-device");
    }

    // Listen for connection changes
    const handleConnectionChange = () => {
      const newSpeed = getConnectionSpeed();
      setConfig((prev) => ({
        ...prev,
        connectionSpeed: newSpeed,
        reduceAnimations:
          prev.reducedMotion || prev.isLowEndDevice || newSpeed === "slow",
      }));
    };

    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener(
        "change",
        handleConnectionChange
      );
    }

    return () => {
      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener(
          "change",
          handleConnectionChange
        );
      }
    };
  }, []);

  return config;
}

// CSS optimizations for low-end devices
export function injectPerformanceCSS() {
  if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = `
      /* Reduce animations on low-end devices or slow connections */
      .reduce-animations * {
        animation-duration: 0.1s !important;
        animation-delay: 0s !important;
        transition-duration: 0.1s !important;
        transition-delay: 0s !important;
      }
      
      .reduce-animations .animate-pulse,
      .reduce-animations .animate-bounce,
      .reduce-animations .animate-spin {
        animation: none !important;
      }
      
      /* Low-end device optimizations */
      .low-end-device {
        --blur-strength: 2px;
      }
      
      .low-end-device .backdrop-blur-sm,
      .low-end-device .backdrop-blur-md,
      .low-end-device .backdrop-blur-lg {
        backdrop-filter: none;
        background: rgba(255, 255, 255, 0.1);
      }
      
      .low-end-device .shadow-2xl,
      .low-end-device .shadow-xl,
      .low-end-device .drop-shadow-lg {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      
      /* Disable expensive CSS features on low-end devices */
      .low-end-device .mix-blend-mode,
      .low-end-device .mix-blend-difference {
        mix-blend-mode: normal !important;
      }
      
      .low-end-device .filter {
        filter: none !important;
      }
      
      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Performance monitoring component
export function PerformanceMonitor() {
  useEffect(() => {
    // Inject performance CSS
    injectPerformanceCSS();

    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
            // You can send this data to analytics
          }
        }
      });

      try {
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "first-input") {
            const fidEntry = entry as any;
            const fid = fidEntry.processingStart - fidEntry.startTime;
            console.log("FID:", fid);
          }
        }
      });

      try {
        fidObserver.observe({ entryTypes: ["first-input"] });
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
      };
    }
  }, []);

  return null;
}
