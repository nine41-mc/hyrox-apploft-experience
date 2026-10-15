import { Radio } from "lucide-react";
import type { Content } from "@/content";

/** Global Club Weekend leaderboard – browser / gym-screen view (illustrative data). */
export function LeaderboardMock({ mock }: { mock: Content["clubWeekend"]["mock"] }) {
  const rows = [
    ["1", "Bondi Engine", "Sydney", "AU", "1:02:18"],
    ["2", "Shoreditch Hybrid", "London", "GB", "1:02:51"],
    ["3", "Elbe Engine", "Hamburg", "DE", "1:03:07"],
    ["4", "Brooklyn Forge", "New York", "US", "1:03:22"],
    ["5", "Box Poblenou", "Barcelona", "ES", "1:03:40"],
  ];
  return (
    <div className="overflow-hidden rounded-[14px] border border-ink-500 bg-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-ink-600 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="ml-3 truncate text-[12px] text-grey-300">hyrox.com/club-weekend</span>
      </div>
      <div className="p-5 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="wordmark text-[11px] text-grey-300">HYROX</p>
            <p className="headline mt-2 text-[26px] md:text-[32px]">{mock.title}</p>
          </div>
          <span className="eyebrow flex items-center gap-1.5 bg-yellow px-2.5 py-1.5 !text-[11px] text-ink">
            <Radio className="h-3.5 w-3.5" /> {mock.live}
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {mock.stats.map(([v, k]) => (
            <div key={k} className="bg-ink-700 p-3 md:p-4">
              <p className="headline text-[20px] min-[400px]:text-[24px] md:text-[32px]">{v}</p>
              <p className="text-[11px] uppercase tracking-wider text-grey-300">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-1 text-[11px] uppercase tracking-wider">
          <span className="bg-paper px-3 py-2 font-medium text-ink">{mock.tabs[0]}</span>
          <span className="border border-ink-500 px-3 py-2 text-grey-300">{mock.tabs[1]}</span>
        </div>
        <ul className="mt-3 divide-y divide-ink-600 border-y border-ink-600">
          {rows.map(([pos, club, city, cc, time]) => (
            <li key={club} className="flex items-center gap-3 py-2.5 text-[13px] md:text-[14px]">
              <span className="headline w-5 text-[18px] text-yellow">{pos}</span>
              <span className="min-w-0 flex-1 truncate">{club}</span>
              <span className="hidden text-grey-300 sm:block">{city}</span>
              <span className="w-7 border border-ink-500 text-center text-[10px] text-grey-300">{cc}</span>
              <span className="w-[62px] text-right font-medium">{time}</span>
            </li>
          ))}
          <li className="flex items-center gap-3 bg-yellow px-2 py-2.5 text-[13px] text-ink md:text-[14px]">
            <span className="headline w-5 text-[18px]">27</span>
            <span className="min-w-0 flex-1 truncate font-medium">Hafen Athletics · #3 Hamburg North</span>
            <span className="w-7 border border-ink/40 text-center text-[10px]">DE</span>
            <span className="w-[62px] text-right font-medium">1:05:12</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
