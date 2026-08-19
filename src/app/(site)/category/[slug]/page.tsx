import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleGrid } from "@/components/article/ArticleGrid";
import { Pagination } from "@/components/ui/Pagination";
import { JsonLd } from "@/components/JsonLd";
import { countArticlesByCategory, getArticlesByCategory } from "@/lib/articles";
import { categoryScopeIds, getAllCategories, getCategoryBySlug } from "@/lib/categories";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import type { Crumb } from "@/types";

export const revalidate = 300;

const PER_PAGE = 12;

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return { title: "Category not found" };

  return buildMetadata({
    title: `${category.name} articles`,
    description:
      category.description ??
      `Guides, comparisons and reviews about ${category.name.toLowerCase()} on ToolNest.`,
    path: `/category/${category.slug}`,
  });
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const [{ slug }, { page }] = await Promise.all([params, searchParams]);
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const current = Math.max(1, Number.parseInt(page ?? "1", 10) || 1);
  const scope = categoryScopeIds(category);

  const [articles, total] = await Promise.all([
    getArticlesByCategory(scope, PER_PAGE, (current - 1) * PER_PAGE),
    countArticlesByCategory(scope),
  ]);

  const crumbs: Crumb[] = [{ label: "Home", href: "/" }];
  if (category.parent) {
    crumbs.push({ label: category.parent.name, href: `/category/${category.parent.slug}` });
  }
  crumbs.push({ label: category.name });

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs items={crumbs} className="mb-6" />

      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {category.name}
        </h1>
        {category.description ? (
          <p className="mt-3 text-base leading-relaxed text-muted">{category.description}</p>
        ) : null}
        <p className="mt-2 text-sm text-muted">
          {total} {total === 1 ? "article" : "articles"}
        </p>
      </header>

      {category.children.length ? (
        <nav aria-label="Sub-categories" className="mb-10 flex flex-wrap gap-2">
          {category.children.map((child) => (
            <Link
              key={child.id}
              href={`/category/${child.slug}`}
              className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:bg-accent-light hover:text-accent-dark"
            >
              {child.name}
            </Link>
          ))}
        </nav>
      ) : null}

      <ArticleGrid
        articles={articles}
        priorityCount={3}
        emptyTitle={`No ${category.name} articles yet`}
        emptyDescription="We publish here as soon as the testing is done. In the meantime, browse the rest of the archive."
      />

      <Pagination
        basePath={`/category/${category.slug}`}
        currentPage={current}
        totalPages={Math.max(1, Math.ceil(total / PER_PAGE))}
      />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
