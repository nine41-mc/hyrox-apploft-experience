import { cn } from "./cn";

/**
 * Brand headline: one line per array entry, the `hl` part sits in a yellow highlighter box.
 * Sizes: xl = hero, lg = section, md = sub.
 */
export function Headline({
  lines,
  hl,
  as: Tag = "h2",
  size = "lg",
  className,
  tone = "yellow",
}: {
  lines: readonly string[];
  hl?: string;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  className?: string;
  tone?: "yellow" | "white";
}) {
  const sizes = {
    xl: "text-[19vw] md:text-[15vw] lg:text-[200px]",
    lg: "text-[44px] md:text-[72px] lg:text-[104px]",
    md: "text-[32px] md:text-[44px] lg:text-[56px]",
  };
  return (
    <Tag className={cn("headline", sizes[size], className)}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {renderLine(line, hl, tone)}
        </span>
      ))}
    </Tag>
  );
}

function renderLine(line: string, hl: string | undefined, tone: "yellow" | "white") {
  if (!hl || !line.includes(hl)) return line;
  const [before, after] = line.split(hl);
  return (
    <>
      {before}
      <span className={tone === "yellow" ? "hl" : "hl-white"}>{hl}</span>
      {after}
    </>
  );
}
