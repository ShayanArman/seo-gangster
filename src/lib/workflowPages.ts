import type { WorkflowLandingContent } from "@/components/WorkflowLandingPage";

export const workflowPages: Record<string, WorkflowLandingContent> = {
  "/workflows": {
    route: "/workflows",
    title: "SEO Workflows",
    description:
      "SEO Gangster workflows cover page creation, weekly refreshes, internal links, and technical SEO cleanup.",
    bullets: [
      "Turn SEO into repeatable operating procedures.",
      "Keep pages fresh instead of letting them decay.",
      "Ship technical fixes without endless manual follow-up.",
    ],
    ctaText: "Set up SEO workflows",
  },
  "/workflows/content-refresh": {
    route: "/workflows/content-refresh",
    title: "Content Refresh Workflows",
    description:
      "Run regular freshness passes across old pages so your site keeps compounding instead of aging out.",
    bullets: [
      "Refresh older pages every week.",
      "Expand sections based on live search signals.",
      "Keep titles, headings, and internal links improving.",
    ],
    ctaText: "Start the refresh workflow",
  },
  "/workflows/technical-seo": {
    route: "/workflows/technical-seo",
    title: "Technical SEO Workflows",
    description:
      "Schema reviews, metadata cleanups, internal links, and technical checks are easier when they run like a system.",
    bullets: [
      "Find schema gaps across important pages.",
      "Spot metadata issues before they stack up.",
      "Turn technical notes into shipped changes.",
    ],
    ctaText: "Start the technical workflow",
  },
  "/workflows/local-pages": {
    route: "/workflows/local-pages",
    title: "Local SEO Page Workflows",
    description:
      "Create city pages, service-area pages, and support content at a pace local teams can actually maintain.",
    bullets: [
      "Launch local landing pages faster.",
      "Keep similar pages differentiated and useful.",
      "Maintain freshness across multi-location clusters.",
    ],
    ctaText: "Start the local SEO workflow",
  },
  "/workflows/workflow/freshness-pass": {
    route: "/workflows/workflow/freshness-pass",
    title: "Freshness Pass",
    description:
      "A fast weekly workflow for touching the pages that need new sections, new links, or sharper positioning.",
    bullets: [
      "Review pages with momentum.",
      "Refresh outdated sections quickly.",
      "Queue the next round of improvements.",
    ],
    ctaText: "Run a freshness pass",
  },
  "/workflows/workflow/internal-linking": {
    route: "/workflows/workflow/internal-linking",
    title: "Internal Linking",
    description:
      "Keep new and old pages connected so authority flows through the site and search engines understand the cluster.",
    bullets: [
      "Find linking opportunities between related articles and landing pages.",
      "Strengthen topic clusters as the site grows.",
      "Reduce orphan pages before they disappear into the archive.",
    ],
    ctaText: "Start internal linking",
  },
  "/workflows/workflow/page-briefs": {
    route: "/workflows/workflow/page-briefs",
    title: "Page Briefs",
    description:
      "Generate page outlines and briefs fast enough that publishing the next article stops feeling heavy.",
    bullets: [
      "Draft outlines around real search intent.",
      "Map supporting sections before writing.",
      "Keep page creation moving on a weekly cadence.",
    ],
    ctaText: "Generate page briefs",
  },
  "/workflows/workflow/schema-audit": {
    route: "/workflows/workflow/schema-audit",
    title: "Schema Audit",
    description:
      "Review markup, structured data coverage, and technical gaps with a repeatable audit workflow.",
    bullets: [
      "Check important pages for missing markup.",
      "Tighten structured data as the site expands.",
      "Fix technical gaps before they become systemic.",
    ],
    ctaText: "Start the schema audit",
  },
};
