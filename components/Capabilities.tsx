"use client";

import { useEffect, useRef, useState } from "react";

const rows = [
  {
    ttl: "Discovery & Product Strategy",
    desc: "Stakeholder interviews, technical due diligence, scoping and a realistic roadmap before any code is written.",
    check: ["Domain workshops", "Technical audit", "Scope & estimate", "Roadmap & milestones"],
    icon: "◎",
  },
  {
    ttl: "Design Systems & UI Engineering",
    desc: "Reusable components, tokens, and motion that match your brand and survive years of iteration.",
    check: ["Design tokens", "Component library", "Accessibility (WCAG 2.2)", "Motion guidelines"],
    icon: "⬡",
  },
  {
    ttl: "Backend & API Engineering",
    desc: "Typed APIs, event-driven services, queues, schedulers — the boring infrastructure that lets product teams move fast.",
    check: ["REST & GraphQL", "Event streaming", "Workers & queues", "Migration tooling"],
    icon: "⟁",
  },
  {
    ttl: "Platform, Cloud & SRE",
    desc: "Infrastructure as code, observability and runbooks. Your platform team in a box until you build your own.",
    check: ["Terraform / Pulumi", "Kubernetes", "On-call & runbooks", "Cost optimization"],
    icon: "⬢",
  },
  {
    ttl: "Security, Compliance & IT",
    desc: "SOC 2 readiness, identity, endpoint and network management for regulated and growing teams.",
    check: ["SOC 2 / ISO 27001", "SSO & MFA rollout", "Endpoint hardening", "Backup & DR"],
    icon: "⊕",
  },
];

function DesktopCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      setActive(Math.min(rows.length - 1, Math.floor(p * rows.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: `${rows.length * 100}vh` }}>
      <section
        id="capabilities"
        style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 70% at ${20 + active * 15}% 50%, color-mix(in oklab, var(--accent) 6%, transparent), transparent 70%)`, transition: "background 0.8s ease", pointerEvents: "none" }} />
        <div className="container" style={{ width: "100%", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: 32, display: "block" }}>Capabilities</span>
              {rows.map((r, i) => (
                <div key={i} style={{ padding: "20px 0", borderBottom: "1px solid var(--line)", cursor: "default", opacity: i === active ? 1 : 0.35, transform: i === active ? "translateX(12px)" : "translateX(0)", transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)", display: "flex", alignItems: "center", gap: 16 }}>
                  <span className="mono" style={{ fontSize: 22, color: i === active ? "var(--accent)" : "var(--fg-mute)", transition: "color 0.4s ease", minWidth: 28 }}>{r.icon}</span>
                  <div>
                    <div className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 4 }}>0{i + 1}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, color: i === active ? "var(--fg)" : "var(--fg-dim)", transition: "color 0.4s ease" }}>{r.ttl}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 32, height: 2, background: "var(--line)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${progress * 100}%`, background: "linear-gradient(90deg, var(--accent), var(--accent-2))", borderRadius: 2, transition: "width 0.1s linear", boxShadow: "0 0 10px var(--accent)" }} />
              </div>
            </div>
            <div style={{ background: "var(--bg-2)", border: "1px solid var(--line-2)", borderRadius: 20, padding: 48, minHeight: 360, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 15%, transparent), transparent 70%)", top: -60, right: -60, pointerEvents: "none" }} />
              {rows.map((r, i) => (
                <div key={i} style={{ position: i === 0 ? "relative" : "absolute", inset: i === 0 ? undefined : "48px", opacity: i === active ? 1 : 0, transform: i === active ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)", transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)", pointerEvents: i === active ? "auto" : "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1 }}>{r.ttl}</div>
                  <p style={{ color: "var(--fg-dim)", fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>{r.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {r.check.map((c) => (
                      <div key={c} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--fg-dim)" }}>
                        <span style={{ color: "var(--accent)", fontSize: 16 }}>✦</span>{c}
                      </div>
                    ))}
                  </div>
                  <a className="btn" href="#contact" style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8 }}>Discuss this <span className="arrow">→</span></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileCapabilities() {
  return (
    <section id="capabilities" style={{ padding: "56px 0" }}>
      <div className="container">
        <span className="eyebrow" style={{ marginBottom: 8, display: "block" }}>Capabilities</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 8vw, 44px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 40px" }}>
          What we<br />do best.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {rows.map((r, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                padding: "22px 20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 22, color: "var(--accent)" }}>{r.icon}</span>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--fg-mute)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 2 }}>0{i + 1}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>{r.ttl}</div>
                </div>
              </div>
              <p style={{ color: "var(--fg-dim)", fontSize: 13.5, lineHeight: 1.6, margin: "0 0 14px" }}>{r.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px" }}>
                {r.check.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--fg-dim)" }}>
                    <span style={{ color: "var(--accent)", fontSize: 10 }}>✦</span>{c}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Capabilities() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile ? <MobileCapabilities /> : <DesktopCapabilities />;
}
