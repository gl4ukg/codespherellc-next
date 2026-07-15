"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  if (href.startsWith("/#")) {
    const id = href.slice(2);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    return <a href={href} onClick={handleClick}>{children}</a>;
  }

  return <Link href={href}>{children}</Link>;
}

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
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/#work">Work</NavLink>
          <NavLink href="/#process">Process</NavLink>
          <NavLink href="/contact">Contact</NavLink>
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
