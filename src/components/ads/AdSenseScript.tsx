import Script from "next/script";
import { adsenseClient } from "@/config/site";

/** Loads the AdSense library once per page, and only when configured. */
export function AdSenseScript() {
  if (!adsenseClient) return null;

  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
    />
  );
}
