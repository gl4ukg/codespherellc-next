import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const Device = ({ image, title }: { image?: string; title?: string }) => (
  <div className="device">
    <div className="bar"><i /><i /><i /></div>
    {image ? (
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <Image src={image} alt={title ?? ""} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 768px) 100vw, 50vw" />
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
      </div>
    )}
  </div>
);

function Case({ data }: { data: (typeof projects)[number] }) {
  return (
    <TiltCard>
      <Link
        href={`/work/${data.slug}`}
        className="case"
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <div className={`case-art ${data.artClass}`}>
          {data.image && !data.deviceFrame ? (
            <Image src={data.image} alt={data.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
          ) : (
            <Device image={data.deviceFrame ? data.image : undefined} title={data.title} />
          )}
        </div>
        <div className="case-meta">
          <div className="kicker">
            <span>{data.industry} · {data.client} · {data.duration}</span>
            <span>↗</span>
          </div>
          <h3>{data.title}</h3>
          <p>{data.summary}</p>
        </div>
      </Link>
    </TiltCard>
  );
}

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>Software that ships,<br />then keeps shipping.</h2>
            </div>
            <p>
              A few recent engagements. We work under NDA often, so what you see here is a small
              slice — happy to walk through the rest on a call.
            </p>
          </div>
        </Reveal>

        <div className="work-grid">
          <Reveal delay={0}><Case data={projects[0]} /></Reveal>
          <Reveal delay={100}><Case data={projects[1]} /></Reveal>
          <div className="row2">
            <Reveal delay={0}><Case data={projects[2]} /></Reveal>
            <Reveal delay={120}><Case data={projects[3]} /></Reveal>
          </div>
        </div>

        <Reveal delay={80}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <Link className="btn lg" href="/work">
              See all case studies <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
