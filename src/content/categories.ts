import type { Category } from "@/content/types";

/**
 * Sections. Order here is the order everywhere: the homepage topic grid,
 * category listings and the sitemap.
 *
 * Deliberately flat. Sub-topics existed until every one of them held a single
 * article, which produced twenty near-identical listing pages — thin by any
 * measure and useless to a reader. Add a sub-topic back only when there are
 * three or four articles to put in it; `npm test` fails on an empty section.
 */
export const categories: Category[] = [
  {
    slug: "ai-for-professionals",
    name: "AI for Professionals",
    description:
      "Setting up and using AI tools for everyday work, from connecting your inbox to the jobs I hand it each day.",
  },
];
