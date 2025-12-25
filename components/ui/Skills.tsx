import React, { useEffect, useRef, useState } from "react";
import { AnimatedBeam, Circle } from "./beam";
import Image from "next/image";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    // Set the theme after page is loaded
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  return (
    <div id="skills" className="w-full min-h-full py-6 lg:px-20 px-6">
      <p className="lg:text-4xl text-3xl font-extrabold text-center text-primary my-6">
        Skills
      </p>
      <div
        className="[background:linear-gradient(135deg,#A1CCF7_0%,#B4D6F8_8%,#BBDAF9_20%,#C1DDFA_32%,#C7E0FA_44%,#CCE3FA_60%,#D1E6FA_74%,#D5E8FA_88%,#D9EAFA_100%)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(135deg,#2C2D63_0%,#2C2D63_8%,#2C2D63_20%,#333471_32%,#333471_44%,#333471_60%,#3C3D84_74%,#3C3D84_88%,#3C3D84_100%)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-[80px] lg:rounded-[100px] flex w-full mx-auto items-center justify-center p-8 z-10 overflow-hidden
    lg:flex-row md:flex-row lg:p-10 flex-col-reverse my-10
    lg:w-[100%]
    shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]

    relative
    
    /* Inner background for content */
    before:content-[''] before:absolute before:inset-0 before:rounded-[80px] lg:before:rounded-[100px]
    before:bg-risd-alt-smooth-compat dark:before:bg-dark-risd-alt-smooth-compat before:bg-no-repeat before:bg-center
    before:[background-size:200%_200%] before:[will-change:background-position]
    before:motion-safe:animate-gradient-fast before:motion-reduce:animate-none
    before:backdrop-blur-5xl before:backdrop-saturate-200
    before:bg-white/5 dark:before:bg-black/20
    before:shadow-2xl before:shadow-black/20 before:bg-opacity-5
    before:pointer-events-none before:-z-10

    /* Gradient overlay */
    after:content-[''] after:absolute after:inset-0 after:rounded-[80px] lg:after:rounded-[100px]
    after:bg-gradient-to-br after:from-white/30 after:via-white/5 after:to-transparent
    dark:after:from-white/10 dark:after:via-transparent dark:after:to-black/10
    after:pointer-events-none after:z-0"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10 relative z-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              {currentTheme === "dark" ? (
                <Image
                  src="/image/next-light.png"
                  alt="react"
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  src="/image/next-dark.png"
                  alt="react"
                  width={50}
                  height={50}
                />
              )}
            </Circle>
            <Circle ref={div5Ref} className="p-2">
              <Image
                src="/image/tailwind.png"
                alt="react"
                width={50}
                height={50}
              />
            </Circle>
            <Circle ref={div8Ref} className="p-2">
              <Image src="/image/sass.png" alt="react" width={50} height={50} />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref} className="p-2">
              <Image
                src="/image/typescript.png"
                alt="react"
                width={50}
                height={50}
              />
            </Circle>
            <Circle ref={div4Ref} className="p-2">
              {currentTheme === "dark" ? (
                <Image
                  src="/image/logo.png"
                  alt="react"
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  src="/image/logo_purple.png"
                  alt="react"
                  width={50}
                  height={50}
                />
              )}
            </Circle>
            <Circle ref={div6Ref} className="p-2">
              <Image
                src="/image/redux.png"
                alt="react"
                width={50}
                height={50}
              />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref} className="p-2">
              <Image
                src="/image/nestjs.png"
                alt="react"
                width={50}
                height={50}
              />
            </Circle>
            <Circle ref={div7Ref} className="p-2">
              <Image
                src="/image/react.png"
                alt="react"
                width={50}
                height={50}
              />
            </Circle>
            <Circle ref={div9Ref} className="p-2">
              <Image
                src="/image/postgres.png"
                alt="react"
                width={50}
                height={50}
              />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          gradientStartColor="#00ac47"
          gradientStopColor="#ffba00"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
          gradientStartColor="#d948ae"
          gradientStopColor="#5b60ff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
          gradientStartColor="#48b0d9"
          gradientStopColor="#67aeff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
          gradientStartColor="#00ac47"
          gradientStopColor="#4fcc5d"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={25}
          endYOffset={10}
          reverse
          gradientStartColor="#48b0d9"
          gradientStopColor="#67aeff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div8Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
          gradientStartColor="#48b0d9"
          gradientStopColor="#67aeff"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div9Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
          gradientStartColor="#48b0d9"
          gradientStopColor="#67aeff"
        />
      </div>
    </div>
  );
};

export default Skills;
