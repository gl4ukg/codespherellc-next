"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = 6;

const PROJECT_TYPES = [
  { id: "website", icon: "◻", label: "Website", sub: "Marketing, landing pages, brochure sites" },
  { id: "webapp", icon: "⬡", label: "Web App", sub: "SaaS, dashboards, platforms" },
  { id: "mobile", icon: "◎", label: "Mobile App", sub: "iOS & Android, React Native" },
  { id: "design", icon: "⟁", label: "Design", sub: "UI/UX, design systems, branding" },
  { id: "it", icon: "⬢", label: "IT & Cloud", sub: "Infrastructure, security, DevOps" },
  { id: "fullpackage", icon: "⊕", label: "Full Package", sub: "End-to-end — design, build, deploy" },
];

const SCALES = [
  { id: "landing", label: "Landing page", sub: "Single page, conversion-focused" },
  { id: "multipage", label: "Multi-page site", sub: "5–20 pages, full content" },
  { id: "saas", label: "SaaS / Platform", sub: "Auth, dashboard, data-heavy" },
  { id: "ecommerce", label: "E-commerce", sub: "Products, cart, checkout" },
  { id: "enterprise", label: "Enterprise", sub: "Complex, multi-team, integrations" },
];

const BUDGETS = [
  { id: "u5k", label: "Under €5k", sub: "Small scope, fast delivery" },
  { id: "5to15k", label: "€5k – €15k", sub: "Standard project" },
  { id: "15to50k", label: "€15k – €50k", sub: "Larger scope, full team" },
  { id: "50kplus", label: "€50k+", sub: "Enterprise / long-term" },
  { id: "discuss", label: "Let's discuss", sub: "Not sure yet" },
];

const TIMELINES = [
  { id: "asap", label: "ASAP", sub: "2–4 weeks, tight deadline" },
  { id: "standard", label: "Standard", sub: "1–3 months" },
  { id: "relaxed", label: "Relaxed", sub: "3–6 months" },
  { id: "flexible", label: "Flexible", sub: "No hard deadline" },
];

type FormData = {
  types: string[];
  scale: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  description: string;
};

const initial: FormData = {
  types: [], scale: "", budget: "", timeline: "",
  name: "", email: "", company: "", description: "",
};

function ProgressBar({ step }: { step: number }) {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {Array.from({ length: STEPS - 1 }).map((_, i) => (
        <div key={i} style={{ flex: 1, height: 3, borderRadius: 99, background: i < step ? "var(--accent)" : "var(--line)", transition: "background 0.4s ease" }} />
      ))}
    </div>
  );
}

function OptionCard({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: selected ? "color-mix(in oklab, var(--accent) 8%, var(--bg-2))" : "var(--bg-2)",
        border: `1px solid ${selected ? "var(--accent)" : "var(--line)"}`,
        borderRadius: 14,
        padding: "20px 22px",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.2s ease",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        color: "var(--fg)",
      }}
    >
      {selected && (
        <span style={{ position: "absolute", top: 12, right: 14, color: "var(--accent)", fontSize: 16, fontWeight: 700 }}>✓</span>
      )}
      {children}
    </button>
  );
}

export default function StartWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const toggleType = (id: string) => {
    setForm((f) => ({
      ...f,
      types: f.types.includes(id) ? f.types.filter((t) => t !== id) : [...f.types, id],
    }));
  };

  const canNext = () => {
    if (step === 1) return form.types.length > 0;
    if (step === 2) return !!form.scale;
    if (step === 3) return !!form.budget;
    if (step === 4) return !!form.timeline;
    if (step === 5) return !!form.name && !!form.email;
    return true;
  };

  const submit = async () => {
    setLoading(true);
    try {
      await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } finally {
      setLoading(false);
      setDone(true);
    }
  };

  if (done) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
        <div style={{ maxWidth: 480 }}>
          <div style={{ fontSize: 56, marginBottom: 24 }}>✦</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            We&apos;ll be in touch.
          </h1>
          <p style={{ color: "var(--fg-dim)", fontSize: 17, lineHeight: 1.6, margin: "0 0 40px" }}>
            Thanks {form.name.split(" ")[0]} — we&apos;ve received your brief and will reach out to <strong style={{ color: "var(--fg)" }}>{form.email}</strong> within 24 hours.
          </p>
          <Link href="/" className="btn primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            Back to home <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <Link href="/" className="logo" style={{ textDecoration: "none" }}>
            <span className="logo-mark" />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18 }}>
              Codesphere<span style={{ color: "var(--fg-mute)", fontWeight: 400 }}>.llc</span>
            </span>
          </Link>
          <div style={{ flex: 1, maxWidth: 400 }}>
            <ProgressBar step={step} />
          </div>
          <div className="mono" style={{ fontSize: 12, color: "var(--fg-mute)", letterSpacing: ".1em", whiteSpace: "nowrap" }}>
            {step < STEPS ? `${step} / ${STEPS - 1}` : "Review"}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>

          {/* Step 1 — Project type */}
          {step === 1 && (
            <div>
              <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Step 1</span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px", lineHeight: 1.1 }}>
                What do you need?
              </h1>
              <p style={{ color: "var(--fg-dim)", fontSize: 15, margin: "0 0 36px" }}>Select all that apply.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {PROJECT_TYPES.map((t) => (
                  <OptionCard key={t.id} selected={form.types.includes(t.id)} onClick={() => toggleType(t.id)}>
                    <span style={{ fontSize: 24, color: "var(--accent)" }}>{t.icon}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, color: "var(--fg)" }}>{t.label}</span>
                    <span style={{ fontSize: 13, color: "var(--fg-mute)", lineHeight: 1.4 }}>{t.sub}</span>
                  </OptionCard>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Scale */}
          {step === 2 && (
            <div>
              <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Step 2</span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px", lineHeight: 1.1 }}>
                What&apos;s the scale?
              </h1>
              <p style={{ color: "var(--fg-dim)", fontSize: 15, margin: "0 0 36px" }}>Pick the one that fits best.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {SCALES.map((s) => (
                  <OptionCard key={s.id} selected={form.scale === s.id} onClick={() => setForm((f) => ({ ...f, scale: s.id }))}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, color: "var(--fg)" }}>{s.label}</span>
                    <span style={{ fontSize: 13, color: "var(--fg-mute)" }}>{s.sub}</span>
                  </OptionCard>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 — Budget */}
          {step === 3 && (
            <div>
              <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Step 3</span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px", lineHeight: 1.1 }}>
                What&apos;s your budget?
              </h1>
              <p style={{ color: "var(--fg-dim)", fontSize: 15, margin: "0 0 36px" }}>Rough range is fine — helps us scope correctly.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {BUDGETS.map((b) => (
                  <OptionCard key={b.id} selected={form.budget === b.id} onClick={() => setForm((f) => ({ ...f, budget: b.id }))}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--fg)" }}>{b.label}</span>
                    <span style={{ fontSize: 13, color: "var(--fg-mute)" }}>{b.sub}</span>
                  </OptionCard>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 — Timeline */}
          {step === 4 && (
            <div>
              <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Step 4</span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px", lineHeight: 1.1 }}>
                When do you need it?
              </h1>
              <p style={{ color: "var(--fg-dim)", fontSize: 15, margin: "0 0 36px" }}>We&apos;ll plan around your deadline.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {TIMELINES.map((t) => (
                  <OptionCard key={t.id} selected={form.timeline === t.id} onClick={() => setForm((f) => ({ ...f, timeline: t.id }))}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em" }}>{t.label}</span>
                    <span style={{ fontSize: 13, color: "var(--fg-mute)" }}>{t.sub}</span>
                  </OptionCard>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 — Details */}
          {step === 5 && (
            <div>
              <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Step 5</span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px", lineHeight: 1.1 }}>
                Tell us about you.
              </h1>
              <p style={{ color: "var(--fg-dim)", fontSize: 15, margin: "0 0 36px" }}>We&apos;ll use this to get back to you.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { key: "name", label: "Your name *", placeholder: "John Doe" },
                    { key: "email", label: "Email address *", placeholder: "you@company.com" },
                    { key: "company", label: "Company / project name", placeholder: "Acme Inc." },
                  ].map(({ key, label, placeholder }) => (
                    <div key={key} style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: key === "company" ? "1 / -1" : undefined }}>
                      <label className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".1em", textTransform: "uppercase" }}>{label}</label>
                      <input
                        type={key === "email" ? "email" : "text"}
                        placeholder={placeholder}
                        value={form[key as keyof FormData] as string}
                        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                        style={{
                          background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 10,
                          padding: "14px 16px", color: "var(--fg)", fontSize: 15,
                          outline: "none", fontFamily: "var(--font-body)", transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                        onBlur={(e) => e.target.style.borderColor = "var(--line)"}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".1em", textTransform: "uppercase" }}>Brief description (optional)</label>
                  <textarea
                    placeholder="Tell us what you're building, any specific requirements, or anything else we should know..."
                    value={form.description}
                    onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                    rows={4}
                    style={{
                      background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 10,
                      padding: "14px 16px", color: "var(--fg)", fontSize: 15, resize: "vertical",
                      outline: "none", fontFamily: "var(--font-body)", transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                    onBlur={(e) => e.target.style.borderColor = "var(--line)"}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 6 — Review */}
          {step === 6 && (
            <div>
              <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Review</span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px", lineHeight: 1.1 }}>
                Looking good, {form.name.split(" ")[0]}.
              </h1>
              <p style={{ color: "var(--fg-dim)", fontSize: 15, margin: "0 0 36px" }}>Here&apos;s your project summary. Send it and we&apos;ll be in touch within 24 hours.</p>

              <div style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", marginBottom: 28 }}>
                {[
                  { label: "Project type", value: form.types.map((t) => PROJECT_TYPES.find((p) => p.id === t)?.label).join(", ") },
                  { label: "Scale", value: SCALES.find((s) => s.id === form.scale)?.label },
                  { label: "Budget", value: BUDGETS.find((b) => b.id === form.budget)?.label },
                  { label: "Timeline", value: TIMELINES.find((t) => t.id === form.timeline)?.label },
                  { label: "Name", value: form.name },
                  { label: "Email", value: form.email },
                  form.company ? { label: "Company", value: form.company } : null,
                  form.description ? { label: "Description", value: form.description } : null,
                ].filter(Boolean).map((row, i, arr) => (
                  <div key={i} style={{ display: "flex", gap: 20, padding: "16px 24px", borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none", alignItems: "flex-start" }}>
                    <span className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: ".1em", textTransform: "uppercase", minWidth: 110, paddingTop: 2 }}>{row!.label}</span>
                    <span style={{ fontSize: 15, color: "var(--fg)", lineHeight: 1.5 }}>{row!.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 40 }}>
            <button
              onClick={() => setStep((s) => s - 1)}
              style={{ background: "none", border: "none", color: step === 1 ? "transparent" : "var(--fg-dim)", cursor: step === 1 ? "default" : "pointer", fontSize: 14, display: "flex", alignItems: "center", gap: 6, padding: 0, fontFamily: "var(--font-body)" }}
              disabled={step === 1}
            >
              ← Back
            </button>

            {step < STEPS ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
                className="btn primary"
                style={{ height: 48, padding: "0 28px", fontSize: 15, opacity: canNext() ? 1 : 0.4, cursor: canNext() ? "pointer" : "default", display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                Continue <span className="arrow">→</span>
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={loading}
                className="btn primary"
                style={{ height: 48, padding: "0 28px", fontSize: 15, display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                {loading ? "Sending…" : "Send to Codesphere"} <span className="arrow">→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
