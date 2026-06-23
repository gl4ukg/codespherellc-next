import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { projects, getProjectBySlug } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbJsonLd, ProjectJsonLd } from "@/components/JsonLd";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProjectBySlug(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${p.client}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.summary,
      url: `${SITE_URL}/work/${p.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.summary,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const p = getProjectBySlug(params.slug);
  if (!p) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Work", url: `${SITE_URL}/work` },
          { name: p.title, url: `${SITE_URL}/work/${p.slug}` },
        ]}
      />
      <ProjectJsonLd
        title={p.title}
        description={p.summary}
        slug={p.slug}
        year={p.year}
      />

      <Nav />
      <main>
        <section style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="container">
            <div
              className="mono"
              style={{
                color: "var(--fg-mute)",
                fontSize: 12,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              <Link href="/work" style={{ color: "inherit" }}>← All work</Link>
            </div>

            <div
              className="mono"
              style={{
                color: "var(--fg-mute)",
                fontSize: 12,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <span>{p.industry}</span>
              <span>·</span>
              <span>{p.client}</span>
              <span>·</span>
              <span>{p.year}</span>
              <span>·</span>
              <span>{p.duration}</span>
            </div>

            <h1
              className="display"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                margin: "20px 0 32px",
                maxWidth: "20ch",
              }}
            >
              {p.title}
            </h1>

            <div className={`case-art ${p.artClass}`} style={{ borderRadius: "var(--radius)", height: 480 }}>
              {p.image && !p.deviceFrame ? (
                <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} sizes="100vw" />
              ) : (
                <div className="device">
                  <div className="bar"><i /><i /><i /></div>
                  {p.deviceFrame && p.image ? (
                    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                      <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="100vw" />
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
                      <div className="ln s" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 40, paddingBottom: 80 }}>
          <div
            className="container"
            style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 60 }}
          >
            <div>
              <span className="eyebrow">The project</span>
              <p
                style={{
                  color: "var(--fg)",
                  fontSize: 19,
                  lineHeight: 1.6,
                  marginTop: 16,
                  whiteSpace: "pre-line",
                }}
              >
                {p.description}
              </p>

              <div style={{ marginTop: 48 }}>
                <span className="eyebrow">Outcomes</span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${p.results.length}, 1fr)`,
                    gap: 24,
                    marginTop: 20,
                  }}
                >
                  {p.results.map((r) => (
                    <div
                      key={r.label}
                      style={{
                        border: "1px solid var(--line)",
                        borderRadius: "var(--radius)",
                        padding: "22px 20px",
                        background: "var(--bg-2)",
                      }}
                    >
                      <div
                        className="display"
                        style={{
                          fontSize: 32,
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                          color: "var(--accent)",
                        }}
                      >
                        {r.value}
                      </div>
                      <div
                        className="mono"
                        style={{
                          fontSize: 11,
                          color: "var(--fg-mute)",
                          textTransform: "uppercase",
                          letterSpacing: ".1em",
                          marginTop: 8,
                        }}
                      >
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside
              style={{
                position: "sticky",
                top: 100,
                alignSelf: "start",
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  Services
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10, color: "var(--fg-dim)", fontSize: 14 }}>
                  {p.services.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>

              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  Stack
                </div>
                <div className="svc-tags" style={{ marginTop: 10 }}>
                  {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>

              {p.liveUrl && (
                <a className="btn primary" href={p.liveUrl} target="_blank" rel="noreferrer">
                  Visit live site <span className="arrow">→</span>
                </a>
              )}
            </aside>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
