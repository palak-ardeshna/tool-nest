import { siteConfig } from "@/config/site";
import type { Author } from "@/content/types";

/**
 * Bylines. Every article references one of these by slug.
 *
 * ToolNest is written and edited by one person. Articles are researched from
 * vendor documentation, changelogs and public reporting, drafted with AI
 * assistance and reviewed by him before publication — see /about.
 */
export const authors: Author[] = [
  {
    slug: "parth-patel",
    name: "Parth Patel",
    role: "Founder and editor",
    bio:
      "Parth runs ToolNest and is responsible for everything published here. He researches each article from vendor documentation, changelogs, pricing pages and published reporting, drafts with AI assistance, then checks and edits every claim before it goes live. Where he has not used a tool himself, the article says so.",
    email: siteConfig.email,
  },
];
