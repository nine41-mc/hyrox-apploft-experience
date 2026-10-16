import type { Metadata } from "next";
import { PassView } from "@/views/PassView";
import { de } from "@/content/meta";

export const metadata: Metadata = { title: de.prototypeTitle };

export default function PassDe() {
  return <PassView locale="de" />;
}
