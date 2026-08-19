import Link from "next/link";
import type { ResolvedCategory } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PopularTopics({ categories }: { categories: ResolvedCategory[] }) {
  if (!categories.length) return null;

  return (
    <section aria-label="Popular topics">
      <SectionHeading title="Popular topics" description="Start with the areas we cover deepest." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="group rounded-card border border-line bg-white p-5 transition-colors hover:border-accent/40 hover:bg-accent-light/40"
          >
            <h3 className="font-bold text-ink transition-colors group-hover:text-accent">
              {category.name}
            </h3>
            {category.description ? (
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
            ) : null}
            {category.children.length ? (
              <p className="mt-3 text-xs text-muted">
                {category.children.map((child) => child.name).join(" · ")}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
