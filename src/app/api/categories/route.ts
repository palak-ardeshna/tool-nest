import { NextResponse } from "next/server";
import { getCategoryTree } from "@/lib/categories";
import { toApiCategory } from "@/lib/api";

export function GET() {
  return NextResponse.json({ categories: getCategoryTree().map(toApiCategory) });
}
