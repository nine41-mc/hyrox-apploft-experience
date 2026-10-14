"use client";

import { useEffect } from "react";
import { asset } from "@/lib/asset";

/** Registers /sw.js so the pitch keeps working offline once it has been opened. */
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register(asset("/sw.js")).catch(() => {});
  }, []);
  return null;
}
