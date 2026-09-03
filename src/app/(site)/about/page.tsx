import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { AuthorCard } from "@/components/article/AuthorCard";
import { JsonLd } from "@/components/JsonLd";
import { authors } from "@/content";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "About ToolNest",
  description:
    "Who publishes ToolNest, how our articles are researched and reviewed, how we use AI, and the editorial standards behind every guide we publish.",
  path: "/about",
});

const crumbs = [{ label: "Home", href: "/" }, { label: "About" }];

export default function AboutPage() {
  return (
    <Container width="reading" className="py-10 lg:py-14">
      <PageHeader
        title="About ToolNest"
        description={siteConfig.tagline}
        crumbs={crumbs}
      />

      <div className="prose">
        <p>
          ToolNest is an independent technology publication about the software people use to get
          work done: AI tools, productivity apps, automation platforms and developer tooling. We
          publish explainers, comparisons and practical how-tos.
        </p>

        <h2>Who is behind ToolNest</h2>
        <p>
          ToolNest is a small independent site, not a company with a newsroom. It is run by one
          person, and articles are published under a single editorial byline —{" "}
          <Link href="/authors/toolnest-editorial">ToolNest Editorial</Link> — rather than invented
          personal names. Editorial responsibility for everything on this site rests with the site
          owner, reachable at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>How our articles are made</h2>
        <p>
          We are direct about this, because a lot of sites are not.
        </p>
        <ol>
          <li>
            <strong>Research, not lab testing.</strong> Our articles are built from vendor
            documentation, changelogs, pricing and limits pages, official support articles and
            published reporting — not from a controlled test lab. We do not run benchmarks and we do
            not claim to.
          </li>
          <li>
            <strong>You can check our work.</strong> Every article ends with the primary sources
            behind it, each with the date we last read it. If we state a price or a free-tier limit,
            the vendor page it came from is one click away. Where a source has since changed, the
            date tells you how stale our reading is.
          </li>
          <li>
            <strong>AI-assisted drafting, human review.</strong> Drafts are produced with AI
            assistance and then read, corrected and edited by a person before publication. Nothing
            is published straight from a model.
          </li>
          <li>
            <strong>We say what we do not know.</strong> If we have not used a tool ourselves, the
            article does not imply that we have. Where a claim comes from a vendor rather than from
            independent verification, we attribute it.
          </li>
          <li>
            <strong>We record the date.</strong> Software changes fast. Every article carries a
            publication date and, where we have revisited it, an update date. Always confirm current
            pricing and limits with the vendor.
          </li>
        </ol>

        <h2>What this means for you</h2>
        <p>
          Use ToolNest to narrow a shortlist and understand the trade-offs between categories of
          tool. Do not use it as a substitute for a trial. Every recommendation here is an argument
          about fit, not a measured verdict, and your workflow is the only benchmark that matters.
        </p>

        <h2>Independence and money</h2>
        <p>
          ToolNest is funded by advertising. Vendors cannot buy placement, a rating, or a mention,
          and advertisers have no visibility of editorial content before it is published. Ad slots
          are labelled and kept out of the reading flow. We currently carry no affiliate links; if
          that changes, it will be disclosed on the article and in our{" "}
          <Link href="/disclaimer">disclaimer</Link>. See also our{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>

        <h2>Corrections</h2>
        <p>
          If we get something wrong, we fix it and note the change on the article. Tell us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or through our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>

      {authors.length ? (
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Byline</h2>
          <div className="mt-5 space-y-5">
            {authors.map((author) => (
              <AuthorCard key={author.slug} author={author} heading="Published under" />
            ))}
          </div>
        </section>
      ) : null}

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
