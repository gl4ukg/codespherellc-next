// Service catalog. Each entry becomes its own indexable page at /services/[slug].
export type Service = {
  slug: string;
  icon: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    icon: "</>",
    shortTitle: "Custom Software Development",
    title: "Custom Software Development",
    summary:
      "Web platforms, dashboards, internal tools and consumer products engineered to scale.",
    description:
      "We design and build custom software end-to-end — from greenfield SaaS products to internal platforms replacing decades of legacy. Senior engineers, typed codebases, test coverage from day one and weekly demos so you always see progress.",
    deliverables: [
      "Architecture & technical strategy",
      "Frontend, backend and API engineering",
      "Database design and migrations",
      "CI/CD, observability and on-call setup",
      "Documentation and team handoff",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node", "Go", "PostgreSQL"],
  },
  {
    slug: "mobile-applications",
    icon: "◐",
    shortTitle: "Mobile Applications",
    title: "Mobile App Development (iOS & Android)",
    summary:
      "Native-quality iOS and Android apps using React Native and Swift/Kotlin where it matters.",
    description:
      "We ship offline-first, performant mobile apps that pass App Store and Play Store review on the first submission. From greenfield consumer apps to enterprise field-ops tools used by thousands of frontline workers daily.",
    deliverables: [
      "iOS and Android app development",
      "Cross-platform with React Native or native",
      "App Store / Play Store submission",
      "Push notifications and analytics",
      "Crash reporting and OTA updates",
    ],
    stack: ["React Native", "Swift", "Kotlin", "Expo"],
  },
  {
    slug: "cloud-devops",
    icon: "☁",
    shortTitle: "Cloud & DevOps",
    title: "Cloud Infrastructure & DevOps",
    summary:
      "AWS, GCP and Azure infrastructure as code — CI/CD, observability and cost optimization.",
    description:
      "We design cloud infrastructure that scales without surprising bills. Everything is Terraform-managed, observable from day one, and documented so your team can take it over when you're ready.",
    deliverables: [
      "Infrastructure as code (Terraform / Pulumi)",
      "Kubernetes platform setup",
      "CI/CD pipelines and release management",
      "Observability (metrics, logs, traces)",
      "Cloud cost audit and optimization",
    ],
    stack: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "GitHub Actions"],
  },
  {
    slug: "ai-data-engineering",
    icon: "◇",
    shortTitle: "AI & Data Engineering",
    title: "AI, LLM & Data Engineering",
    summary:
      "LLM features, RAG pipelines, vector search, ETL and analytics — from prototype to production.",
    description:
      "We build production AI features with guardrails, evaluations and observability — not just demos. From RAG over your private docs to internal copilots and structured-data extraction pipelines.",
    deliverables: [
      "RAG and vector search systems",
      "LLM-powered product features",
      "Evaluation harnesses and guardrails",
      "Data pipelines and warehousing",
      "Analytics dashboards",
    ],
    stack: ["OpenAI", "Anthropic", "LangChain", "pgvector", "Snowflake", "dbt"],
  },
  {
    slug: "managed-it",
    icon: "⚙",
    shortTitle: "IT Solutions & Managed Services",
    title: "Managed IT Services & IT Solutions",
    summary:
      "Networking, endpoints, identity, backups and 24/7 monitoring for small and mid-size businesses.",
    description:
      "Quietly reliable IT for growing companies. We handle the unglamorous infrastructure — identity, endpoint, network, backup and monitoring — so your team can focus on the business.",
    deliverables: [
      "Identity and SSO (Okta / Microsoft Entra)",
      "Endpoint management and security",
      "Network design and management",
      "Backup, DR and business continuity",
      "24/7 monitoring and helpdesk",
    ],
    stack: ["Microsoft 365", "Okta", "Crowdstrike", "Datto", "Meraki"],
  },
  {
    slug: "product-design",
    icon: "◯",
    shortTitle: "Product Design & UX",
    title: "Product Design & UX",
    summary:
      "Discovery, design systems and high-fidelity prototypes. Engineering-aware design that ships.",
    description:
      "Design that's grounded in what we can actually build. Discovery, design systems, prototypes — all with the engineering team in the room, so handoff is fast and faithful.",
    deliverables: [
      "Product discovery and user research",
      "Information architecture and flows",
      "High-fidelity UI design",
      "Design systems and tokens",
      "Prototyping and usability testing",
    ],
    stack: ["Figma", "Storybook", "FigJam", "Loom"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
