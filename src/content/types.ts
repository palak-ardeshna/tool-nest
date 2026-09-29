/**
 * The content model.
 *
 * Articles, categories and authors are plain TypeScript modules under
 * `src/content`. Publishing is a commit; there is no database and no CMS.
 */

export type Author = {
  slug: string;
  name: string;
  role?: string;
  bio?: string;
  avatar?: string;
  email?: string;
  twitter?: string;
  website?: string;
  linkedin?: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  /** Omit for a top-level section. */
  parent?: string;
};

export type Faq = { question: string; answer: string };
export type Alternative = { name: string; url?: string; note?: string };

/**
 * A primary source an article was built from.
 *
 * /about states the articles are researched from vendor documentation, pricing
 * pages and published reporting. This is where that claim is made checkable:
 * a reader (or a reviewer) can follow every load-bearing fact back to its
 * origin. `checkedAt` records when the page was last read, because vendor
 * pricing changes under a stable URL.
 */
export type Source = {
  title: string;
  /** Who published it, e.g. "Anthropic" or "Ofcom". */
  publisher: string;
  url: string;
  /** ISO date the source was last read. */
  checkedAt: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** HTML. Use `<h2>` for main sections — ad slots land on those boundaries. */
  content: string;
  /** Category slug. */
  category: string;
  /** Author slug. */
  author: string;
  tags: string[];
  /** ISO date. An article dated in the future is not published. */
  publishedAt: string;
  /** ISO date of the last editorial review, shown as "Updated". */
  contentUpdatedAt?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  quickAnswer?: string;
  pros?: string[];
  cons?: string[];
  alternatives?: Alternative[];
  faqs?: Faq[];
  /** Primary sources behind the article, shown as a reference list. */
  sources?: Source[];
  /** Path under /public. Falls back to generated cover art when omitted. */
  image?: string;
  imageAlt?: string;
  /** Keep the page live but out of search: robots noindex and no sitemap entry. */
  noIndex?: boolean;
  /**
   * Palak's sign-off. Filled in only after Palak confirms the facts in chat; never invented. Required on every
   * article published after 2026-09-29; `npm test` fails without it.
   */
  humanReview?: HumanReview;
};

export type HumanReview = {
  /** ISO date Palak confirmed the facts in chat and said to publish. */
  reviewedAt: string;
  /** Paragraph built only from facts Palak supplied: what he did with the tool and what happened, with a number. Must appear word for word in `content`. */
  experience: string;
};

/** An article with its category and author resolved, plus derived fields. */
export type ResolvedArticle = Omit<Article, "category" | "author"> & {
  category: ResolvedCategory;
  author: Author;
  readingMinutes: number;
  publishedAtDate: Date;
  contentUpdatedAtDate: Date | null;
};

export type ResolvedCategory = Category & {
  parentCategory: Category | null;
  children: Category[];
};
