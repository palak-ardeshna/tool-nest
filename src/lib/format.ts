const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return "";
  return dateFormatter.format(new Date(date));
}

/** ISO date (YYYY-MM-DD) for <time dateTime> and structured data. */
export function isoDate(date: Date | string | null | undefined): string {
  if (!date) return "";
  return new Date(date).toISOString();
}

/** Rough reading time from HTML content at 220 wpm. */
export function readingMinutes(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
