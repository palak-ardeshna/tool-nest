import { db } from "@/lib/db";
import { articleCardSelect, type ArticleCardData } from "@/types";
import { ArticleStatus, type Prisma } from "@prisma/client";

export type SearchParamsInput = {
  query: string;
  category?: string;
  take?: number;
};

export type SearchResult = {
  articles: ArticleCardData[];
  total: number;
};

/**
 * ponytail: ILIKE across title/excerpt/content. Simple, index-free and fine at
 * publication scale (hundreds of articles). Move to a Postgres tsvector column
 * with a GIN index if the archive grows past a few thousand rows.
 */
export async function searchArticles({
  query,
  category,
  take = 24,
}: SearchParamsInput): Promise<SearchResult> {
  const q = query.trim();
  if (q.length < 2) return { articles: [], total: 0 };

  const where: Prisma.ArticleWhereInput = {
    status: ArticleStatus.PUBLISHED,
    publishedAt: { not: null },
    OR: [
      { title: { contains: q, mode: "insensitive" } },
      { excerpt: { contains: q, mode: "insensitive" } },
      { content: { contains: q, mode: "insensitive" } },
      { tags: { some: { name: { contains: q, mode: "insensitive" } } } },
    ],
    ...(category
      ? { category: { OR: [{ slug: category }, { parent: { slug: category } }] } }
      : {}),
  };

  const [articles, total] = await Promise.all([
    db.article.findMany({
      where,
      orderBy: [{ publishedAt: "desc" }],
      take,
      select: articleCardSelect,
    }),
    db.article.count({ where }),
  ]);

  // Title matches are the strongest signal, so float them to the top.
  const lower = q.toLowerCase();
  articles.sort(
    (a, b) =>
      Number(b.title.toLowerCase().includes(lower)) - Number(a.title.toLowerCase().includes(lower)),
  );

  return { articles, total };
}
