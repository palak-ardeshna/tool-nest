import Link from "next/link";
import type { ResolvedArticle } from "@/types";
import { ArticleMeta } from "@/components/article/ArticleMeta";

export function ArticleHeader({ article }: { article: ResolvedArticle }) {
  return (
    <header>
      <Link
        href={`/category/${article.category.slug}`}
        className="text-sm text-accent hover:underline"
      >
        {article.category.name}
      </Link>

      <h1 className="mt-2 text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-[40px]">
        {article.title}
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>

      <ArticleMeta
        className="mt-5 border-b border-line pb-5"
        author={article.author}
        publishedAt={article.publishedAt}
        updatedAt={article.contentUpdatedAt}
        readingMinutes={article.readingMinutes}
      />
    </header>
  );
}
