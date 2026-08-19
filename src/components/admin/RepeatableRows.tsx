"use client";

import { Input, Textarea } from "@/components/admin/FormControls";

export type RowField = { key: string; label: string; multiline?: boolean };

/**
 * Generic editor for a list of objects (FAQs, alternatives). The value is kept
 * by the parent form and serialised into a hidden input on submit.
 */
export function RepeatableRows<T extends Record<string, string>>({
  legend,
  fields,
  rows,
  onChange,
  empty,
  addLabel,
}: {
  legend: string;
  fields: RowField[];
  rows: T[];
  onChange: (rows: T[]) => void;
  empty: T;
  addLabel: string;
}) {
  const update = (index: number, key: string, value: string) =>
    onChange(rows.map((row, i) => (i === index ? { ...row, [key]: value } : row)));

  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">{legend}</legend>

      <div className="mt-3 space-y-3">
        {rows.map((row, index) => (
          <div key={index} className="rounded-lg border border-line p-3">
            <div className="space-y-2">
              {fields.map((field) => {
                const id = `${legend}-${index}-${field.key}`;
                const shared = {
                  id,
                  value: row[field.key] ?? "",
                  placeholder: field.label,
                  "aria-label": `${field.label} ${index + 1}`,
                  onChange: (
                    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                  ) => update(index, field.key, event.target.value),
                };
                return field.multiline ? (
                  <Textarea key={field.key} rows={3} {...shared} />
                ) : (
                  <Input key={field.key} {...shared} />
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => onChange(rows.filter((_, i) => i !== index))}
              className="mt-2 text-xs font-semibold text-rose-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onChange([...rows, { ...empty }])}
        className="mt-3 rounded-lg border border-line px-3 py-1.5 text-sm font-semibold text-ink hover:bg-surface"
      >
        {addLabel}
      </button>
    </fieldset>
  );
}
