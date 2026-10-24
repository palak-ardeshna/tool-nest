/**
 * Claude API list prices, USD per million tokens, from
 * https://platform.claude.com/docs/en/about-claude/pricing (read 2026-10-24).
 * Haiku 5.5 is the up-to-100K-token-prompt rate. Re-check on any edit.
 */
export const PRICES_CHECKED_AT = "2026-10-24";
export const models = [
  { id: "claude-opus-5-5", name: "Claude Opus 5.5", input: 4, output: 20 },
  { id: "claude-sonnet-5-5", name: "Claude Sonnet 5.5", input: 2, output: 10 },
  { id: "claude-haiku-5-5", name: "Claude Haiku 5.5", input: 0.1, output: 0.5 },
] as const;

/** open.er-api.com, updated 2026-10-24 00:02 UTC. The reader can overwrite it. */
export const DEFAULT_USD_INR = 95.04;

/** Rupees for `requests` calls of `inputTokens` in and `outputTokens` out. */
export function tokenCostInr(
  rate: { input: number; output: number },
  inputTokens: number,
  outputTokens: number,
  requests: number,
  usdInr: number,
) {
  const usd = ((inputTokens * rate.input + outputTokens * rate.output) / 1_000_000) * requests;
  return usd * usdInr;
}
