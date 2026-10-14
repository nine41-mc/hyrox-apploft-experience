import type { Metadata } from "next";
import { SummaryView } from "@/views/SummaryView";
import { en } from "@/content/meta";

export const metadata: Metadata = { title: en.summaryTitle };

export default function Summary() {
  return <SummaryView locale="en" />;
}
