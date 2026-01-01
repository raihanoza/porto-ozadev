/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";

export default function AboutDetailPage() {
  return (
    <div className="min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      <div className="py-20 lg:px-20 px-6 mt-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary mb-4">
              About Me
            </h1>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and expertise
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/30 dark:to-purple-950/30 rounded-3xl p-4 lg:p-12 shadow-2xl border border-white/20">
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0">
                <Image
                  src="/image/about.svg"
                  alt="Profile"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Raihan Oza Samudera Siregar
                </h2>
                <p className="text-lg text-primary/90 font-semibold">
                  Fullstack Developer | React.js & Next.js Specialist
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 bg-blue-500/20 dark:bg-blue-500/30 backdrop-blur-sm rounded-full text-primary text-sm font-semibold">
                    🇮🇩 Based in Indonesia
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 dark:bg-green-500/30 backdrop-blur-sm rounded-full text-primary text-sm font-semibold">
                    💼 Open for Remote Work
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 dark:bg-purple-500/30 backdrop-blur-sm rounded-full text-primary text-sm font-semibold">
                    ⚡ 2+ Years Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="mb-12">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span>👨‍💻</span>
                  About Me
                </h3>
                <div className="space-y-4">
                  <p className="text-primary/90 lg:text-lg text-sm leading-relaxed">
                    Hi, I'm Raihan Oza Samudera Siregar!👋🏼 I'm a versatile
                    Fullstack developer with about 2 years of hands-on
                    experience. My expertise lies in crafting, developing, and
                    efficiently managing complex websites, with a special focus
                    on React.js and Next.js technologies.
                  </p>

                  <p className="text-primary/90 lg:text-lg text-sm leading-relaxed">
                    I am passionate about creating seamless and visually
                    appealing user experiences, and I thrive in dynamic and
                    challenging environments. My skills extend beyond mere
                    coding; I bring a keen eye for design, attention to detail,
                    and a collaborative mindset to every project.
                  </p>

                  <p className="text-primary/90 lg:text-lg text-sm leading-relaxed">
                    Having honed my craft in the fast-paced world of web
                    development, I am adept at staying up-to-date with the
                    latest industry trends and technologies. I am committed to
                    delivering high-quality solutions that not only meet but
                    exceed client expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-12">
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span>🎓</span>
                  Education
                </h3>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-white dark:border-slate-900"></div>

                  <div className="space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <h4 className="lg:text-xl text-lg font-bold text-primary">
                        Universitas Muhammadiyah of North Sumatera
                      </h4>
                      <span className="lg:text-sm text-xs font-semibold text-primary/70 lg:text-right">
                        📍 Medan, ID • 📅 Aug 24
                      </span>
                    </div>

                    <p className="lg:text-lg text-sm font-semibold text-primary/90">
                      Bachelor of Computer Science
                    </p>

                    <div className="space-y-2">
                      <p className="text-primary/80 lg:text-sm text-xs">
                        Major in{" "}
                        <span className="font-semibold">
                          Information System
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.purple.500)_86%,_theme(colors.blue.500)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-full text-primary lg:text-sm text-xs font-bold">
                          🎯 GPA: 3.63/4.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Technologies Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Skills & Expertise
              </h2>

              {/* Programming Languages */}
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <h3 className="lg:text-2xl text-xl font-bold text-primary flex items-center gap-2 mb-4">
                  <span className="text-3xl">💻</span>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["JavaScript", "TypeScript", "Python", "PHP"].map((lang) => (
                    <span
                      key={lang}
                      className="text-xs px-5 py-2.5 [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.blue.500)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-full text-primary lg:text-base font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <h3 className="lg:text-2xl text-xl font-bold text-primary flex items-center gap-2 mb-4">
                  <span className="lg:text-3xl text-2xl">🚀</span>
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Next.js",
                    "Vue.js",
                    "Node.js",
                    "Express.js",
                    "Laravel",
                    "Tailwind CSS",
                    "React Native",
                    "Bootstrap",
                    "Framer Motion",
                  ].map((framework) => (
                    <span
                      key={framework}
                      className="text-xs px-5 py-2.5 [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.blue.500)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-full text-primary lg:text-base font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <h3 className="lg:text-2xl text-xl font-bold text-primary flex items-center gap-2 mb-4">
                  <span className="lg:text-3xl text-2xl">🗄️</span>
                  Databases
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "MySQL",
                    "PostgreSQL",
                    "MSSQL",
                    "MongoDB",
                    "Firebase",
                    "Supabase",
                  ].map((db) => (
                    <span
                      key={db}
                      className="text-xs px-5 py-2.5 [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.orange.500)_86%,_theme(colors.red.500)_90%,_theme(colors.pink.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-full text-primary lg:text-base font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              {/* Proficient Skills */}
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <h3 className="lg:text-2xl text-xl font-bold text-primary flex items-center gap-2 mb-4">
                  <span className="lg:text-3xl text-xl">⚡</span>
                  Proficient Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Responsive Design",
                    "RESTful API",
                    "Git & GitHub",
                    "UI/UX Design",
                    "Agile/Scrum",
                    "Problem Solving",
                    "Team Collaboration",
                    "Performance Optimization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-5 py-2.5 [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.blue.500)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-full text-primary lg:text-base font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <h3 className="lg:text-2xl text-xl font-bold text-primary flex items-center gap-2 mb-4">
                  <span className="lg:text-3xl text-xl">🌍</span>
                  Languages
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-4 [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.red.500)_86%,_theme(colors.white)_90%,_theme(colors.red.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <span className="lg:text-3xl text-xl">🇮🇩</span>
                      <div>
                        <p className="text-primary font-bold lg:text-lg text-base">
                          Indonesian
                        </p>
                        <p className="text-primary/80 lg:text-sm text-xs">
                          Native Speaker
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 [background:linear-gradient(45deg,#edf2fb,#d7e3fc,#edf2fb)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.blue.500)_86%,_theme(colors.red.500)_90%,_theme(colors.white)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(45deg,#11071F,theme(colors.slate.900)_50%,#11071F)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <span className="lg:text-3xl text-xl">🇬🇧</span>
                      <div>
                        <p className="text-primary font-bold lg:text-lg text-base">
                          English
                        </p>
                        <p className="text-primary/80 lg:text-sm text-xs">
                          Professional Working Proficiency
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center bg-white/50 dark:bg-white/5 rounded-2xl p-8 border border-white/30">
              <h3 className="lg:text-2xl text-xl font-bold text-primary mb-4">
                Let's Work Together!
              </h3>
              <p className="text-primary/90 mb-6 lg:text-lg text-sm">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <Link href="/#contacts" className="w-fit">
                <Button className="group btn-contact border border-lightpurple rounded-none bg-lightpurple lg:px-10 md:px-8 px-6 mt-10 lg:py-6 md:py-4 py-2 w-fit">
                  <span className="z-50 font-bold lg:text-sm md:text-sm text-xs text-white dark:text-primary">
                    Get in Touch
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
