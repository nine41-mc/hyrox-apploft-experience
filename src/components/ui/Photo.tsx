"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { asset } from "@/lib/asset";
import { cn } from "./cn";

/**
 * Monochrome event photo. Files live in /public/images/licensed (gitignored) –
 * when a file is missing the image hides itself and the dark gradient carries the layout.
 */
export function Photo({
  name,
  alt,
  className,
  imgClassName,
  priority,
}: {
  name: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [missing, setMissing] = useState(false);
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br from-ink-600 via-ink-800 to-ink", className)}>
      {!missing && (
        <img
          src={asset(`/images/licensed/${name}.jpg`)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setMissing(true)}
          ref={(el) => {
            // errors that fire before hydration don't reach onError
            if (el && el.complete && el.naturalWidth === 0) setMissing(true);
          }}
          className={cn("absolute inset-0 h-full w-full object-cover grayscale", imgClassName)}
        />
      )}
    </div>
  );
}
