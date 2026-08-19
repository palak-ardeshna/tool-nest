import { NextResponse } from "next/server";
import { searchArticles } from "@/lib/search";
import { toApiArticle } from "@/lib/api";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") ?? "").slice(0, 120);
  const category = searchParams.get("category") ?? undefined;

  const { articles, total } = searchArticles({ query, category, take: 20 });

  return NextResponse.json({ query, total, articles: articles.map(toApiArticle) });
}
