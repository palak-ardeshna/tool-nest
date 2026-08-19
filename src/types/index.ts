import type { Prisma } from "@prisma/client";

export const articleCardSelect = {
  id: true,
  title: true,
  slug: true,
  excerpt: true,
  featuredImage: true,
  featuredImageAlt: true,
  publishedAt: true,
  readingMinutes: true,
  category: { select: { name: true, slug: true } },
  author: { select: { name: true, slug: true, avatar: true } },
} satisfies Prisma.ArticleSelect;

export type ArticleCardData = Prisma.ArticleGetPayload<{
  select: typeof articleCardSelect;
}>;

export type FullArticle = Prisma.ArticleGetPayload<{
  include: {
    category: { include: { parent: true } };
    author: true;
    tags: true;
    faqs: true;
    alternatives: true;
  };
}>;

export type CategoryWithChildren = Prisma.CategoryGetPayload<{
  include: { children: true };
}>;

export type Crumb = { label: string; href?: string };
