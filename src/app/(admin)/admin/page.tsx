import Link from "next/link";
import { db } from "@/lib/db";
import { ArticleStatus } from "@prisma/client";
import { ButtonLink } from "@/components/ui/Button";
import { formatDate } from "@/lib/format";

export const metadata = { title: "Dashboard" };
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [published, drafts, categories, authors, subscribers, missingSeo, recent] =
    await Promise.all([
      db.article.count({ where: { status: ArticleStatus.PUBLISHED } }),
      db.article.count({ where: { status: ArticleStatus.DRAFT } }),
      db.category.count(),
      db.author.count(),
      db.subscriber.count(),
      db.article.count({
        where: { status: ArticleStatus.PUBLISHED, OR: [{ seoDescription: null }, { seoTitle: null }] },
      }),
      db.article.findMany({
        orderBy: { updatedAt: "desc" },
        take: 6,
        select: { id: true, title: true, status: true, updatedAt: true },
      }),
    ]);

  const stats = [
    { label: "Published", value: published, href: "/admin/articles?status=PUBLISHED" },
    { label: "Drafts", value: drafts, href: "/admin/articles?status=DRAFT" },
    { label: "Categories", value: categories, href: "/admin/categories" },
    { label: "Authors", value: authors, href: "/admin/authors" },
    { label: "Subscribers", value: subscribers },
    { label: "Missing SEO fields", value: missingSeo, href: "/admin/seo" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-ink">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">Everything published on ToolNest, at a glance.</p>
        </div>
        <ButtonLink href="/admin/articles/new" size="sm">
          New article
        </ButtonLink>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const body = (
            <>
              <p className="text-sm font-medium text-muted">{stat.label}</p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight text-ink">{stat.value}</p>
            </>
          );
          return stat.href ? (
            <Link
              key={stat.label}
              href={stat.href}
              className="rounded-card border border-line bg-white p-5 transition-colors hover:border-accent/40"
            >
              {body}
            </Link>
          ) : (
            <div key={stat.label} className="rounded-card border border-line bg-white p-5">
              {body}
            </div>
          );
        })}
      </div>

      <section className="rounded-card border border-line bg-white">
        <h2 className="border-b border-line px-5 py-3.5 text-sm font-bold text-ink">
          Recently edited
        </h2>
        {recent.length ? (
          <ul className="divide-y divide-line">
            {recent.map((article) => (
              <li key={article.id} className="flex items-center justify-between gap-4 px-5 py-3">
                <Link
                  href={`/admin/articles/${article.id}`}
                  className="min-w-0 flex-1 truncate text-sm font-semibold text-ink hover:text-accent"
                >
                  {article.title}
                </Link>
                <span className="shrink-0 text-xs text-muted">
                  {article.status === "DRAFT" ? "Draft · " : ""}
                  {formatDate(article.updatedAt)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-5 py-8 text-center text-sm text-muted">
            No articles yet. <Link href="/admin/articles/new" className="text-accent underline">Write the first one.</Link>
          </p>
        )}
      </section>
    </div>
  );
}
