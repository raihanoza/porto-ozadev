import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme(); // Access current theme
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    // Set the theme after page is loaded
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  return (
    <motion.div className="[background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border z-10 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] w-full min-h-full py-10 lg:px-20 px-6">
      <div className="flex flex-row lg:flex-nowrap md:flex-nowrap flex-wrap justify-between gap-4">
        <div className="text-primary flex flex-col lg:w-[30%] w-[65%] lg:text-base text-sm">
          <p>&#169; Raihan Oza Samudera Siregar | {currentYear}</p>
          <p>Supported in 🤍 by Nabila Keysha Mutmainah</p>
        </div>
        <div className="text-primary flex flex-col lg:w-[20%] w-[30%]">
          <p>
            <Link href="/resume">My Resume</Link>
          </p>
          <p>
            <Link href="/#works">My Work</Link>
          </p>
        </div>
        <div className="flex items-center justify-center lg:w-[20%] w-[45%] mt-4">
          {currentTheme === "dark" ? (
            <Image
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-[-5deg]"
              src="/image/logo.png"
              alt="logo"
              width={200}
              height={200}
            />
          ) : (
            <Image
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-[-5deg]"
              src="/image/logo_purple.png"
              alt="logo"
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="flex flex-col items-end text-primary lg:w-[30%] w-[50%]">
          <p>Links</p>
          <div className="flex flex-row gap-2">
            <Link href="https://github.com/raihanoza" target="_blank">
              <FaGithub className="text-3xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/raihanoza/" target="_blank">
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link href="mailto:raihanoza18@gmail.com">
              <FaGoogle className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
