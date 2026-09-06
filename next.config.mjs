/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/**
 * How long a shared cache may serve a build's HTML.
 *
 * Next.js defaults prerendered pages to `s-maxage=31536000` — a year — which is
 * only safe on a host that purges its edge on every deploy. Everywhere else it
 * is the bug that serves a broken page: each build gives the CSS and JS new
 * content-hashed names and deletes the previous ones, so HTML held at the edge
 * from an older build asks for `/_next/static/css/<old-hash>.css`, gets a 404,
 * and renders with no styles at all. Only the visitors routed to a stale edge
 * node see it, which is why it looks intermittent rather than broken.
 *
 * `max-age=0` keeps browsers revalidating (cheap, ETags are already served), and
 * a short `s-maxage` bounds the window in which a deploy can strand anyone.
 */
const htmlCacheControl = "public, max-age=0, s-maxage=300, stale-while-revalidate=3600";

const nextConfig = {
  poweredByHeader: false,
  images: {
    // Modern formats first; Next falls back automatically.
    formats: ["image/avif", "image/webp"],
    // Uploaded media is served from /public/uploads, so no remote patterns are
    // needed. Add them here if the CMS ever points at an external CDN.
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Hashed build output is genuinely immutable and Next already marks it
        // so; naming it here keeps the page rule below from reading as if it
        // applied to assets too.
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/",
        headers: [{ key: "Cache-Control", value: htmlCacheControl }],
      },
      {
        source: "/:path((?!_next/static/).*)",
        headers: [{ key: "Cache-Control", value: htmlCacheControl }],
      },
    ];
  },
};

export default nextConfig;
