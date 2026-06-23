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
