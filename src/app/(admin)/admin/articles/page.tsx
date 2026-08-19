import Link from "next/link";
import { db } from "@/lib/db";
import { ArticleStatus } from "@prisma/client";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/format";
import { deleteArticleAction, toggleArticleStatusAction } from "@/app/actions/admin";
import { ConfirmSubmit } from "@/components/admin/ConfirmSubmit";

export const metadata = { title: "Articles" };
export const dynamic = "force-dynamic";

export default async function AdminArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; saved?: string }>;
}) {
  const { status, saved } = await searchParams;
  const filter =
    status === "PUBLISHED" || status === "DRAFT" ? (status as ArticleStatus) : undefined;

  const articles = await db.article.findMany({
    where: filter ? { status: filter } : undefined,
    orderBy: [{ updatedAt: "desc" }],
    include: { category: { select: { name: true } }, author: { select: { name: true } } },
  });

  const tabs = [
    { label: "All", href: "/admin/articles", active: !filter },
    { label: "Published", href: "/admin/articles?status=PUBLISHED", active: filter === "PUBLISHED" },
    { label: "Drafts", href: "/admin/articles?status=DRAFT", active: filter === "DRAFT" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">Articles</h1>
        <ButtonLink href="/admin/articles/new" size="sm">
          New article
        </ButtonLink>
      </div>

      {saved ? (
        <p role="status" className="rounded-lg bg-green-50 px-4 py-2.5 text-sm font-medium text-success">
          Article saved.
        </p>
      ) : null}

      <nav aria-label="Filter" className="flex gap-2">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={tab.active ? "page" : undefined}
            className={
              tab.active
                ? "rounded-full bg-accent-light px-3.5 py-1.5 text-sm font-semibold text-accent-dark"
                : "rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-muted hover:text-ink"
            }
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      {articles.length ? (
        <div className="overflow-x-auto rounded-card border border-line bg-white">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="border-b border-line text-left text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-5 py-3 font-bold">Title</th>
                <th className="px-5 py-3 font-bold">Category</th>
                <th className="px-5 py-3 font-bold">Author</th>
                <th className="px-5 py-3 font-bold">Status</th>
                <th className="px-5 py-3 font-bold">Published</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {articles.map((article) => (
                <tr key={article.id}>
                  <td className="px-5 py-3">
                    <Link
                      href={`/admin/articles/${article.id}`}
                      className="font-semibold text-ink hover:text-accent"
                    >
                      {article.title}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-muted">{article.category.name}</td>
                  <td className="px-5 py-3 text-muted">{article.author.name}</td>
                  <td className="px-5 py-3">
                    <Badge tone={article.status === "PUBLISHED" ? "success" : "neutral"}>
                      {article.status === "PUBLISHED" ? "Published" : "Draft"}
                    </Badge>
                  </td>
                  <td className="px-5 py-3 text-muted">{formatDate(article.publishedAt) || "—"}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-3">
                      <form action={toggleArticleStatusAction}>
                        <input type="hidden" name="id" value={article.id} />
                        <button type="submit" className="text-xs font-semibold text-accent hover:underline">
                          {article.status === "PUBLISHED" ? "Unpublish" : "Publish"}
                        </button>
                      </form>
                      <form action={deleteArticleAction}>
                        <input type="hidden" name="id" value={article.id} />
                        <ConfirmSubmit
                          message={`Delete “${article.title}”? This cannot be undone.`}
                          className="text-xs font-semibold text-rose-600 hover:underline"
                        >
                          Delete
                        </ConfirmSubmit>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rounded-card border border-dashed border-line bg-white px-5 py-12 text-center text-sm text-muted">
          No articles here yet.
        </p>
      )}
    </div>
  );
}
