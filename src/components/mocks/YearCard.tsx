/** Shareable "Your HYROX Year" recap card (story format) – illustrative. */
export function YearCard({ className }: { className?: string }) {
  const stats = [
    ["1", "first race"],
    ["4", "judged sims"],
    ["86", "workouts"],
  ];
  return (
    <div aria-hidden className={`aspect-[9/16] w-[150px] bg-yellow p-3 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] ${className ?? ""}`}>
      <p className="wordmark text-[8px]">HYROX</p>
      <p className="headline mt-3 text-[20px] leading-[0.95]">
        Lena’s
        <br />
        HYROX
        <br />
        Year_
      </p>
      <p className="mt-1 text-[8px] font-medium uppercase tracking-widest">2027</p>
      <ul className="mt-3 space-y-1.5">
        {stats.map(([v, k]) => (
          <li key={k} className="flex items-baseline gap-1.5">
            <span className="headline text-[18px] leading-none">{v}</span>
            <span className="text-[8px] uppercase tracking-wider">{k}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 bg-ink px-2 py-1.5 text-paper">
        <p className="text-[7px] uppercase tracking-widest text-grey-300">Index</p>
        <p className="headline text-[16px] leading-none">~64 → 69.6</p>
      </div>
      <p className="mt-2 text-[8px] font-medium uppercase tracking-wider">#BeTheRecord</p>
    </div>
  );
}
