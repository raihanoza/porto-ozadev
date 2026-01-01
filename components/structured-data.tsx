import Script from "next/script";

export function StructuredData() {
  // Enhanced Person Schema
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://raihanoza-dev.me/#person",
    name: "Raihan Oza Samudera Siregar",
    alternateName: "Raihan Oza",
    jobTitle: "Software Engineer & Full Stack Developer",
    description:
      "Expert Software Engineer and Full Stack Developer with 2+ years of experience specializing in React.js, Next.js, TypeScript, Node.js, and modern web technologies. Based in Medan, Indonesia, available for freelance projects worldwide.",
    url: "https://raihanoza-dev.me",
    image: {
      "@type": "ImageObject",
      url: "https://raihanoza-dev.me/image/me2.png",
      width: 512,
      height: 512,
    },
    email: "raihanoza18@gmail.com",
    telephone: "+62896-5216-4724",
    sameAs: [
      "https://github.com/raihanoza",
      "https://linkedin.com/in/raihanoza",
      "https://twitter.com/raihanoza",
      "https://instagram.com/raihanoza",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Muhammadiyah University Of North Sumatera",
      location: "Medan, Indonesia",
    },
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "React.js Development",
      "Next.js Development",
      "TypeScript Programming",
      "JavaScript Programming",
      "Node.js Development",
      "Express.js",
      "React Native",
      "Mobile App Development",
      "Web Application Development",
      "RESTful API Development",
      "Database Design",
      "PostgreSQL",
      "MongoDB",
      "Laravel Framework",
      "PHP Development",
      "UI/UX Implementation",
      "Responsive Web Design",
      "Performance Optimization",
      "SEO Optimization",
    ],
    knowsLanguage: [
      {
        "@type": "Language",
        name: "English",
        proficiency: "Professional Working Proficiency",
      },
      {
        "@type": "Language",
        name: "Indonesian",
        proficiency: "Native",
      },
    ],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medan",
        addressRegion: "North Sumatra",
        addressCountry: "ID",
      },
    },
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medan",
        addressRegion: "North Sumatra",
        addressCountry: "Indonesia",
      },
    },
  };

  // Website Schema
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://raihanoza-dev.me/#website",
    name: "Raihan Oza Samudera Siregar Portfolio",
    alternateName: "Raihan Oza Portfolio",
    url: "https://raihanoza-dev.me",
    description:
      "Professional portfolio website showcasing projects and skills of Raihan Oza Samudera Siregar, a Software Engineer and Full Stack Developer specializing in React.js, Next.js, and modern web technologies",
    author: {
      "@id": "https://raihanoza-dev.me/#person",
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@id": "https://raihanoza-dev.me/#person",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://raihanoza-dev.me/#works?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Professional Service Schema
  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://raihanoza-dev.me/#service",
    name: "Raihan Oza - Software Development Services",
    description:
      "Professional software development services including web application development, mobile app development, and technical consulting",
    provider: {
      "@id": "https://raihanoza-dev.me/#person",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Technical Consulting",
    ],
    priceRange: "$$",
  };

  // BreadcrumbList Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://raihanoza-dev.me",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://raihanoza-dev.me/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skills",
        item: "https://raihanoza-dev.me/#skills",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://raihanoza-dev.me/#works",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://raihanoza-dev.me/#contacts",
      },
    ],
  };

  return (
    <>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="professional-service-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
