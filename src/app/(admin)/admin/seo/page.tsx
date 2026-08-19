import Link from "next/link";
import { db } from "@/lib/db";
import { ArticleStatus } from "@prisma/client";
import { AdminPanel } from "@/components/admin/FormControls";
import { siteConfig, adsenseClient, gaId } from "@/config/site";

export const metadata = { title: "SEO" };
export const dynamic = "force-dynamic";

const TITLE_MAX = 60;
const DESCRIPTION_MIN = 120;
const DESCRIPTION_MAX = 160;

export default async function AdminSeoPage() {
  const articles = await db.article.findMany({
    where: { status: ArticleStatus.PUBLISHED },
    orderBy: { publishedAt: "desc" },
    select: { id: true, title: true, slug: true, seoTitle: true, seoDescription: true, excerpt: true },
  });

  const issues = articles.flatMap((article) => {
    const title = article.seoTitle ?? article.title;
    const description = article.seoDescription ?? article.excerpt;
    const problems: string[] = [];

    if (title.length > TITLE_MAX) problems.push(`Title is ${title.length} chars (max ${TITLE_MAX})`);
    if (description.length < DESCRIPTION_MIN)
      problems.push(`Description is ${description.length} chars (aim for ${DESCRIPTION_MIN}–${DESCRIPTION_MAX})`);
    if (description.length > DESCRIPTION_MAX)
      problems.push(`Description is ${description.length} chars (max ${DESCRIPTION_MAX})`);
    if (!article.seoDescription) problems.push("No explicit meta description (falling back to excerpt)");

    return problems.length ? [{ ...article, problems }] : [];
  });

  const config = [
    { label: "Site URL", value: siteConfig.url, ok: !siteConfig.url.includes("localhost") },
    { label: "Google Analytics", value: gaId || "not configured", ok: Boolean(gaId) },
    {
      label: "Search Console verification",
      value: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "not configured",
      ok: Boolean(process.env.NEXT_PUBLIC_GSC_VERIFICATION),
    },
    { label: "AdSense client", value: adsenseClient || "not configured", ok: Boolean(adsenseClient) },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">SEO</h1>
        <p className="mt-1 text-sm text-muted">
          Technical configuration and per-article metadata health.
        </p>
      </div>

      <AdminPanel title="Configuration" description="Set through environment variables.">
        <ul className="divide-y divide-line text-sm">
          {config.map((row) => (
            <li key={row.label} className="flex flex-wrap items-center justify-between gap-2 py-2.5">
              <span className="font-semibold text-ink">{row.label}</span>
              <span className={row.ok ? "text-success" : "text-muted"}>{row.value}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex flex-wrap gap-4 text-sm">
          <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="text-accent hover:underline">
            View sitemap.xml
          </a>
          <a href="/robots.txt" target="_blank" rel="noreferrer" className="text-accent hover:underline">
            View robots.txt
          </a>
        </p>
      </AdminPanel>

      <AdminPanel
        title={`Metadata issues (${issues.length})`}
        description="Length guidance only — none of these block publishing."
      >
        {issues.length ? (
          <ul className="divide-y divide-line">
            {issues.map((article) => (
              <li key={article.id} className="py-3">
                <Link
                  href={`/admin/articles/${article.id}`}
                  className="text-sm font-semibold text-ink hover:text-accent"
                >
                  {article.title}
                </Link>
                <ul className="mt-1 space-y-0.5">
                  {article.problems.map((problem) => (
                    <li key={problem} className="text-xs text-muted">
                      · {problem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-6 text-center text-sm text-success">
            Every published article has healthy metadata.
          </p>
        )}
      </AdminPanel>
    </div>
  );
}
