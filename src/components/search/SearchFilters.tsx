import Link from "next/link";
import type { CategoryWithChildren } from "@/types";
import { cn } from "@/lib/cn";

/** Category filter as plain links, so results stay shareable and crawl-free. */
export function SearchFilters({
  categories,
  query,
  active,
}: {
  categories: CategoryWithChildren[];
  query: string;
  active?: string;
}) {
  if (!query || !categories.length) return null;

  const href = (slug?: string) =>
    `/search?q=${encodeURIComponent(query)}${slug ? `&category=${slug}` : ""}`;

  const options = [{ id: "all", name: "All topics", slug: undefined }, ...categories];

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.slug === active || (!option.slug && !active);
        return (
          <Link
            key={option.id}
            href={href(option.slug)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "border-accent bg-accent-light text-accent-dark"
                : "border-line bg-white text-muted hover:border-accent/40 hover:text-ink",
            )}
          >
            {option.name}
          </Link>
        );
      })}
    </div>
  );
}
