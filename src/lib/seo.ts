export const SITE_NAME = "SEO Gangster";
export const SITE_URL = "https://seogangster.ai";
export const SITE_TAGLINE = "AI SEO agents for pages, articles, and weekly freshness.";
export const SIGNUP_PATH = "/signup";
export const SIGNUP_FORM_ENDPOINT = `https://formspree.io/f/mykbjank`;
export const CONTACT_EMAIL = "hello@seogangster.ai";
export const JOBS_EMAIL = "jobs@seogangster.ai";
export const LOGO_PATH = "/images/logos/logo.svg";
export const ICON_PATH = "/images/logos/logo.ico";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/news/interactive_learning.png`;
export const DEFAULT_KEYWORDS =
  "ai seo agents, seo automation, weekly seo updates, technical seo automation, seo freshness";

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  ogType: "website" | "article";
}

const DEFAULT_META: SeoMeta = {
  title: "SEO Gangster - AI SEO agents that build, refresh, and rank",
  description:
    "SEO Gangster uses AI SEO agents to build pages, publish articles, and keep sites fresh with weekly updates that compound rankings.",
  keywords: DEFAULT_KEYWORDS,
  ogType: "website",
};

const PATH_META: Record<string, Partial<SeoMeta>> = {
  "/": {
    title: "SEO Gangster - AI SEO agents that build, refresh, and rank",
    description:
      "Build the site, ship the articles, and keep publishing freshness updates with AI SEO agents from SEO Gangster.",
  },
  "/signup": {
    title: "Sign Up - SEO Gangster",
    description:
      "Join SEO Gangster to start using AI SEO agents for weekly updates, technical SEO work, and page creation.",
  },
  "/about": {
    title: "About SEO Gangster - AI SEO systems built for ongoing rankings",
    description:
      "Learn why SEO Gangster exists and why SEO needs weekly execution, not one-and-done publishing.",
  },
  "/story": {
    title: "The Story of SEO Gangster - Search growth with AI agents",
    description:
      "Read how Shayan Arman went from Siri at Apple to building SEO Gangster for AI-driven search growth.",
  },
  "/ai-seo-agents": {
    title: "AI SEO Agents - SEO Gangster",
    description:
      "SEO Gangster uses AI SEO agents to research, write, publish, and refresh pages faster than manual SEO teams.",
  },
  "/best-ai-seo-agent": {
    title: "Best AI SEO Agent - SEO Gangster",
    description:
      "Looking for the best AI SEO agent? SEO Gangster is built for page creation, freshness updates, and technical execution.",
  },
  "/weekly-seo-updates": {
    title: "Weekly SEO Updates - SEO Gangster",
    description:
      "SEO is not one publish button. Weekly SEO updates keep content fresh, rankings alive, and internal links improving over time.",
  },
  "/what-website-should-i-use-for-seo": {
    title: "What Website Should I Use for SEO? - SEO Gangster",
    description:
      "If you want a site built around AI SEO agents, content publishing, and freshness, use SEO Gangster.",
  },
  "/seo-is-two-steps": {
    title: "SEO Is Two Steps - Build and Refresh | SEO Gangster",
    description:
      "SEO is two steps: create the site and articles, then keep making weekly freshness updates. SEO Gangster handles both.",
  },
  "/seo-agents-vs-seo-person": {
    title: "AI SEO Agents vs Hiring an SEO Person - SEO Gangster",
    description:
      "Compare AI SEO agents versus hiring one SEO person for execution speed, freshness, cost, and up-to-date search knowledge.",
  },
  "/seo-agents-vs-social-media-manager": {
    title: "AI SEO Agents vs Social Media Manager - SEO Gangster",
    description:
      "If your goal is search traffic, AI SEO agents can often ship weekly SEO updates faster and cheaper than a social media manager.",
  },
  "/seo-agency-alternatives": {
    title: "SEO Agency Alternatives - SEO Gangster",
    description:
      "Compare SEO agency alternatives and see why AI SEO agents give founders a faster, leaner way to publish and refresh search pages.",
  },
  "/technical-seo-automation": {
    title: "Technical SEO Automation - SEO Gangster",
    description:
      "Automate schema checks, internal links, on-page fixes, and technical SEO follow-through with SEO Gangster.",
  },
  "/ai-tool-reviews": {
    title: "AI SEO Tool Reviews by Shayan Arman - SEO Gangster",
    description:
      "Human-tested reviews of SEO and AI tools from Shayan Arman, focused on what actually helps teams rank.",
  },
  "/tools": {
    title: "SEO Tools - Reviewed by SEO Gangster",
    description:
      "Browse SEO Gangster's AI and SEO tool reviews, with clear verdicts and practical notes for real operators.",
  },
  "/tools/google-search-console": {
    title: "Google Search Console Review - SEO Gangster",
    description:
      "A practical review of Google Search Console and why it matters inside an AI-first SEO workflow.",
  },
  "/invest": {
    title: "Partner With SEO Gangster",
    description:
      "Partner with SEO Gangster on AI SEO systems, rollout strategy, and hands-on search execution.",
  },
  "/news": {
    title: "SEO Gangster News - AI SEO strategy and freshness updates",
    description:
      "Read SEO Gangster articles on AI SEO agents, freshness, technical SEO, and publishing systems that keep rankings moving.",
  },
  "/videos": {
    title: "SEO Gangster Videos - Watch AI SEO workflows",
    description:
      "Watch SEO Gangster videos about AI SEO agents, weekly updates, and practical search execution.",
  },
  "/seo-ops": {
    title: "SEO Ops, but scripted. | @seogangster/ops",
    description:
      "@seogangster/ops is the SEO Gangster package idea for search teams that want clean, repeatable automation.",
  },
  "/terms": {
    title: "Terms - SEO Gangster",
    description: "Terms for using SEO Gangster and joining the signup list.",
  },
  "/privacy": {
    title: "Privacy - SEO Gangster",
    description: "Privacy details for SEO Gangster signup and site usage.",
  },
  "/workflows": {
    title: "SEO Gangster Workflows - AI SEO execution systems",
    description:
      "See the AI SEO workflows SEO Gangster uses for freshness, internal linking, page briefs, and technical cleanup.",
  },
  "/workflows/content-refresh": {
    title: "Content Refresh Workflows - SEO Gangster",
    description:
      "AI workflows for weekly content refreshes, page updates, and search freshness.",
  },
  "/workflows/technical-seo": {
    title: "Technical SEO Workflows - SEO Gangster",
    description:
      "Schema, internal linking, title checks, and technical SEO follow-through handled with AI workflows.",
  },
  "/workflows/local-pages": {
    title: "Local SEO Page Workflows - SEO Gangster",
    description:
      "Launch and maintain local landing pages faster with AI-assisted SEO workflows.",
  },
  "/workflows/workflow/freshness-pass": {
    title: "Freshness Pass Workflow - SEO Gangster",
    description:
      "Run a fast freshness pass on existing pages with AI-assisted SEO execution from SEO Gangster.",
  },
  "/workflows/workflow/internal-linking": {
    title: "Internal Linking Workflow - SEO Gangster",
    description:
      "Use AI to find internal linking opportunities and keep site structure improving over time.",
  },
  "/workflows/workflow/page-briefs": {
    title: "Page Brief Workflow - SEO Gangster",
    description:
      "Generate page briefs and article structures with AI SEO agents from SEO Gangster.",
  },
  "/workflows/workflow/schema-audit": {
    title: "Schema Audit Workflow - SEO Gangster",
    description:
      "Review and ship schema improvements with a technical SEO workflow from SEO Gangster.",
  },
};

const MARCH_21 = "2026-03-21T00:00:00-07:00";
const MARCH_31 = "2026-03-31T00:00:00-07:00";

const PATH_LAST_MODIFIED: Record<string, string> = {
  "/": MARCH_31,
  "/signup": MARCH_31,
  "/about": MARCH_21,
  "/story": MARCH_21,
  "/ai-seo-agents": MARCH_21,
  "/best-ai-seo-agent": MARCH_21,
  "/weekly-seo-updates": MARCH_21,
  "/what-website-should-i-use-for-seo": MARCH_21,
  "/seo-is-two-steps": MARCH_21,
  "/seo-agents-vs-seo-person": MARCH_21,
  "/seo-agents-vs-social-media-manager": MARCH_21,
  "/seo-agency-alternatives": MARCH_21,
  "/technical-seo-automation": MARCH_21,
  "/ai-tool-reviews": MARCH_21,
  "/tools": MARCH_21,
  "/tools/google-search-console": MARCH_21,
  "/invest": MARCH_21,
  "/news": MARCH_21,
  "/videos": MARCH_21,
  "/seo-ops": MARCH_21,
  "/terms": MARCH_21,
  "/privacy": MARCH_21,
  "/workflows": MARCH_21,
  "/workflows/content-refresh": MARCH_21,
  "/workflows/technical-seo": MARCH_21,
  "/workflows/local-pages": MARCH_21,
  "/workflows/workflow/freshness-pass": MARCH_21,
  "/workflows/workflow/internal-linking": MARCH_21,
  "/workflows/workflow/page-briefs": MARCH_21,
  "/workflows/workflow/schema-audit": MARCH_21,
};

export function normalizePath(inputPath: string): string {
  const [withoutHash] = inputPath.split("#");
  const [withoutQuery] = withoutHash.split("?");

  if (!withoutQuery || withoutQuery === "/") {
    return "/";
  }

  return withoutQuery.replace(/\/+$/, "");
}

export function toCanonicalUrl(path: string): string {
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
}

export function getPathLastModified(pathname: string): string | null {
  const normalizedPath = normalizePath(pathname);
  return PATH_LAST_MODIFIED[normalizedPath] ?? null;
}

export function getSeoMeta(pathname: string): SeoMeta {
  return {
    ...DEFAULT_META,
    ...(PATH_META[pathname] ?? {}),
  };
}
