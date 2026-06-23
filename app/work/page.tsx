import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Work & Case Studies — Software, Mobile, AI & Cloud Projects",
  description:
    "Selected case studies from Codesphere LLC: web platforms, mobile apps, AI features and cloud infrastructure built for fintech, healthtech, logistics and energy clients.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Work", url: `${SITE_URL}/work` },
        ]}
      />
      <Nav />
      <main>
        <section style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="container">
            <span className="eyebrow">Work</span>
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
              A few recent things we&apos;ve shipped.
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
              We work under NDA often — what&apos;s here is a small slice. Click into any case for
              the story, results and stack.
            </p>
          </div>
        </section>

        <section className="work" style={{ paddingTop: 60 }}>
          <div className="container">
            <div className="work-grid">
              {projects.map((p, i) => {
                const wrapStyle: React.CSSProperties = {
                  textDecoration: "none",
                  color: "inherit",
                };
                const inner = (
                  <>
                    <div className={`case-art ${p.artClass}`}>
                      {p.image && !p.deviceFrame ? (
                        <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                      ) : (
                        <div className="device">
                          <div className="bar"><i /><i /><i /></div>
                          {p.deviceFrame && p.image ? (
                            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                              <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                          ) : (
                            <div className="content">
                              <div className="ln a" />
                              <div className="ln" />
                              <div className="ln s" />
                              <div className="blocks">
                                <div className="blk" /><div className="blk" /><div className="blk" />
                              </div>
                              <div className="ln s" />
                              <div className="ln" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="case-meta">
                      <div className="kicker">
                        <span>
                          {p.industry} · {p.client} · {p.duration}
                        </span>
                        <span>↗</span>
                      </div>
                      <h2
                        className="display"
                        style={{ fontSize: 22, fontWeight: 500, margin: 0, letterSpacing: "-0.01em" }}
                      >
                        {p.title}
                      </h2>
                      <p>{p.summary}</p>
                    </div>
                  </>
                );

                // First two full-width, rest in a 2-up row
                if (i < 2) {
                  return (
                    <Link key={p.slug} href={`/work/${p.slug}`} className="case" style={wrapStyle}>
                      {inner}
                    </Link>
                  );
                }
                return null;
              })}
              <div className="row2">
                {projects.slice(2).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/work/${p.slug}`}
                    className="case"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className={`case-art ${p.artClass}`}>
                      {p.image && !p.deviceFrame ? (
                        <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                      ) : (
                        <div className="device">
                          <div className="bar"><i /><i /><i /></div>
                          {p.deviceFrame && p.image ? (
                            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                              <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                          ) : (
                            <div className="content">
                              <div className="ln a" />
                              <div className="ln" />
                              <div className="ln s" />
                              <div className="blocks">
                                <div className="blk" /><div className="blk" /><div className="blk" />
                              </div>
                              <div className="ln s" />
                              <div className="ln" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="case-meta">
                      <div className="kicker">
                        <span>
                          {p.industry} · {p.client} · {p.duration}
                        </span>
                        <span>↗</span>
                      </div>
                      <h2
                        className="display"
                        style={{ fontSize: 22, fontWeight: 500, margin: 0, letterSpacing: "-0.01em" }}
                      >
                        {p.title}
                      </h2>
                      <p>{p.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
