"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sessionDurationSeconds, track } from "@/lib/analytics";

/** Fires page_view per navigation and session_duration when the tab goes away. */
export function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    track("page_view", { page_title: document.title });
  }, [pathname, searchParams]);

  useEffect(() => {
    const onHide = () => track("session_duration", { seconds: sessionDurationSeconds() });
    // pagehide is the reliable signal on mobile Safari; visibilitychange covers tab switches.
    window.addEventListener("pagehide", onHide);
    return () => window.removeEventListener("pagehide", onHide);
  }, []);

  return null;
}
