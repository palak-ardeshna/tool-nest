"use client";

import { useState } from "react";
import { DEFAULT_USD_INR, models, tokenCostInr } from "@/lib/token-cost";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });

function NumberField({ label, value, onChange, step = 1 }: { label: string; value: number; onChange: (v: number) => void; step?: number }) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <input
        type="number"
        min={0}
        step={step}
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className="mt-1 w-full rounded-md border border-line px-3 py-2 text-base"
      />
    </label>
  );
}

export function TokenCostCalculator() {
  const [modelId, setModelId] = useState<string>(models[1].id);
  const [inputTokens, setInputTokens] = useState(2000);
  const [outputTokens, setOutputTokens] = useState(800);
  const [requests, setRequests] = useState(100);
  const [usdInr, setUsdInr] = useState(DEFAULT_USD_INR);

  const model = models.find((m) => m.id === modelId) ?? models[0];
  const total = tokenCostInr(model, inputTokens, outputTokens, requests, usdInr);

  return (
    <div className="space-y-4 rounded-lg border border-line p-5">
      <label className="block text-sm font-medium text-ink">
        Model
        <select
          value={modelId}
          onChange={(e) => setModelId(e.target.value)}
          className="mt-1 w-full rounded-md border border-line px-3 py-2 text-base"
        >
          {models.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} (${m.input} in / ${m.output} out per 1M)
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Input tokens per request" value={inputTokens} onChange={setInputTokens} />
        <NumberField label="Output tokens per request" value={outputTokens} onChange={setOutputTokens} />
        <NumberField label="Requests" value={requests} onChange={setRequests} />
        <NumberField label="₹ per US dollar" value={usdInr} onChange={setUsdInr} step={0.01} />
      </div>
      <p className="rounded-md bg-surface px-4 py-3 text-lg text-ink" aria-live="polite">
        Total: <strong>{inr.format(total)}</strong>
        {requests > 0 ? <span className="text-sm text-muted"> ({inr.format(total / requests)} per request)</span> : null}
      </p>
    </div>
  );
}
