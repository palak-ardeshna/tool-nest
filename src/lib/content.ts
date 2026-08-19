/**
 * Splits article HTML at top-level `<h2>` boundaries and groups the sections so
 * an ad can sit between whole sections. Content is never paginated and never
 * interrupted mid-thought; short articles get no in-content ad at all.
 */
export function groupSections(html: string): string[] {
  const sections = html.split(/(?=<h2[\s>])/g).filter((part) => part.trim().length > 0);
  if (sections.length < 3) return [html];

  const breaks = new Set([1]);
  if (sections.length >= 5) breaks.add(Math.ceil((sections.length * 2) / 3));

  const groups: string[] = [];
  let current: string[] = [];

  sections.forEach((section, index) => {
    if (breaks.has(index) && current.length) {
      groups.push(current.join(""));
      current = [];
    }
    current.push(section);
  });
  if (current.length) groups.push(current.join(""));

  return groups;
}
