import Link from "next/link";
import { footerNav, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-muted">{siteConfig.description}</p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-xs font-bold uppercase tracking-wider text-ink">{group.title}</h2>
              <ul className="mt-2 space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {/* inline-block + py-1.5 gives each link a 24px+ touch target
                        without changing the visual rhythm of the column. */}
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            ToolNest is funded by advertising and carries no affiliate links. Every article is
            edited and reviewed by a person before publication. See our{" "}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:text-accent">
              disclaimer
            </Link>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
