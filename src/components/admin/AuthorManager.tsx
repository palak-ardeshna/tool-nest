"use client";

import { useActionState, useState } from "react";
import { deleteAuthorAction, saveAuthorAction, type ActionState } from "@/app/actions/admin";
import { AdminPanel, Field, FormMessage, Input, Textarea } from "@/components/admin/FormControls";
import { ConfirmSubmit } from "@/components/admin/ConfirmSubmit";
import { Button } from "@/components/ui/Button";

type Author = {
  id: string;
  name: string;
  slug: string;
  role: string | null;
  bio: string | null;
  avatar: string | null;
  email: string | null;
  twitter: string | null;
  website: string | null;
  _count: { articles: number };
};

const initialState: ActionState = { status: "idle" };

export function AuthorManager({ authors }: { authors: Author[] }) {
  const [state, formAction, pending] = useActionState(saveAuthorAction, initialState);
  const [editing, setEditing] = useState<Author | null>(null);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="divide-y divide-line rounded-card border border-line bg-white">
        {authors.map((author) => (
          <div key={author.id} className="flex flex-wrap items-center gap-3 px-5 py-4">
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-ink">{author.name}</p>
              <p className="text-xs text-muted">
                {author.role ?? "No role set"} · {author._count.articles} articles
              </p>
            </div>
            <button
              type="button"
              onClick={() => setEditing(author)}
              className="text-xs font-semibold text-accent hover:underline"
            >
              Edit
            </button>
            {author._count.articles === 0 ? (
              <form action={deleteAuthorAction}>
                <input type="hidden" name="id" value={author.id} />
                <ConfirmSubmit
                  message={`Delete ${author.name}?`}
                  className="text-xs font-semibold text-rose-600 hover:underline"
                >
                  Delete
                </ConfirmSubmit>
              </form>
            ) : (
              <span className="text-xs text-muted">In use</span>
            )}
          </div>
        ))}
        {!authors.length ? (
          <p className="px-5 py-10 text-center text-sm text-muted">No authors yet.</p>
        ) : null}
      </div>

      <AdminPanel title={editing ? `Edit ${editing.name}` : "Add author"}>
        <form action={formAction} className="space-y-4" key={editing?.id ?? "new"}>
          {editing ? <input type="hidden" name="id" value={editing.id} /> : null}

          <Field label="Name" htmlFor="author-name">
            <Input id="author-name" name="name" required defaultValue={editing?.name ?? ""} />
          </Field>
          <Field label="Slug" htmlFor="author-slug" hint="Leave empty to generate from the name.">
            <Input id="author-slug" name="slug" defaultValue={editing?.slug ?? ""} />
          </Field>
          <Field label="Role" htmlFor="author-role">
            <Input id="author-role" name="role" placeholder="Senior editor" defaultValue={editing?.role ?? ""} />
          </Field>
          <Field label="Bio" htmlFor="author-bio">
            <Textarea id="author-bio" name="bio" rows={4} defaultValue={editing?.bio ?? ""} />
          </Field>
          <Field label="Avatar path" htmlFor="author-avatar">
            <Input id="author-avatar" name="avatar" placeholder="/uploads/avatar.webp" defaultValue={editing?.avatar ?? ""} />
          </Field>
          <Field label="Email" htmlFor="author-email">
            <Input id="author-email" name="email" type="email" defaultValue={editing?.email ?? ""} />
          </Field>
          <Field label="X / Twitter handle" htmlFor="author-twitter">
            <Input id="author-twitter" name="twitter" placeholder="@handle" defaultValue={editing?.twitter ?? ""} />
          </Field>
          <Field label="Website" htmlFor="author-website">
            <Input id="author-website" name="website" type="url" defaultValue={editing?.website ?? ""} />
          </Field>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" size="sm" disabled={pending}>
              {pending ? "Saving…" : editing ? "Save" : "Add"}
            </Button>
            {editing ? (
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="text-sm font-semibold text-muted hover:text-ink"
              >
                Cancel
              </button>
            ) : null}
          </div>
          <FormMessage status={state.status} message={state.message} />
        </form>
      </AdminPanel>
    </div>
  );
}
