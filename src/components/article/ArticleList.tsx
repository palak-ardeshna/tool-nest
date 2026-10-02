import Link from "next/link";
import type { ResolvedArticle } from "@/types";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatDate, isoDate } from "@/lib/format";

/** The one way articles are listed: newest first, dated, no cards or covers. */
export function ArticleList({
  articles,
  emptyTitle = "No articles yet",
  emptyDescription = "Nothing is published here yet.",
}: {
  articles: ResolvedArticle[];
  emptyTitle?: string;
  emptyDescription?: string;
}) {
  if (!articles.length) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        actionLabel="Browse all articles"
        actionHref="/articles"
      />
    );
  }

  return (
    <ol className="divide-y divide-line border-t border-line">
      {articles.map((article) => (
        <li key={article.slug} className="py-5">
          <p className="text-sm text-muted">
            <time dateTime={isoDate(article.publishedAt)}>{formatDate(article.publishedAt)}</time>
            {/* An article rewritten on its original URL keeps its first publication
                date, so without this the listing dates a rewrite to the day the URL
                went live and the new work reads as old. The article page already
                says this; the archive is where someone scans. */}
            {article.contentUpdatedAtDate &&
            article.contentUpdatedAtDate.getTime() - article.publishedAtDate.getTime() > 864e5 ? (
              <>
                <span aria-hidden> · </span>
                <span className="whitespace-nowrap">
                  updated{" "}
                  <time dateTime={isoDate(article.contentUpdatedAtDate)}>
                    {formatDate(article.contentUpdatedAtDate)}
                  </time>
                </span>
              </>
            ) : null}
            <span aria-hidden> · </span>
            <Link href={`/category/${article.category.slug}`} className="hover:text-ink hover:underline">
              {article.category.name}
            </Link>
            <span aria-hidden> · </span>
            <span className="whitespace-nowrap">{article.readingMinutes} min read</span>
          </p>
          <h2 className="mt-1 font-serif text-xl font-semibold leading-snug text-ink">
            <Link href={`/articles/${article.slug}`} className="hover:underline">
              {article.title}
            </Link>
          </h2>
          <p className="mt-1.5 leading-relaxed text-muted">{article.excerpt}</p>
        </li>
      ))}
    </ol>
  );
}
