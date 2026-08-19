import type { ArticleCardData } from "@/types";
import { ArticleCard } from "@/components/article/ArticleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Lead story plus a secondary column, the standard editorial hierarchy. */
export function FeaturedArticles({ articles }: { articles: ArticleCardData[] }) {
  if (!articles.length) return null;
  const [lead, ...rest] = articles;

  return (
    <section aria-label="Featured articles">
      <SectionHeading
        title="Featured this week"
        description="The stories our editors think are worth your time."
      />
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <ArticleCard article={lead} variant="feature" priority />
        {rest.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {rest.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
