import { allArticles } from "@/content";
import type { ResolvedArticle } from "@/types";

export type SearchResult = {
  articles: ResolvedArticle[];
  total: number;
};

/**
 * ponytail: substring matching over an in-memory array. At publication scale
 * (hundreds of articles) this is well under a millisecond. Reach for a real
 * index only if the archive grows past a few thousand pieces.
 */
export function searchArticles({
  query,
  category,
  take = 24,
}: {
  query: string;
  category?: string;
  take?: number;
}): SearchResult {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return { articles: [], total: 0 };

  const matches = allArticles.filter((article) => {
    if (category && article.category.slug !== category && article.category.parent !== category) {
      return false;
    }
    return (
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      article.content.toLowerCase().includes(q)
    );
  });

  // A title match is the strongest signal, so float those to the top.
  const ranked = [...matches].sort(
    (a, b) => Number(b.title.toLowerCase().includes(q)) - Number(a.title.toLowerCase().includes(q)),
  );

  return { articles: ranked.slice(0, take), total: ranked.length };
}
