import { Metadata } from "next";
import projectsData from "@/data/projects.json";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const baseUrl = "https://raihanoza-dev.me";
  const projectUrl = `${baseUrl}/details/${id}`;
  const imageUrl = project.images[0]
    ? `${baseUrl}${project.images[0]}`
    : `${baseUrl}/image/og-image.jpg`;

  return {
    title: `${project.title} - ${project.category}`,
    description: project.description,
    keywords: [
      project.title,
      ...project.technologies,
      "web development",
      "software project",
      "Raihan Oza",
      "portfolio project",
    ],
    authors: [{ name: "Raihan Oza Samudera Siregar" }],
    openGraph: {
      title: `${project.title} | Raihan Oza Portfolio`,
      description: project.description,
      url: projectUrl,
      siteName: "Raihan Oza Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: project.year ? `${project.year}-01-01` : undefined,
      authors: ["Raihan Oza Samudera Siregar"],
      tags: project.technologies,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Raihan Oza`,
      description: project.description,
      images: [imageUrl],
      creator: "@raihanoza",
    },
    alternates: {
      canonical: projectUrl,
    },
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
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}
