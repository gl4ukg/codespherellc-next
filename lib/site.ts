// Single source of truth for the site's URL and metadata.
// Change SITE_URL once for prod, all metadata + sitemap + robots follow.
export const SITE_URL = "https://www.codespherellc.com";

export const SITE = {
  name: "Codesphere LLC",
  shortName: "Codesphere",
  legalName: "Codesphere LLC",
  description:
    "Codesphere LLC is a software development and IT solutions studio building web, mobile and cloud platforms for ambitious companies.",
  tagline: "Software Development & IT Solutions",
  email: "glauk@codespherellc.com",
  phone: "+38348335891",
  phoneDubai: "+971529618855",
  locations: [
    { city: "Prishtina", country: "Kosovo" },
    { city: "Dubai", country: "UAE" },
  ],
  founded: "2019",
  url: SITE_URL,
  ogImage: `${SITE_URL}/og.png`,
  twitter: "@codespherellc",
  sameAs: [
    "https://www.linkedin.com/company/codespherellc",
    "https://github.com/codespherellc",
  ],
};
