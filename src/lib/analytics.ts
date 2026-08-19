/**
 * Analytics abstraction.
 *
 * Every measurable moment in the product goes through `track()`. Google
 * Analytics is the current sink, but nothing outside this file knows that, so a
 * warehouse/first-party sink can be added later by extending `dispatch()`.
 *
 * Attribution is captured once per session and attached to every event, which
 * is what makes the
 *   source -> campaign -> landing article -> session -> engagement
 * chain reconstructable. Ad revenue and traffic cost are joined downstream by
 * campaign id; no revenue figure is ever invented in the client.
 */

export type AnalyticsEvent =
  | "page_view"
  | "article_view"
  | "scroll_depth"
  | "session_duration"
  | "related_article_click"
  | "search"
  | "newsletter_signup";

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export type Attribution = {
  traffic_source: string;
  traffic_medium: string;
  campaign: string;
  campaign_content?: string;
  campaign_term?: string;
  landing_page: string;
  session_start: number;
};

const STORAGE_KEY = "tn_attribution";

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function classifyReferrer(referrer: string): { source: string; medium: string } {
  if (!referrer) return { source: "direct", medium: "none" };
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    if (host === window.location.hostname) return { source: "internal", medium: "internal" };
    const search = /google|bing|duckduckgo|yahoo|ecosia|brave/.test(host);
    return { source: host, medium: search ? "organic" : "referral" };
  } catch {
    return { source: "unknown", medium: "referral" };
  }
}

/** Reads the session's attribution, capturing it from the URL on first call. */
export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as Attribution;

    const params = new URLSearchParams(window.location.search);
    const referrer = classifyReferrer(document.referrer);
    const attribution: Attribution = {
      traffic_source: params.get("utm_source") ?? referrer.source,
      traffic_medium: params.get("utm_medium") ?? referrer.medium,
      campaign: params.get("utm_campaign") ?? "(none)",
      campaign_content: params.get("utm_content") ?? undefined,
      campaign_term: params.get("utm_term") ?? undefined,
      landing_page: window.location.pathname,
      session_start: Date.now(),
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    return attribution;
  } catch {
    // Private mode or blocked storage: measurement degrades, the site does not.
    return null;
  }
}

function dispatch(event: AnalyticsEvent, params: AnalyticsParams) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, params);
  }
}

export function track(event: AnalyticsEvent, params: AnalyticsParams = {}) {
  const attribution = getAttribution();
  dispatch(event, {
    ...attribution,
    ...params,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}

/** Seconds since this session's first tracked page. */
export function sessionDurationSeconds(): number {
  const attribution = getAttribution();
  if (!attribution) return 0;
  return Math.round((Date.now() - attribution.session_start) / 1000);
}
