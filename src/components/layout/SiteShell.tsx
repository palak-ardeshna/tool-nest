import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics/Analytics";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";

/** Public-facing chrome. The admin area deliberately does not use it. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <Analytics />
      <AdSenseScript />
    </>
  );
}
