import Link from "next/link";
import { db } from "@/lib/db";
import { ArticleForm } from "@/components/admin/ArticleForm";

export const metadata = { title: "New article" };
export const dynamic = "force-dynamic";

export default async function NewArticlePage() {
  const [categories, authors] = await Promise.all([
    db.category.findMany({ orderBy: [{ parentId: "asc" }, { position: "asc" }], select: { id: true, name: true } }),
    db.author.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } }),
  ]);

  if (!categories.length || !authors.length) {
    return (
      <div className="rounded-card border border-line bg-white p-6">
        <h1 className="text-lg font-bold text-ink">Set up content types first</h1>
        <p className="mt-2 text-sm text-muted">
          An article needs a category and an author. Create at least one of each:{" "}
          <Link href="/admin/categories" className="text-accent underline">categories</Link>,{" "}
          <Link href="/admin/authors" className="text-accent underline">authors</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold tracking-tight text-ink">New article</h1>
      <ArticleForm categories={categories} authors={authors} />
    </div>
  );
}
