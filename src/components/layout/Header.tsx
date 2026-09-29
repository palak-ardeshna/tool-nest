import Link from "next/link";
import { primaryNav } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SearchBar } from "@/components/search/SearchBar";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <Container className="flex h-16 items-center gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden flex-1 items-center gap-1 sm:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-muted hover:text-ink hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <SearchBar size="sm" placeholder="Search" className="hidden w-48 sm:block lg:w-64" />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
