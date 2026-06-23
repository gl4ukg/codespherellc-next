# Codesphere LLC — Website (Next.js)

Marketing website for Codesphere LLC, built with **Next.js 14 (App Router)** + **TypeScript**.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build && npm run start   # production
```

---

## SEO — what's already wired

This project ships with a full SEO baseline:

- **Server-side rendering** — every page is fully rendered HTML; crawlers see real
  content (your current SPA only shows a loader, which is why it doesn't rank).
- **`metadata` API** in every page — title, description, canonical URL, OpenGraph,
  Twitter cards, robots directives.
- **JSON-LD structured data** (`components/JsonLd.tsx`):
  - `Organization` + `WebSite` on every page (via root layout)
  - `BreadcrumbList` on services, work, contact and detail pages
  - `Service` on each `/services/[slug]` page
  - `CreativeWork` on each `/work/[slug]` page
- **`app/robots.ts`** — auto-generates `/robots.txt`.
- **`app/sitemap.ts`** — auto-generates `/sitemap.xml` covering home, services,
  work and every individual service + project page.
- **Per-service routes** at `/services/[slug]` (6 indexable pages).
- **Per-project case-study routes** at `/work/[slug]` (one indexable page per project).
- **Semantic HTML** — `<main>`, `<nav>`, `<header>`, `<footer>`, proper heading order.
- **Self-hosted Google Fonts** via `next/font` (no render-blocking, no Google handshake).
- **Web manifest + theme color** for PWA / mobile install banners.
- **404 page** with `noindex` so dead URLs don't leak into search.

## Before you go live — finish these

1. **Drop real artwork into `/public/`** (see `public/README.txt`):
   - `og.png` (1200×630) — biggest single SEO win for social previews
   - `apple-touch-icon.png` (180×180)
   - `favicon.ico` (multi-size)
   - `logo.png` (512×512, referenced by JSON-LD)
2. **Edit `lib/site.ts`** — set the real production URL, phone, social handles.
3. **Replace placeholder projects in `lib/projects.ts`** with your real work.
4. **Set the Google Search Console verification token** in `app/layout.tsx`
   (the `verification.google` line is commented in).
5. **Submit your sitemap** at https://search.google.com/search-console
   (`https://www.codespherellc.com/sitemap.xml`).
6. **Add analytics** — `@vercel/analytics` or Plausible / Fathom (privacy-friendly).

## Routes

```
/                          Home
/services                  Services index
/services/[slug]           Per-service page (6)
/work                      Case-studies index
/work/[slug]               Per-project case study (4 placeholders)
/contact                   Contact
/sitemap.xml               Auto-generated
/robots.txt                Auto-generated
```

## Where to edit common things

| Want to change                  | File                              |
|----------------------------------|-----------------------------------|
| Colors / spacing / radii         | `app/globals.css` (`:root` block) |
| Company name, email, phone, OG   | `lib/site.ts`                     |
| Project list (case studies)      | `lib/projects.ts`                 |
| Service list                     | `lib/services.ts`                 |
| Page metadata                    | Each `page.tsx` (`export const metadata`) |
| Structured data shape            | `components/JsonLd.tsx`           |
| Nav links                        | `components/Nav.tsx`              |

## Project structure

```
app/
  layout.tsx              Fonts, root metadata, Org + Website JSON-LD
  page.tsx                Home — composes all home sections
  globals.css             Design tokens + all section styles
  robots.ts               /robots.txt
  sitemap.ts              /sitemap.xml
  not-found.tsx           404 (noindex)
  services/
    page.tsx              /services index
    [slug]/page.tsx       /services/* dynamic
  work/
    page.tsx              /work index
    [slug]/page.tsx       /work/* dynamic
  contact/
    page.tsx              /contact
components/
  Nav.tsx Hero.tsx Marquee.tsx Services.tsx Capabilities.tsx
  Process.tsx Work.tsx Stack.tsx Testimonial.tsx CTA.tsx Footer.tsx
  JsonLd.tsx              All structured-data helpers
lib/
  site.ts                 Single source of truth for company metadata
  services.ts             Service catalog
  projects.ts             Project catalog
public/
  favicon.svg site.webmanifest README.txt
```
