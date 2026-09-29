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
              background: "#1F4D46",
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
          <div style={{ fontSize: 34, fontWeight: 800, color: "#1C1C1A" }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#1C1C1A", lineHeight: 1.1 }}>
            Notes on the developer
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#1F4D46", lineHeight: 1.1 }}>
            and AI tools I use.
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#6B7280" }}>
          Notes on the developer and AI tools Palak Patel uses.
        </div>
      </div>
    ),
    size,
  );
}
