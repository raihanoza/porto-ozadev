"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Github from "../../public/image/github.png";
import GithubDark from "../../public/image/github-dark.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import projectsData from "../../data/projects.json";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  images: string[];
  githubLink: string;
  detailLink: string;
}

const Projects = () => {
  const { theme } = useTheme(); // Access current theme
  const [mounted, setMounted] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(2);
  const projects: Project[] = projectsData;

  useEffect(() => {
    // Set mounted to true after component mounts
    setMounted(true);
  }, []);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  // Prevent hydration error by not rendering until mounted
  if (!mounted) {
    return (
      <div id="works" className="w-full min-h-full py-10 lg:px-20 px-6">
        <p className="lg:text-4xl text-3xl font-extrabold text-center text-primary">
          Recent Projects
        </p>
        <div className="flex flex-col my-6 gap-6">
          {/* Loading placeholder */}
        </div>
      </div>
    );
  }

  return (
    <div id="works" className="w-full min-h-full py-10 lg:px-20 px-6">
      <p className="lg:text-4xl text-3xl font-extrabold text-center text-primary">
        Recent Projects
      </p>
      <div className="flex flex-col my-6 gap-6">
        {projects.slice(0, visibleProjects).map((project) => (
          <div key={project.id}>
            <Link href={project.detailLink} className="block">
              <div className="[background:linear-gradient(135deg,#A1CCF7_0%,#B4D6F8_8%,#BBDAF9_20%,#C1DDFA_32%,#C7E0FA_44%,#CCE3FA_60%,#D1E6FA_74%,#D5E8FA_88%,#D9EAFA_100%)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] dark:[background:linear-gradient(135deg,#2C2D63_0%,#2C2D63_8%,#2C2D63_20%,#333471_32%,#333471_44%,#333471_60%,#3C3D84_74%,#3C3D84_88%,#3C3D84_100%)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border z-10 items-center shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] rounded-[80px] lg:rounded-[100px] lg:p-10 p-8 flex lg:flex-row flex-col justify-between hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="lg:w-[50%] w-full gap-2 flex flex-col pb-4 pr-2">
                  <p className="lg:text-lg text-base text-primary font-extrabold">
                    {project.category}
                  </p>
                  <p className="text-primary lg:text-3xl text-xl font-extrabold">
                    {project.title}
                  </p>
                  <p className={`lg:text-base text-sm text-primary`}>
                    {project.description}
                  </p>
                  <div className="flex flex-row mt-4 gap-x-4 gap-y-2 flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <p
                        key={techIndex}
                        className="text-primary lg:text-lg text-xs"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                  <div
                    className="w-fit"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        project.githubLink,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    {theme === "dark" ? (
                      <Image
                        src={Github}
                        alt="github icon"
                        loading="lazy"
                        width={50}
                        height={50}
                        className="hover:opacity-80 transition-opacity"
                      />
                    ) : (
                      <Image
                        src={GithubDark}
                        alt="github icon"
                        loading="lazy"
                        width={50}
                        height={50}
                        className="hover:opacity-80 transition-opacity"
                      />
                    )}
                  </div>
                </div>
                <div className="lg:w-[40%] w-full flex justify-center lg:justify-end items-center rounded-tl-xl relative min-h-[300px]">
                  {/* Stack effect with actual images */}
                  <div className="relative group w-full max-w-[500px] h-full">
                    {/* Back image - second image stacked behind */}
                    {project.images[1] && (
                      <div className="absolute top-4 left-4 w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-white/20 opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.images[1]}
                            alt={`${project.title} preview 2`}
                            fill
                            loading="lazy"
                            quality={70}
                            className="rounded-lg object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                          />
                        </div>
                      </div>
                    )}

                    {/* Front image - main image */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-white/30 bg-gray-900/50 backdrop-blur-sm transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} preview 1`}
                        fill
                        loading="lazy"
                        quality={70}
                        className="rounded-lg object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="w-full flex justify-center lg:mt-20 mt-16">
          <Button
            onClick={loadMore}
            className="btn-contact text-lg px-10 py-6 rounded-none text-white border border-lightpurple hover:scale-105 active:scale-95 transition-transform"
          >
            <p className="z-50 font-bold lg:text-sm md:text-sm text-xs text-white dark:text-primary">
              LOAD MORE
            </p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;
