import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ padding: "140px 0", textAlign: "center" }}>
          <div className="container">
            <div className="mono" style={{ color: "var(--fg-mute)", fontSize: 12, letterSpacing: ".15em" }}>
              404 · NOT FOUND
            </div>
            <h1
              className="display"
              style={{
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                margin: "16px auto 20px",
                maxWidth: "16ch",
              }}
            >
              We couldn&apos;t find that page.
            </h1>
            <p style={{ color: "var(--fg-dim)", fontSize: 18, maxWidth: 480, margin: "0 auto 32px" }}>
              The link might be broken, or the page may have moved. Try one of the links below.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="btn primary lg" href="/">Back home <span className="arrow">→</span></Link>
              <Link className="btn lg" href="/work">See our work</Link>
              <Link className="btn lg" href="/services">Browse services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
