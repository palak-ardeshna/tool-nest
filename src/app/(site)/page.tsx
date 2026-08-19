import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/home/Hero";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { LatestArticles } from "@/components/home/LatestArticles";
import { PopularTopics } from "@/components/home/PopularTopics";
import { NewsletterCta } from "@/components/home/NewsletterCta";
import { countPublishedArticles, getFeaturedArticles, getLatestArticles } from "@/lib/articles";
import { getCategoryTree } from "@/lib/categories";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const revalidate = 300;

export const metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default async function HomePage() {
  const [featured, latest, categories, total] = await Promise.all([
    getFeaturedArticles(4),
    getLatestArticles(10),
    getCategoryTree(),
    countPublishedArticles(),
  ]);

  const featuredIds = new Set(featured.map((article) => article.id));
  const latestWithoutFeatured = latest.filter((article) => !featuredIds.has(article.id)).slice(0, 6);

  return (
    <>
      <Hero articleCount={total} />

      <Container className="space-y-16 py-14 sm:space-y-20 sm:py-16">
        <FeaturedArticles articles={featured} />
        <LatestArticles articles={latestWithoutFeatured} />
      </Container>

      <NewsletterCta />

      <Container className="py-14 sm:py-16">
        <PopularTopics categories={categories} />
      </Container>
    </>
  );
}
