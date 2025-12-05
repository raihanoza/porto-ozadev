import { MetadataRoute } from "next";
import projectsData from "@/data/projects.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://raihanoza-dev.me";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
  ];

  // Dynamic project pages
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/details/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
