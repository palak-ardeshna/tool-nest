import Link from "next/link";
import type { ArticleCardData } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ArticleCover } from "@/components/article/ArticleCover";
import { formatDate, isoDate } from "@/lib/format";
import { cn } from "@/lib/cn";

type ArticleCardProps = {
  article: ArticleCardData;
  /** `feature` is the large lead card, `compact` drops the cover entirely. */
  variant?: "default" | "feature" | "compact";
  priority?: boolean;
  className?: string;
};

export function ArticleCard({
  article,
  variant = "default",
  priority = false,
  className,
}: ArticleCardProps) {
  const href = `/articles/${article.slug}`;
  const isFeature = variant === "feature";

  if (variant === "compact") {
    return (
      <article className={cn("group flex gap-4 py-4", className)}>
        <div className="min-w-0 flex-1">
          <Badge href={`/category/${article.category.slug}`} tone="neutral" className="mb-2">
            {article.category.name}
          </Badge>
          <h3 className="text-base font-bold leading-snug text-ink">
            <Link href={href} className="transition-colors group-hover:text-accent">
              {article.title}
            </Link>
          </h3>
          <p className="mt-1.5 text-xs text-muted">
            <time dateTime={isoDate(article.publishedAt)}>{formatDate(article.publishedAt)}</time> &middot;{" "}
            {article.readingMinutes} min read
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow hover:shadow-lift",
        className,
      )}
    >
      <Link href={href} tabIndex={-1} aria-hidden className="block">
        <ArticleCover
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          seed={article.slug}
          priority={priority}
          sizes={
            isFeature
              ? "(max-width: 1024px) 100vw, 640px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          }
        />
      </Link>

      <div className={cn("flex flex-1 flex-col p-5", isFeature && "sm:p-7")}>
        <Badge href={`/category/${article.category.slug}`} className="self-start">
          {article.category.name}
        </Badge>

        <h3
          className={cn(
            "mt-3 font-bold tracking-tight text-ink",
            isFeature ? "text-xl leading-snug sm:text-[28px] sm:leading-[1.2]" : "text-lg leading-snug",
          )}
        >
          <Link href={href} className="transition-colors group-hover:text-accent">
            {article.title}
          </Link>
        </h3>

        <p
          className={cn(
            "mt-2 text-sm leading-relaxed text-muted",
            isFeature ? "line-clamp-3 sm:text-base" : "line-clamp-2",
          )}
        >
          {article.excerpt}
        </p>

        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-xs text-muted">
          <span className="font-semibold text-ink">{article.author.name}</span>
          <span aria-hidden>&middot;</span>
          <time dateTime={isoDate(article.publishedAt)}>{formatDate(article.publishedAt)}</time>
          <span aria-hidden>&middot;</span>
          <span>{article.readingMinutes} min read</span>
        </p>
      </div>
    </article>
  );
}
