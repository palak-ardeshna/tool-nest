import type { MetadataRoute } from "next";
import { allArticles } from "@/lib/articles";
import { resolvedCategories } from "@/content";
import { authors } from "@/content";
import { absoluteUrl } from "@/lib/seo";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const staticRoutes: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/articles", priority: 0.9, changeFrequency: "daily" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.4, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const newest = allArticles[0]?.publishedAtDate ?? new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: newest,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...resolvedCategories.map((category) => ({
      url: absoluteUrl(`/category/${category.slug}`),
      lastModified: newest,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...allArticles.map((article) => ({
      url: absoluteUrl(`/articles/${article.slug}`),
      lastModified: article.contentUpdatedAtDate ?? article.publishedAtDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...authors.map((author) => ({
      url: absoluteUrl(`/authors/${author.slug}`),
      lastModified: newest,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
