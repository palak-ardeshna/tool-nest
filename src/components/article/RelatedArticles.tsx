import type { ResolvedArticle } from "@/types";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Badge } from "@/components/ui/Badge";
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
    <section aria-labelledby="related" className="border-t border-line pt-8">
      <h2 id="related" className="text-2xl font-bold tracking-tight text-ink">
        Keep reading
      </h2>
      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <li
            key={article.slug}
            className="group rounded-card border border-line bg-white p-5 transition-shadow hover:shadow-lift"
          >
            <Badge href={`/category/${article.category.slug}`} tone="neutral">
              {article.category.name}
            </Badge>
            <h3 className="mt-2.5 text-base font-bold leading-snug text-ink">
              <TrackedLink
                href={`/articles/${article.slug}`}
                event="related_article_click"
                params={{ from_article: fromSlug, to_article: article.slug }}
                className="transition-colors group-hover:text-accent"
              >
                {article.title}
              </TrackedLink>
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{article.excerpt}</p>
            <p className="mt-3 text-xs text-muted">
              <time dateTime={isoDate(article.publishedAt)}>{formatDate(article.publishedAt)}</time>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
