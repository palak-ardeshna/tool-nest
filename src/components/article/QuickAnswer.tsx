export function QuickAnswer({ text }: { text: string }) {
  return (
    <section
      aria-labelledby="quick-answer"
      className="rounded-card border border-accent/20 bg-accent-light p-5 sm:p-6"
    >
      <h2
        id="quick-answer"
        className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark"
      >
        Quick answer
      </h2>
      <p className="mt-2.5 text-[15px] leading-relaxed text-ink sm:text-base">{text}</p>
    </section>
  );
}
