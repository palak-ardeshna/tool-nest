import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleGrid } from "@/components/article/ArticleGrid";
import { Pagination } from "@/components/ui/Pagination";
import { JsonLd } from "@/components/JsonLd";
import { countPublishedArticles, getLatestArticles } from "@/lib/articles";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const PER_PAGE = 12;

export const metadata = buildMetadata({
  title: "All articles",
  description:
    "Every guide, comparison and review published on ToolNest — AI tools, software, productivity and developer tooling.",
  path: "/articles",
});

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const current = Math.max(1, Number.parseInt(page ?? "1", 10) || 1);

  const [articles, total] = await Promise.all([
    getLatestArticles(PER_PAGE, (current - 1) * PER_PAGE),
    countPublishedArticles(),
  ]);

  const crumbs = [{ label: "Home", href: "/" }, { label: "All articles" }];

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs items={crumbs} className="mb-6" />

      <header className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">All articles</h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Everything we have published, newest first. {total} {total === 1 ? "article" : "articles"}{" "}
          and counting.
        </p>
      </header>

      <ArticleGrid articles={articles} priorityCount={3} />

      <Pagination
        basePath="/articles"
        currentPage={current}
        totalPages={Math.max(1, Math.ceil(total / PER_PAGE))}
      />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
