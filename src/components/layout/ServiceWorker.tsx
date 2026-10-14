"use client";

import { useEffect } from "react";
import { asset } from "@/lib/asset";

/**
 * Registers /sw.js so the pitch keeps working offline once it has been opened.
 * When an updated worker takes over a page that an older worker served, reload once
 * so visitors never get stuck on a stale version.
 */
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    const hadController = !!navigator.serviceWorker.controller;
    let reloaded = false;
    const onChange = () => {
      if (!hadController || reloaded) return;
      reloaded = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", onChange);
    navigator.serviceWorker
      .register(asset("/sw.js"), { updateViaCache: "none" })
      .then((reg) => reg.update())
      .catch(() => {});
    return () => navigator.serviceWorker.removeEventListener("controllerchange", onChange);
  }, []);
  return null;
}
