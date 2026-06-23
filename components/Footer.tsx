import Link from "next/link";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <Link href="/" className="logo" aria-label="Codesphere LLC — Home">
              <span className="logo-mark" />
              <span>
                Codesphere<span style={{ color: "var(--fg-mute)", fontWeight: 400 }}>.llc</span>
              </span>
            </Link>
            <p className="foot-blurb">
              A software studio and IT partner for ambitious companies. Locally present in
              Prishtina, Kosovo and Dubai, UAE.
            </p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/sitemap.xml">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phone}`}>🇽🇰 {SITE.phone}</a></li>
              <li><a href={`tel:${SITE.phoneDubai}`}>🇦🇪 {SITE.phoneDubai}</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© {new Date().getFullYear()} {SITE.legalName} · All rights reserved</div>
          <div>◐ status: operational</div>
        </div>
      </div>
    </footer>
  );
}
