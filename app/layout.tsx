import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import CustomCursor from "../components/CustomCursor";

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
      "Raihan Oza - Software Engineer & Full Stack Developer | React, Next.js Expert",
    template: "%s | Raihan Oza - Software Engineer",
  },

  description:
    "Raihan Oza Samudera Siregar is a passionate Software Engineer and Full Stack Developer with 2+ years of experience specializing in React.js, Next.js, TypeScript, and modern web technologies. Expert in building scalable web applications and mobile apps.",

  keywords: [
    "Raihan Oza Samudera Siregar",
    "Raihan Oza",
    "Software Engineer Indonesia",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "JavaScript Developer",
    "Web Developer Medan",
    "Mobile Developer",
    "React Native",
    "Node.js Developer",
    "Nest.js Developer",
    "Portfolio Website",
    "Hire Software Engineer",
    "Freelance Developer Indonesia",
    "Web Development Services",
  ],

  authors: [
    { name: "Raihan Oza Samudera Siregar", url: "https://raihanoza-dev.me" },
  ],

  creator: "Raihan Oza Samudera Siregar",

  publisher: "Raihan Oza Samudera Siregar",

  applicationName: "Raihan Oza Portfolio",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raihanoza-dev.me",
    siteName: "Raihan Oza - Software Engineer Portfolio",
    title:
      "Raihan Oza - Software Engineer & Full Stack Developer | React, Next.js Expert",
    description:
      "Passionate Software Engineer with 2+ years of experience in building modern web applications using React.js, Next.js, TypeScript, and cutting-edge technologies. Based in Medan, Indonesia.",
    images: [
      {
        url: "/image/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raihan Oza Samudera Siregar - Software Engineer & Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Raihan Oza - Software Engineer & Full Stack Developer",
    description:
      "Passionate Software Engineer with 2+ years of experience in React.js, Next.js, and modern web technologies. Building scalable applications that make a difference.",
    images: ["/image/og-image.jpg"],
    creator: "@raihanoza",
    site: "@raihanoza",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Verification for search engines
  verification: {
    google:
      "google-site-verification=FN1sjwvUtzNYIpEkhrBnl7KOONx9FVtjw45oYTIi6gY", // Tambahkan setelah verifikasi di Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Other metadata
  category: "technology",

  classification: "Portfolio, Software Engineering, Web Development",

  // Alternates for language/regional versions
  alternates: {
    canonical: "https://raihanoza-dev.me",
    languages: {
      "en-US": "https://raihanoza-dev.me",
    },
  },

  // Additional metadata for better SEO
  other: {
    "google-site-verification": "your-google-verification-code",
    "og:see_also": [
      "https://github.com/raihanoza",
      "https://linkedin.com/in/raihanoza",
    ],
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
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Additional meta tags for SEO and user experience */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Raihan Oza" />

        {/* Geo Location Meta Tags */}
        <meta name="geo.region" content="ID-SU" />
        <meta name="geo.placename" content="Medan" />
        <meta name="geo.position" content="3.5952;98.6722" />
        <meta name="ICBM" content="3.5952, 98.6722" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
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
