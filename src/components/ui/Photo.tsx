/* eslint-disable @next/next/no-img-element */
import { asset } from "@/lib/asset";
import { cn } from "./cn";

/**
 * Monochrome event photo. Files live in /public/images/licensed (gitignored) –
 * when a file is missing the dark gradient underneath still carries the layout.
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
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br from-ink-600 via-ink-800 to-ink", className)}>
      <img
        src={asset(`/images/licensed/${name}.jpg`)}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("absolute inset-0 h-full w-full object-cover grayscale", imgClassName)}
      />
    </div>
  );
}
