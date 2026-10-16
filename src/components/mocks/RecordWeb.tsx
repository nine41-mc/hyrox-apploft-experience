"use client";

import { MapPin, UserPlus } from "lucide-react";
import { useScreenText } from "@/components/screens/ScreenLocale";

/** Browser-framed public athlete profile on hyrox.com (illustrative data). */
export function RecordWeb() {
  const t = useScreenText();
  const m = t.mocks.profile;
  const record = m.rows;
  return (
    <div className="overflow-hidden rounded-[14px] border border-ink-500 bg-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-ink-600 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="ml-3 truncate text-[12px] text-grey-300">hyrox.com/athletes/lena-k</span>
      </div>
      <div className="flex items-center justify-between border-b border-ink-600 px-5 py-3">
        <span className="wordmark text-[11px]">HYROX</span>
        <span className="hidden gap-5 text-[11px] uppercase tracking-widest text-grey-300 md:flex">
          <span>{m.nav[0]}</span>
          <span>{m.nav[1]}</span>
          <span className="text-paper">{m.nav[2]}</span>
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-[1fr_1.3fr] md:p-7">
        <div>
          <div className="grid h-16 w-16 place-items-center bg-ink-600 text-[20px] font-medium">LK</div>
          <p className="headline mt-4 text-[34px] md:text-[40px]">Lena K.</p>
          <p className="mt-1 flex items-center gap-1 text-[13px] text-grey-300">
            <MapPin className="h-3.5 w-3.5" /> {m.meta}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="bg-paper px-2 py-1 text-[11px] font-medium uppercase text-ink">{m.badges[0]}</span>
            <span className="bg-grey-300 px-2 py-1 text-[11px] font-medium uppercase text-ink">{m.badges[1]}</span>
            <span className="border border-paper/40 px-2 py-1 text-[11px] uppercase">{m.badges[2]}</span>
          </div>
          <p className="eyebrow mt-6 !text-[11px] text-grey-300">HYROX Index</p>
          <p className="headline mt-1 text-[64px] leading-none">
            <span className="hl">{t.num("69.6")}</span>
          </p>
          <span className="eyebrow mt-6 inline-flex items-center gap-2 bg-yellow px-3 py-2 !text-[11px] text-ink">
            <UserPlus className="h-3.5 w-3.5" /> {m.follow}
          </span>
        </div>
        <div>
          <p className="eyebrow !text-[11px] text-grey-300">{m.record}</p>
          <ul className="mt-3 divide-y divide-ink-600 border-y border-ink-600">
            {record.map(([d, k, place, time, score], i) => (
              <li key={d} className="flex items-center gap-3 py-2.5 text-[13px]">
                <span className="w-[62px] shrink-0 text-grey-300">{d}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-widest text-grey-300">{k}</span>
                  <span className="block truncate">{place}</span>
                </span>
                <span className="hidden text-grey-300 sm:block">{time}</span>
                <span className={`headline w-10 text-right text-[18px] ${i === 0 ? "text-yellow" : ""}`}>{t.num(score)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
