import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleList } from "@/components/article/ArticleList";
import { JsonLd } from "@/components/JsonLd";
import { Pagination } from "@/components/article/Pagination";
import { pageCount, pageSlice } from "@/lib/pagination";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All articles",
  description:
    "Every article published on ToolNest, newest first.",
  path: "/articles",
});

/**
 * Page 1 of the archive.
 *
 * Pagination is a real `/articles/page/[n]` segment, not a `?page=` parameter:
 * the pages that exist are built, `dynamicParams = false` makes anything else a
 * genuine 404 rather than not-found content under HTTP 200, and each page
 * carries its own canonical instead of pointing at page 1. Those two faults are
 * why the earlier query-string pagination was removed.
 */
export default function ArticlesPage() {
  const articles = pageSlice(1);
  const crumbs = [{ label: "Home", href: "/" }, { label: "All articles" }];

  return (
    <Container width="reading" className="py-10 lg:py-14">
      <Breadcrumbs items={crumbs} className="mb-6" />

      <header className="mb-10 max-w-2xl">
        <h1 className="text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">All articles</h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Everything published on ToolNest, newest first.
        </p>
      </header>

      <ArticleList articles={articles} />
      <Pagination page={1} total={pageCount()} />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
