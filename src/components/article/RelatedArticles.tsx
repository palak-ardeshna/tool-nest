import type { ResolvedArticle } from "@/types";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { formatDate, isoDate } from "@/lib/format";

export function RelatedArticles({
  articles,
  fromSlug,
}: {
  articles: ResolvedArticle[];
  fromSlug: string;
}) {
  if (!articles.length) return null;

  return (
    <section aria-labelledby="related" className="mt-14 border-t border-line pt-8 lg:mt-0 lg:border-t-0 lg:pt-0">
      <h2 id="related" className="text-sm font-semibold text-ink">
        More articles
      </h2>
      <ul className="mt-2 divide-y divide-line">
        {articles.map((article) => (
          <li key={article.slug} className="py-4">
            <TrackedLink
              href={`/articles/${article.slug}`}
              event="related_article_click"
              params={{ from_article: fromSlug, to_article: article.slug }}
              className="font-serif text-lg font-semibold lg:text-base leading-snug text-ink hover:underline"
            >
              {article.title}
            </TrackedLink>
            <p className="mt-1 text-sm text-muted">
              <time dateTime={isoDate(article.publishedAt)}>{formatDate(article.publishedAt)}</time>
              <span aria-hidden> · </span>
              {article.category.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
