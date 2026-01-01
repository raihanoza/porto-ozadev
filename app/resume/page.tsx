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
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Phone className="w-3 h-3" />
                    </div>
                    <span>+62896-5216-4724</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Mail className="w-3 h-3" />
                    </div>
                    <span>raihanoza18@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Linkedin className="w-3 h-3" />
                    </div>
                    <span>LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Github className="w-3 h-3" />
                    </div>
                    <span>GitHub</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Globe className="w-3 h-3" />
                    </div>
                    <span>Portofolio</span>
                  </div>
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
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>HTML</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>SQL</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    Technologies:
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>MongoDB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Prisma</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>React</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Nest.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Redis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Laravel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>React Native</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Express.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Node.js</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 opacity-90">
                    Soft Skills:
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Problem-solving</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Teamwork</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Work ethic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Adaptability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Creativity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Innovation</span>
                    </div>
                  </div>
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
                  href="/cv.pdf"
                  download
                  className="text-primary hover:text-primary/80 font-semibold text-xs"
                >
                  Download
                </a>
              </div>
              <div className="mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  I am a Full Stack Developer with over 2 years of professional
                  experience and a Bachelor's degree in Information Systems. I
                  specialize in developing scalable web applications with a
                  solid foundation in software engineering, system design, and
                  application development.
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
                        Database;
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
                        Fullstack Web Developer - Fulltime
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
                        Designed, developed, and maintained multiple internal
                        web-based systems to support core business operations
                        using Next.js and NestJS.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built an Internal ERP Web Application for Export Cargo
                        Shipping, responsible for managing export loading data,
                        operational records, and internal company workflows to
                        improve data accuracy and efficiency.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        I Developed a Human Resource Management System (HRMS) to
                        manage employee data, leave requests, approvals, and
                        leave balance tracking, ensuring structured and
                        centralized HR data management.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Created a WhatsApp Bot Monitoring Service to monitor
                        website and server availability; the system
                        automatically sends real-time alerts to WhatsApp groups
                        when services are down, improving response time and
                        system reliability.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Implemented Microsoft SQL Server as the primary
                        database, handling data modeling, query optimization,
                        indexing, and large-scale data operations.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Applied Redux for predictable and scalable state
                        management across complex frontend applications.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Actively involved in full development lifecycle
                        including requirement analysis, system design,
                        development, testing, debugging, deployment, and
                        maintenance.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Collaborated closely with internal teams to translate
                        business requirements into technical solutions and
                        ensure system stability and scalability.
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
                        Collaborated with 5 cross-function teams to brainstorm,
                        design, and develop a service product to help people get
                        hired.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Developed a website for the general public to easily
                        check their social assistance status. (ReactJs,
                        Typescript, Zustand, Tailwind, ShadCn Ui)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Implemented front-end engineering best practices and
                        patterns, presenting these strategies to other
                        engineers.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Responsible for brainstorming, developing, testing,
                        collaborating, code reviewing, debugging, and deploying
                        frontend features in 3 different teams. (GitHub, CI/CD)
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
                        Full stack Developer & Mobile Developer
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
                        Developed and launched multiple web applications,
                        including admin dashboards and mobile applications, for
                        official services in Indonesia using modern technologies
                        such as React (React (Next Js), Laravel, Tailwind CSS,
                        Zustand, Redux, React Query)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Ensured the security and optimal performance of
                        applications by conducting regular maintenance, updates,
                        and improvements to the codebase.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Optimized mobile application performance across various
                        devices, delivering a seamless user experience.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Provided innovative and scalable solutions to complex
                        challenges in mobile application development, enhancing
                        the overall functionality and user engagement.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Collaborated closely with cross-functional teams to
                        align business goals with technical requirements,
                        ensuring the successful delivery of high-quality digital
                        solutions
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
                        Gained hands-on experience in front-end engineering,
                        with a focus on delivering high-quality code and
                        optimizing web performance using React and TypeScript.
                        (React, TypeScript)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Developed the "Balitaku" mobile application in just two
                        months, utilizing React Native to create a user-friendly
                        interface aimed at supporting mothers.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Engineered a QR code-based system that integrated with
                        other applications, streamlining interactions and
                        enhancing functionality for users.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Designed and built a website interface that enables the
                        Medan city government to create additional sites for
                        various municipal services.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Managed and supported over 100 users, integrating their
                        data with other applications to facilitate smooth
                        communication and data transfer across platforms.
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
                        Managed The Pawnshop System at PT.INDONESIA GADAI OKE
                        with more than 10 outlets in Sumatera Utara ( PHP,
                        Laravel, Bootstrap)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Accomplished Manage Pawnshop data with more than 100
                        Transactions every day
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Succeed doing college and work while maintaining control
                        of college grades with 3.62 GPA and doing a nice work at
                        company
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Always Solved System Problems on time so as not to
                        interfere with the running the system in the company and
                        so almost that 90% of other workers are happy with
                        developed system
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Successfully Improved the convenience of the
                        system,Resulted in an increase in at transaction of up
                        to 40% and convenience for other workers
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
                      Ameera Travel Umroh – Finance Website
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Jul 2024 – Sep 2024
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Designed, developed, and deployed a comprehensive
                        finance website, handling all aspects of frontend,
                        backend, and DevOps independently.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built responsive and user-friendly interfaces using
                        React.js, Tailwind CSS, and TypeScript, ensuring an
                        intuitive user experience.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Developed a secure and scalable backend using Node.js,
                        Express.js, and PostgreSQL, implementing APIs and
                        integrating business logic.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Implemented user authentication, role-based access
                        control, and secure data handling practices (JWT,
                        encryption) to protect sensitive financial data.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Aplans Boster */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Aplans Boster – Website
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Oct 2023 – Dec 2023
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Work with the ui/ux team and backend developers in
                        developing a website that is useful for people to check
                        their data.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        User-friendly interface to fill out forms and view
                        submission history.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Utilized: React JS, Vite, React-Query, Shadcn UI,
                        Zustand, Tailwind CSS, Laravel (Backend).
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Aplans Verivali */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Aplans Verivali – Mobile Application
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Aug 2023 – Sept 2023
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Mobile application created for verification and
                        validation of data on residents who receive assistance
                        funds
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Utilized: React Native, Zustand, React-Query, Whatsapp
                        Gateway.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Balitaku */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Balitaku – Mobile Application
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Oct 2023 – Dec 2023
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Mobile application created for verification and
                        validation of data on residents who receive assistance
                        funds
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Made for prevent and reduce disease rate stunting for
                        baby in Medan, and and provides various kinds of
                        information related to baby health in it
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Used OTP sent via whatsapp user For authentication
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Utilized: React Native, Express Js, React-Query,
                        Whatsapp Gateway.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* SIIMPAL */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      SIIMPAL – Mobile Application
                    </h3>
                    <span className="text-gray-500 font-medium text-sm">
                      Mei 2023 – July 2023
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Attendance application for the tourism office of Medan
                        city, where employees declare their attendance by selfie
                        in this application.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Utilized: React Native.</span>
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
