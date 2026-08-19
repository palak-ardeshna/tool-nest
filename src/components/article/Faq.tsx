type FaqItem = { id: string; question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="faq">
      <h2 id="faq" className="text-2xl font-bold tracking-tight text-ink">
        Frequently asked questions
      </h2>
      <div className="mt-4 divide-y divide-line rounded-card border border-line bg-white">
        {items.map((item) => (
          <details key={item.id} className="group p-4 sm:p-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-ink marker:content-['']">
              {item.question}
              <span
                aria-hidden
                className="mt-1 shrink-0 text-muted transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
