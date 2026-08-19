import { adsenseClient } from "@/config/site";

/**
 * The AdSense loader, rendered only when a publisher id is configured.
 *
 * A plain `<script async src>` rather than `next/script`: React 19 hoists it
 * into the served <head>, so the tag is present in the HTML Google fetches.
 * `next/script` emits a preload hint and loads the file from its own runtime,
 * which works for serving ads but leaves no <script> tag for site verification
 * to find.
 */
export function AdSenseScript() {
  if (!adsenseClient) return null;

  return (
    <script
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
    />
  );
}
