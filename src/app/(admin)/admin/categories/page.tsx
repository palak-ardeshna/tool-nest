import { db } from "@/lib/db";
import { CategoryManager } from "@/components/admin/CategoryManager";

export const metadata = { title: "Categories" };
export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const categories = await db.category.findMany({
    orderBy: [{ position: "asc" }, { name: "asc" }],
    include: { parent: { select: { name: true } }, _count: { select: { articles: true } } },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">Categories</h1>
        <p className="mt-1 text-sm text-muted">
          Top-level categories drive the main navigation. Give a category a parent to make it a
          sub-topic.
        </p>
      </div>
      <CategoryManager categories={categories} />
    </div>
  );
}
