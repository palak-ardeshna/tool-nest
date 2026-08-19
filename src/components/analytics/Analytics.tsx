import Script from "next/script";
import { Suspense } from "react";
import { gaId } from "@/config/site";
import { RouteTracker } from "@/components/analytics/RouteTracker";

/** EEA + UK + Switzerland, where consent is required before storage. */
const EEA_UK_CH = [
  "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV",
  "LI","LT","LU","MT","NL","NO","PL","PT","RO","SK","SI","ES","SE","IS","GB","CH",
];

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
          {/*
            Consent Mode defaults are pushed before config, so the queued
            commands are processed in that order regardless of when the GA
            library finishes loading. In the EEA/UK/CH nothing is stored until
            Google's consent message calls gtag('consent','update',...).
            Without this, analytics cookies would be set before the reader chose.
          */}
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500,region:${JSON.stringify(EEA_UK_CH)}});
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
