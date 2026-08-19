"use client";

import { useActionState } from "react";
import { subscribeAction, type SubscribeState } from "@/app/actions/subscribe";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { track } from "@/lib/analytics";

const initialState: SubscribeState = { status: "idle" };

export function NewsletterCta({ source = "homepage" }: { source?: string }) {
  const [state, formAction, pending] = useActionState(subscribeAction, initialState);

  return (
    <section className="border-y border-line bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              One useful email a week
            </h2>
            <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              New tests, comparisons and the tools that actually made it into our workflow. No
              sponsored picks, unsubscribe any time.
            </p>
          </div>

          <form
            action={formAction}
            onSubmit={() => track("newsletter_signup", { source })}
            className="w-full"
          >
            <input type="hidden" name="source" value={source} />
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="h-12 w-full flex-1 rounded-lg border border-line bg-white px-4 text-[15px] text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light"
              />
              <Button type="submit" size="lg" disabled={pending}>
                {pending ? "Subscribing…" : "Subscribe"}
              </Button>
            </div>
            <p
              aria-live="polite"
              className={
                state.status === "error"
                  ? "mt-2.5 text-sm text-rose-600"
                  : "mt-2.5 text-sm text-success"
              }
            >
              {state.message ?? ""}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
