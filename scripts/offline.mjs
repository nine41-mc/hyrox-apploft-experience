// Offline package for presenting without internet: a root-path build (with the local licensed
// font and photos), a tiny zero-dependency static server and a double-click starter.
// Output: "HYROX Offline/" (gitignored – it contains licensed assets).
import { execSync, spawn, spawnSync } from "node:child_process";
import { chmodSync, cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const target = "HYROX Offline";
const site = join(target, "website");

for (const dir of ["public/fonts/licensed", "public/images/licensed"]) {
  if (!existsSync(dir) || readdirSync(dir).length === 0) {
    console.error(`Missing licensed assets in ${dir} – the offline package would fall back to placeholders.`);
    process.exit(1);
  }
}

// root-path build: no GitHub Pages sub-path
rmSync(".next", { recursive: true, force: true });
execSync("npm run build", { stdio: "inherit", env: { ...process.env, NEXT_PUBLIC_BASE_PATH: "" } });

rmSync(site, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
cpSync("out", site, { recursive: true });

writeFileSync(
  join(target, "server.mjs"),
  `// Serves ./website on http://localhost:4173 – no internet, no dependencies.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "website");
const port = 4173;
const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".webmanifest": "application/manifest+json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff",
  ".otf": "font/otf", ".ttf": "font/ttf", ".txt": "text/plain; charset=utf-8",
};

createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\\.\\.[/\\\\])+/, "");
  let file = join(root, path);
  try {
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
  } catch {
    file = join(root, "404.html");
    res.statusCode = 404;
  }
  try {
    const body = await readFile(file);
    res.setHeader("Content-Type", types[extname(file)] ?? "application/octet-stream");
    res.end(body);
  } catch {
    res.statusCode = 404;
    res.end("Not found");
  }
}).listen(port, "127.0.0.1", () => console.log(\`HYROX Vision läuft auf http://localhost:\${port}/de/ – Fenster offen lassen, Ctrl+C beendet.\`));
`,
);

const starter = join(target, "HYROX Vision offline.command");
writeFileSync(
  starter,
  `#!/bin/bash
# Doppelklick: startet die HYROX-Vision-Website lokal und öffnet sie im Browser.
cd "$(dirname "$0")"
node server.mjs &
SERVER=$!
sleep 1
open "http://localhost:4173/de/"
wait $SERVER
`,
);
chmodSync(starter, 0o755);

writeFileSync(
  join(target, "LIES MICH.txt"),
  `HYROX Offline – Stand ${new Date().toLocaleString("de-DE")}

Website (ohne Internet, mit Original-Schrift und Fotos)
1. Doppelklick auf „HYROX Vision offline.command“ (beim ersten Mal ggf. Rechtsklick → Öffnen).
2. Der Browser öffnet http://localhost:4173/de/ – Englisch: http://localhost:4173/
   Pass: /de/pass/ bzw. /pass/ · Summary: /de/summary/ bzw. /summary/
3. Das Terminal-Fenster offen lassen; schließen beendet die Website.

Website als PDF (Ordner „Website als PDF“)
Startseite, HYROX Pass und Executive Summary – je Deutsch und Englisch. Statischer Ausdruck:
ohne Interaktion (Prototyp, Hover-Details, wechselndes Statement).

Strategie-Dokument
„HYROX Experience 2027 – Strategie & Scope.pdf“ (Research-Tab, intern – nicht für HYROX).

Backup iPhone/iPad
Live-Seite in Safari öffnen, „Zum Home-Bildschirm“, alle Seiten einmal aufrufen, im Flugmodus prüfen
(ohne Original-Schrift und Fotos).
`,
);

// the website as PDF (print layout, A4) – rendered by headless Chrome from the local server
const chromeBin = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
if (existsSync(chromeBin)) {
  const pdfDir = join(target, "Website als PDF");
  mkdirSync(pdfDir, { recursive: true });
  const server = spawn("node", ["server.mjs"], { cwd: target, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 1000));
  const pages = [
    ["/de/", "1 Startseite (DE).pdf"], ["/de/pass/", "2 HYROX Pass (DE).pdf"], ["/de/summary/", "3 Executive Summary (DE).pdf"],
    ["/", "1 Home (EN).pdf"], ["/pass/", "2 HYROX Pass (EN).pdf"], ["/summary/", "3 Executive Summary (EN).pdf"],
  ];
  for (const [path, file] of pages) {
    spawnSync(chromeBin, [
      "--headless=new", "--no-first-run", `--user-data-dir=${mkdtempSync(join(tmpdir(), "hyrox-pdf-"))}`,
      "--no-pdf-header-footer", "--virtual-time-budget=10000", `--print-to-pdf=${join(pdfDir, file)}`, `http://localhost:4173${path}`,
    ], { stdio: "ignore", timeout: 90000 });
    console.log(`PDF: ${file}`);
  }
  server.kill();
} else {
  console.warn("Google Chrome not found – skipping the website PDFs.");
}

console.log(`\nOffline-Paket fertig: ${target}/`);
