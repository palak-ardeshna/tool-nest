import type { Author, HumanReview } from "@/types";
import { formatDate } from "@/lib/format";

/**
 * Palak's sign-off, on the page.
 *
 * `humanReview.experience` appears word for word inside `content` — the content
 * rule requires it — and that is where the reader meets the first-hand account.
 * This block used to re-print the same paragraph as a blockquote, so every
 * article showed its experience twice on the page; a crawler read that as a
 * repeated intro, and AdSense marked the site "Low value content" (Oct 2026).
 *
 * So this is now a trust strip, not a second copy: it names who ran and checked
 * the work and when, and points back to the first-hand account in the article
 * above. The experience paragraph itself is printed once, in the body.
 */
export function HandsOn({ review, author }: { review?: HumanReview; author: Author }) {
  if (!review) return null;

  return (
    <section
      aria-labelledby="hands-on"
      className="rounded-lg border border-line bg-surface p-5 sm:p-6"
    >
      <h2 id="hands-on" className="font-serif text-xl font-semibold tracking-tight text-ink">
        What I did myself
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        The first-hand account in this article is from my own use of the tool,
        checked before publishing.
      </p>
      <p className="mt-3 text-sm text-muted">
        {author.name}
        {author.role ? <span>, {author.role}</span> : null}
        <span aria-hidden> · </span>
        <span>facts confirmed {formatDate(review.reviewedAt)}</span>
      </p>
    </section>
  );
}
