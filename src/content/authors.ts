import { siteConfig } from "@/config/site";
import type { Author } from "@/content/types";

/**
 * Bylines. Every article references one of these by slug.
 *
 * ToolNest is written and edited by one person. Articles are researched from
 * his own use of the tools plus vendor documentation, changelogs and public
 * reporting, and checked by him before publication — see /about.
 */
export const authors: Author[] = [
  {
    slug: "palak-patel",
    name: "Palak Patel",
    role: "IT engineer, developer and researcher",
    bio:
      "Palak is an IT engineer, developer and researcher, and runs ToolNest. He uses the software he writes about in his own development work and says so when he has not. Every claim is checked against vendor documentation, changelogs and pricing pages before it goes live.",
    email: siteConfig.email,
    linkedin: "https://www.linkedin.com/in/palak-patel-031a52403/",
  },
];
