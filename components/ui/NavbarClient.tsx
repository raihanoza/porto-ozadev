"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HandIcon from "../../lib/images/hand-with-fingers-splayed-2.svg";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper function untuk smooth scroll
const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string,
  router: any,
  closeMenu?: () => void
) => {
  const targetId = href.replace("/#", "");

  // Jika tidak di homepage, navigate ke homepage dulu
  if (pathname !== "/") {
    router.push(href);
    if (closeMenu) closeMenu();
    return;
  }

  // Jika di homepageher, lakukan smooth scroll
  e.preventDefault();
  const element = document.getElementById(targetId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // Update URL without page reload
    window.history.pushState({}, "", href);
    // Close menu if callback provided
    if (closeMenu) closeMenu();
  }
};

export default function NavbarClient() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setCurrentTheme(theme ?? "dark");
  }, [theme]);

  // Variants untuk animasi pada tiap garis hamburger
  const topVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const middleVariant = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -12.5 },
  };

  return (
    <div className="w-[20%] flex justify-end items-center gap-2">
      <Link
        href="/#contacts"
        onClick={(e) => handleSmoothScroll(e, "/#contacts", pathname, router)}
      >
        <Button className="bg-transparent border border-softpurple w-[100px] rounded-none px-1 flex flex-row items-center group">
          <p className="text-primary lg:text-sm md:text-xs text-xs">Say Hi!</p>
          <Image
            className="transition-transform w-8 h-8 duration-300 ease-in-out transform group-hover:rotate-[30deg]"
            src={HandIcon}
            alt="hand icon"
          />
        </Button>
      </Link>

      {currentTheme === "light" ? (
        <Button className="rounded-none" onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      ) : (
        <Button className="rounded-none" onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      )}

      {/* Animated Hamburger Button untuk Mobile */}
      <div className="md:hidden relative z-[1001]">
        <motion.button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex flex-col justify-between w-6 h-6 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <motion.span
            className="block h-0.5 bg-primary"
            variants={topVariant}
            initial="closed"
            animate={mobileMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 bg-primary"
            variants={middleVariant}
            initial="closed"
            animate={mobileMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 bg-primary"
            variants={bottomVariant}
            initial="closed"
            animate={mobileMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Menu Mobile dengan animasi slide-in dari kanan */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 w-full h-full bg-risd-alt-smooth-compat dark:bg-dark-risd-alt-smooth-compat z-[998] shadow-lg"
          >
            <div className="flex flex-col items-start justify-center h-full space-y-6 px-6">
              <Link
                href="/#hero"
                onClick={(e) =>
                  handleSmoothScroll(e, "/#hero", pathname, router, () =>
                    setMobileMenuOpen(false)
                  )
                }
                className="border border-b-2 dark:border-gray-100 border-blue-950 w-full border-t-0 border-x-0 py-2"
              >
                <p className="text-2xl font-bold uppercase text-primary">
                  Home
                </p>
              </Link>
              <Link
                href="/#about"
                onClick={(e) =>
                  handleSmoothScroll(e, "/#about", pathname, router, () =>
                    setMobileMenuOpen(false)
                  )
                }
                className="border border-b-2 dark:border-gray-100 border-blue-950 w-full border-t-0 border-x-0 py-2"
              >
                <p className="text-2xl font-bold uppercase text-primary">
                  About
                </p>
              </Link>
              <Link
                href="/#skills"
                onClick={(e) =>
                  handleSmoothScroll(e, "/#skills", pathname, router, () =>
                    setMobileMenuOpen(false)
                  )
                }
                className="border border-b-2 dark:border-gray-100 border-blue-950 w-full border-t-0 border-x-0 py-2"
              >
                <p className="text-2xl font-bold uppercase text-primary">
                  Skills
                </p>
              </Link>
              <Link
                href="/#experiences"
                onClick={(e) =>
                  handleSmoothScroll(e, "/#experiences", pathname, router, () =>
                    setMobileMenuOpen(false)
                  )
                }
                className="border border-b-2 dark:border-gray-100 border-blue-950 w-full border-t-0 border-x-0 py-2"
              >
                <p className="text-2xl font-bold uppercase text-primary">
                  Experiences
                </p>
              </Link>
              <Link
                href="/#works"
                onClick={(e) =>
                  handleSmoothScroll(e, "/#works", pathname, router, () =>
                    setMobileMenuOpen(false)
                  )
                }
                className="border border-b-2 dark:border-gray-100 border-blue-950 w-full border-t-0 border-x-0 py-2"
              >
                <p className="text-2xl font-bold uppercase text-primary">
                  Works
                </p>
              </Link>
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-b-2 dark:border-gray-100 border-blue-950 w-full border-t-0 border-x-0 py-2"
              >
                <p className="text-2xl font-bold uppercase text-primary">
                  Resume
                </p>
              </Link>
              <Link
                href="/#contacts"
                onClick={(e) =>
                  handleSmoothScroll(e, "/#contacts", pathname, router, () =>
                    setMobileMenuOpen(false)
                  )
                }
                className="border border-b-2 dark:border-gray-100 border-blue-950 w-full border-t-0 border-x-0 py-2"
              >
                <p className="text-2xl font-bold uppercase text-primary">
                  Contacts
                </p>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
