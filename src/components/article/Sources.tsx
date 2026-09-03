import type { Source } from "@/types";
import { formatDate } from "@/lib/format";

/**
 * The reference list. Every article that makes a factual claim about pricing,
 * limits or features cites where the claim came from.
 *
 * Links are `nofollow` — these are citations, not endorsements — but they open
 * normally, because a citation a reader cannot follow is not a citation.
 */
export function Sources({ items }: { items: Source[] }) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="sources">
      <h2 id="sources" className="text-2xl font-bold tracking-tight text-ink">
        Sources
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        Everything factual in this article traces back to one of these. Vendors change pricing and
        limits without changing the URL, so each entry records the date we last read it.
      </p>
      <ol className="mt-4 divide-y divide-line rounded-card border border-line bg-white">
        {items.map((item) => (
          <li key={item.url} className="p-4 sm:p-5">
            <a
              href={item.url}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="font-semibold text-accent hover:text-accent-dark hover:underline"
            >
              {item.title}
            </a>
            <p className="mt-1 text-sm text-muted">
              {item.publisher}
              <span aria-hidden> · </span>
              <span>checked {formatDate(item.checkedAt)}</span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
