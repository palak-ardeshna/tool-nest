import { adsenseClient } from "@/config/site";

/**
 * ads.txt, generated from the configured publisher id.
 *
 * Google reads this to confirm who is authorised to sell inventory on the
 * domain, and it doubles as an AdSense site-verification method. Serving 404
 * while unconfigured is correct: an ads.txt naming no seller is worse than none.
 */
export function GET() {
  if (!adsenseClient) {
    return new Response("Not found", { status: 404 });
  }

  // The publisher id is stored as "ca-pub-…" but ads.txt expects "pub-…".
  const publisherId = adsenseClient.replace(/^ca-/, "");
  const body = `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
