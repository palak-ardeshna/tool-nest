"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 100] as const;

/** Reports article_view once and scroll_depth at each quartile of the page. */
export function ArticleTracker({
  slug,
  category,
  author,
}: {
  slug: string;
  category: string;
  author: string;
}) {
  const reported = useRef<Set<number>>(new Set());

  useEffect(() => {
    reported.current = new Set();
    track("article_view", { article_slug: slug, article_category: category, article_author: author });
  }, [slug, category, author]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
        for (const threshold of THRESHOLDS) {
          if (percent >= threshold && !reported.current.has(threshold)) {
            reported.current.add(threshold);
            track("scroll_depth", { percent: threshold, article_slug: slug });
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [slug]);

  return null;
}
