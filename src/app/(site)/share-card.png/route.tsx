import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

const size = { width: 1200, height: 630 };

/** The site-wide share card, used by every page without an image of its own. */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#4F46E5",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            T
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, color: "#111827" }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#111827", lineHeight: 1.1 }}>
            Discover better tools.
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#4F46E5", lineHeight: 1.1 }}>
            Work smarter.
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#6B7280" }}>
          Guides, comparisons and reviews for AI tools, software and productivity.
        </div>
      </div>
    ),
    size,
  );
}
