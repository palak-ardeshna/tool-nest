import Link from "next/link";
import { formatDate, isoDate } from "@/lib/format";
import { cn } from "@/lib/cn";

type ArticleMetaProps = {
  author: { name: string; slug: string };
  publishedAt: Date | string | null;
  updatedAt?: Date | string | null;
  readingMinutes?: number;
  className?: string;
};

export function ArticleMeta({
  author,
  publishedAt,
  updatedAt,
  readingMinutes,
  className,
}: ArticleMetaProps) {
  // Only surface an update when it is meaningfully later than publication.
  const showUpdated =
    updatedAt && publishedAt && new Date(updatedAt).getTime() - new Date(publishedAt).getTime() > 864e5;

  return (
    <div className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted", className)}>
      <span>
        By{" "}
        <Link href={`/authors/${author.slug}`} className="font-semibold text-ink hover:text-accent">
          {author.name}
        </Link>
      </span>
      {publishedAt ? (
        <>
          <span aria-hidden>&middot;</span>
          <time dateTime={isoDate(publishedAt)}>{formatDate(publishedAt)}</time>
        </>
      ) : null}
      {showUpdated ? (
        <>
          <span aria-hidden>&middot;</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-success">
            Updated <time dateTime={isoDate(updatedAt)}>{formatDate(updatedAt)}</time>
          </span>
        </>
      ) : null}
      {readingMinutes ? (
        <>
          <span aria-hidden>&middot;</span>
          <span>{readingMinutes} min read</span>
        </>
      ) : null}
    </div>
  );
}
