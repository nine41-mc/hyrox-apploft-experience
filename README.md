# HYROX Vision – vision site

A responsive one-pager (Desktop / Tablet / Phone) by apploft. that shows what a year-round
HYROX platform could look like in 2027: HYROX ID, Licence, Index, Home Club, Club OS.

Stack: Next.js 15 (static export), React 19, TypeScript, Tailwind CSS v4, motion, lucide-react.

## Run

```bash
npm install
npm run dev        # http://localhost:3141
npm run build      # static export to ./out (works offline via service worker)
```

## Licensed assets (not in this public repo)

This repository is **public**. The following are gitignored and must be copied in locally:

| Folder | Content | Source |
| --- | --- | --- |
| `public/fonts/licensed/` | `BrutalType-Regular.woff2`, `-Medium`, `-Bold`, `-Light` | HYROX brand font package |
| `public/images/licensed/` | `wallball`, `moment`, `sled`, `dumbbells`, `arena`, `crowd`, `ponytail` (`.jpg`, ≤1920px) | HYROX event photography |

Without them the site still builds: type falls back to Barlow, photos to dark gradients.

## Structure

- `src/content/en.ts` – all copy and sources (a `de.ts` can mirror it later)
- `src/components/sections/*` – one file per story section
- `src/components/screens/AppScreens.tsx` – illustrative app screens in the phone mockups
- `src/app/globals.css` – brand tokens (black, white, yellow `#FFED00`, Brutal Type, highlighter boxes)

Screens, persona, clubs and numbers inside the mockups are illustrative.
