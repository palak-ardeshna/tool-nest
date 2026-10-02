import type { Author, HumanReview } from "@/types";
import { formatDate } from "@/lib/format";

/**
 * Palak's sign-off, on the page.
 *
 * `humanReview.experience` already appears word for word inside `content` — the
 * content rule requires it — but buried mid-article it reads as one more
 * paragraph. The 2026-09-28 AdSense report said the site showed no first-hand
 * experience, so the part that *is* first-hand gets named, attributed and
 * dated where a reader or a reviewer scanning the page will land on it.
 *
 * The text is not repeated here; this block quotes it and says who checked it
 * and when, which is the half that was invisible.
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
      <blockquote className="mt-3 text-base leading-relaxed text-ink">
        {review.experience}
      </blockquote>
      <p className="mt-3 text-sm text-muted">
        {author.name}
        {author.role ? <span>, {author.role}</span> : null}
        <span aria-hidden> · </span>
        <span>facts confirmed {formatDate(review.reviewedAt)}</span>
      </p>
    </section>
  );
}
