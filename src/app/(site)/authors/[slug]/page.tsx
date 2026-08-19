import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleGrid } from "@/components/article/ArticleGrid";
import { AuthorCard } from "@/components/article/AuthorCard";
import { JsonLd } from "@/components/JsonLd";
import { authors, getAuthor } from "@/content";
import { getArticlesByAuthor } from "@/lib/articles";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return authors.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return { title: "Author not found" };

  return buildMetadata({
    title: `${author.name} — articles`,
    description: author.bio ?? `Articles written by ${author.name} for ToolNest.`,
    path: `/authors/${author.slug}`,
  });
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const articles = getArticlesByAuthor(author.slug);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: author.name },
  ];

  return (
    <Container className="py-10 lg:py-14">
      <PageHeader title={author.name} description={author.role} crumbs={crumbs} />

      <div className="mb-10 max-w-2xl">
        <AuthorCard author={author} heading="Profile" />
      </div>

      <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink">
        Articles by {author.name.split(" ")[0]}
      </h2>
      <ArticleGrid
        articles={articles}
        priorityCount={3}
        emptyTitle="Nothing published yet"
        emptyDescription="This author has no published articles right now."
      />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: author.name,
            url: absoluteUrl(`/authors/${author.slug}`),
            ...(author.role ? { jobTitle: author.role } : {}),
            ...(author.bio ? { description: author.bio } : {}),
          },
        ]}
      />
    </Container>
  );
}
