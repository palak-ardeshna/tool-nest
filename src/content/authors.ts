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
    slug: "palak-patel",
    name: "Palak Patel",
    role: "IT engineer, developer and researcher",
    bio:
      "Palak is an IT engineer, developer and researcher, and runs ToolNest. He uses the software he writes about in his own development work and says so when he has not. Each article is checked against vendor documentation, changelogs and pricing pages; drafts may start with AI assistance, but he checks and edits every claim before it goes live.",
    email: siteConfig.email,
    linkedin: "https://www.linkedin.com/in/palak-patel-031a52403/",
  },
];
