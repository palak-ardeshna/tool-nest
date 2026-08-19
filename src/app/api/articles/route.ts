import { NextResponse } from "next/server";
import { getArticlesInSection, getLatestArticles } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import { toApiArticle } from "@/lib/api";

/** Public read-only feed of published articles. */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(50, Math.max(1, Number(searchParams.get("limit") ?? 12)));
  const offset = Math.max(0, Number(searchParams.get("offset") ?? 0));
  const categorySlug = searchParams.get("category");

  if (categorySlug) {
    const category = getCategoryBySlug(categorySlug);
    if (!category) return NextResponse.json({ error: "Unknown category" }, { status: 404 });
    const articles = getArticlesInSection(category, limit, offset).map(toApiArticle);
    return NextResponse.json({ articles });
  }

  return NextResponse.json({ articles: getLatestArticles(limit, offset).map(toApiArticle) });
}
