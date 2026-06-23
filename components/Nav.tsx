import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Codesphere LLC — Home">
          <span className="logo-mark" />
          <span>
            Codesphere<span style={{ color: "var(--fg-mute)", fontWeight: 400 }}>.llc</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/#process">Process</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-cta">
          <Link className="btn" href="/contact">Book a call</Link>
          <Link className="btn primary" href="/contact">
            Start a project <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
