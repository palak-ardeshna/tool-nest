import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "Contact",
  description: "How to reach the ToolNest editorial team about corrections, tips, or advertising.",
  path: "/contact",
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

const channels = [
  {
    title: "Editorial and corrections",
    email: siteConfig.email,
    description:
      "Spotted an error, an out-of-date price, or a feature that has since changed? This is the fastest way to get it fixed.",
  },
  {
    title: "Tips and suggestions",
    email: siteConfig.email,
    description:
      "Tell me about a tool worth testing or a comparison you wish existed. I read everything, though I cannot reply to all of it.",
  },
  {
    title: "Advertising and partnerships",
    email: siteConfig.email,
    description:
      "I sell display advertising. I do not sell reviews, rankings, or placement inside articles.",
  },
];

export default function ContactPage() {
  return (
    <Container width="reading" className="py-10 lg:py-14">
      <PageHeader
        title="Contact"
        description="I aim to reply to editorial mail within two working days."
        crumbs={crumbs}
      />

      <div className="space-y-4">
        {channels.map((channel) => (
          <section key={channel.title} className="rounded-card border border-line bg-white p-5 sm:p-6">
            <h2 className="font-bold text-ink">{channel.title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{channel.description}</p>
            <a
              href={`mailto:${channel.email}?subject=${encodeURIComponent(channel.title)}`}
              className="mt-3 inline-block font-semibold text-accent hover:underline"
            >
              {channel.email}
            </a>
          </section>
        ))}
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted">
        For privacy requests — access, correction or deletion of your data — email the address above
        with &ldquo;Privacy request&rdquo; in the subject line. See my privacy policy for what I
        collect and how long I keep it.
      </p>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
