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
      <div className="container testi-inner">
        <div>
          <span className="eyebrow">Testimonials!</span>
          <div style={{ marginTop: 24, display: "flex", gap: 6 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} style={{ color: "var(--accent)", fontSize: 22 }}>★</span>
            ))}
          </div>
          <div
            className="mono"
            style={{ color: "var(--fg-mute)", fontSize: 12, marginTop: 12, letterSpacing: ".08em" }}
          >
            5.0 · {testimonials.length} verified reviews
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background: i === index ? "var(--accent)" : "var(--fg-mute)",
                  opacity: i === index ? 1 : 0.4,
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="quote">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="author">
            <div className="avatar">{t.initials}</div>
            <div className="who">
              <div style={{ fontWeight: 600 }}>{t.name}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
