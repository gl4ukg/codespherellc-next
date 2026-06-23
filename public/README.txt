PLACEHOLDERS — replace with real artwork before going live
============================================================

Drop these files into /public:

  apple-touch-icon.png  180×180 PNG of the logo on dark bg
  favicon.ico           multi-size .ico (16, 32, 48)
  og.png                1200×630 PNG used for OpenGraph + Twitter cards
  logo.png              512×512 PNG of the logo (referenced in JSON-LD)

The site already references favicon.svg (included) and site.webmanifest (included).
If you only have the SVG favicon, browsers will still render correctly — the .ico
fallback is only needed for older browsers and a handful of legacy bots.

Tools to generate the set quickly:
  https://realfavicongenerator.net   – upload SVG, get every size
  https://og-playground.vercel.app   – design the OG card visually
