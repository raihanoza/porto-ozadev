"use client";

import Image from "next/image";
import { useState } from "react";
import { usePerformanceOptimization } from "@/components/PerformanceOptimizer";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  quality?: number;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  placeholder = "empty",
  blurDataURL,
  quality = 85,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { isLowEndDevice, connectionSpeed } = usePerformanceOptimization();

  // Adjust quality for low-end devices and slow connections
  const adjustedQuality =
    isLowEndDevice || connectionSpeed === "slow" ? 60 : quality;

  // Generate blur data URL for better loading experience
  const defaultBlurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load</span>
      </div>
    );
  }

  return (
    <div
      className={`relative ${
        isLoading ? "animate-pulse bg-gray-200 dark:bg-gray-800" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        quality={adjustedQuality}
        sizes={sizes}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        {...props}
      />
    </div>
  );
}

// Lazy loading image component for non-critical images
export function LazyImage(props: OptimizedImageProps) {
  return <OptimizedImage {...props} priority={false} />;
}

// Hero image component for above-the-fold content
export function HeroImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      quality={90}
      placeholder="blur"
    />
  );
}
