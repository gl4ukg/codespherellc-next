import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ServicesJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Codesphere LLC — Software Development & IT Solutions",
  description:
    "Codesphere LLC is a software development and IT solutions studio building web, mobile, AI and cloud platforms for ambitious companies. End-to-end engineering, design and managed IT.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <ServicesJsonLd />
      <Nav />
      <main>
        <Hero />
        <Reveal y={48}><Services /></Reveal>
        <Reveal y={48} delay={60}><Capabilities /></Reveal>
        <Reveal y={48}><Process /></Reveal>
        <Work />
        <Reveal y={32}><Stack /></Reveal>
        <Reveal y={32}><Testimonial /></Reveal>
        <Reveal y={40}><CTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}
