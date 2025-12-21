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

// Lazy load heavy components
const ProfileCard = dynamic(() => import("../ProfileCard"), {
  ssr: false,
  loading: () => (
    <div className="w-48 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
  ),
});

const RotatingText = dynamic(() => import("../RotatingText"), {
  ssr: false,
  loading: () => <span className="text-white font-bold">Raihan Oza</span>,
});

const RotatingTextAny = RotatingText as any;

function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="h-screen max-h-screen"
    >
      <BackgroundBeamsWithCollision className="h-[90%] max-h-screen">
        <div className="relative w-full h-full px-5 flex mt-16 lg:flex-row lg:px-32 flex-col z-10 md:flex-row md:items-center">
          <div className="lg:mt-0 lg:w-[50%] md:w-[50%] w-[100%] lg:h-full md:h-[40%] h-[60%] flex flex-col justify-center">
            {/* Heading with proper semantic HTML */}
            <div className="flex lg:flex-row flex-col lg:gap-2">
              <h1 className="sr-only">
                Hello! I am Raihan Oza, Software Engineer
              </h1>
              <NeonGlowEffect
                words="HELLO, I AM"
                // words={words}
                className="lg:text-2xl text-xl"
                aria-hidden="true"
              />
              <RotatingTextAny
                texts={[
                  "Raihan Oza",
                  "Fullstack Developer",
                  "Mobile Developer",
                ]}
                mainClassName="md:px-3 text-white overflow-hidden rounded-lg font-bold text-lg sm:text-xl md:text-2xl"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            {/* Main tagline */}
            <div className="flex flex-wrap items-baseline">
              <h2 className="text-primary font-bold lg:text-6xl md:text-2xl text-lg">
                Turning imagination into lines of{" "}
                <span className="text-lightpurple">Code</span> with my{" "}
                <span className="text-lightpurple">Ninja</span> way.
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
          <div className="mt-10 lg:w-[50%] md:w-[50%] w-full lg:h-full h-[25%] flex items-center lg:justify-end justify-center md:justify-center">
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
      </BackgroundBeamsWithCollision>

      {/* Static text banner */}
      <div
        className="absolute bottom-0 w-full h-[10%] bg-risd-alt-smooth-compat dark:bg-dark-risd-alt-smooth-compat flex items-center z-10"
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
    </section>
  );
}

export default memo(Hero);
