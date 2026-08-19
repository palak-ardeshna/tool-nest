import { db } from "@/lib/db";
import { AuthorManager } from "@/components/admin/AuthorManager";

export const metadata = { title: "Authors" };
export const dynamic = "force-dynamic";

export default async function AdminAuthorsPage() {
  const authors = await db.author.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { articles: true } } },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">Authors</h1>
        <p className="mt-1 text-sm text-muted">
          Bylines shown on articles and author pages. A real name, role and bio is what makes the
          publication credible.
        </p>
      </div>
      <AuthorManager authors={authors} />
    </div>
  );
}
