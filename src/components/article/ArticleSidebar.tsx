import Link from "next/link";
import type { ArticleCardData } from "@/types";
import { ArticleCard } from "@/components/article/ArticleCard";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { adsenseClient } from "@/config/site";

/**
 * True when the sidebar would render something. A young category has no
 * related reads and an unconfigured site has no ad, and an empty 300px column
 * beside the article looks broken.
 */
export function hasSidebarContent(articles: ArticleCardData[]): boolean {
  return articles.length > 0 || Boolean(adsenseClient);
}

export function ArticleSidebar({
  categoryName,
  categorySlug,
  articles,
}: {
  categoryName: string;
  categorySlug: string;
  articles: ArticleCardData[];
}) {
  return (
    <aside className="lg:sticky lg:top-24">
      {articles.length ? (
        <section aria-labelledby="more-in-category" className="rounded-card border border-line bg-white p-5">
          <h2 id="more-in-category" className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
            More in {categoryName}
          </h2>
          <div className="divide-y divide-line">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="compact" />
            ))}
          </div>
          <Link
            href={`/category/${categorySlug}`}
            className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
          >
            See all {categoryName} &rarr;
          </Link>
        </section>
      ) : null}

      <SidebarAd />
    </aside>
  );
}
