import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Services — Software Development, Cloud, AI & Managed IT",
  description:
    "Custom software development, mobile apps, cloud and DevOps, AI engineering, managed IT and product design. End-to-end engineering services from Codesphere LLC.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
        ]}
      />
      <Nav />
      <main>
        <section style={{ paddingTop: 80 }}>
          <div className="container">
            <span className="eyebrow">Services</span>
            <h1
              className="display"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 500,
                lineHeight: 1.0,
                margin: "16px 0 24px",
                maxWidth: "16ch",
              }}
            >
              Everything you need to ship and operate software.
            </h1>
            <p
              style={{
                color: "var(--fg-dim)",
                fontSize: 18,
                lineHeight: 1.55,
                maxWidth: 640,
                margin: 0,
              }}
            >
              Pick one service, or a combination — we staff every engagement with senior engineers
              and stay until the work is truly yours.
            </p>
          </div>
        </section>

        <section className="services" style={{ paddingTop: 80 }}>
          <div className="container">
            <div className="svc-grid">
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="svc"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="svc-icon">{s.icon}</div>
                    <div className="svc-num">
                      0{i + 1} / 0{services.length}
                    </div>
                  </div>
                  <h2
                    className="display"
                    style={{ fontSize: 22, fontWeight: 500, margin: 0, letterSpacing: "-0.01em" }}
                  >
                    {s.title}
                  </h2>
                  <p>{s.summary}</p>
                  <div className="svc-tags">
                    {s.stack.slice(0, 4).map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
