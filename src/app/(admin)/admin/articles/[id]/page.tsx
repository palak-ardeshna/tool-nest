import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { ArticleForm } from "@/components/admin/ArticleForm";

export const metadata = { title: "Edit article" };
export const dynamic = "force-dynamic";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [article, categories, authors] = await Promise.all([
    db.article.findUnique({
      where: { id },
      include: {
        category: { include: { parent: true } },
        author: true,
        tags: true,
        faqs: { orderBy: { position: "asc" } },
        alternatives: { orderBy: { position: "asc" } },
      },
    }),
    db.category.findMany({ orderBy: [{ parentId: "asc" }, { position: "asc" }], select: { id: true, name: true } }),
    db.author.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } }),
  ]);

  if (!article) notFound();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">Edit article</h1>
        {article.status === "PUBLISHED" ? (
          <Link
            href={`/articles/${article.slug}`}
            target="_blank"
            className="text-sm font-semibold text-accent hover:underline"
          >
            View live &nearr;
          </Link>
        ) : null}
      </div>
      <ArticleForm article={article} categories={categories} authors={authors} />
    </div>
  );
}
