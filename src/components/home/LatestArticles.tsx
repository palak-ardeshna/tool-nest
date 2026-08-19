import type { ResolvedArticle } from "@/types";
import { ArticleGrid } from "@/components/article/ArticleGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function LatestArticles({ articles }: { articles: ResolvedArticle[] }) {
  return (
    <section aria-label="Latest articles">
      <SectionHeading
        title="Latest articles"
        description="Fresh guides, tests and comparisons."
        action={
          <ButtonLink href="/articles" variant="secondary" size="sm">
            View all
          </ButtonLink>
        }
      />
      <ArticleGrid articles={articles} />
    </section>
  );
}
