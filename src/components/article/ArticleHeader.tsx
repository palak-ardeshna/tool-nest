import type { ResolvedArticle } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ArticleMeta } from "@/components/article/ArticleMeta";

export function ArticleHeader({ article }: { article: ResolvedArticle }) {
  return (
    <header>
      <Badge href={`/category/${article.category.slug}`}>{article.category.name}</Badge>

      <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[42px] sm:leading-[1.12]">
        {article.title}
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>

      <ArticleMeta
        className="mt-5"
        author={article.author}
        publishedAt={article.publishedAt}
        updatedAt={article.contentUpdatedAt}
        readingMinutes={article.readingMinutes}
      />
    </header>
  );
}
