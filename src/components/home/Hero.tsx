import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Hero({ articleCount }: { articleCount: number }) {
  return (
    <section className="border-b border-line bg-gradient-to-b from-accent-light/60 to-white">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Independent tool reviews
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Discover better tools.
            <br />
            <span className="text-accent">Work smarter.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Practical guides, comparisons and buying advice for AI tools, software and
            productivity — researched from vendor documentation, with every claim sourced and dated.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/category/ai-tools" size="lg">
              Explore Tools
            </ButtonLink>
            <ButtonLink href="/articles" variant="secondary" size="lg">
              Browse all articles
            </ButtonLink>
          </div>
          {articleCount > 0 ? (
            <p className="mt-6 text-sm text-muted">
              {articleCount} published {articleCount === 1 ? "article" : "articles"} &middot; no
              sponsored rankings, ever
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
