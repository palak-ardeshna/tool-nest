import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "How ToolNest makes money, how that affects my editorial, and the limits of the advice I publish.",
  path: "/disclaimer",
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Disclaimer" }];

export default function DisclaimerPage() {
  return (
    <Container width="reading" className="py-10 lg:py-14">
      <PageHeader title="Disclaimer" crumbs={crumbs} updated="19 August 2026" />

      <div className="prose">
        <h2>Editorial independence</h2>
        <p>
          Nobody can pay to appear in a {siteConfig.name} article, to be ranked higher in a
          comparison, or to have criticism removed. Advertisers have no visibility of, or influence
          over, editorial content.
        </p>

        <h2>How this site is funded</h2>
        <p>
          {siteConfig.name} is funded by display advertising only. I carry no affiliate links and
          earn no commission when you sign up for a product mentioned here. If that ever changes, it
          will be disclosed on the affected article and on this page before any such link is
          published.
        </p>

        <h2>How my articles are researched</h2>
        <p>
          My articles are researched from vendor documentation, changelogs, pricing pages and
          published reporting, drafted with AI assistance and reviewed by a person before
          publication. They are not laboratory benchmarks, and I do not claim to have run
          controlled tests on the tools I write about. Where a figure comes from a vendor, treat it
          as a vendor claim. Full detail on my process is on the{" "}
          <Link href="/about">about page</Link>.
        </p>

        <h2>Advertising</h2>
        <p>
          I display advertising. Ads are labelled, kept visually separate from editorial content, and
          never styled to look like navigation, buttons or article text. I do not design pages around
          getting you to click an ad.
        </p>

        <h2>No professional advice</h2>
        <p>
          My articles are general information about software and workflows. They are not legal,
          financial, security or professional advice for your specific situation, and they are not a
          substitute for trialling a tool on your own work.
        </p>

        <h2>Accuracy over time</h2>
        <p>
          Every article shows when it was published and, where applicable, when it was last reviewed.
          Features, pricing and limits change; verify current details with the vendor. Corrections are
          welcome at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <p>
          See also: <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
      </div>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
