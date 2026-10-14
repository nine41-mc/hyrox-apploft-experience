"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="eyebrow inline-flex items-center gap-2 border border-paper/40 px-4 py-3 !text-[12px] transition-colors hover:border-yellow hover:text-yellow print:hidden"
    >
      <Printer className="h-4 w-4" /> {label}
    </button>
  );
}
