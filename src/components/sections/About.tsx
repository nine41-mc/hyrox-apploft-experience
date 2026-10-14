import type { Content } from "@/content";
import { Src } from "@/components/ui/Section";

/** Small closing block about apploft. – the full credentials live in a separate deck. */
export function About({ c }: { c: Content }) {
  const { about } = c;
  return (
    <section className="border-t border-ink-600 bg-ink-800 py-12 text-paper md:py-14">
      <div className="container-site grid gap-8 md:grid-cols-3 md:gap-10">
        <div>
          <p className="headline text-[28px]">{about.k}</p>
          <p className="mt-3 text-[14px] leading-relaxed text-paper/75">{about.desc}</p>
        </div>
        <div>
          <p className="eyebrow !text-[11px] text-grey-300">{about.refs.k}_</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {about.refs.items.map((r) => (
              <li key={r} className="border border-paper/25 px-2.5 py-1.5 text-[13px]">
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-[11px] text-grey-300">{about.partner.k}_</p>
          <p className="mt-3 text-[14px] leading-relaxed text-paper/85">
            <span className="hl mr-1">EGYM</span> {about.partner.v}
            <Src n={about.partner.source} />
          </p>
        </div>
      </div>
    </section>
  );
}
