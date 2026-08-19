import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms that govern your use of ToolNest.",
  path: "/terms",
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Terms" }];

export default function TermsPage() {
  return (
    <Container width="reading" className="py-10 lg:py-14">
      <PageHeader title="Terms of Use" crumbs={crumbs} updated="19 August 2026" />

      <div className="prose">
        <p>
          By using {siteConfig.name} you agree to these terms. If you do not agree with them, please
          do not use the site.
        </p>

        <h2>Using the site</h2>
        <p>
          You may read, link to and quote our articles with attribution. You may not republish whole
          articles, scrape the site at a scale that degrades it for other readers, or present our
          content as your own or as machine-generated filler.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All original text, images and layout on {siteConfig.name} are ours unless credited
          otherwise. Product names, logos and screenshots belong to their respective owners and are
          used for identification and commentary.
        </p>

        <h2>Accuracy</h2>
        <p>
          We test what we write about, but software changes constantly. Prices, limits and features
          may have changed since publication. Always check the vendor&rsquo;s own documentation before
          making a purchasing decision. See our <Link href="/disclaimer">disclaimer</Link>.
        </p>

        <h2>Third-party links</h2>
        <p>
          We link to other websites. We do not control them and are not responsible for their content
          or their privacy practices.
        </p>

        <h2>Liability</h2>
        <p>
          {siteConfig.name} is provided &ldquo;as is&rdquo;. To the extent permitted by law, we are
          not liable for any loss arising from decisions you make based on our content.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
