import { notFound } from "next/navigation";
import { allArticles, getRelatedArticles } from "@/lib/articles";
import { getArticle } from "@/content";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ArticleContent } from "@/components/article/ArticleContent";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { ProsCons } from "@/components/article/ProsCons";
import { Alternatives } from "@/components/article/Alternatives";
import { Faq } from "@/components/article/Faq";
import { Sources } from "@/components/article/Sources";
import { AuthorCard } from "@/components/article/AuthorCard";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { AdSlot } from "@/components/ads/AdSlot";
import { ArticleTracker } from "@/components/analytics/ArticleTracker";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { isoDate } from "@/lib/format";
import type { Crumb, ResolvedArticle } from "@/types";

type PageProps = { params: Promise<{ slug: string }> };

// Every slug is known at build time, so anything else is a genuine 404 rather
// than a page to render on demand. Without this, unknown URLs return HTTP 200
// with not-found content — a soft 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };

  return buildMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    path: `/articles/${article.slug}`,
    image: article.image,
    type: "article",
    publishedTime: isoDate(article.publishedAtDate),
    modifiedTime: isoDate(article.contentUpdatedAtDate ?? article.publishedAtDate),
    authors: [article.author.name],
    noIndex: article.noIndex,
  });
}

function buildCrumbs(article: ResolvedArticle): Crumb[] {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }];
  const parent = article.category.parentCategory;
  if (parent) crumbs.push({ label: parent.name, href: `/category/${parent.slug}` });
  crumbs.push({ label: article.category.name, href: `/category/${article.category.slug}` });
  crumbs.push({ label: article.title });
  return crumbs;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);
  const crumbs = buildCrumbs(article);

  return (
    <>
      <Container width="reading" className="py-8 lg:py-12">
        <Breadcrumbs items={crumbs} className="mb-6" />

        <article>
          <ArticleHeader article={article} />

          <div className="mt-10 space-y-10">
            {article.quickAnswer ? <QuickAnswer text={article.quickAnswer} /> : null}

            <ArticleContent html={article.content} />

            <AdSlot slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_MOBILE} minHeight={250} />

            <ProsCons pros={article.pros ?? []} cons={article.cons ?? []} />
            <Alternatives items={article.alternatives ?? []} />
            <Faq items={article.faqs ?? []} />
            <Sources items={article.sources ?? []} />
            <AuthorCard author={article.author} />
          </div>
        </article>

        <RelatedArticles articles={related} fromSlug={article.slug} />
      </Container>

      <ArticleTracker
        slug={article.slug}
        category={article.category.slug}
        author={article.author.slug}
      />
      <JsonLd
        data={[articleSchema(article), breadcrumbSchema(crumbs), faqSchema(article.faqs ?? [])]}
      />
    </>
  );
}
