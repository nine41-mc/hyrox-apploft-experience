import { MapPin, UserPlus } from "lucide-react";

/** Browser-framed public athlete profile on hyrox.com (illustrative data). */
export function RecordWeb() {
  const record = [
    ["Oct 2027", "First race", "HYROX Hamburg · Doubles", "1:24:05", "69.6"],
    ["Aug 2027", "Club Sim", "Hafen Athletics", "1:26:40", "68.1"],
    ["May 2027", "Club Sim", "Hafen Athletics", "1:28:44", "67.3"],
    ["Mar 2027", "Club Weekend", "Hafen Athletics · Rookie", "1:30:02", "66.4"],
    ["Feb 2027", "Club Sim", "Hafen Athletics · Rookie", "1:31:12", "65.8"],
  ];
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
          <span>Races</span>
          <span>Clubs</span>
          <span className="text-paper">Athletes</span>
        </span>
      </div>
      <div className="grid gap-6 p-5 md:grid-cols-[1fr_1.3fr] md:p-7">
        <div>
          <div className="grid h-16 w-16 place-items-center bg-ink-600 text-[20px] font-medium">LK</div>
          <p className="headline mt-4 text-[34px] md:text-[40px]">Lena K.</p>
          <p className="mt-1 flex items-center gap-1 text-[13px] text-grey-300">
            <MapPin className="h-3.5 w-3.5" /> Hafen Athletics · Hamburg · Women 30–34
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="bg-paper px-2 py-1 text-[11px] font-medium uppercase text-ink">1st race</span>
            <span className="bg-grey-300 px-2 py-1 text-[11px] font-medium uppercase text-ink">Regular</span>
            <span className="border border-paper/40 px-2 py-1 text-[11px] uppercase">4 sims</span>
          </div>
          <p className="eyebrow mt-6 !text-[11px] text-grey-300">HYROX Index</p>
          <p className="headline mt-1 text-[64px] leading-none">
            <span className="hl">69.6</span>
          </p>
          <span className="eyebrow mt-6 inline-flex items-center gap-2 bg-yellow px-3 py-2 !text-[11px] text-ink">
            <UserPlus className="h-3.5 w-3.5" /> Follow
          </span>
        </div>
        <div>
          <p className="eyebrow !text-[11px] text-grey-300">Record</p>
          <ul className="mt-3 divide-y divide-ink-600 border-y border-ink-600">
            {record.map(([d, k, place, t, score], i) => (
              <li key={d} className="flex items-center gap-3 py-2.5 text-[13px]">
                <span className="w-[62px] shrink-0 text-grey-300">{d}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-widest text-grey-300">{k}</span>
                  <span className="block truncate">{place}</span>
                </span>
                <span className="hidden text-grey-300 sm:block">{t}</span>
                <span className={`headline w-10 text-right text-[18px] ${i === 0 ? "text-yellow" : ""}`}>{score}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
