import { allArticles, articlesInSection } from "@/content";
import type { ResolvedArticle, ResolvedCategory } from "@/types";

/**
 * The article data API. Pure array operations over the content files — no
 * async, no database, no caching layer, because there is nothing to cache.
 */

export function getArticlesInSection(
  category: ResolvedCategory,
  take?: number,
  skip = 0,
): ResolvedArticle[] {
  const articles = articlesInSection(category);
  return take === undefined ? articles.slice(skip) : articles.slice(skip, skip + take);
}


export function getArticlesByAuthor(authorSlug: string): ResolvedArticle[] {
  return allArticles.filter((article) => article.author.slug === authorSlug);
}

/**
 * Related articles: shared tags first, then the same category, then newest.
 * Avoids a hand-maintained relation list while still surfacing relevant reads.
 */
export function getRelatedArticles(article: ResolvedArticle, take = 3): ResolvedArticle[] {
  const tags = new Set(article.tags);
  const others = allArticles.filter((candidate) => candidate.slug !== article.slug);

  const scored = others
    .map((candidate) => ({
      article: candidate,
      shared: candidate.tags.filter((tag) => tags.has(tag)).length,
      sameCategory: candidate.category.slug === article.category.slug ? 1 : 0,
    }))
    .filter((entry) => entry.shared > 0 || entry.sameCategory > 0)
    .sort(
      (a, b) =>
        b.shared - a.shared ||
        b.sameCategory - a.sameCategory ||
        b.article.publishedAtDate.getTime() - a.article.publishedAtDate.getTime(),
    );

  return scored.slice(0, take).map((entry) => entry.article);
}

export { allArticles };
