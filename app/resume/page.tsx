"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      <div className="py-20 lg:px-20 px-6">
        {/* Resume Container */}
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-2xl print:shadow-none rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[800px]">
            {/* Left Sidebar */}
            <div className="lg:w-1/3 text-gray-900 dark:text-white p-8">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <OptimizedImage
                    src="/image/me2.png"
                    alt="Raihan Oza Samudera Siregar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full"
                    priority={true}
                    quality={90}
                  />
                </div>
                <h1 className="text-xl font-bold mb-2">RAIHAN OZA</h1>
                <h2 className="text-lg opacity-90 mb-1">SAMUDERA SIREGAR</h2>
                <p className="text-sm opacity-80">Full Stack Developer</p>
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <div className="space-y-3 text-sm">
                  <a
                    href="https://wa.me/6289652164724" // TODO: tambahkan link LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 cursor-pointer hover:underline"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Phone className="w-3 h-3" />
                    </div>
                    <span>+62896-5216-4724</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Mail className="w-3 h-3" />
                    </div>
                    <span>raihanoza18@gmail.com</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/raihanoza" // TODO: tambahkan link LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 cursor-pointer hover:underline"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Linkedin className="w-3 h-3" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/raihanoza" // TODO: tambahkan link GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 cursor-pointer hover:underline"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Github className="w-3 h-3" />
                    </div>
                    <span>GitHub</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <MapPin className="w-3 h-3" />
                    </div>
                    <span>Medan, ID</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">TECHNICAL SKILLS</h3>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    Languages:
                  </h4>
                  <p className="text-sm leading-relaxed">
                    TypeScript, JavaScript, SQL, HTML5, CSS3, PHP
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    Frontend:
                  </h4>
                  <p className="text-sm leading-relaxed">
                    React.js, Next.js (SSR/SSG/ISR), Redux, Zustand, React
                    Query, Tailwind CSS, shadcn/ui, Vite
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    Backend:
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Node.js, NestJS, Express.js, Laravel, REST APIs, JWT
                    Authentication, Role-Based Access Control (RBAC)
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    Mobile:
                  </h4>
                  <p className="text-sm leading-relaxed">
                    React Native, React Redux, React Query
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    Databases:
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Microsoft SQL Server, PostgreSQL, MySQL, MongoDB, Prisma ORM
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    DevOps &amp; Tools:
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Git, GitHub, CI/CD, Docker, Postman, ESLint, Prettier, Linux
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    Practices:
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Agile/Scrum, Code Review, System Design, Query Optimization,
                    Indexing, API Integration, Performance Optimization
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">LANGUAGES</h3>
                <div className="space-y-1 text-sm">
                  <p>Indonesian (Native)</p>
                  <p>English (Professional Working Proficiency)</p>
                </div>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:w-2/3 p-8 lg:p-12">
              {/* Professional Summary */}
              {/* Professional Summary */}
              <div className="flex items-center gap-4 mb-8 justify-end">
                <a
                  href="https://linkedin.com/in/raihanoza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="/Raihan_Oza_Samudera_Siregar_CV.pdf"
                  download
                  className="text-primary hover:text-primary/80 font-semibold text-xs"
                >
                  Download
                </a>
              </div>
              <div className="mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  Full Stack Developer with 3+ years of professional experience
                  building scalable web and mobile applications across the
                  JavaScript/TypeScript ecosystem. Delivered production-grade
                  ERP and HRMS platforms serving 100+ users, plus government
                  service portals, using Next.js, NestJS, React Native, and SQL
                  Server/PostgreSQL. Owns end-to-end product delivery from
                  requirement analysis and system design through deployment and
                  monitoring, with a strong focus on performance optimization,
                  authentication/RBAC, and large-scale data handling.
                </p>
              </div>

              {/* Education Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                  EDUCATION
                </h2>
                <div className="border-l-4 border-purple-600 dark:border-gray-300 pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Muhammadiyah University Of North Sumatera
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                        Bachelor Degree in Information Systems Engineering
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Cumulative GPA: 3.65/4.0
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        Relevant Coursework: Algorithms; Data Structures;
                        Software Engineering; Object-Oriented Programming;
                        Database Systems; Web Development
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0 text-sm">
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        Sep 2020 – Sep 2024
                      </p>
                      <p className="text-purple-600 text-sm">Medan, ID</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Experience Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                  PROFESSIONAL EXPERIENCE
                </h2>

                {/* PT. TRANSPORINDO AGUNG SEJAHTERA */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-purple-600 mb-1">
                        PT. TRANSPORINDO AGUNG SEJAHTERA
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        Full Stack Web Developer - Fulltime
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 font-medium text-sm">
                        Aug 2024 – Present
                      </span>
                      <p className="text-purple-600 text-sm">Medan, ID</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Architected and delivered multiple production-grade
                        internal web platforms using Next.js (TypeScript) and
                        NestJS, supporting core export-cargo and HR business
                        operations.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built an internal ERP application for export cargo
                        shipping that centralized loading data, operational
                        records, and approval workflows, eliminating manual
                        spreadsheet tracking and improving data accuracy across
                        operations teams.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Designed and shipped a Human Resource Management System
                        (HRMS) serving 100+ employees, covering employee data,
                        leave requests, multi-level approvals, and automated
                        leave-balance tracking, replacing fragmented manual
                        processes.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built a WhatsApp Bot monitoring service that performs
                        continuous uptime checks on internal websites and
                        servers, cutting incident response time from ~30 minutes
                        to under 5 by pushing real-time outage alerts to on-call
                        groups.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Modeled and optimized Microsoft SQL Server schemas for
                        high-volume operational data through indexing
                        strategies, query tuning, and stored procedures,
                        reducing query response times by 50%+.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Implemented predictable state management with Redux
                        across complex multi-module frontends, improving
                        maintainability and reducing prop-drilling across
                        feature teams.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Owned the full software development lifecycle —
                        requirement analysis, system design, implementation,
                        testing, deployment, and post-release maintenance —
                        collaborating with operations and HR stakeholders to
                        translate business needs into scalable technical
                        solutions.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* DINAS SOSIAL KOTA MEDAN */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-purple-600 mb-1">
                        DINAS SOSIAL KOTA MEDAN
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        Front End Developer - Internship
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 font-medium text-sm">
                        Aug 2023 – Dec 2023
                      </span>
                      <p className="text-purple-600 text-sm">Medan, ID</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Collaborated with 5 cross-functional teams to design and
                        ship public-facing digital services helping citizens
                        check social assistance status and access government
                        programs.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built a responsive social-assistance status portal using
                        React.js, TypeScript, Zustand, Tailwind CSS, and
                        shadcn/ui, serving the general public with a clean and
                        accessible UX.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Developed the Aplans Booster web platform with React.js,
                        React Query, Tailwind CSS, and TypeScript; integrated
                        REST APIs via Postman and contributed to sprint planning
                        and feature prioritization.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built the Aplans Verivali mobile app using React Native,
                        Redux, and React Query for field officers to verify and
                        validate aid recipient data on-site.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Standardized the frontend codebase by introducing ESLint
                        and Prettier configurations, improving code consistency
                        across multiple repositories and reducing review
                        friction.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Drove engineering best practices through code reviews,
                        CI/CD pipelines, and internal knowledge-sharing sessions
                        presented to fellow engineers.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* PT.METROMATIKA TEKNOLOGI REKAYASA */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-purple-600 mb-1">
                        PT.METROMATIKA TEKNOLOGI REKAYASA
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        Full Stack & Mobile Developer
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 font-medium text-sm">
                        Jan 2023 – Aug 2023
                      </span>
                      <p className="text-purple-600 text-sm">Medan, ID</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Delivered multiple production web and mobile
                        applications for official Indonesian government services
                        using Next.js, Laravel, React Native, Tailwind CSS,
                        Zustand, Redux, and React Query.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built admin dashboards with CRUD modules, role-based
                        access control, and complex reporting views adopted by
                        internal operators.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Optimized mobile application performance across a wide
                        range of Android devices, improving load times and
                        delivering a smoother user experience.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Maintained existing codebases through regular security
                        patches, dependency upgrades, and performance refactors
                        to keep applications stable in production.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Partnered with product, design, and backend teams to
                        translate business requirements into technical
                        specifications and ship features on schedule.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* DISKOMINFO KOTA MEDAN */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-purple-600 mb-1">
                        DISKOMINFO KOTA MEDAN
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        Fullstack Developer - Internship
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 font-medium text-sm">
                        Aug 2022 – Dec 2022
                      </span>
                      <p className="text-purple-600 text-sm">Medan, ID</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Developed and launched the "Balitaku" React Native
                        mobile app in just 2 months — a maternal-health support
                        tool integrated with a QR-code system used across
                        municipal services.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built a CMS-style web platform enabling the Medan city
                        government to spin up dedicated sub-sites for individual
                        municipal services, accelerating digital service
                        rollout.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Supported and integrated data for 100+ users across
                        departments, enabling smoother cross-application data
                        flow.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Wrote clean, typed React + TypeScript code with a strong
                        focus on web performance and reusability.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* PT.INDONESIA GADAI OKE */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-purple-600 mb-1">
                        PT.INDONESIA GADAI OKE
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        Fullstack Developer - Internship
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 font-medium text-sm">
                        Jan 2022 – Mei 2022
                      </span>
                      <p className="text-purple-600 text-sm">Medan, ID</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built and maintained the core pawnshop management system
                        (PHP, Laravel, Bootstrap) serving 10+ outlets across
                        North Sumatra and handling 100+ transactions per day.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Improved system usability and workflow ergonomics for
                        branch operators, contributing to a 40% increase in
                        transaction throughput.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Resolved production issues with fast turnaround to
                        maintain business continuity, earning consistent
                        positive feedback from end users.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Projects Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                  PROJECTS
                </h2>

                {/* Ameera Travel Umroh */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Ameera Travel Umroh – Finance Web Platform
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Jul 2024 – Sep 2024
                    </span>
                  </div>
                  <p className="text-xs text-purple-600 mb-2">
                    React.js, TypeScript, Tailwind CSS, Node.js, Express.js,
                    PostgreSQL, JWT · Solo Project
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Single-handedly designed, developed, and deployed an
                        end-to-end finance management platform covering
                        frontend, backend, and DevOps.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built secure REST APIs with Node.js + Express.js and
                        PostgreSQL, implementing JWT authentication, role-based
                        access control, and encryption for sensitive financial
                        data.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Set up monitoring and structured logging to ensure
                        continuous uptime, faster debugging, and a strong
                        security posture.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Aplans Boster */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Aplans Booster – Public Data Verification Platform
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Oct 2023 – Dec 2023
                    </span>
                  </div>
                  <p className="text-xs text-purple-600 mb-2">
                    React.js, Vite, React Query, shadcn/ui, Zustand, Tailwind
                    CSS, Laravel · Government Service
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Designed a clean, user-friendly interface for citizens
                        to submit forms and review submission history.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Collaborated with UI/UX designers and backend engineers
                        to ship a responsive, accessible web product.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Aplans Verivali */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Aplans Verivali – Field Verification Mobile App
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Aug 2023 – Sep 2023
                    </span>
                  </div>
                  <p className="text-xs text-purple-600 mb-2">
                    React Native, Zustand, React Query, WhatsApp Gateway ·
                    Government Service
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built a mobile tool for officers to verify and validate
                        aid-recipient data directly in the field.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Integrated a WhatsApp Gateway for OTP delivery and
                        real-time field communication.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Balitaku */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Balitaku – Maternal &amp; Child Health Mobile App
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Oct 2022 – Dec 2022
                    </span>
                  </div>
                  <p className="text-xs text-purple-600 mb-2">
                    React Native, Express.js, React Query, WhatsApp Gateway ·
                    Municipal Health Service
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Developed a mobile app supporting stunting-prevention
                        programs for infants in Medan, providing curated health
                        information for mothers.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Implemented WhatsApp-based OTP authentication for
                        secure, friction-free onboarding.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* SIIMPAL */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      SIIMPAL – Selfie Attendance Mobile App
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      May 2023 – Jul 2023
                    </span>
                  </div>
                  <p className="text-xs text-purple-600 mb-2">
                    React Native · Medan Tourism Office
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Shipped a selfie-based attendance application for
                        tourism office employees, simplifying daily check-ins
                        through device camera integration.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .print\\:shadow-none {
            box-shadow: none !important;
          }

          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }

          /* Hide navbar and footer when printing */
          nav,
          footer {
            display: none !important;
          }

          /* Adjust padding for print */
          .py-20 {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }

          /* Ensure good page breaks */
          section {
            break-inside: avoid;
          }

          h3 {
            break-after: avoid;
          }
        }
      `}</style>
    </div>
  );
}
