import { ButtonLink } from "@/components/ui/Button";

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="rounded-card border border-dashed border-line bg-surface px-6 py-14 text-center">
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">{description}</p>
      {actionLabel && actionHref ? (
        <ButtonLink href={actionHref} variant="secondary" size="sm" className="mt-5">
          {actionLabel}
        </ButtonLink>
      ) : null}
    </div>
  );
}
