import type { ResolvedArticle } from "@/types";
import { ArticleCard } from "@/components/article/ArticleCard";
import { EmptyState } from "@/components/ui/EmptyState";

export function ArticleGrid({
  articles,
  columns = 3,
  emptyTitle = "No articles yet",
  emptyDescription = "New guides and comparisons are published here every week.",
  priorityCount = 0,
}: {
  articles: ResolvedArticle[];
  columns?: 2 | 3;
  emptyTitle?: string;
  emptyDescription?: string;
  priorityCount?: number;
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
    <div
      className={
        columns === 2
          ? "grid gap-6 sm:grid-cols-2"
          : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {articles.map((article, index) => (
        <ArticleCard key={article.slug} article={article} priority={index < priorityCount} />
      ))}
    </div>
  );
}
