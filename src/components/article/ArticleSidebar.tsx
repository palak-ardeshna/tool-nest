import Link from "next/link";
import type { ResolvedArticle } from "@/types";
import { ArticleCard } from "@/components/article/ArticleCard";
import { AdSlot } from "@/components/ads/AdSlot";
import { adsenseClient } from "@/config/site";

/**
 * True when the sidebar would render something. A young category has no
 * related reads and an unconfigured site has no ad, and an empty 300px column
 * beside the article looks broken.
 */
export function hasSidebarContent(articles: ResolvedArticle[]): boolean {
  return articles.length > 0 || Boolean(adsenseClient);
}

export function ArticleSidebar({
  categoryName,
  categorySlug,
  articles,
}: {
  categoryName: string;
  categorySlug: string;
  articles: ResolvedArticle[];
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
              <ArticleCard key={article.slug} article={article} variant="compact" />
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

      <AdSlot
        slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR}
        format="rectangle"
        minHeight={250}
        className="hidden lg:flex"
      />
    </aside>
  );
}
