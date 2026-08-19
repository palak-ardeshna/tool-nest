"use client";

import Link from "next/link";
import { track, type AnalyticsEvent } from "@/lib/analytics";

/** A Link that reports an analytics event on click. */
export function TrackedLink({
  event,
  params,
  ...props
}: React.ComponentProps<typeof Link> & {
  event: AnalyticsEvent;
  params?: Record<string, string | number>;
}) {
  return <Link {...props} onClick={() => track(event, params)} />;
}
