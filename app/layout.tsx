import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

// Configure Montserrat font with optimized settings
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
  metadataBase: new URL("https://your-domain.com"), // Ganti dengan domain Anda

  title: {
    default:
      "Raihan Oza Samudera Siregar - Software Engineer & Frontend Developer",
    template: "%s | Raihan Oza Samudera Siregar",
  },

  description:
    "Portfolio of Raihan Oza Samudera Siregar, a passionate Software Engineer and Frontend Developer specializing in modern web technologies. Turning imagination into lines of code.",

  keywords: [
    "Raihan Oza Samudera Siregar",
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],

  authors: [{ name: "Raihan Oza Samudera Siregar" }],

  creator: "Raihan Oza Samudera Siregar",

  publisher: "Raihan Oza Samudera Siregar",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Raihan Oza Samudera Siregar Portfolio",
    title:
      "Raihan Oza Samudera Siregar - Software Engineer & Frontend Developer",
    description:
      "Portfolio of Raihan Oza Samudera Siregar, a passionate Software Engineer and Frontend Developer specializing in modern web technologies.",
    images: [
      {
        url: "/image/og-image.jpg", // Buat OG image 1200x630px
        width: 1200,
        height: 630,
        alt: "Raihan Oza Samudera Siregar - Software Engineer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Raihan Oza Samudera Siregar - Software Engineer & Frontend Developer",
    description:
      "Portfolio of Raihan Oza Samudera Siregar, a passionate Software Engineer and Frontend Developer.",
    images: ["/image/og-image.jpg"],
    creator: "@your_twitter_handle", // Ganti dengan Twitter handle Anda
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
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Other
  category: "technology",

  // Alternates for language/regional versions
  alternates: {
    canonical: "https://your-domain.com",
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
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
