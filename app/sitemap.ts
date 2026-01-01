import { MetadataRoute } from "next";
import projectsData from "@/data/projects.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://raihanoza-dev.me";
  const currentDate = new Date();

  // Static pages with different priorities and update frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#hero`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  // Dynamic project pages with high priority
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/details/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
