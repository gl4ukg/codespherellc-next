"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Partnering with Codesphere LLC has been transformative for our business. Their expertise and innovative solutions have greatly enhanced our projects. We highly value this partnership and look forward to future collaborations.",
    name: "GoodLuck Solutions",
    initials: "GS",
  },
  {
    quote:
      "Working with Codesphere LLC on our web development project was a fantastic experience. Their team was responsive, professional, and delivered a high-quality solution on time and within budget. I highly recommend them for any software development needs.",
    name: "Do&Co",
    initials: "DC",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testi">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: 720, margin: "0 auto" }}>

          {/* Stars */}
          <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
            {[0,1,2,3,4].map((i) => (
              <span key={i} style={{ color: "var(--accent)", fontSize: 20 }}>★</span>
            ))}
          </div>

          <div className="mono" style={{ color: "var(--fg-mute)", fontSize: 12, letterSpacing: ".08em", marginBottom: 36 }}>
            5.0 · {testimonials.length} verified reviews
          </div>

          {/* Quote */}
          <p
            className="quote"
            style={{
              fontSize: "clamp(16px, 2.2vw, 22px)",
              lineHeight: 1.6,
              color: "var(--fg)",
              margin: "0 0 36px",
              transition: "opacity 0.4s ease",
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div className="avatar">{t.initials}</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
              <div className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", marginTop: 2 }}>Verified client</div>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                style={{
                  width: 8, height: 8, borderRadius: "50%", border: "none",
                  cursor: "pointer", padding: 0,
                  background: i === index ? "var(--accent)" : "var(--fg-mute)",
                  opacity: i === index ? 1 : 0.35,
                  transition: "background 0.3s, opacity 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
