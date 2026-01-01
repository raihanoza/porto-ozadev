import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import CustomCursor from "@/components/CustomCursor";
import { StructuredData } from "@/components/structured-data";
import { PerformanceMonitor } from "@/components/PerformanceOptimizer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// Enhanced SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://raihanoza-dev.me"),

  title: {
    default:
      "Raihan Oza - Software Engineer & Full Stack Developer | React, Next.js Expert from Medan, Indonesia",
    template: "%s | Raihan Oza - Software Engineer",
  },

  description:
    "🚀 Raihan Oza Samudera Siregar - Expert Software Engineer & Full Stack Developer from Medan, Indonesia with 2+ years experience. Specialized in React.js, Next.js, TypeScript, Node.js, mobile apps. Available for freelance projects worldwide. Portfolio showcasing 10+ successful projects.",

  keywords: [
    // Primary Keywords
    "Raihan Oza Samudera Siregar",
    "Software Engineer Medan Indonesia",
    "Full Stack Developer Indonesia",
    "React Developer Medan",
    "Next.js Expert Indonesia",

    // Technical Skills
    "TypeScript Developer",
    "JavaScript Expert",
    "Node.js Developer",
    "React Native Developer",
    "Frontend Developer",
    "Backend Developer",

    // Location-based SEO
    "Web Developer Medan",
    "Software Engineer Sumatera Utara",
    "Freelance Developer Indonesia",
    "Remote Developer Asia",

    // Service Keywords
    "Web Development Services",
    "Mobile App Development",
    "E-commerce Development",
    "API Development",
    "Database Design",
    "UI/UX Implementation",

    // Industry Keywords
    "SAAS Development",
    "Startup Technical Consultant",
    "MVP Development",
    "Scalable Applications",
    "Performance Optimization",

    // Hiring Keywords
    "Hire Software Engineer",
    "Freelance React Developer",
    "Contract Developer",
    "Remote Team Member",
    "Technical Consultant",
  ],

  authors: [
    { name: "Raihan Oza Samudera Siregar", url: "https://raihanoza-dev.me" },
  ],

  creator: "Raihan Oza Samudera Siregar",
  publisher: "Raihan Oza Samudera Siregar",
  applicationName: "Raihan Oza Portfolio",

  // Enhanced Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raihanoza-dev.me",
    siteName: "Raihan Oza - Software Engineer Portfolio",
    title:
      "Raihan Oza - Expert Software Engineer & Full Stack Developer from Medan, Indonesia",
    description:
      "🚀 Expert Software Engineer with 2+ years experience building scalable web applications using React.js, Next.js, TypeScript. Based in Medan, Indonesia. Available for freelance projects worldwide.",
    images: [
      {
        url: "/image/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raihan Oza Samudera Siregar - Software Engineer & Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
      {
        url: "/image/me2.png",
        width: 512,
        height: 512,
        alt: "Raihan Oza Samudera Siregar Profile Photo",
        type: "image/png",
      },
    ],
  },

  // Enhanced Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Raihan Oza - Software Engineer & Full Stack Developer",
    description:
      "🚀 Expert Software Engineer from Medan, Indonesia. 2+ years experience in React.js, Next.js, TypeScript. Building scalable applications that make a difference. Available for freelance work.",
    images: ["/image/og-image.jpg"],
    creator: "@raihanoza",
    site: "@raihanoza",
  },

  // Enhanced Robots
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#8b5cf6" },
    ],
  },

  // Enhanced Verification
  verification: {
    google:
      "google-site-verification=FN1sjwvUtzNYIpEkhrBnl7KOONx9FVtjw45oYTIi6gY",
    yandex: "verification_yandex",
    yahoo: "verification_yahoo",
  },

  // Enhanced Category
  category: "technology",
  classification:
    "Portfolio, Software Engineering, Web Development, Mobile Development",

  // Language Alternates
  alternates: {
    canonical: "https://raihanoza-dev.me",
    languages: {
      "en-US": "https://raihanoza-dev.me",
      en: "https://raihanoza-dev.me",
      "id-ID": "https://raihanoza-dev.me/id",
    },
  },

  // Additional SEO metadata
  other: {
    "google-site-verification": "FN1sjwvUtzNYIpEkhrBnl7KOONx9FVtjw45oYTIi6gY",
    "msvalidate.01": "your-bing-verification",
    "yandex-verification": "verification_yandex",
    "og:see_also": [
      "https://github.com/raihanoza",
      "https://linkedin.com/in/raihanoza",
      "https://instagram.com/raihanoza",
      "https://twitter.com/raihanoza",
    ],
    "article:author": "Raihan Oza Samudera Siregar",
    "og:email": "raihanoza18@gmail.com",
    "og:phone_number": "+62896-5216-4724",
    "og:street-address": "Medan",
    "og:locality": "Medan",
    "og:region": "North Sumatra",
    "og:postal-code": "20000",
    "og:country-name": "Indonesia",
    "business:contact_data:street_address": "Medan",
    "business:contact_data:locality": "Medan",
    "business:contact_data:region": "North Sumatra",
    "business:contact_data:postal_code": "20000",
    "business:contact_data:country_name": "Indonesia",
  },
};

// Viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Resource hints */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/image/me2.png" as="image" type="image/png" />
        <link rel="prefetch" href="/cv.pdf" as="document" />

        {/* PWA and Mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Raihan Oza" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0a0a0a"
        />

        {/* Enhanced Geo Location Meta Tags */}
        <meta name="geo.region" content="ID-SU" />
        <meta name="geo.placename" content="Medan, North Sumatra, Indonesia" />
        <meta name="geo.position" content="3.5952;98.6722" />
        <meta name="ICBM" content="3.5952, 98.6722" />
        <meta name="geo.country" content="ID" />

        {/* Business Info */}
        <meta name="contact" content="raihanoza18@gmail.com" />
        <meta name="author" content="Raihan Oza Samudera Siregar" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {/* Performance and Caching */}
        <meta
          httpEquiv="cache-control"
          content="public, max-age=31536000, immutable"
        />
        <meta httpEquiv="expires" content="31536000" />

        {/* Security Headers */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Structured Data for SEO */}
        <StructuredData />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <PerformanceMonitor />
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
