import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { AuthorCard } from "@/components/article/AuthorCard";
import { JsonLd } from "@/components/JsonLd";
import { db } from "@/lib/db";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "About ToolNest",
  description:
    "Who writes ToolNest, how we test tools, and the editorial standards behind every guide and comparison we publish.",
  path: "/about",
});

const crumbs = [{ label: "Home", href: "/" }, { label: "About" }];

export default async function AboutPage() {
  const authors = await db.author.findMany({ orderBy: { name: "asc" } });

  return (
    <Container width="reading" className="py-10 lg:py-14">
      <PageHeader
        title="About ToolNest"
        description={siteConfig.tagline}
        crumbs={crumbs}
      />

      <div className="prose">
        <p>
          ToolNest is an independent technology publication about the software people actually use to
          get work done: AI tools, productivity apps, automation platforms and developer tooling. We
          publish hands-on guides, honest comparisons and practical how-tos.
        </p>

        <h2>Why we exist</h2>
        <p>
          Searching for &ldquo;best AI writing tool&rdquo; returns thousands of pages that read like
          they were written by someone who never opened the product. We started ToolNest to do the
          boring part properly: sign up, use the tool on real work, hit the limits, and then write
          down what we found.
        </p>

        <h2>How we test</h2>
        <ol>
          <li>
            <strong>We use the tool.</strong> Every review is based on a real account and real tasks,
            not a marketing page.
          </li>
          <li>
            <strong>We use the same task across competitors.</strong> Comparisons run the same brief
            through each tool so the differences are attributable to the tool, not the prompt.
          </li>
          <li>
            <strong>We record the version and date.</strong> Software changes fast. Every article
            carries a publication date and, where we have revisited it, an update date.
          </li>
          <li>
            <strong>We say when we are unsure.</strong> If we have not tested something, we say so
            rather than filling the gap with confident guesswork.
          </li>
        </ol>

        <h2>Independence and money</h2>
        <p>
          ToolNest is funded by advertising and, in some articles, affiliate links. Vendors cannot buy
          placement, a rating, or a mention. Nobody outside the editorial team sees an article before
          it is published. Ad slots are clearly labelled and kept out of the reading flow. Full detail
          is in our{" "}
          <Link href="/disclaimer">disclaimer</Link> and{" "}
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
          <h2 className="text-2xl font-bold tracking-tight text-ink">The team</h2>
          <div className="mt-5 space-y-5">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} heading="Editorial" />
            ))}
          </div>
        </section>
      ) : null}

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
