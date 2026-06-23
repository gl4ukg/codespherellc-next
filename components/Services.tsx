import Link from "next/link";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Services</span>
            <h2>End-to-end software<br />and IT, under one roof.</h2>
          </div>
          <p>
            From greenfield products to legacy modernizations and managed IT for growing teams.
            We staff every engagement with senior engineers — no juniors hidden behind a slick deck.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="svc"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="svc-icon">{s.icon}</div>
                <div className="svc-num">
                  0{i + 1} / 0{services.length}
                </div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <div className="svc-tags">
                {s.stack.slice(0, 5).map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
