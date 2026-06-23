const items = [
  { g: "TS", n: "TypeScript" },
  { g: "Rx", n: "React" },
  { g: "Nx", n: "Next.js" },
  { g: "Go", n: "Go" },
  { g: "Py", n: "Python" },
  { g: "Rs", n: "Rust" },
  { g: "Pg", n: "Postgres" },
  { g: "Rd", n: "Redis" },
  { g: "Aw", n: "AWS" },
  { g: "Tf", n: "Terraform" },
  { g: "K8", n: "Kubernetes" },
  { g: "Ai", n: "OpenAI" },
];

export default function Stack() {
  return (
    <section id="stack" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Stack</span>
            <h2>Tools we reach for<br />(and ones we don&apos;t).</h2>
          </div>
          <p>
            We&apos;re opinionated but not religious. We pick the simplest stack that solves the
            problem, then we get out of the way. Below: what we work with daily.
          </p>
        </div>
        <div className="stack-grid">
          {items.map((i) => (
            <div className="stack-cell" key={i.n}>
              <div className="glyph">{i.g}</div>
              <div className="name">{i.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
