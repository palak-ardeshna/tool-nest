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
    slug: "ai-tools",
    name: "AI Tools",
    description:
      "AI models and services I use: pricing changes, limits, and what they cost in practice.",
  },
  {
    slug: "productivity",
    name: "Productivity",
    description:
      "Tools for keeping working hours free of distractions, tried on my own working days.",
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    description:
      "Deployment, frameworks and AI coding tools on a real Next.js site: what broke, what it cost, and the fix.",
  },
];
