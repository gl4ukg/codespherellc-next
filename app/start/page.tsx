import type { Metadata } from "next";
import StartWizard from "@/components/StartWizard";

export const metadata: Metadata = {
  title: "Start a project — Codesphere LLC",
  description: "Tell us about your project and we'll get back to you within 24 hours.",
};

export default function StartPage() {
  return <StartWizard />;
}
