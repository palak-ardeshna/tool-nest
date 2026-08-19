"use client";

import { useActionState } from "react";
import { loginAction, type ActionState } from "@/app/actions/admin";
import { Field, FormMessage, Input } from "@/components/admin/FormControls";
import { Button } from "@/components/ui/Button";

const initialState: ActionState = { status: "idle" };

export function LoginForm({ next }: { next?: string }) {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="mt-5 space-y-4">
      <input type="hidden" name="next" value={next ?? "/admin"} />
      <Field label="Password" htmlFor="password">
        <Input id="password" name="password" type="password" required autoComplete="current-password" autoFocus />
      </Field>
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Signing in…" : "Sign in"}
      </Button>
      <FormMessage status={state.status} message={state.message} />
    </form>
  );
}
