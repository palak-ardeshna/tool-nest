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
      "Guides and comparisons covering AI tools for writing, images, video, voice, coding and research — how to evaluate them, where they genuinely help, and where the marketing runs ahead of the product.",
  },
  {
    slug: "software",
    name: "Software",
    description:
      "Reviews and buying advice for the applications that make up a working day, from design and developer software to invoicing, plus how to decide what is worth paying for.",
  },
  {
    slug: "productivity",
    name: "Productivity",
    description:
      "Workflows, note-taking, time management and automation — practical systems that survive a busy week, and an honest account of the ones that do not.",
  },
  {
    slug: "research",
    name: "Research",
    description:
      "Web research done properly: finding what people actually search for, which search engines are worth switching to, and how to check a claim before you publish it.",
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    description:
      "APIs, databases, deployment and terminal tooling: what to set up before you need it, what to reach for when something is slow, and where the fix is in your own code instead.",
  },
];
