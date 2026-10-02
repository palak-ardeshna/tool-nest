import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArticleList } from "@/components/article/ArticleList";
import { pageCount, pagePath, pageSlice } from "@/lib/pagination";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name}: ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

/**
 * A short introduction and a dated list. The site is small and written by one
 * person, so the homepage says so instead of wrapping a handful of articles in
 * featured, latest and topic grids built for a large magazine.
 *
 * The list stops at one page and hands off to the archive rather than growing a
 * `/page/[n]` tree of its own: those pages would hold the same articles as
 * `/articles/page/[n]` under different URLs, which is a duplicate set for no
 * reader benefit.
 */
export default function HomePage() {
  return (
    <Container width="reading" className="py-12 sm:py-16">
      <h1 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
        {siteConfig.tagline}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        I&apos;m <Link href="/about" className="text-ink underline underline-offset-2">Palak Patel</Link>,
        an IT engineer and developer. ToolNest covers the software I work with: what it costs, where
        it broke, and the sources behind every claim, with the date I checked them.
      </p>

      <p className="mt-12 pb-2 text-sm font-semibold text-ink">Articles</p>
      <ArticleList articles={pageSlice(1)} />

      {pageCount() > 1 ? (
        <p className="mt-10 border-t border-rule pt-6 text-sm">
          <Link href={pagePath(2)} className="text-ink underline underline-offset-4 hover:text-muted">
            Older articles →
          </Link>
        </p>
      ) : null}
    </Container>
  );
}
