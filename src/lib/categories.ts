import { getCategory, resolvedCategories, topLevelCategories } from "@/content";
import type { ResolvedCategory } from "@/types";

export function getCategoryTree(): ResolvedCategory[] {
  return topLevelCategories;
}

export function getCategoryBySlug(slug: string): ResolvedCategory | undefined {
  return getCategory(slug);
}

export function getAllCategories(): ResolvedCategory[] {
  return resolvedCategories;
}
