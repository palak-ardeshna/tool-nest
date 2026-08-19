"use client";

import { useState } from "react";

export function CopyPathButton({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(path);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="text-xs font-semibold text-accent hover:underline"
    >
      {copied ? "Copied" : "Copy path"}
    </button>
  );
}
