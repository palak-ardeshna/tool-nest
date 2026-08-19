function List({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "pro" | "con";
}) {
  return (
    <div className="rounded-card border border-line bg-white p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-ink">{title}</h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/90">
            <span
              aria-hidden
              className={
                tone === "pro"
                  ? "mt-0.5 shrink-0 font-bold text-success"
                  : "mt-0.5 shrink-0 font-bold text-rose-600"
              }
            >
              {tone === "pro" ? "+" : "−"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  if (!pros.length && !cons.length) return null;

  return (
    <section aria-labelledby="pros-cons">
      <h2 id="pros-cons" className="text-2xl font-bold tracking-tight text-ink">
        Pros and cons
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {pros.length ? <List title="Pros" items={pros} tone="pro" /> : null}
        {cons.length ? <List title="Cons" items={cons} tone="con" /> : null}
      </div>
    </section>
  );
}
