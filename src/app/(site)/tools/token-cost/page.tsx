import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { TokenCostCalculator } from "@/components/tools/TokenCostCalculator";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { DEFAULT_USD_INR, PRICES_CHECKED_AT, models } from "@/lib/token-cost";

export const metadata = buildMetadata({
  title: "Claude API Token Cost in Rupees",
  description:
    "Work out what Claude Opus, Sonnet or Haiku API calls cost in ₹, from input and output tokens and today's dollar rate.",
  path: "/tools/token-cost",
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Token cost in ₹" }];

export default function TokenCostPage() {
  return (
    <Container width="reading" className="py-10 lg:py-14">
      <PageHeader
        title="Claude API token cost in rupees"
        description="Enter your tokens per request and how many requests you make. The total is in ₹."
        crumbs={crumbs}
      />

      <TokenCostCalculator />

      <div className="prose mt-10">
        <h2>How the number is worked out</h2>
        <p>
          Cost in dollars = (input tokens × input price + output tokens × output price) ÷ 1,000,000 ×
          requests. That is then multiplied by the rupee rate you enter.
        </p>
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Input, $ per 1M tokens</th>
              <th>Output, $ per 1M tokens</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>${m.input}</td>
                <td>${m.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Prices are Anthropic&apos;s standard API rates from the{" "}
          <a href="https://platform.claude.com/docs/en/about-claude/pricing">pricing page</a>, checked{" "}
          {PRICES_CHECKED_AT}. Haiku 5.5 uses its rate for prompts up to 100,000 tokens. The default
          rate of ₹{DEFAULT_USD_INR} per dollar is from{" "}
          <a href="https://open.er-api.com/v6/latest/USD">open.er-api.com</a> on the same day.
        </p>

        <h2>What it leaves out</h2>
        <ul>
          <li>Prompt caching and batch discounts, which lower the bill.</li>
          <li>GST and your card&apos;s foreign-currency markup, which raise it.</li>
          <li>Tokens are not words. Use the API&apos;s token count, not a word count, for real inputs.</li>
        </ul>
      </div>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
    </Container>
  );
}
