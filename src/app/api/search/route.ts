import { NextResponse } from "next/server";
import { searchArticles } from "@/lib/search";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") ?? "").slice(0, 120);
  const category = searchParams.get("category") ?? undefined;

  const { articles, total } = await searchArticles({ query, category, take: 20 });

  return NextResponse.json(
    { query, total, articles },
    { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } },
  );
}
