import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/home/Hero";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { LatestArticles } from "@/components/home/LatestArticles";
import { PopularTopics } from "@/components/home/PopularTopics";
import { DiscoverySection } from "@/components/home/DiscoverySection";
import { getFeaturedArticles, getLatestArticles } from "@/lib/articles";
import { allArticles, topLevelCategories } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featured = getFeaturedArticles(4);
  const categories = topLevelCategories;
  const total = allArticles.length;

  const featuredSlugs = new Set(featured.map((article) => article.slug));
  const latest = getLatestArticles(10)
    .filter((article) => !featuredSlugs.has(article.slug))
    .slice(0, 6);

  return (
    <>
      <Hero articleCount={total} />

      <Container className="space-y-16 py-14 sm:space-y-20 sm:py-16">
        <FeaturedArticles articles={featured} />
        <LatestArticles articles={latest} />
      </Container>

      <DiscoverySection categories={categories} articleCount={total} />

      <Container className="py-14 sm:py-16">
        <PopularTopics categories={categories} />
      </Container>
    </>
  );
}
