import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raihan Oza Samudera Siregar - Software Engineer Portfolio",
    short_name: "Raihan Oza Portfolio",
    description:
      "Portfolio of Raihan Oza Samudera Siregar, a passionate Software Engineer and Frontend Developer specializing in modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#8b5cf6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
