import { siteConfig } from "@/config/site";
import type { Author } from "@/content/types";

/**
 * Bylines. Every article references one of these by slug.
 *
 * ToolNest publishes under a single editorial byline rather than invented
 * personal names. Articles are researched from vendor documentation, changelogs
 * and public reporting, drafted with AI assistance and reviewed before
 * publication — see /about. Claiming a named individual tested something we did
 * not test would be misrepresentation, so we do not.
 */
export const authors: Author[] = [
  {
    slug: "toolnest-editorial",
    name: "ToolNest Editorial",
    role: "Editorial team",
    bio:
      "ToolNest's editorial byline. Our articles summarise and compare software using vendor documentation, changelogs, pricing pages and published reporting, and are drafted with AI assistance under human review. Where we have not used a tool ourselves, we say so rather than implying otherwise.",
    email: siteConfig.email,
  },
];
