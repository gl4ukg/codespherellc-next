import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { SITE, SITE_URL } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact — Get a quote for your software or IT project",
  description: `Tell Codesphere LLC about your software, mobile, AI or IT project and we'll get back within one business day. Email ${SITE.email}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ]}
      />
      <Nav />
      <main>
        <section style={{ paddingTop: 80, paddingBottom: 40 }}>
          <div className="container">
            <span className="eyebrow">Contact</span>
            <h1
              className="display"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                margin: "16px 0 24px",
                maxWidth: "16ch",
              }}
            >
              Let&apos;s talk about your project.
            </h1>
            <p
              style={{
                color: "var(--fg-dim)",
                fontSize: 18,
                lineHeight: 1.55,
                maxWidth: 640,
                margin: "0 0 32px",
              }}
            >
              The fastest way to start is a short email or a 30-min intro call. We&apos;ll respond
              within one business day with a real human and a real plan.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn primary lg" href={`mailto:${SITE.email}`}>
                {SITE.email} <span className="arrow">→</span>
              </a>
              <a className="btn lg" href={`tel:${SITE.phone}`}>
                🇽🇰 {SITE.phone}
              </a>
              <a className="btn lg" href={`tel:${SITE.phoneDubai}`}>
                🇦🇪 {SITE.phoneDubai}
              </a>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
              {SITE.locations.map((l) => (
                <div key={l.city} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--fg-dim)" }}>
                  <span style={{ color: "var(--accent)" }}>◎</span>
                  {l.city}, {l.country}
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
