import { cache } from "react";
import { db } from "@/lib/db";
import type { CategoryWithChildren } from "@/types";

export const getCategoryTree = cache(async (): Promise<CategoryWithChildren[]> =>
  db.category.findMany({
    where: { parentId: null },
    orderBy: { position: "asc" },
    include: { children: { orderBy: { position: "asc" } } },
  }),
);

export const getCategoryBySlug = cache(async (slug: string) =>
  db.category.findUnique({
    where: { slug },
    include: { children: { orderBy: { position: "asc" } }, parent: true },
  }),
);

export const getAllCategories = cache(async () =>
  db.category.findMany({ orderBy: [{ parentId: "asc" }, { position: "asc" }] }),
);

/** A category page shows its own articles plus everything in its sub-categories. */
export function categoryScopeIds(category: { id: string; children: { id: string }[] }): string[] {
  return [category.id, ...category.children.map((c) => c.id)];
}
