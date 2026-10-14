import type { Metadata } from "next";
import { HomeView } from "@/views/HomeView";
import { de } from "@/content/meta";

export const metadata: Metadata = { title: de.title, description: de.description };

export default function HomeDe() {
  return <HomeView locale="de" />;
}
