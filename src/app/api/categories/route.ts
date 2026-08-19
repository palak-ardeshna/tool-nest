import { NextResponse } from "next/server";
import { getCategoryTree } from "@/lib/categories";

export async function GET() {
  const categories = await getCategoryTree();
  return NextResponse.json(
    { categories },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } },
  );
}
