import { StructuredData } from "@/components/structured-data";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import dynamic from "next/dynamic";

// Below-the-fold sections are code-split so their JS isn't part of the
// initial bundle. SSR stays enabled (default) so content remains in the
// HTML for SEO; only hydration JS is deferred/loaded on demand.
const Skills = dynamic(() => import("@/components/ui/Skills"));
const Experience = dynamic(() => import("@/components/ui/Experience"));
const Projects = dynamic(() => import("@/components/ui/Projects"));
const Contact = dynamic(() => import("@/components/ui/Contact"));
const Footer = dynamic(() => import("@/components/ui/Footer"));

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
