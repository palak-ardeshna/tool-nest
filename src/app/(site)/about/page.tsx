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
    "Who writes ToolNest, how the articles are researched, and how the site is funded.",
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
          ToolNest is my site. I am <Link href="/authors/parth-patel">Parth Patel</Link>, and I
          research, write, edit and publish everything here: explainers, comparisons and practical
          how-tos about the software people use to get work done — AI tools, productivity apps,
          automation platforms and developer tooling. Editorial responsibility for all of it is mine;
          I am reachable at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>How the articles are made</h2>
        <p>
          Most articles are built from vendor documentation, changelogs, pricing pages and published
          reporting, plus my own use of the tools where I have it. I draft with AI assistance and
          then read, check and edit every claim myself before it goes live; nothing is published
          straight from a model. Where I have not used a tool, the article says so rather than
          implying otherwise. Every article ends with its primary sources and the date I last read
          each one, so you can check my work and see how stale it might be. Software changes fast:
          confirm current pricing and limits with the vendor before you buy.
        </p>

        <h2>What this means for you</h2>
        <p>
          Use ToolNest to narrow a shortlist and understand the trade-offs. Do not use it as a
          substitute for a trial. Every recommendation here is an argument about fit, and your
          workflow is the only benchmark that matters.
        </p>

        <h2>Independence and money</h2>
        <p>
          ToolNest is funded by advertising. Vendors cannot buy placement, a rating or a mention,
          and advertisers see nothing before it is published. There are no affiliate links; if that
          changes, it will be disclosed on the article and in the{" "}
          <Link href="/disclaimer">disclaimer</Link>. See also the{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>

        <h2>Corrections</h2>
        <p>
          If I get something wrong, I fix it and note the change on the article. Tell me at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or through the{" "}
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
