import Script from "next/script";
import { Suspense } from "react";
import { gaId } from "@/config/site";
import { RouteTracker } from "@/components/analytics/RouteTracker";

/** Loads GA only when configured; the tracking hooks stay inert otherwise. */
export function Analytics() {
  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};
gtag('js',new Date());gtag('config','${gaId}',{send_page_view:false});`}
          </Script>
        </>
      ) : null}
      <Suspense fallback={null}>
        <RouteTracker />
      </Suspense>
    </>
  );
}
