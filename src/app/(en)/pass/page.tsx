import type { Metadata } from "next";
import { PassView } from "@/views/PassView";
import { en } from "@/content/meta";

export const metadata: Metadata = { title: en.prototypeTitle };

export default function Pass() {
  return <PassView locale="en" />;
}
