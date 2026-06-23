import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { services, getServiceBySlug } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.summary,
    alternates: { canonical: `/services/${svc.slug}` },
    openGraph: {
      title: svc.title,
      description: svc.summary,
      url: `${SITE_URL}/services/${svc.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: svc.title,
      description: svc.summary,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: svc.title, url: `${SITE_URL}/services/${svc.slug}` },
        ]}
      />
      <ServiceJsonLd name={svc.title} description={svc.summary} slug={svc.slug} />

      <Nav />
      <main>
        <section style={{ paddingTop: 80, paddingBottom: 80 }}>
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
              <Link href="/services" style={{ color: "inherit" }}>
                ← All services
              </Link>
            </div>
            <span className="eyebrow">Service</span>
            <h1
              className="display"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                margin: "16px 0 28px",
                maxWidth: "16ch",
              }}
            >
              {svc.title}
            </h1>
            <p
              style={{
                color: "var(--fg-dim)",
                fontSize: 19,
                lineHeight: 1.55,
                maxWidth: 680,
                margin: 0,
              }}
            >
              {svc.description}
            </p>
          </div>
        </section>

        <section
          style={{
            paddingTop: 0,
            paddingBottom: 120,
            display: "grid",
          }}
        >
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
            }}
          >
            <div>
              <span className="eyebrow">What you get</span>
              <ul
                className="checklist"
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginTop: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  color: "var(--fg-dim)",
                  fontSize: 16,
                }}
              >
                {svc.deliverables.map((d) => (
                  <li
                    key={d}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        flex: "none",
                        marginTop: 8,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        boxShadow: "0 0 10px var(--accent)",
                      }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Typical stack</span>
              <div
                className="svc-tags"
                style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}
              >
                {svc.stack.map((t) => (
                  <span className="tag" key={t}>{t}</span>
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
