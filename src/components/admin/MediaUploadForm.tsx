"use client";

import { useActionState } from "react";
import { uploadMediaAction, type ActionState } from "@/app/actions/admin";
import { AdminPanel, Field, FormMessage, Input } from "@/components/admin/FormControls";
import { Button } from "@/components/ui/Button";

const initialState: ActionState = { status: "idle" };

export function MediaUploadForm() {
  const [state, formAction, pending] = useActionState(uploadMediaAction, initialState);

  return (
    <AdminPanel title="Upload" description="JPEG, PNG, WebP, AVIF or SVG. 5 MB maximum.">
      <form action={formAction} className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <Field label="File" htmlFor="media-file">
          <Input id="media-file" name="file" type="file" accept="image/*" required className="py-1.5" />
        </Field>
        <Field label="Alt text" htmlFor="media-alt" hint="Describe the image for screen readers.">
          <Input id="media-alt" name="alt" />
        </Field>
        <Button type="submit" size="sm" disabled={pending} className="sm:mb-6">
          {pending ? "Uploading…" : "Upload"}
        </Button>
        <div className="sm:col-span-3">
          <FormMessage status={state.status} message={state.message} />
        </div>
      </form>
    </AdminPanel>
  );
}
