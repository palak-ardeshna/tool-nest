export function QuickAnswer({ text }: { text: string }) {
  return (
    <section aria-labelledby="quick-answer" className="border-l-2 border-accent pl-5">
      <h2 id="quick-answer" className="text-sm font-semibold text-ink">
        Short answer
      </h2>
      <p className="mt-1.5 font-serif text-lg leading-relaxed text-ink">{text}</p>
    </section>
  );
}
