import { articles as rawArticles } from "@/content/articles";
import { authors } from "@/content/authors";
import { categories } from "@/content/categories";
import { readingMinutes } from "@/lib/format";
import type { Author, Category, ResolvedArticle, ResolvedCategory } from "@/content/types";

/**
 * Resolves the content files into the shapes the app renders, once per process.
 *
 * Everything here is derived at module load: a few dozen articles is a few milliseconds,
 * and doing it eagerly means every page is a pure array read with no async.
 */

const authorBySlug = new Map(authors.map((author) => [author.slug, author]));
const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));

function resolveCategory(category: Category): ResolvedCategory {
  return {
    ...category,
    parentCategory: category.parent ? (categoryBySlug.get(category.parent) ?? null) : null,
    children: categories.filter((child) => child.parent === category.slug),
  };
}

export const resolvedCategories: ResolvedCategory[] = categories.map(resolveCategory);

const resolvedCategoryBySlug = new Map(
  resolvedCategories.map((category) => [category.slug, category]),
);

export const topLevelCategories: ResolvedCategory[] = resolvedCategories.filter(
  (category) => !category.parent,
);

export function getCategory(slug: string): ResolvedCategory | undefined {
  return resolvedCategoryBySlug.get(slug);
}

export function getAuthor(slug: string): Author | undefined {
  return authorBySlug.get(slug);
}

export { authors, categories };

function resolveArticle(article: (typeof rawArticles)[number]): ResolvedArticle {
  const category = resolvedCategoryBySlug.get(article.category);
  const author = authorBySlug.get(article.author);

  // A typo in a slug should fail the build, not render a half-empty page.
  if (!category) {
    throw new Error(`Article "${article.slug}" references unknown category "${article.category}"`);
  }
  if (!author) {
    throw new Error(`Article "${article.slug}" references unknown author "${article.author}"`);
  }

  return {
    ...article,
    category,
    author,
    readingMinutes: readingMinutes(article.content),
    publishedAtDate: new Date(article.publishedAt),
    contentUpdatedAtDate: article.contentUpdatedAt ? new Date(article.contentUpdatedAt) : null,
  };
}

/** Published articles, newest first. A future date keeps a draft out of the build. */
export const allArticles: ResolvedArticle[] = rawArticles
  .map(resolveArticle)
  .filter((article) => article.publishedAtDate.getTime() <= Date.now())
  .sort((a, b) => b.publishedAtDate.getTime() - a.publishedAtDate.getTime());

const articleBySlug = new Map(allArticles.map((article) => [article.slug, article]));

export function getArticle(slug: string): ResolvedArticle | undefined {
  return articleBySlug.get(slug);
}

/** A section's own articles plus everything in its sub-categories. */
export function articlesInSection(category: ResolvedCategory): ResolvedArticle[] {
  const slugs = new Set([category.slug, ...category.children.map((child) => child.slug)]);
  return allArticles.filter((article) => slugs.has(article.category.slug));
}
