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

        <h2>Advertising and Google AdSense</h2>
        <p>
          {siteConfig.name} displays advertising served by Google AdSense. Third-party vendors,
          including Google, use cookies to serve ads based on your prior visits to this and other
          websites.
        </p>
        <ul>
          <li>
            Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to you
            based on your visit to this site and/or other sites on the internet.
          </li>
          <li>
            You may opt out of personalised advertising by visiting{" "}
            <a href="https://myadcenter.google.com" rel="noopener noreferrer" target="_blank">
              Google Ad Settings
            </a>
            .
          </li>
          <li>
            You can opt out of some third-party vendors&rsquo; use of cookies for personalised
            advertising at{" "}
            <a href="https://optout.aboutads.info" rel="noopener noreferrer" target="_blank">
              aboutads.info
            </a>{" "}
            and{" "}
            <a href="https://www.youronlinechoices.eu" rel="noopener noreferrer" target="_blank">
              youronlinechoices.eu
            </a>
            .
          </li>
          <li>
            Third-party vendors used on this site are listed in Google&rsquo;s{" "}
            <a
              href="https://business.safety.google/adspartners/"
              rel="noopener noreferrer"
              target="_blank"
            >
              advertising partners
            </a>{" "}
            directory.
          </li>
        </ul>

        <h2>Consent in the EEA, UK and Switzerland</h2>
        <p>
          If you are in the European Economic Area, the United Kingdom or Switzerland, a consent
          message is shown before advertising or analytics cookies are set. It is served through
          Google&rsquo;s certified consent management platform, and your choice is stored in your
          browser so you are not asked on every page. You can change or withdraw that choice at any
          time by clearing this site&rsquo;s cookies, which makes the message appear again on your
          next visit.
        </p>
        <p>
          Where you decline consent, Google may still serve non-personalised ads, which use cookies
          for frequency capping, aggregated reporting and fraud prevention rather than for building
          a profile of you.
        </p>

        <h2>Legal basis and retention</h2>
        <p>
          Where the GDPR or UK GDPR applies, we rely on your consent for analytics and advertising
          cookies, collected through the consent message described above, and on legitimate interest
          for keeping the site secure and working. Analytics data is retained for 14 months.
          Email you send us is kept only as long as needed to deal with it. Google retains
          advertising data under its own{" "}
          <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
            privacy policy
          </a>
          , which governs its processing as an independent controller.
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
