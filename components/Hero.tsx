"use client";

import Link from "next/link";
import { useScrollY } from "@/hooks/useParallax";
import AnimatedText from "@/components/AnimatedText";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const scrollY = useScrollY();

  return (
    <header className="hero">
      <div className="container hero-grid">

        <div style={{ transform: `translateY(${scrollY * 0.18}px)`, willChange: "transform" }}>
          <Reveal y={20}>
            <span className="eyebrow">
              <span className="pulse" style={{ width: 6, height: 6 }} /> Software studio · Est. 2019
            </span>
          </Reveal>

          <AnimatedText
            text="Engineering software that compounds your company's velocity."
            el="h1"
            stagger={55}
          />

          <Reveal y={24} delay={400}>
            <p className="lede">
              Codesphere LLC is a small, senior team building web, mobile and cloud platforms for
              companies who treat software as a strategic asset. We design, ship, and operate it end
              to end.
            </p>
          </Reveal>

          <Reveal y={20} delay={500}>
            <div className="hero-ctas">
              <Link className="btn primary lg" href="/contact">
                Start a project <span className="arrow">→</span>
              </Link>
              <Link className="btn lg" href="/work">See our work</Link>
            </div>
          </Reveal>

          <Reveal y={16} delay={600}>
            <div className="hero-meta">
              <div className="stat">
                <div className="num"><Counter value="120+" /></div>
                <div className="lbl">Products shipped</div>
              </div>
              <div className="stat">
                <div className="num"><Counter value="42" /></div>
                <div className="lbl">Clients worldwide</div>
              </div>
              <div className="stat">
                <div className="num"><Counter value="99.98%" /></div>
                <div className="lbl">Uptime SLA</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="sphere-wrap"
          aria-hidden="true"
          style={{ transform: `translateY(${scrollY * -0.1}px)`, willChange: "transform" }}
        >
          <div className="orbit o3"><span className="pip" /></div>
          <div className="orbit o2"><span className="pip" /></div>
          <div className="orbit"><span className="pip" /></div>
          <div className="sphere" />
          <div className="badge-floats">
            <div className="float-card fc1">
              <span className="dot" />
              <div>
                <div style={{ fontWeight: 600 }}>Deploy succeeded</div>
                <div className="mono">prod · 1.42s · v2.18.0</div>
              </div>
            </div>
            <div className="float-card fc2">
              <span className="dot" style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
              <div>
                <div style={{ fontWeight: 600 }}>SOC 2 ready</div>
                <div className="mono">all checks passing</div>
              </div>
            </div>
            <div className="float-card fc3">
              <span className="mono" style={{ color: "var(--accent)" }}>{"{ }"}</span>
              <div>
                <div style={{ fontWeight: 600 }}>API · 12ms p95</div>
                <div className="mono">us-east · eu-west</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
