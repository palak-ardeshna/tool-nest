import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "What data ToolNest collects, why we collect it, who we share it with, and how to exercise your rights.",
  path: "/privacy-policy",
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy Policy" }];

export default function PrivacyPolicyPage() {
  return (
    <Container width="reading" className="py-10 lg:py-14">
      <PageHeader title="Privacy Policy" crumbs={crumbs} updated="19 August 2026" />

      <div className="prose">
        <p>
          This policy explains what {siteConfig.name} collects when you read the site, why, and what
          you can do about it. We have tried to write it in plain English rather than legal filler.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Analytics data.</strong> Pages viewed, approximate location (country/region),
            device and browser type, referring site, and any campaign parameters in the URL. This is
            processed by Google Analytics.
          </li>
          <li>
            <strong>Newsletter data.</strong> If you subscribe, we store the email address you give
            us and which page you subscribed from. Nothing else.
          </li>
          <li>
            <strong>Email you send us.</strong> Kept only as long as needed to deal with your message.
          </li>
        </ul>
        <p>
          We do not ask for, and do not want, sensitive personal data. We do not sell personal data.
        </p>

        <h2>Cookies and similar technology</h2>
        <p>
          We use cookies and browser storage for two purposes: measuring how the site is used, and —
          where advertising is enabled — serving ads. Session attribution (which campaign or referrer
          brought you here) is stored in your browser&rsquo;s session storage and is cleared when you
          close the tab.
        </p>

        <h2>Advertising</h2>
        <p>
          {siteConfig.name} may display advertising served by Google AdSense. Google and its partners
          use cookies to serve ads based on your prior visits to this and other websites. You can opt
          out of personalised advertising in{" "}
          <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">
            Google Ads Settings
          </a>
          , and manage third-party cookies at{" "}
          <a href="https://optout.aboutads.info" rel="noopener noreferrer" target="_blank">
            aboutads.info
          </a>
          .
        </p>

        <h2>Legal basis and retention</h2>
        <p>
          Where the GDPR applies, we rely on legitimate interest for analytics and on consent for the
          newsletter and personalised advertising. Analytics data is retained for 14 months.
          Newsletter subscriptions are retained until you unsubscribe.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us for a copy of your data, ask us to correct it, or ask us to delete it. Email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with &ldquo;Privacy
          request&rdquo; in the subject line and we will respond within 30 days.
        </p>

        <h2>Children</h2>
        <p>
          {siteConfig.name} is not directed at children under 13 and we do not knowingly collect data
          from them.
        </p>

        <h2>Changes</h2>
        <p>
          If we change this policy we will update the date at the top of this page. Related reading:{" "}
          <Link href="/terms">Terms of Use</Link> and <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </div>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </Container>
  );
}
