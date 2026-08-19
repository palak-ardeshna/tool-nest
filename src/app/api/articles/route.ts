import { NextResponse } from "next/server";
import { getArticlesByCategory, getLatestArticles } from "@/lib/articles";
import { categoryScopeIds, getCategoryBySlug } from "@/lib/categories";

/** Public read-only feed of published articles. */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(50, Math.max(1, Number(searchParams.get("limit") ?? 12)));
  const offset = Math.max(0, Number(searchParams.get("offset") ?? 0));
  const categorySlug = searchParams.get("category");

  if (categorySlug) {
    const category = await getCategoryBySlug(categorySlug);
    if (!category) {
      return NextResponse.json({ error: "Unknown category" }, { status: 404 });
    }
    const articles = await getArticlesByCategory(categoryScopeIds(category), limit, offset);
    return NextResponse.json({ articles }, { headers: cacheHeaders });
  }

  const articles = await getLatestArticles(limit, offset);
  return NextResponse.json({ articles }, { headers: cacheHeaders });
}

const cacheHeaders = { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" };
