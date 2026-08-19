import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleGrid } from "@/components/article/ArticleGrid";
import { JsonLd } from "@/components/JsonLd";
import { getArticlesInSection } from "@/lib/articles";
import { getCategory, resolvedCategories } from "@/content";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import type { Crumb } from "@/types";

type PageProps = { params: Promise<{ slug: string }> };

// Every slug is known at build time, so anything else is a genuine 404 rather
// than a page to render on demand. Without this, unknown URLs return HTTP 200
// with not-found content — a soft 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return resolvedCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };

  return buildMetadata({
    title: `${category.name} articles`,
    description: category.description,
    path: `/category/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  // Sections list everything they contain. No section is near a length where
  // pagination would help, and hiding articles behind a page parameter would
  // make the route dynamic — which turns an unknown slug into a soft 404.
  const articles = getArticlesInSection(category);
  const total = articles.length;

  const crumbs: Crumb[] = [{ label: "Home", href: "/" }];
  if (category.parentCategory) {
    crumbs.push({ label: category.parentCategory.name, href: `/category/${category.parentCategory.slug}` });
  }
  crumbs.push({ label: category.name });

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs items={crumbs} className="mb-6" />

      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {category.name}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">{category.description}</p>
        <p className="mt-2 text-sm text-muted">
          {total} {total === 1 ? "article" : "articles"}
        </p>
      </header>

      {category.children.length ? (
        <nav aria-label="Sub-categories" className="mb-10 flex flex-wrap gap-2">
          {category.children.map((child) => (
            <Link
              key={child.slug}
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

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
