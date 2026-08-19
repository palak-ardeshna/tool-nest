/** Tiny classname joiner. Nothing here needs tailwind-merge. */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
