"use client";

import { StructuredData } from "@/components/structured-data";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";

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
