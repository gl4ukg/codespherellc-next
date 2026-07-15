export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  duration: string;
  summary: string;
  description: string;
  services: string[];
  stack: string[];
  results: { label: string; value: string }[];
  artClass: "c1" | "c2" | "c3" | "c4";
  image?: string;
  deviceFrame?: boolean;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "erina",
    title: "Shopify e-commerce store for sanitary products",
    client: "Erina",
    industry: "E-Commerce",
    year: "2024",
    duration: "3 months",
    summary:
      "A full-featured Shopify storefront for a Kosovo-based sanitary products retailer, with a modern UI and streamlined checkout experience.",
    description:
      "Erina is a Shopify-powered e-commerce store built for a sanitary and bathroom products retailer based in Kosovo. We designed and developed a clean, conversion-focused storefront with product filtering, multi-currency support, and a fully branded experience. The store features curated product collections — from faucets and sinks to shower cabins and bathroom accessories — with a fast, mobile-first layout optimized for both browsing and checkout.",
    services: ["E-Commerce Development", "Product Design", "Shopify"],
    stack: ["Shopify", "Liquid", "JavaScript", "CSS"],
    results: [
      { label: "Products live", value: "200+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Launch time", value: "3 months" },
    ],
    artClass: "c1",
    image: "/images/erina.png",
    deviceFrame: true,
    liveUrl: "https://erina-ks.com",
  },
  {
    slug: "elev8",
    title: "Pre-interview trust layer that kills fake candidates",
    client: "Elev8",
    industry: "HR Tech",
    year: "2025",
    duration: "Ongoing",
    summary:
      "Elev8 is a pre-interview trust layer that verifies skills, detects AI-generated fakes, and surfaces only credible candidates — before the first call.",
    description:
      "Elev8 is a hiring platform built around one idea: trust should be established before the first interview, not during it. The platform lets candidates build a verified professional profile — backed by anonymous peer reviews and validated accomplishments — so recruiters can detect AI-generated claims and fake credentials before they waste a single call. For companies, it means a dramatically shorter path from job post to confident first connect. For candidates, it's a profile that speaks for itself.",
    services: ["Product Design", "Web Development", "AI Integration"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    results: [
      { label: "AI fake detection", value: "Yes" },
      { label: "Time to first connect", value: "↓ significantly" },
      { label: "Verified profiles", value: "Peer-reviewed" },
    ],
    artClass: "c2",
    image: "/images/elev8.png",
    deviceFrame: true,
  },
  {
    slug: "gym-app",
    title: "Mobile app built for modern gym management",
    client: "Gym App",
    industry: "Fitness & Health",
    year: "2024",
    duration: "4 months",
    summary:
      "A gym management mobile app covering memberships, class scheduling, and member tracking for fitness businesses.",
    description:
      "A cross-platform mobile application designed for gym owners and their members. The app handles membership management, class scheduling, trainer assignments, and attendance tracking — giving gym operators a single tool to run their business while members can book sessions and track their progress. Built with a clean, motivating UI tailored to the fitness industry.",
    services: ["Mobile Applications", "Software Development", "UI/UX"],
    stack: ["React Native", "Node.js", "PostgreSQL"],
    results: [
      { label: "Core features", value: "Memberships, Classes, Tracking" },
      { label: "Platforms", value: "iOS & Android" },
      { label: "Delivery", value: "4 months" },
    ],
    artClass: "c3",
    image: "/images/gym-app.webp",
  },
  {
    slug: "aurum-cantina",
    title: "Bold digital presence for Gjakova's first cantina",
    client: "Aurum Cantina",
    industry: "Hospitality",
    year: "2025",
    duration: "6 weeks",
    summary:
      "Gjakova's first cantina needed a site that matched the concept — bold, gold, unmistakably premium. We built the full menu experience around it.",
    description:
      "Aurum Cantina is Gjakova's first cantina — a venue built around unique flavors, a curated menu, and an atmosphere that blends elegance with boldness. We designed and developed a full digital experience to match: a dark, gold-accented website centered around their menu, with rich photography and a layout that feels as premium as walking through the door. Every section was crafted to translate the in-venue vibe into pixels.",
    services: ["Web Design", "Web Development", "Menu Experience"],
    stack: ["Next.js", "TypeScript", "CSS"],
    results: [
      { label: "Launch", value: "6 weeks" },
      { label: "Menu experience", value: "Full digital" },
      { label: "Aesthetic", value: "Bold & premium" },
    ],
    artClass: "c1",
    image: "/images/aurum.png",
    deviceFrame: true,
    liveUrl: "https://aurumcantina.com",
  },
  {
    slug: "etrit-hair",
    title: "Minimal editorial site for a Prishtina salon studio",
    client: "Etrit Hair",
    industry: "Beauty & Lifestyle",
    year: "2025",
    duration: "5 weeks",
    summary:
      "A salon studio in Prishtina needed a site as sharp as the cuts. We designed something minimal and editorial — dark, confident, built around real portfolio work.",
    description:
      "Etrit Hair is a premium salon studio in Prishtina. The brief was simple: build something that looks as good as the work. We went dark, minimal, and editorial — no stock photography, just real portfolio shots front and center. The result is a site that feels confident and intentional, with a bilingual layout (EN/SQ), a services section, and a gallery that lets the work speak for itself.",
    services: ["Web Design", "Web Development", "Bilingual (EN/SQ)"],
    stack: ["Next.js", "TypeScript", "CSS"],
    results: [
      { label: "Launch", value: "5 weeks" },
      { label: "Languages", value: "EN & SQ" },
      { label: "Photography", value: "Real portfolio" },
    ],
    artClass: "c2",
    image: "/images/etrit.png",
    deviceFrame: true,
    liveUrl: "https://etrithair.com",
  },
  {
    slug: "stock-app",
    title: "Stock market tracking and portfolio app",
    client: "Stock App",
    industry: "Fintech",
    year: "2024",
    duration: "3 months",
    summary:
      "A real-time stock tracking app with portfolio management, live price feeds, and a clean dashboard for investors.",
    description:
      "A mobile-first stock market application that gives users real-time price feeds, portfolio tracking, and market insights in a clean and intuitive interface. Users can follow their favorite stocks, monitor gains and losses, and get a high-level overview of their portfolio performance — all from one dashboard designed for both casual investors and active traders.",
    services: ["Mobile Applications", "Software Development", "UI/UX"],
    stack: ["React Native", "Node.js", "REST APIs"],
    results: [
      { label: "Real-time data", value: "Yes" },
      { label: "Portfolio tracking", value: "Yes" },
      { label: "Platforms", value: "iOS & Android" },
    ],
    artClass: "c4",
    image: "/images/stock-app.webp",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
