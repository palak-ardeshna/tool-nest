import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import type { ResolvedCategory } from "@/types";

/**
 * Discovery rather than a newsletter form.
 *
 * There is no database and no mailing-list provider wired up, and a form that
 * accepts an address it cannot store is worse than no form at all. Point people
 * at the archive instead; add a real signup when there is somewhere for it to go.
 */
export function DiscoverySection({
  categories,
  articleCount,
}: {
  categories: ResolvedCategory[];
  articleCount: number;
}) {
  return (
    <section className="border-y border-line bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Find the tool you are actually looking for
            </h2>
            <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {articleCount} guides and comparisons, organised by the kind of tool you need.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/articles">Browse all articles</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                About ToolNest
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="Sections" className="flex flex-wrap gap-2 lg:justify-end">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:bg-accent-light hover:text-accent-dark"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
