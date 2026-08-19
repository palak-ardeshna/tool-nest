import { ImageResponse } from "next/og";
import { getArticleBySlug } from "@/lib/articles";
import { coverStyle } from "@/lib/cover-art";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/format";

const size = { width: 1200, height: 630 };

/**
 * Per-article share card, using the same palette as the article's on-page cover
 * art so a shared link looks like the card that linked to it.
 *
 * A route handler rather than the `opengraph-image` file convention, because
 * that convention fingerprints its own URL — fine when Next injects the tag,
 * unusable when metadata is built centrally in `lib/seo.ts`.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  const { palette } = coverStyle(slug);

  const title = article?.title ?? siteConfig.name;
  const category = article?.category.name ?? "ToolNest";
  const byline = article
    ? `${article.author.name} · ${formatDate(article.publishedAt)}`
    : siteConfig.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.to} 100%)`,
          padding: 72,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Soft geometry echoing the on-page cover art. */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 260,
            background: palette.mark,
            opacity: 0.28,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: 210,
            background: palette.mark,
            opacity: 0.18,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#4F46E5",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            T
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#111827" }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: palette.label,
              marginBottom: 18,
            }}
          >
            {category}
          </div>
          <div
            style={{
              fontSize: title.length > 70 ? 52 : 62,
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.12,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#4B5563" }}>{byline}</div>
      </div>
    ),
    size,
  );
}
