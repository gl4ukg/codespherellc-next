import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta-card">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s build</span>
          <h2 style={{ marginTop: 18 }}>
            Have something{" "}
            <em style={{ fontStyle: "normal", color: "var(--accent)" }}>ambitious</em>
            <br />in mind?
          </h2>
          <p>
            Tell us about the product, the platform, or the IT mess you&apos;d like to clean up.
            We&apos;ll get back within one business day with a real human and a real plan.
          </p>
          <div className="cta-actions">
            <a className="btn primary lg" href={`mailto:${SITE.email}`}>
              {SITE.email} <span className="arrow">→</span>
            </a>
            <Link className="btn lg" href="/contact">Book a 30-min intro</Link>
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              justifyContent: "center",
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            <div className="focus-line"><span className="pulse" /> Accepting Q3 projects</div>
            <div className="focus-line mono">↳ Remote · US & EU timezones</div>
            <div className="focus-line mono">↳ NDA on request</div>
          </div>
        </div>
      </div>
    </section>
  );
}
