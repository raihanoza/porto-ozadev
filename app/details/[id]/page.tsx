"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import projectsData from "@/data/projects.json";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Script from "next/script";
import Head from "next/head";

interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  role?: string;
  duration?: string;
  year?: string;
  technologies: string[];
  features?: string[];
  challenges?: string[];
  images: string[];
  githubLink: string;
  liveLink?: string;
  detailLink: string;
}

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [mounted, setMounted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projectId, setProjectId] = useState<string | null>(null);

  const project = projectId
    ? (projectsData.find((p) => p.id === parseInt(projectId)) as
        | ProjectDetail
        | undefined)
    : undefined;

  useEffect(() => {
    setMounted(true);
    params.then((resolvedParams) => {
      setProjectId(resolvedParams.id);
    });
  }, [params]);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // Generate Project JSON-LD
  const generateProjectJsonLd = () => {
    if (!project) return null;

    const baseUrl = "https://raihanoza-dev.me";

    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${baseUrl}/details/${projectId}#project`,
      name: project.title,
      description: project.longDescription || project.description,
      category: project.category,
      author: {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Raihan Oza Samudera Siregar",
      },
      creator: {
        "@type": "Person",
        name: "Raihan Oza Samudera Siregar",
      },
      dateCreated: project.year ? `${project.year}-01-01` : undefined,
      keywords: project.technologies.join(", "),
      url: `${baseUrl}/details/${projectId}`,
      image: project.images.map((img) => `${baseUrl}${img}`),
      inLanguage: "en-US",
      isAccessibleForFree: true,
      workExample: project.liveLink
        ? {
            "@type": "WebSite",
            url: project.liveLink,
          }
        : undefined,
      mentions: project.technologies.map((tech) => ({
        "@type": "Thing",
        name: tech,
      })),
    };
  };

  if (!mounted || !projectId) {
    return (
      <div className="min-h-screen dark:bg-navy-stack-top bg-lightblue-stack-bottom flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen dark:bg-navy-stack-top bg-lightblue-stack-bottom flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Project Not Found
        </h1>
        <Link href="/#works">
          <Button className="btn-contact rounded-none">
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  const projectJsonLd = generateProjectJsonLd();

  return (
    <>
      {/* Dynamic SEO Meta Tags */}
      {projectJsonLd && (
        <Script
          id="project-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
      )}

      <div className="min-h-screen dark:bg-navy-stack-top bg-lightblue-stack-bottom">
        {/* Navbar */}
        <Navbar />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="fixed lg:top-24 top-20 left-6 lg:left-10 z-50"
        >
          <Link href="/#works">
            <Button className="bg-blue-950 rounded-none group text-white hover:text-white">
              <ArrowLeft
                className="mr-2 group-hover:-translate-x-1 transition-transform"
                size={20}
              />
              Back
            </Button>
          </Link>
        </motion.div>

        {/* Main Content - Split Layout */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="px-6 lg:px-20 pt-32 pb-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Image Gallery */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="lg:sticky lg:top-32"
              >
                {/* Main Image */}
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-4 border-4 border-lightpurple/30 group cursor-zoom-in bg-gray-900/20"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onMouseMove={handleMouseMove}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={{
                      scale: isHovering ? 1.5 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    style={{
                      transformOrigin: isHovering
                        ? `${mousePosition.x}% ${mousePosition.y}%`
                        : "center center",
                    }}
                  >
                    <Image
                      src={project.images[selectedImageIndex]}
                      alt={`${project.title} main view`}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    />
                  </motion.div>
                </motion.div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-3">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleThumbnailClick(index)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all bg-gray-900/10 ${
                        selectedImageIndex === index
                          ? "ring-4 ring-lightpurple shadow-lg"
                          : "ring-2 ring-white/20 hover:ring-lightpurple/50"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 33vw, 200px"
                      />
                      {selectedImageIndex === index && (
                        <div className="absolute inset-0 bg-lightpurple/20" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Side - Project Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-8"
              >
                {/* Header */}
                <div>
                  <p className="text-lightpurple font-semibold text-base mb-2">
                    {project.category}
                  </p>
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
                    {project.title}
                  </h1>
                  <p className="text-primary text-base lg:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Meta */}
                <div className="flex flex-wrap gap-6 py-4 border-y border-white/10">
                  {project.role && (
                    <div className="flex items-center gap-2 text-primary">
                      <User size={18} className="text-lightpurple" />
                      <div>
                        <p className="text-xs text-primary/60">Role</p>
                        <span className="font-semibold text-sm">
                          {project.role}
                        </span>
                      </div>
                    </div>
                  )}
                  {project.year && (
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar size={18} className="text-lightpurple" />
                      <div>
                        <p className="text-xs text-primary/60">Year</p>
                        <span className="font-semibold text-sm">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-2 text-primary">
                      <Clock size={18} className="text-lightpurple" />
                      <div>
                        <p className="text-xs text-primary/60">Duration</p>
                        <span className="font-semibold text-sm">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                {/* <div className="flex flex-wrap gap-4">
                {project.liveLink && (
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-contact rounded-lg group w-full sm:w-auto">
                      <ExternalLink className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                      View Live Site
                    </Button>
                  </Link>
                )}
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-transparent border border-softpurple rounded-lg group w-full sm:w-auto">
                    <Github className="mr-2 group-hover:rotate-12 transition-transform" size={18} />
                    View Code
                  </Button>
                </Link>
              </div> */}

                {/* About Project */}
                {project.longDescription && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      About the Project
                    </h2>
                    <p className="text-primary text-base leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-lightpurple/10 dark:bg-lightpurple/20 border border-lightpurple rounded-lg text-primary font-semibold text-sm"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Key Features
                    </h2>
                    <div className="space-y-3">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className="flex items-start gap-3 p-4 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10 hover:border-lightpurple/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-lightpurple rounded-full mt-2 flex-shrink-0" />
                          <p className="text-primary text-sm">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Challenges & Solutions
                    </h2>
                    <div className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          className="p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20"
                        >
                          <p className="text-primary text-sm">{challenge}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
