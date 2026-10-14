// Post-build: inject the list of exported files + a content version into out/sw.js.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const out = "out";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const skip = (p) => p === "sw.js" || p.endsWith(".map") || p === ".nojekyll";

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else files.push(relative(out, full).split(sep).join("/"));
  }
};
walk(out);

const hash = createHash("sha256");
const urls = [];
for (const f of files.filter((f) => !skip(f)).sort()) {
  hash.update(f).update(readFileSync(join(out, f)));
  // index.html → directory URL (trailingSlash: true)
  const path = f === "index.html" ? "" : f.endsWith("/index.html") ? f.slice(0, -"index.html".length) : f;
  urls.push(`${base}/${path}`);
}
const version = hash.digest("hex").slice(0, 12);

const swPath = join(out, "sw.js");
const sw = readFileSync(swPath, "utf8")
  .replace('const VERSION = "dev";', `const VERSION = "${version}";`)
  .replace("const PRECACHE = [];", `const PRECACHE = ${JSON.stringify(urls)};`);
writeFileSync(swPath, sw);
console.log(`sw.js: ${urls.length} files precached, version ${version}`);
