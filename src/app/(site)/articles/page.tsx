import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleGrid } from "@/components/article/ArticleGrid";
import { JsonLd } from "@/components/JsonLd";
import { allArticles } from "@/lib/articles";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All articles",
  description:
    "Every guide, comparison and review published on ToolNest — AI tools, software, productivity and developer tooling.",
  path: "/articles",
});

/**
 * The full archive on one static page.
 *
 * Pagination was removed rather than fixed. It created two problems for one
 * benefit nobody was getting at this size: page 2 canonicalised to page 1 while
 * staying indexable, and an out-of-range `?page=` rendered not-found content
 * under HTTP 200 — a soft 404 that `notFound()` cannot fix, because the status
 * is already committed by the time a streamed page can call it. Reinstate it
 * when the archive is long enough to need it, as a real `/articles/page/[n]`
 * segment that can 404 properly.
 */
export default function ArticlesPage() {
  // Every article, not a page of them: this is the archive the footer and the
  // breadcrumb promise, and the only page that links to the whole back
  // catalogue. `getLatestArticles()` defaults to nine, which quietly dropped
  // everything older off the site's own index.
  const articles = allArticles;
  const crumbs = [{ label: "Home", href: "/" }, { label: "All articles" }];

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs items={crumbs} className="mb-6" />

      <header className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">All articles</h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Everything we have published, newest first. {articles.length}{" "}
          {articles.length === 1 ? "article" : "articles"} and counting.
        </p>
      </header>

      <ArticleGrid articles={articles} priorityCount={3} />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
