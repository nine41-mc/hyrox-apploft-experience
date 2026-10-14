/** Prefix a /public path with the basePath (static export may be served from a sub-path). */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
