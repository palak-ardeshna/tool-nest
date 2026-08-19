import { cache } from "react";
import { db } from "@/lib/db";
import { articleCardSelect, type ArticleCardData, type FullArticle } from "@/types";
import { ArticleStatus, type Prisma } from "@prisma/client";

const published: Prisma.ArticleWhereInput = {
  status: ArticleStatus.PUBLISHED,
  publishedAt: { not: null },
};

const byNewest: Prisma.ArticleOrderByWithRelationInput[] = [
  { publishedAt: "desc" },
  { createdAt: "desc" },
];

export const getLatestArticles = cache(
  async (take = 9, skip = 0): Promise<ArticleCardData[]> =>
    db.article.findMany({ where: published, orderBy: byNewest, take, skip, select: articleCardSelect }),
);

export const countPublishedArticles = cache(async (): Promise<number> =>
  db.article.count({ where: published }),
);

/**
 * Editor-picked articles for the homepage. Falls back to the newest posts so the
 * homepage is never empty on a fresh install.
 */
export const getFeaturedArticles = cache(async (take = 4): Promise<ArticleCardData[]> => {
  const featured = await db.article.findMany({
    where: { ...published, featured: true },
    orderBy: byNewest,
    take,
    select: articleCardSelect,
  });
  if (featured.length >= take) return featured;

  const filler = await db.article.findMany({
    where: { ...published, id: { notIn: featured.map((a) => a.id) } },
    orderBy: byNewest,
    take: take - featured.length,
    select: articleCardSelect,
  });
  return [...featured, ...filler];
});

export const getArticleBySlug = cache(async (slug: string): Promise<FullArticle | null> =>
  db.article.findFirst({
    where: { slug, ...published },
    include: {
      category: { include: { parent: true } },
      author: true,
      tags: true,
      faqs: { orderBy: { position: "asc" } },
      alternatives: { orderBy: { position: "asc" } },
    },
  }),
);

export const getArticlesByCategory = cache(
  async (categoryIds: string[], take = 12, skip = 0): Promise<ArticleCardData[]> =>
    db.article.findMany({
      where: { ...published, categoryId: { in: categoryIds } },
      orderBy: byNewest,
      take,
      skip,
      select: articleCardSelect,
    }),
);

export const countArticlesByCategory = cache(async (categoryIds: string[]): Promise<number> =>
  db.article.count({ where: { ...published, categoryId: { in: categoryIds } } }),
);

/**
 * Sidebar reading list. A leaf category ("AI Image") is often too thin to fill
 * a sidebar on its own, so widen to the whole parent section ("AI Tools") when
 * the article has one.
 */
export const getMoreInSection = cache(
  async (
    article: { id: string; categoryId: string; category: { parentId: string | null } },
    take = 4,
  ): Promise<ArticleCardData[]> => {
    const parentId = article.category.parentId;

    return db.article.findMany({
      where: {
        ...published,
        id: { not: article.id },
        ...(parentId
          ? { OR: [{ categoryId: parentId }, { category: { parentId } }] }
          : { OR: [{ categoryId: article.categoryId }, { category: { parentId: article.categoryId } }] }),
      },
      orderBy: byNewest,
      take,
      select: articleCardSelect,
    });
  },
);

export const getArticlesByAuthor = cache(async (authorId: string): Promise<ArticleCardData[]> =>
  db.article.findMany({
    where: { ...published, authorId },
    orderBy: byNewest,
    select: articleCardSelect,
  }),
);

/**
 * Related articles: shared tags first, then same category, then newest.
 * Avoids a hand-maintained relation table while still surfacing relevant reads.
 */
export const getRelatedArticles = cache(
  async (article: Pick<FullArticle, "id" | "categoryId"> & { tags: { id: string }[] }, take = 3) => {
    const exclude = { id: { not: article.id } };
    const tagIds = article.tags.map((t) => t.id);
    const picked: ArticleCardData[] = [];

    if (tagIds.length) {
      picked.push(
        ...(await db.article.findMany({
          where: { ...published, ...exclude, tags: { some: { id: { in: tagIds } } } },
          orderBy: byNewest,
          take,
          select: articleCardSelect,
        })),
      );
    }
    if (picked.length < take) {
      picked.push(
        ...(await db.article.findMany({
          where: {
            ...published,
            categoryId: article.categoryId,
            id: { notIn: [article.id, ...picked.map((a) => a.id)] },
          },
          orderBy: byNewest,
          take: take - picked.length,
          select: articleCardSelect,
        })),
      );
    }
    return picked.slice(0, take);
  },
);

/** Every published slug + timestamp, for the sitemap. */
export async function getSitemapArticles() {
  return db.article.findMany({
    where: published,
    orderBy: byNewest,
    select: { slug: true, publishedAt: true, contentUpdatedAt: true, updatedAt: true },
  });
}
