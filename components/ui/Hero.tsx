import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollBaseAnimation from "./text-marquee";
import {
  heroBgDark,
  heroBgLight,
  heroIcon,
  coffeeIcon,
  heroBgDarkBlur,
  heroBgLightBlur,
} from "@/public/image/optimized/image-imports";
import { NeonGlowEffect, TypewriterEffect } from "./TextEffect";
import RotatingText from "../RotatingText";
import FuzzyText from "../FuzzyText";
import ProfileCard from "../ProfileCard";
const RotatingTextAny = RotatingText as any;
function Hero() {
  const words2 = ["RAIHAN OZA", "SOFTWARE ENGINEER"];

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="h-screen max-h-screen flex lg:flex-col md:flex-row flex-col md:items-center"
    >
      {/* Background Image Container - Optimized */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden -z-10"
        aria-hidden="true"
      >
        {/* Dark theme background */}
        <Image
          src={heroBgDark}
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={heroBgDarkBlur}
          className="dark:block hidden object-cover object-center"
        />

        {/* Light theme background */}
        <Image
          src={heroBgLight}
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={heroBgLightBlur}
          className="dark:hidden block object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative w-full h-[80%] px-5 flex mt-16 lg:flex-row lg:px-32 flex-col z-10 md:flex-row md:items-center">
        <motion.div
          className="lg:mt-0 lg:w-[50%] md:w-[50%] w-[100%] lg:h-full md:h-[40%] h-[60%] flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading with proper semantic HTML */}
          <motion.div
            className="flex lg:flex-row flex-col lg:gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
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
              texts={["Raihan Oza", "Fullstack Developer", "Mobile Developer"]}
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
          </motion.div>

          {/* Main tagline */}
          <motion.div
            className="flex flex-wrap items-baseline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-primary font-bold lg:text-6xl md:text-2xl text-lg">
              Turning imagination into lines of{" "}
              <span className="text-lightpurple">Code</span> with my{" "}
              <span className="text-lightpurple">Ninja</span> way.
            </h2>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
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
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="mt-10 lg:w-[50%] md:w-[50%] w-full lg:h-full h-[25%] flex items-center lg:justify-end justify-center md:justify-center"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-fit h-auto flex justify-center lg:justify-end"
          >
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
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.hash = "#contacts";
                  }
                }
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling text banner */}
      <motion.div
        className="absolute bottom-0 w-full h-[10%] bg-risd-alt-smooth-compat dark:bg-dark-risd-alt-smooth-compat flex items-center z-10"
        aria-hidden="true"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <ScrollBaseAnimation
          baseVelocity={3}
          scrollDependent={true}
          clasname="font-bold tracking-[-0.07em] leading-[70%]"
        >
          FRONT END DEVELOPER
        </ScrollBaseAnimation>
      </motion.div>
    </section>
  );
}

export default Hero;
