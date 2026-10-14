"use client";

import { useEffect } from "react";
import { asset } from "@/lib/asset";

/**
 * Registers /sw.js so the pitch keeps working offline once it has been opened.
 * Updates are picked up on the next page load (pages are always revalidated) –
 * no forced reload, so nothing jumps in the middle of a pitch.
 */
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register(asset("/sw.js"), { updateViaCache: "none" }).catch(() => {});
  }, []);
  return null;
}
