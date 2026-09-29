import type { Article } from "@/content/types";



import { websiteBlockersThatActuallyHold } from "@/content/articles/website-blockers-that-actually-hold";
import { deployingNextjsToHostingerFromGithubActions } from "@/content/articles/deploying-nextjs-to-hostinger-from-github-actions";
import { geminiFlashPricingDoublesInJanuary } from "@/content/articles/gemini-flash-pricing-doubles-in-january";
import { nextJs16CachingDefaultsThatBite } from "@/content/articles/next-js-16-caching-defaults-that-bite";
import { claudeCodeVsCursorWhatASoloDeveloperPays } from "@/content/articles/claude-code-vs-cursor-what-a-solo-developer-pays";

/** Every article in the publication. Add a file above, then a line here. */
export const articles: Article[] = [
  nextJs16CachingDefaultsThatBite,
  claudeCodeVsCursorWhatASoloDeveloperPays,
  deployingNextjsToHostingerFromGithubActions,
  geminiFlashPricingDoublesInJanuary,
  websiteBlockersThatActuallyHold,
];
