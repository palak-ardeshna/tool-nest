import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SearchBar } from "@/components/search/SearchBar";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <SiteShell>
      <Container width="reading" className="py-20 text-center lg:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          We could not find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
          It may have been moved or renamed. Try a search, or start from the homepage.
        </p>
        <SearchBar className="mx-auto mt-8 max-w-md" />
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Go home</ButtonLink>
          <ButtonLink href="/articles" variant="secondary">
            Browse all articles
          </ButtonLink>
        </div>
      </Container>
    </SiteShell>
  );
}
