import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleList } from "@/components/article/ArticleList";
import { Pagination } from "@/components/article/Pagination";
import { JsonLd } from "@/components/JsonLd";
import { pageCount, pageSlice } from "@/lib/pagination";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ n: string }> };

// Only the pages that exist are built. Anything else is a real 404 rather than
// not-found content served under HTTP 200, which is the soft 404 that got the
// previous `?page=` pagination removed.
export const dynamicParams = false;

export function generateStaticParams() {
  // Page 1 is /articles, so this segment starts at 2.
  return Array.from({ length: pageCount() - 1 }, (_, i) => ({ n: String(i + 2) }));
}

const parse = (raw: string) => (/^[2-9]\d*$/.test(raw) ? Number(raw) : null);

export async function generateMetadata({ params }: PageProps) {
  const { n } = await params;
  const page = parse(n);
  if (!page || page > pageCount()) return { title: "Page not found" };

  // Its own canonical, not page 1's: these are different lists of articles, and
  // pointing them all at /articles is what made page 2 indexable but duplicated.
  return buildMetadata({
    title: `All articles, page ${page}`,
    description: `Articles published on ToolNest, page ${page} of ${pageCount()}.`,
    path: `/articles/page/${page}`,
  });
}

export default async function ArchivePage({ params }: PageProps) {
  const { n } = await params;
  const page = parse(n);
  if (!page || page > pageCount()) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "All articles", href: "/articles" },
    { label: `Page ${page}` },
  ];

  return (
    <Container width="reading" className="py-10 lg:py-14">
      <Breadcrumbs items={crumbs} className="mb-6" />

      <header className="mb-10 max-w-2xl">
        <h1 className="text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          All articles
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Page {page} of {pageCount()}, newest first.
        </p>
      </header>

      <ArticleList articles={pageSlice(page)} />
      <Pagination page={page} total={pageCount()} />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
