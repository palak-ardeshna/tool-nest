import { NextResponse, type NextRequest } from "next/server";

/**
 * The article URLs removed in the 2026-09-29 audit (see `article-audit.csv`)
 * that are still gone. A slug drops off this list when its topic is revived on
 * the same URL (a live article) or redirected to a same-topic article.
 *
 * These were indexed before they were deleted, so Googlebot keeps asking for
 * them. A 404 says "maybe this comes back" and the URLs sit in Search Console
 * as coverage errors for months; a 410 says the page is deliberately gone and
 * drops it from the index faster. They are not redirected, because redirecting
 * 17 dead URLs onto an unrelated live article is a soft 404 and reads as
 * manipulation. Where an audited topic was rewritten it kept its original slug
 * and is live, so it never reaches this list.
 */
const GONE = new Set([
  "async-by-default-what-changes",
  "backups-for-a-small-team",
  "choosing-a-background-job-queue",
  "invoicing-and-bookkeeping-for-small-teams",
  "keyword-research-without-a-subscription",
  "npm-pnpm-or-bun-choosing-a-package-manager",
  "scheduling-links-and-when-to-skip-them",
  "search-engines-beyond-google",
  "text-expanders-and-clipboard-managers",
  "web-analytics-without-google-analytics",
  "weekly-publishing-workflow",
  "which-tickets-to-give-an-ai-coding-agent",
  "windows-10-support-has-ended-what-each-option-costs",
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
