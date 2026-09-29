import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";
import { topLevelCategories } from "@/content";
import { Container } from "@/components/ui/Container";

const groups = [
  {
    title: "Sections",
    links: topLevelCategories.map((c) => ({ label: c.name, href: `/category/${c.slug}` })),
  },
  { title: "Publication", links: footerLinks.publication },
  { title: "Legal", links: footerLinks.legal },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <Container className="py-10 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-[1.4fr_repeat(3,1fr)]">
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            <span className="font-semibold text-ink">{siteConfig.name}</span> is run by Palak Patel.
            Funded by advertising, no affiliate links.
          </p>

          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-ink">{group.title}</h2>
              <ul className="mt-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {/* py-1.5 keeps each link a 24px+ touch target. */}
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-sm text-muted hover:text-ink hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-10 border-t border-line pt-6 text-xs text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
