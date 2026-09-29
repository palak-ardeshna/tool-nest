import type { Alternative } from "@/types";

export function Alternatives({ items }: { items: Alternative[] }) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="alternatives">
      <h2 id="alternatives" className="font-serif text-2xl font-semibold tracking-tight text-ink">
        Other options
      </h2>
      <ul className="mt-2 divide-y divide-line">
        {items.map((item) => (
          <li key={item.name} className="py-4">
            <p className="font-semibold text-ink">
              {item.url ? (
                <a
                  href={item.url}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  className="text-accent underline underline-offset-2 hover:text-accent-dark"
                >
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </p>
            {item.note ? (
              <p className="mt-1 leading-relaxed text-muted">{item.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
