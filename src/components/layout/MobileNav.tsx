"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/config/site";
import { SearchBar } from "@/components/search/SearchBar";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock the page behind the panel while it is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid h-11 w-11 place-items-center rounded-lg border border-line text-ink"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          {open ? (
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-white px-4 pb-10 pt-5"
        >
          <SearchBar size="md" />
          <nav aria-label="Mobile" onClick={close} className="mt-5 flex flex-col">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3.5 text-base font-semibold text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/articles" className="border-b border-line py-3.5 text-base font-semibold text-ink">
              All Articles
            </Link>
            <Link href="/about" className="py-3.5 text-base font-semibold text-muted">
              About ToolNest
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
