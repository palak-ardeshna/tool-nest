import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { ArticleStatus } from "@prisma/client";
import { getArticleBySlug, getMoreInSection, getRelatedArticles } from "@/lib/articles";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ArticleContent } from "@/components/article/ArticleContent";
import { ArticleSidebar, hasSidebarContent } from "@/components/article/ArticleSidebar";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { ProsCons } from "@/components/article/ProsCons";
import { Alternatives } from "@/components/article/Alternatives";
import { Faq } from "@/components/article/Faq";
import { AuthorCard } from "@/components/article/AuthorCard";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { MobileAd } from "@/components/ads/MobileAd";
import { ArticleTracker } from "@/components/analytics/ArticleTracker";
import { JsonLd } from "@/components/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { isoDate } from "@/lib/format";
import type { Crumb } from "@/types";

export const revalidate = 300;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const articles = await db.article.findMany({
    where: { status: ArticleStatus.PUBLISHED, publishedAt: { not: null } },
    select: { slug: true },
    orderBy: { publishedAt: "desc" },
    take: 100,
  });
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };

  return buildMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    path: `/articles/${article.slug}`,
    // Falls back to this article's generated share card, not the site-wide one.
    image: article.featuredImage ?? `/articles/${article.slug}/share-card.png`,
    type: "article",
    publishedTime: isoDate(article.publishedAt),
    modifiedTime: isoDate(article.contentUpdatedAt ?? article.updatedAt),
    authors: [article.author.name],
  });
}

function buildCrumbs(article: NonNullable<Awaited<ReturnType<typeof getArticleBySlug>>>): Crumb[] {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }];
  if (article.category.parent) {
    crumbs.push({
      label: article.category.parent.name,
      href: `/category/${article.category.parent.slug}`,
    });
  }
  crumbs.push({ label: article.category.name, href: `/category/${article.category.slug}` });
  crumbs.push({ label: article.title });
  return crumbs;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const [related, moreInSection] = await Promise.all([
    getRelatedArticles(article, 3),
    getMoreInSection(article, 4),
  ]);

  const crumbs = buildCrumbs(article);
  // The sidebar links the section the article sits in, not its leaf category.
  const section = article.category.parent ?? article.category;
  const showSidebar = hasSidebarContent(moreInSection);

  return (
    <>
      <Container className="py-8 lg:py-12">
        <Breadcrumbs items={crumbs} className="mb-6" />

        <div
          className={
            showSidebar
              ? "grid gap-12 lg:grid-cols-[minmax(0,720px)_300px]"
              : "mx-auto w-full max-w-[720px]"
          }
        >
          <article className="min-w-0">
            <ArticleHeader article={article} />

            <div className="mt-10 space-y-10">
              {article.quickAnswer ? <QuickAnswer text={article.quickAnswer} /> : null}

              <ArticleContent html={article.content} />

              <MobileAd />

              <ProsCons pros={article.pros} cons={article.cons} />
              <Alternatives items={article.alternatives} />
              <Faq items={article.faqs} />

              {article.tags.length ? (
                <section aria-label="Topics" className="flex flex-wrap gap-2 border-t border-line pt-8">
                  {article.tags.map((tag) => (
                    <Badge key={tag.id} tone="neutral" href={`/search?q=${encodeURIComponent(tag.name)}`}>
                      {tag.name}
                    </Badge>
                  ))}
                </section>
              ) : null}

              <AuthorCard author={article.author} />
            </div>
          </article>

          {showSidebar ? (
            <ArticleSidebar
              categoryName={section.name}
              categorySlug={section.slug}
              articles={moreInSection}
            />
          ) : null}
        </div>
      </Container>

      <Container className="pb-16">
        <RelatedArticles articles={related} fromSlug={article.slug} />
      </Container>

      <ArticleTracker
        slug={article.slug}
        category={article.category.slug}
        author={article.author.slug}
      />
      <JsonLd
        data={[articleSchema(article), breadcrumbSchema(crumbs), faqSchema(article.faqs)]}
      />
    </>
  );
}
