"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function SearchTracker({
  query,
  results,
  category,
}: {
  query: string;
  results: number;
  category?: string;
}) {
  useEffect(() => {
    track("search", { search_term: query, results, category: category ?? "(all)" });
  }, [query, results, category]);

  return null;
}
