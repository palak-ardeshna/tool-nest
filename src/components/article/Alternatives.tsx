import type { Alternative } from "@/types";

export function Alternatives({ items }: { items: Alternative[] }) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="alternatives">
      <h2 id="alternatives" className="text-2xl font-bold tracking-tight text-ink">
        Alternatives worth considering
      </h2>
      <ul className="mt-4 divide-y divide-line rounded-card border border-line bg-white">
        {items.map((item) => (
          <li key={item.name} className="p-4 sm:p-5">
            <p className="font-bold text-ink">
              {item.url ? (
                <a
                  href={item.url}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  className="text-accent hover:text-accent-dark hover:underline"
                >
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </p>
            {item.note ? (
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{item.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
