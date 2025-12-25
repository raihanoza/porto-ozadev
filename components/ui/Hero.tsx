import React, { memo } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  coffeeIcon,
  heroBgDarkBlur,
  heroBgLightBlur,
} from "@/public/image/optimized/image-imports";
import bgDark from "@/public/image/HeroBg.webp";
import bgLight from "@/public/image/HeroBgLight.webp";
import { NeonGlowEffect } from "./TextEffect";
import dynamic from "next/dynamic";
import ScrollBaseAnimation from "./text-marquee";
import { BackgroundBeamsWithCollision } from "./shadcn-io/background-beams-with-collision";
import { Particles } from "./particles";

// Lazy load heavy components
const ProfileCard = dynamic(() => import("../ProfileCard"), {
  ssr: false,
  loading: () => (
    <div className="w-48 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
  ),
});

function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="h-screen max-h-screen relative overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 w-full h-full pointer-events-none"
        quantity={50}
        staticity={30}
        ease={50}
        size={1}
        color="#7B91D1"
        refresh
      />
      <div className="flex flex-col w-full h-full lg:h-[90%] max-h-screen">
        <div className="relative w-full h-full lg:h-[90%] px-5 flex mt-16 lg:flex-row lg:px-32 flex-col z-10 md:flex-row md:items-center pb-20 lg:pb-0">
          <div className="lg:mt-0 lg:w-[50%] md:w-[50%] w-[100%] lg:h-full md:h-[40%] h-[50%] flex flex-col justify-center">
            {/* Heading with proper semantic HTML */}
            <div className="flex lg:flex-row flex-col lg:gap-2">
              <h1 className="sr-only">
                Hello! I am Raihan Oza, Software Engineer
              </h1>
            </div>

            {/* Main tagline */}
            <div className="flex flex-wrap items-baseline">
              <h2 className="text-primary font-bold lg:text-6xl md:text-2xl text-2xl">
                Turning imagination into lines of{" "}
                <span className="text-lightpurple">Code</span>,<br />
                Powered by <span className="text-lightpurple">C☕️ffee</span>.
              </h2>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="#about"
                className="w-fit"
                aria-label="Discover more about me"
              >
                <Button className="group btn-contact border border-lightpurple rounded-none bg-lightpurple lg:px-10 md:px-8 px-6 mt-10 lg:py-6 md:py-4 py-2 w-fit">
                  <span className="z-50 font-bold lg:text-sm md:text-sm text-xs text-white dark:text-primary">
                    Discover Me
                  </span>
                  <Image
                    className="transition-transform ml-2 duration-300 ease-in-out transform group-hover:rotate-[30deg]"
                    src={coffeeIcon}
                    alt=""
                    width={40}
                    height={40}
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-10 lg:w-[50%] md:w-[50%] w-full lg:h-full h-[50%] flex items-center lg:justify-end justify-center md:justify-center">
            <div className="w-fit h-auto flex justify-center lg:justify-end">
              <ProfileCard
                name="Raihan Oza"
                title="Software Engineer"
                handle="raihan  oza"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/image/me7.png"
                showUserInfo={true}
                onContactClick={() => {
                  if (typeof window !== "undefined") {
                    const el = document.getElementById("contacts");
                    if (el) {
                      el.scrollIntoView({ behavior: "auto" });
                    } else {
                      window.location.hash = "#contacts";
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Static text banner */}
        <div
          className="absolute bottom-16 lg:bottom-0 w-full lg:h-[10%] h-[7%] bg-risd-alt-smooth-compat dark:bg-dark-risd-alt-smooth-compat flex items-center z-20"
          aria-hidden="true"
        >
          <ScrollBaseAnimation
            baseVelocity={3}
            scrollDependent={true}
            clasname="font-bold tracking-[-0.07em] leading-[70%]"
          >
            FRONT END DEVELOPER
          </ScrollBaseAnimation>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
