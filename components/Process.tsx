const steps = [
  { n: "01", t: "Discover", d: "We map the problem, the constraints and the people. Nothing is engineered in the dark." },
  { n: "02", t: "Design", d: "Tight prototyping cycles with engineering involved from day one. We design what we can actually ship." },
  { n: "03", t: "Build", d: "Two-week increments, demos every Friday, real software in your hands as early as week three." },
  { n: "04", t: "Operate", d: "We don't disappear at launch. On-call, observability, growth — we stay until it's truly yours." },
];

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Process</span>
            <h2>Four phases.<br />No surprises.</h2>
          </div>
          <p>
            A predictable rhythm from kickoff to handoff. Weekly demos, transparent budgets and a
            single shared backlog — you&apos;ll never wonder where the work is.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((s) => (
            <div className="pstep" key={s.n}>
              <div className="pnum">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
