import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchFilters } from "@/components/search/SearchFilters";
import { ArticleGrid } from "@/components/article/ArticleGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { SearchTracker } from "@/components/search/SearchTracker";
import { topLevelCategories } from "@/content";
import { searchArticles } from "@/lib/search";
import { buildMetadata } from "@/lib/seo";

type PageProps = { searchParams: Promise<{ q?: string; category?: string }> };

export async function generateMetadata({ searchParams }: PageProps) {
  const { q } = await searchParams;
  return buildMetadata({
    title: q ? `Search results for “${q}”` : "Search",
    description: "Search ToolNest guides, comparisons and tool reviews.",
    path: "/search",
    // Search result pages are useful to people, not to the index.
    noIndex: true,
  });
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q = "", category } = await searchParams;
  const query = q.trim();

  const [{ articles, total }, categories] = await Promise.all([
    searchArticles({ query, category }),
    topLevelCategories,
  ]);

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} className="mb-6" />

      <header className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Search</h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Find a tool, a comparison or a how-to guide.
        </p>
        <SearchBar defaultValue={query} className="mt-6" autoFocus={!query} />
      </header>

      <SearchFilters categories={categories} query={query} active={category} />

      <div className="mt-8">
        {!query ? (
          <EmptyState
            title="What are you looking for?"
            description="Try “ChatGPT vs Claude”, “automation”, or the name of a tool you are evaluating."
            actionLabel="Browse all articles"
            actionHref="/articles"
          />
        ) : (
          <>
            <p className="mb-6 text-sm text-muted" aria-live="polite">
              {total} {total === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
            </p>
            <ArticleGrid
              articles={articles}
              emptyTitle="No matches"
              emptyDescription="Nothing matched that search. Try a broader term, or browse by topic."
            />
          </>
        )}
      </div>

      {query ? <SearchTracker query={query} results={total} category={category} /> : null}
    </Container>
  );
}
