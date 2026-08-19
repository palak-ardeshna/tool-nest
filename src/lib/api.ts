import { absoluteUrl } from "@/lib/seo";
import type { ResolvedArticle, ResolvedCategory } from "@/types";

/**
 * Shapes for the public JSON endpoints. Explicit rather than serialising the
 * internal type, so the article files can be refactored without breaking
 * anything consuming the API.
 */

export function toApiArticle(article: ResolvedArticle) {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    url: absoluteUrl(`/articles/${article.slug}`),
    image: article.image ? absoluteUrl(article.image) : null,
    publishedAt: article.publishedAt,
    updatedAt: article.contentUpdatedAt ?? null,
    readingMinutes: article.readingMinutes,
    tags: article.tags,
    category: { slug: article.category.slug, name: article.category.name },
    author: { slug: article.author.slug, name: article.author.name },
  };
}

export function toApiCategory(category: ResolvedCategory) {
  return {
    slug: category.slug,
    name: category.name,
    description: category.description,
    url: absoluteUrl(`/category/${category.slug}`),
    children: category.children.map((child) => ({ slug: child.slug, name: child.name })),
  };
}
