import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "How ToolNest makes money, how that affects our editorial, and the limits of the advice we publish.",
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

        <h2>Affiliate links</h2>
        <p>
          Some articles contain affiliate links. If you sign up for a product through one, we may earn
          a commission at no additional cost to you. Whether a link is affiliate or not has no bearing
          on whether a tool is recommended or how it scores. If a tool we recommend has no affiliate
          programme, we still recommend it.
        </p>

        <h2>Advertising</h2>
        <p>
          We display advertising. Ads are labelled, kept visually separate from editorial content, and
          never styled to look like navigation, buttons or article text. We do not design pages around
          getting you to click an ad.
        </p>

        <h2>No professional advice</h2>
        <p>
          Our articles are general information about software and workflows. They are not legal,
          financial, security or professional advice for your specific situation.
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
