/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Icons1 from "@/public/image/icon (1).png";
import Icons2 from "@/public/image/icon (2).png";
import Icons3 from "@/public/image/icon (3).png";
import Icons4 from "@/public/image/icon (4).png";
import Icons5 from "@/public/image/icon (5).png";
import Icons6 from "@/public/image/icon (6).png";
import dynamic from "next/dynamic";

// Lazy load heavy 3D component
const Lanyard = dynamic(() => import("../Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] md:h-[450px] flex items-center justify-center">
      <div className="w-32 h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
    </div>
  ),
});

// Check for reduced motion preference
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true); // Default to reduced for SSR

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize stars - reduced count for better performance
  const stars = useMemo(() => {
    // Reduce stars on mobile and when user prefers reduced motion
    const starCount = prefersReducedMotion ? 0 : isMobile ? 15 : 25;
    return [...Array(starCount)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, [isMobile, prefersReducedMotion]);

  // Memoize shooting stars - reduced for performance
  const shootingStars = useMemo(() => {
    // Disable shooting stars on mobile or reduced motion
    if (prefersReducedMotion || isMobile) return [];
    return [...Array(2)].map((_, i) => ({
      left: 20 + Math.random() * 60,
      top: -10 + Math.random() * 30,
      animationDelay: i * 6 + Math.random() * 3,
      animationDuration: 2 + Math.random() * 1,
    }));
  }, [isMobile, prefersReducedMotion]);

  // Tech icons dengan posisi yang sudah ditentukan - only show on desktop
  const techIcons = useMemo(() => {
    if (isMobile || prefersReducedMotion) return []; // Hide on mobile for performance
    return [
      { src: Icons1, left: "5%", top: "10%" },
      { src: Icons2, left: "15%", top: "75%" },
      { src: Icons3, left: "85%", top: "15%" },
      { src: Icons4, left: "90%", top: "70%" },
      { src: Icons5, left: "10%", top: "45%" },
      { src: Icons6, left: "88%", top: "45%" },
    ];
  }, [isMobile, prefersReducedMotion]);

  return (
    <div
      id="about"
      className="dark:bg-navy-stack-top bg-lightblue-stack-top w-full min-h-full py-6 lg:px-20 px-6 justify-center items-center flex flex-col relative overflow-hidden"
    >
      {/* Blurry overlay untuk efek depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent backdrop-blur-[3px] pointer-events-none z-[5]" />

      {/* Floating Tech Icons - Posisi Beraturan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {techIcons.map((icon, i) => (
          <div
            key={`icon-${i}`}
            className="absolute animate-float-icon transition-opacity"
            style={{
              left: icon.left,
              top: icon.top,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + i * 1.5}s`,
              filter: "blur(0.5px)",
            }}
          >
            <Image src={icon.src} alt="icon" width={70} height={70} />
          </div>
        ))}
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
              opacity: star.opacity,
              boxShadow: "0 0 3px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {shootingStars.map((star, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="[background:linear-gradient(135deg,#A1CCF7_0%,#B4D6F8_8%,#BBDAF9_20%,#C1DDFA_32%,#C7E0FA_44%,#CCE3FA_60%,#D1E6FA_74%,#D5E8FA_88%,#D9EAFA_100%)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(135deg,#2C2D63_0%,#2C2D63_8%,#2C2D63_20%,#333471_32%,#333471_44%,#333471_60%,#3C3D84_74%,#3C3D84_88%,#3C3D84_100%)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border z-10 items-center shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] rounded-[80px] lg:rounded-[100px] flex lg:flex-row flex-col-reverse justify-between lg:justify-between lg:items-start my-14 md:gap-4">
        <div className="lg:w-[65%] md:w-full flex items-start gap-2 lg:p-10 mb-10 lg:my-0 flex-col justify-start relative z-10 px-4">
          <p className="lg:text-4xl text-3xl font-extrabold text-center text-primary">
            ABOUT ME
          </p>

          <p className="text-primary lg:text-lg text-sm lg:font-semibold drop-shadow-lg">
            Hi Raihan Oza Samudera Siregar!👋🏼 I'm a versatile Frontend Developer
            based in Medan, Indonesia, with about 2 years of hands-on
            experience. My expertise lies in crafting, developing, and
            efficiently managing complex websites, with a special focus on
            React.js and Next.js technologies.
          </p>

          {/* Desktop: Tampilkan semua text, Mobile: Gunakan expand/collapse */}
          <div className="md:block space-y-2 hidden">
            <p className="text-primary lg:text-lg text-sm lg:font-semibold drop-shadow-lg">
              I am passionate about creating seamless and visually appealing
              user experiences, and I thrive in dynamic and challenging
              environments. My skills extend beyond mere coding; I bring a keen
              eye for design, attention to detail, and a collaborative mindset
              to every project.
            </p>

            <p className="text-primary lg:text-lg text-sm lg:font-semibold drop-shadow-lg">
              Having honed my craft in the fast-paced world of web development,
              I am adept at staying up-to-date with the latest industry trends
              and technologies. I am committed to delivering high-quality
              solutions that not only meet but exceed client expectations
            </p>
          </div>

          {/* Mobile: Expand/collapse functionality */}
          {isExpanded && (
            <div className="md:hidden space-y-2">
              <p className="text-primary text-sm drop-shadow-lg">
                I am passionate about creating seamless and visually appealing
                user experiences, and I thrive in dynamic and challenging
                environments. My skills extend beyond mere coding; I bring a
                keen eye for design, attention to detail, and a collaborative
                mindset to every project.
              </p>

              <p className="text-primary text-sm drop-shadow-lg">
                Having honed my craft in the fast-paced world of web
                development, I am adept at staying up-to-date with the latest
                industry trends and technologies. I am committed to delivering
                high-quality solutions that not only meet but exceed client
                expectations
              </p>
            </div>
          )}

          {/* Tombol hanya untuk mobile */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden my-1 bg-transparent text-blue-200 cursor-pointer font-semibold rounded-lg hover:bg-softpurple/10 transition-all duration-300 text-xs"
          >
            {isExpanded ? "Close" : "Know More"}
          </button>
        </div>
        <div className="w-full lg:w-[35%] flex items-center justify-center lg:justify-end z-10 lg:pr-8">
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72">
            <Image
              src="/image/about.svg"
              alt="Public SVG"
              fill
              sizes="(max-width: 768px) 160px, 288px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes float-icon {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          50% {
            transform: translateY(-40px) translateX(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-20px) translateX(15px) rotate(3deg);
          }
        }

        .animate-twinkle {
          animation: twinkle infinite ease-in-out;
        }

        .animate-shooting-star {
          animation: shooting-star infinite ease-out;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
            0 0 8px 2px rgba(255, 255, 255, 0.3),
            -50px -50px 50px 0px rgba(255, 255, 255, 0.2);
        }

        .animate-shooting-star::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100px) translateY(0px) rotate(-45deg);
          opacity: 0.6;
        }

        .animate-float-icon {
          animation: float-icon infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default About;
