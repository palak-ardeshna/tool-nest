/**
 * Deterministic palette + motif selection for generated article covers.
 *
 * Shared by the on-page cover ([ArticleCover]) and the per-article Open Graph
 * image, so a shared article looks like the card that linked to it.
 */

export type CoverPalette = {
  /** Background wash, light end first. */
  from: string;
  to: string;
  /** Line and mark colour. */
  mark: string;
  /** Label colour, darkest of the family. */
  label: string;
};

const palettes: CoverPalette[] = [
  { from: "#EEF2FF", to: "#E0E7FF", mark: "#818CF8", label: "#3730A3" }, // indigo
  { from: "#EFF6FF", to: "#DBEAFE", mark: "#60A5FA", label: "#1E40AF" }, // blue
  { from: "#ECFDF5", to: "#D1FAE5", mark: "#34D399", label: "#065F46" }, // emerald
  { from: "#FFFBEB", to: "#FEF3C7", mark: "#FBBF24", label: "#92400E" }, // amber
  { from: "#FFF1F2", to: "#FFE4E6", mark: "#FB7185", label: "#9F1239" }, // rose
  { from: "#F5F3FF", to: "#EDE9FE", mark: "#A78BFA", label: "#5B21B6" }, // violet
  { from: "#F0FDFA", to: "#CCFBF1", mark: "#2DD4BF", label: "#115E59" }, // teal
  { from: "#FDF4FF", to: "#FAE8FF", mark: "#E879F9", label: "#86198F" }, // fuchsia
];

export const MOTIF_COUNT = 6;

/** Stable small hash, so a slug always yields the same cover. */
function hash(seed: string, multiplier: number): number {
  let value = 7;
  for (let i = 0; i < seed.length; i += 1) {
    value = (value * multiplier + seed.charCodeAt(i)) % 100003;
  }
  return value;
}

export function coverStyle(seed: string): { palette: CoverPalette; motif: number } {
  // Two independent hashes: deriving both from one value correlates them and
  // makes some motifs far more common than others across a grid of cards.
  return {
    palette: palettes[hash(seed, 31) % palettes.length],
    motif: hash(seed, 131) % MOTIF_COUNT,
  };
}
