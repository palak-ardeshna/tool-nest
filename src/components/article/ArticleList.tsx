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
