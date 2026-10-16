import {
  Activity,
  Building2,
  Coins,
  CreditCard,
  Fingerprint,
  Plane,
  QrCode,
  Ticket,
  Timer,
  Trophy,
  Footprints,
  type LucideIcon,
} from "lucide-react";
import type { Content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/components/ui/cn";

const ICONS: Record<string, LucideIcon> = {
  gym: Building2,
  activity: Activity,
  timer: Timer,
  travel: Plane,
  card: CreditCard,
  coins: Coins,
  trophy: Trophy,
  ticket: Ticket,
  qr: QrCode,
};

type Eco = Content["pass"]["ecosystem"];
type Item = Eco["partner"][number];

/** One round node of the diagram: icon on top, one or two label lines below. */
function Node({ x, y, r, item, tone }: { x: number; y: number; r: number; item: Item; tone: "paper" | "yellow" | "ring" }) {
  const Icon = ICONS[item.icon];
  const shift = (item.t.length - 1) * 5.5;
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={r}
        className={cn(tone === "paper" && "fill-paper", tone === "yellow" && "fill-yellow", tone === "ring" && "fill-ink stroke-yellow")}
        strokeWidth={tone === "ring" ? 1.5 : 0}
      />
      <Icon x={x - 11} y={y - 22 - shift} size={22} strokeWidth={1.75} className={tone === "ring" ? "text-yellow" : "text-ink"} />
      {item.t.map((l, i) => (
        <text
          key={l}
          x={x}
          y={y + 13 - shift + i * 13}
          textAnchor="middle"
          className={cn("text-[11px] font-medium", tone === "ring" ? "fill-paper" : "fill-ink")}
        >
          {l}
        </text>
      ))}
    </g>
  );
}

/** The Pass as the hub between athletes, partners and HYROX – diagram on tablet/desktop, stacked groups on phones and tablets. */
export function PassEcosystem({ e }: { e: Eco }) {
  return (
    <>
      <p className="eyebrow text-grey-300">{e.k}_</p>

      {/* desktop: diagram */}
      <Reveal className="mt-5 hidden overflow-hidden rounded-[24px] border border-ink-600 bg-[#0b0b0b] lg:block">
        <svg viewBox="-110 0 900 470" role="img" aria-label={e.desc} className="block h-auto w-full">
          <circle cx="150" cy="225" r="235" className="fill-ink-800" />
          <circle cx="780" cy="225" r="345" className="fill-yellow/10" />
          <circle cx="760" cy="225" r="140" className="fill-yellow" />

          <g className="stroke-paper/60" strokeWidth={1} fill="none">
            <line x1="124" y1="225" x2="177" y2="225" />
            <line x1="253" y1="225" x2="298" y2="225" />
            <line x1="112" y1="187" x2="160" y2="135" />
            <line x1="112" y1="263" x2="160" y2="315" />
            <path d="M328 80 L370 80 L370 153" />
            <line x1="442" y1="225" x2="480" y2="225" />
            <path d="M430 185 L465 120 L480 120" />
            <path d="M430 265 L465 330 L480 330" />
            <line x1="560" y1="120" x2="625" y2="190" />
            <line x1="560" y1="225" x2="620" y2="225" />
            <line x1="560" y1="330" x2="625" y2="260" />
            <line x1="345" y1="292" x2="337" y2="337" />
            <line x1="395" y1="292" x2="403" y2="337" />
          </g>

          {/* athlete */}
          <circle cx="80" cy="225" r="44" className="fill-yellow" />
          <Footprints x={68} y={194} size={24} strokeWidth={1.75} className="text-ink" />
          <text x="80" y="242" textAnchor="middle" className="fill-ink text-[12px] font-medium uppercase tracking-[0.1em]">
            {e.athlete}
          </text>

          {/* partner side */}
          <Node x={190} y={105} r={38} item={e.partner[0]} tone="paper" />
          <Node x={215} y={225} r={38} item={e.partner[1]} tone="paper" />
          <Node x={190} y={345} r={38} item={e.partner[2]} tone="paper" />
          <Node x={290} y={80} r={38} item={e.partner[3]} tone="paper" />

          {/* the Pass */}
          <circle cx="370" cy="225" r="72" className="fill-yellow stroke-paper" strokeWidth={2} strokeDasharray="4 4" />
          <Fingerprint x={346} y={166} size={48} strokeWidth={1.5} className="text-ink" />
          {e.pass.map((l, i) => (
            <text key={l} x="370" y={240 + i * 18} textAnchor="middle" className="fill-ink text-[15px] font-medium uppercase tracking-[0.1em]">
              {l}
            </text>
          ))}
          <Node x={330} y={372} r={34} item={e.wallet[0]} tone="ring" />
          <Node x={410} y={372} r={34} item={e.wallet[1]} tone="ring" />

          {/* HYROX side */}
          <Node x={520} y={120} r={40} item={e.hyrox[0]} tone="yellow" />
          <Node x={520} y={225} r={40} item={e.hyrox[1]} tone="yellow" />
          <Node x={520} y={330} r={40} item={e.hyrox[2]} tone="yellow" />
          <text x="708" y="230" textAnchor="middle" className="fill-ink text-[15px] font-medium tracking-[0.3em]">
            HYROX
          </text>

          <text x="-70" y="445" className="fill-paper text-[11px] font-medium uppercase tracking-[0.14em]">
            {e.left}
          </text>
          <text x="750" y="445" textAnchor="end" className="fill-paper text-[11px] font-medium uppercase tracking-[0.14em]">
            {e.right}
          </text>
        </svg>
      </Reveal>

      {/* phones and tablets: three stacked groups */}
      <div className="mt-5 space-y-3 lg:hidden">
        <Reveal className="rounded-[24px] bg-ink-800 p-5">
          <p className="eyebrow !text-[11px] text-grey-300">{e.left}</p>
          <Chips items={e.partner} tone="paper" />
        </Reveal>
        <Reveal className="rounded-[24px] bg-yellow p-5 text-ink">
          <p className="headline flex items-center gap-3 text-[32px]">
            <Fingerprint className="h-8 w-8" strokeWidth={1.5} aria-hidden />
            {e.pass.join(" ")}
          </p>
          <Chips items={e.wallet} tone="ink" />
        </Reveal>
        <Reveal className="rounded-[24px] border border-yellow/60 p-5">
          <p className="eyebrow !text-[11px] text-yellow">{e.right}</p>
          <Chips items={e.hyrox} tone="yellow" />
        </Reveal>
      </div>
    </>
  );
}

function Chips({ items, tone }: { items: readonly Item[]; tone: "paper" | "ink" | "yellow" }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((it) => {
        const Icon = ICONS[it.icon];
        return (
          <li
            key={it.icon}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-2 text-[14px] font-medium",
              tone === "paper" && "bg-paper text-ink",
              tone === "ink" && "bg-ink text-paper",
              tone === "yellow" && "bg-yellow text-ink",
            )}
          >
            <Icon className={cn("h-4 w-4 shrink-0", tone === "ink" && "text-yellow")} aria-hidden />
            {it.t.join(" ").replace("- ", "-")}
          </li>
        );
      })}
    </ul>
  );
}
