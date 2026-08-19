"use client";

import { useActionState, useState } from "react";
import { deleteCategoryAction, saveCategoryAction, type ActionState } from "@/app/actions/admin";
import { AdminPanel, Field, FormMessage, Input, Select, Textarea } from "@/components/admin/FormControls";
import { ConfirmSubmit } from "@/components/admin/ConfirmSubmit";
import { Button } from "@/components/ui/Button";

type Category = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  position: number;
  parentId: string | null;
  parent: { name: string } | null;
  _count: { articles: number };
};

const initialState: ActionState = { status: "idle" };

export function CategoryManager({ categories }: { categories: Category[] }) {
  const [state, formAction, pending] = useActionState(saveCategoryAction, initialState);
  const [editing, setEditing] = useState<Category | null>(null);

  const parents = categories.filter((category) => !category.parentId && category.id !== editing?.id);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="overflow-x-auto rounded-card border border-line bg-white">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="border-b border-line text-left text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-5 py-3 font-bold">Name</th>
              <th className="px-5 py-3 font-bold">Parent</th>
              <th className="px-5 py-3 font-bold">Articles</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-5 py-3">
                  <span className="font-semibold text-ink">{category.name}</span>
                  <span className="ml-2 text-xs text-muted">/{category.slug}</span>
                </td>
                <td className="px-5 py-3 text-muted">{category.parent?.name ?? "—"}</td>
                <td className="px-5 py-3 text-muted">{category._count.articles}</td>
                <td className="px-5 py-3">
                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setEditing(category)}
                      className="text-xs font-semibold text-accent hover:underline"
                    >
                      Edit
                    </button>
                    {category._count.articles === 0 ? (
                      <form action={deleteCategoryAction}>
                        <input type="hidden" name="id" value={category.id} />
                        <ConfirmSubmit
                          message={`Delete “${category.name}”?`}
                          className="text-xs font-semibold text-rose-600 hover:underline"
                        >
                          Delete
                        </ConfirmSubmit>
                      </form>
                    ) : (
                      <span className="text-xs text-muted" title="Move or delete its articles first">
                        In use
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {!categories.length ? (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-muted">
                  No categories yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <AdminPanel title={editing ? `Edit ${editing.name}` : "Add category"}>
        <form action={formAction} className="space-y-4" key={editing?.id ?? "new"}>
          {editing ? <input type="hidden" name="id" value={editing.id} /> : null}

          <Field label="Name" htmlFor="category-name">
            <Input id="category-name" name="name" required defaultValue={editing?.name ?? ""} />
          </Field>
          <Field label="Slug" htmlFor="category-slug" hint="Leave empty to generate from the name.">
            <Input id="category-slug" name="slug" defaultValue={editing?.slug ?? ""} />
          </Field>
          <Field label="Description" htmlFor="category-description">
            <Textarea id="category-description" name="description" rows={3} defaultValue={editing?.description ?? ""} />
          </Field>
          <Field label="Parent" htmlFor="category-parent">
            <Select id="category-parent" name="parentId" defaultValue={editing?.parentId ?? ""}>
              <option value="">None (top level)</option>
              {parents.map((parent) => (
                <option key={parent.id} value={parent.id}>
                  {parent.name}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Position" htmlFor="category-position" hint="Lower numbers sort first.">
            <Input id="category-position" name="position" type="number" defaultValue={editing?.position ?? 0} />
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
