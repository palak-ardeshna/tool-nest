import Link from "next/link";
import { pagePath } from "@/lib/pagination";

/**
 * Previous/next links for the archive.
 *
 * Rendered as a nav with rel="prev"/"next" so the relationship between pages is
 * explicit rather than inferred from the anchor text. Nothing renders when
 * there is only one page.
 */
export function Pagination({ page, total }: { page: number; total: number }) {
  if (total <= 1) return null;

  const prev = page > 1 ? pagePath(page - 1) : null;
  const next = page < total ? pagePath(page + 1) : null;

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-between border-t border-rule pt-6">
      {prev ? (
        <Link rel="prev" href={prev} className="text-sm text-ink underline underline-offset-4 hover:text-muted">
          ← Newer articles
        </Link>
      ) : (
        <span />
      )}

      <span className="text-sm text-muted">
        Page {page} of {total}
      </span>

      {next ? (
        <Link rel="next" href={next} className="text-sm text-ink underline underline-offset-4 hover:text-muted">
          Older articles →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
