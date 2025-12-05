import Script from "next/script";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raihan Oza Samudera Siregar",
    jobTitle: "Software Engineer",
    description: "Frontend Developer specializing in modern web technologies",
    url: "https://your-domain.com",
    image: "https://your-domain.com/image/profile.jpg",
    sameAs: [
      "https://github.com/your-github",
      "https://linkedin.com/in/your-linkedin",
      "https://twitter.com/your-twitter",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Your University/Bootcamp", // Sesuaikan
    },
    knowsAbout: [
      "Software Engineering",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogor",
      addressRegion: "West Java",
      addressCountry: "ID",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Raihan Oza Samudera Siregar Portfolio",
    url: "https://your-domain.com",
    description:
      "Portfolio website of Raihan Oza Samudera Siregar, Software Engineer and Frontend Developer",
    author: {
      "@type": "Person",
      name: "Raihan Oza Samudera Siregar",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
