import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Crumb } from "@/types";

export function PageHeader({
  title,
  description,
  crumbs,
  updated,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
  updated?: string;
}) {
  return (
    <header className="mb-10">
      <Breadcrumbs items={crumbs} className="mb-6" />
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
      {updated ? <p className="mt-3 text-sm text-muted">Last updated: {updated}</p> : null}
    </header>
  );
}
