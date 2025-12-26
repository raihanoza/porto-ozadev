import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Client-only interactive chunk (theme toggle, mobile menu, etc.)
const NavbarClient = dynamic(() => import("./NavbarClient"), { ssr: false });

export default function Navbar() {
  return (
    <nav
      className="fixed z-[999] w-full lg:px-20"
      aria-label="Primary navigation"
    >
      <div
        className={cn(
          "lg:px-10 py-7 px-4 flex items-center justify-between",
          "lg:rounded-2xl sm:rounded-none"
        )}
      >
        {/* Logo - rendered on server for SEO. Use meaningful alt and priority to hint the loader. */}
        <div className="w-[20%]">
          <Link href="/" aria-label="Homepage">
            <Image
              className="dark:hidden cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-[-5deg]"
              src="/image/logo_purple.png"
              alt="Site logo"
              width={100}
              height={100}
              priority
            />
            <Image
              className="hidden dark:block cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-[-5deg]"
              src="/image/logo.png"
              alt="Site logo"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Navigasi Desktop - server rendered as semantic list for SEO */}
        <div className="hidden md:flex flex-row rounded-full transition-all duration-300 px-8 py-4 backdrop-blur-lg">
          <ul
            className="flex gap-6 items-center list-none m-0 p-0"
            role="menubar"
            aria-label="Main menu"
          >
            <li role="none">
              <Link
                role="menuitem"
                href="/#hero"
                className="font-bold uppercase text-primary"
              >
                Home
              </Link>
            </li>
            <li role="none">
              <Link
                role="menuitem"
                href="/#about"
                className="font-bold uppercase text-primary"
              >
                About
              </Link>
            </li>
            <li role="none">
              <Link
                role="menuitem"
                href="/#skills"
                className="font-bold uppercase text-primary"
              >
                Skills
              </Link>
            </li>
            <li role="none">
              <Link
                role="menuitem"
                href="/#experiences"
                className="font-bold uppercase text-primary"
              >
                Experiences
              </Link>
            </li>
            <li role="none">
              <Link
                role="menuitem"
                href="/#works"
                className="font-bold uppercase text-primary"
              >
                Works
              </Link>
            </li>
          </ul>
        </div>

        {/* Client chunk: interactive buttons and mobile menu. Loaded dynamically (no-SSR). */}
        <NavbarClient />
      </div>
    </nav>
  );
}
