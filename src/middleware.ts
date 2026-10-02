import { NextResponse, type NextRequest } from "next/server";

/**
 * The 34 article URLs removed in the 2026-09-29 audit (see `article-audit.csv`).
 *
 * These were indexed before they were deleted, so Googlebot keeps asking for
 * them. A 404 says "maybe this comes back" and the URLs sit in Search Console
 * as coverage errors for months; a 410 says the page is deliberately gone and
 * drops it from the index faster. They are not redirected, because redirecting
 * 34 dead URLs onto an unrelated live article is a soft 404 and reads as
 * manipulation. Where an audited topic was rewritten it kept its original slug
 * and is live, so it never reaches this list.
 */
const GONE = new Set([
  "ai-in-spreadsheets-what-it-actually-does",
  "ai-voice-tools-what-works",
  "async-by-default-what-changes",
  "auditing-small-team-software-spend",
  "authentication-build-or-buy",
  "automate-repetitive-work-without-code",
  "backups-for-a-small-team",
  "choosing-a-background-job-queue",
  "deploying-a-nextjs-app-four-routes",
  "email-clients-after-notion-mail",
  "error-tracking-for-small-teams",
  "figma-alternatives-worth-considering",
  "free-apis-worth-building-on",
  "how-to-choose-an-ai-image-generator",
  "invoicing-and-bookkeeping-for-small-teams",
  "keyword-research-without-a-subscription",
  "leaving-cursor-what-moves-and-what-doesnt",
  "note-taking-apps-for-thinking",
  "npm-pnpm-or-bun-choosing-a-package-manager",
  "object-storage-for-a-small-app-s3-r2-or-b2",
  "office-suites-after-the-2026-price-rises",
  "scheduling-links-and-when-to-skip-them",
  "search-engines-beyond-google",
  "task-managers-compared",
  "text-expanders-and-clipboard-managers",
  "turn-long-videos-into-short-clips-with-ai",
  "web-analytics-without-google-analytics",
  "website-blockers-that-actually-hold",
  "weekly-publishing-workflow",
  "which-browser-after-arc",
  "which-tickets-to-give-an-ai-coding-agent",
  "whiteboard-and-diagram-tools-worth-opening",
  "windows-10-support-has-ended-what-each-option-costs",
  "writing-for-search-when-most-searches-never-click",
]);

export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.slice("/articles/".length);
  if (!GONE.has(slug)) return NextResponse.next();

  return new NextResponse(
    "<!doctype html><title>Gone</title><p>This article was removed on 29 September 2026. The current articles are at <a href=\"/articles\">/articles</a>.",
    { status: 410, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}

export const config = { matcher: "/articles/:slug" };
