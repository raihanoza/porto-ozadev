import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raihan Oza Samudera Siregar - Expert Software Engineer & Full Stack Developer",
    short_name: "Raihan Oza",
    description:
      "🚀 Portfolio of Raihan Oza Samudera Siregar - Expert Software Engineer & Full Stack Developer from Medan, Indonesia. Specialized in React.js, Next.js, TypeScript, Node.js. Available for freelance projects worldwide.",
    start_url: "/",
    id: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#8b5cf6",
    orientation: "portrait-primary",
    categories: ["business", "productivity", "portfolio"],
    lang: "en-US",
    dir: "ltr",
    screenshots: [
      {
        src: "/image/og-image.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
        form_factor: "wide",
      },
    ],
    shortcuts: [
      {
        name: "View Projects",
        short_name: "Projects",
        url: "/#projects",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "About Me",
        short_name: "About",
        url: "/about",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "My Resume",
        short_name: "Resume",
        url: "/resume",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Contact Me",
        short_name: "Contact",
        url: "/#contact",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
    ],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    related_applications: [
      {
        platform: "web",
        url: "https://raihanoza-dev.me",
        id: "raihanoza-portfolio",
      },
    ],
    prefer_related_applications: false,
  };
}
