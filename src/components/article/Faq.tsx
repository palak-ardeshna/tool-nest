import type { Faq as FaqItem } from "@/types";

export function Faq({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="faq">
      <h2 id="faq" className="font-serif text-2xl font-semibold tracking-tight text-ink">
        Questions
      </h2>
      <div className="mt-2 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-ink marker:content-['']">
              {item.question}
              <span
                aria-hidden
                className="mt-1 shrink-0 text-muted transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2.5 leading-relaxed text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
