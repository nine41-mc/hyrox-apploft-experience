import type { Metadata } from "next";
import { SummaryView } from "@/views/SummaryView";
import { de } from "@/content/meta";

export const metadata: Metadata = { title: de.summaryTitle };

export default function SummaryDe() {
  return <SummaryView locale="de" />;
}
