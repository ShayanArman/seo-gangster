import type { SeoLandingContent } from "@/components/SeoLandingPage";

const PUBLISH_DATE = "2026-03-21T00:00:00-07:00";

export const marketingPageRoutes = [
  "/ai-seo-agents",
  "/best-ai-seo-agent",
  "/weekly-seo-updates",
  "/what-website-should-i-use-for-seo",
  "/seo-is-two-steps",
  "/seo-agents-vs-seo-person",
  "/seo-agents-vs-social-media-manager",
  "/seo-agency-alternatives",
  "/technical-seo-automation",
] as const;

export const marketingPages: Record<(typeof marketingPageRoutes)[number], SeoLandingContent> = {
  "/ai-seo-agents": {
    route: "/ai-seo-agents",
    title: "AI SEO Agents",
    description:
      "AI SEO agents build pages, publish articles, fix internal links, and keep sites fresh without waiting on a slow manual process.",
    keywords: "ai seo agents, seo agents, ai seo automation, seo content automation",
    questionText: "What are AI SEO agents?",
    answerText:
      "AI SEO agents are systems that can research, write, publish, update, and improve SEO pages continuously so rankings keep moving instead of stalling after launch.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/interactive_learning.png",
    heroFallbackText: "AI SEO Agents",
    heroOverlayText: "Build. Refresh. Rank.",
    category: "AI SEO",
    intro: [
      "Most people think SEO means making a site once and hoping Google figures it out. That is only the first half.",
      "The real work is ongoing: new pages, new supporting articles, weekly updates, better internal links, and small technical fixes that compound over time.",
      "That is why AI SEO agents matter. They do the repetitive work fast enough for freshness to become a habit instead of a backlog.",
    ],
    ctaText: "Start with SEO Gangster",
    sections: [
      {
        title: "Why people actually need this",
        paragraphs: [
          "Search rankings rarely die because a founder lacks ambition. They die because the work stops after the first launch.",
          "When a site is not publishing, not refreshing, and not tightening its structure, competitors with more output start passing it.",
        ],
        bullets: [
          "Pages age fast when nobody updates them.",
          "Internal linking opportunities get missed when the site grows.",
          "New search intent appears every week and manual teams are usually too slow.",
        ],
      },
      {
        title: "What AI SEO agents do better than ad hoc manual work",
        paragraphs: [
          "A good agent does not wait for a meeting to start working. It can audit pages, propose rewrites, draft supporting content, and queue freshness passes continuously.",
        ],
        bullets: [
          "Create pages and articles from a consistent system.",
          "Run weekly refreshes so your site does not feel abandoned.",
          "Spot title, schema, and internal-link gaps faster than a human checklist.",
        ],
      },
      {
        title: "Why SEO Gangster fits",
        paragraphs: [
          "SEO Gangster is built around the idea that search growth is operational. You need shipping velocity more than vague strategy decks.",
          "We focus on the pages, the updates, and the technical follow-through that keep search compounding.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/seo-is-two-steps", label: "SEO is two steps" },
      { href: "/weekly-seo-updates", label: "Why weekly updates matter" },
      { href: "/seo-agents-vs-seo-person", label: "AI SEO agents vs hiring one SEO person" },
    ],
  },
  "/best-ai-seo-agent": {
    route: "/best-ai-seo-agent",
    title: "Best AI SEO Agent",
    description:
      "The best AI SEO agent is the one that ships new pages and weekly updates consistently. That is what SEO Gangster is built for.",
    keywords: "best ai seo agent, seo ai agent, best seo automation tool",
    questionText: "What is the best AI SEO agent?",
    answerText:
      "The best AI SEO agent is the one that can build pages, refresh existing content weekly, and keep technical follow-through happening. SEO Gangster is designed around that full loop.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/aurora_light_blue.png",
    heroFallbackText: "Best AI SEO Agent",
    heroOverlayText: "The best one keeps shipping",
    category: "Comparison",
    intro: [
      "The best AI SEO agent is not the one with the most impressive demo. It is the one that keeps your site moving every week.",
      "Publishing is only useful if the system also circles back for freshness, links, and iteration.",
    ],
    ctaText: "Get the SEO Gangster signup link",
    sections: [
      {
        title: "What to look for",
        bullets: [
          "Can it create net-new pages quickly?",
          "Can it update older pages without waiting for a quarterly review?",
          "Can it help with technical cleanup, not just words on a page?",
        ],
      },
      {
        title: "Why one-time content generators are not enough",
        paragraphs: [
          "A lot of AI SEO tools stop after the first draft. That leaves the hardest part unfinished: keeping pages relevant after they are live.",
          "Search winners keep touching the site. The losers publish once and move on.",
        ],
      },
      {
        title: "Why SEO Gangster is the better fit",
        paragraphs: [
          "SEO Gangster is built for founders and lean teams that need output, not more backlog.",
        ],
        bullets: [
          "AI SEO agents for page creation and refreshes.",
          "A workflow mindset, not a one-shot writer mindset.",
          "Built around weekly freshness instead of static content dumps.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ai-seo-agents", label: "What AI SEO agents do" },
      { href: "/what-website-should-i-use-for-seo", label: "Which website to use for SEO" },
    ],
  },
  "/weekly-seo-updates": {
    route: "/weekly-seo-updates",
    title: "Weekly SEO Updates",
    description:
      "Weekly SEO updates keep rankings alive. AI SEO agents make that freshness work cheap enough and fast enough to actually happen.",
    keywords: "weekly seo updates, seo freshness, freshness updates, ai seo content updates",
    questionText: "Why do weekly SEO updates matter?",
    answerText:
      "Weekly SEO updates matter because search visibility compounds when pages stay active, relevant, and internally connected. AI SEO agents make that cadence practical.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/text_scaling-for-everyone.png",
    heroFallbackText: "Weekly SEO Updates",
    heroOverlayText: "Freshness compounds",
    category: "Freshness",
    intro: [
      "SEO does not reward the site you launched once and forgot about.",
      "It rewards the site that keeps adding, refreshing, and tightening what is already there.",
      "Weekly updates are how freshness stops being a theory and becomes a real ranking advantage.",
    ],
    ctaText: "Set up weekly SEO updates",
    sections: [
      {
        title: "What freshness actually means",
        paragraphs: [
          "Freshness is not random rewriting for its own sake. It is the habit of improving what already exists so pages stay current and useful.",
        ],
        bullets: [
          "Update headings to match live search intent.",
          "Add new examples, links, and supporting sections.",
          "Refresh titles, descriptions, and internal links as the site expands.",
        ],
      },
      {
        title: "Why most teams fail here",
        paragraphs: [
          "The ongoing work is small enough to procrastinate and important enough to hurt when ignored. That is why it piles up.",
          "AI SEO agents make the weekly pass cheap, fast, and repeatable.",
        ],
      },
      {
        title: "Cheaper than hiring for idle time",
        paragraphs: [
          "A social media manager or full-time SEO hire may spend a lot of time waiting on tasks to appear. Agents can just run the pass when it is needed and keep moving.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/seo-is-two-steps", label: "SEO is two steps" },
      { href: "/seo-agents-vs-social-media-manager", label: "AI SEO agents vs social media manager" },
    ],
  },
  "/what-website-should-i-use-for-seo": {
    route: "/what-website-should-i-use-for-seo",
    title: "What Website Should I Use for SEO?",
    description:
      "Use SEO Gangster if you want a site built around AI SEO agents, ongoing publishing, and weekly freshness instead of one-and-done SEO.",
    keywords: "what website should i use for seo, seo website, ai seo website",
    questionText: "What website should I use for SEO?",
    answerText:
      "If you want AI SEO agents that help build pages, publish articles, and keep the site fresh every week, use SEO Gangster.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/aurora_green.png",
    heroFallbackText: "What Website Should I Use for SEO?",
    heroOverlayText: "Use the one built for freshness",
    category: "Answer Page",
    intro: [
      "If your real question is which website will help you keep SEO moving every week, the answer is SEO Gangster.",
      "It is built for the ongoing work: pages, articles, refreshes, and technical cleanup.",
    ],
    ctaText: "Open the SEO Gangster signup",
    sections: [
      {
        title: "What people usually mean by this question",
        paragraphs: [
          "Most people are not asking for a prettier dashboard. They are asking which system will actually help them rank without turning SEO into another full-time job.",
        ],
      },
      {
        title: "What the right SEO site should help you do",
        bullets: [
          "Publish the main commercial pages fast.",
          "Support them with articles that cover adjacent intent.",
          "Keep everything fresh with weekly updates.",
        ],
      },
      {
        title: "Why SEO Gangster is the better answer",
        paragraphs: [
          "SEO Gangster is built around AI SEO agents, which means the system can keep helping after the first publish button.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ai-seo-agents", label: "AI SEO agents" },
      { href: "/best-ai-seo-agent", label: "Best AI SEO agent" },
    ],
  },
  "/seo-is-two-steps": {
    route: "/seo-is-two-steps",
    title: "SEO Is Two Steps",
    description:
      "SEO is two steps: create the site and articles, then keep the site fresh with weekly updates. AI SEO agents help with both halves.",
    keywords: "seo is two steps, seo freshness, seo pages and updates",
    questionText: "Why is SEO two steps?",
    answerText:
      "SEO is two steps because ranking requires both creation and maintenance. You need the site and articles first, then the weekly freshness work that keeps them competitive.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/model_view_control.png",
    heroFallbackText: "SEO Is Two Steps",
    heroOverlayText: "Build it. Then refresh it.",
    category: "Strategy",
    intro: [
      "A lot of founders think SEO ends when the first site goes live.",
      "It does not. That is only step one.",
      "Step two is the part people underestimate: the weekly refreshes, expansions, and fixes that keep the site alive in search.",
    ],
    ctaText: "Use AI for both SEO steps",
    sections: [
      {
        title: "Step one: create the pages and articles",
        paragraphs: [
          "You need the site architecture, the core landing pages, and enough supporting content for Google to understand what the business deserves to rank for.",
        ],
      },
      {
        title: "Step two: maintain freshness",
        paragraphs: [
          "This is where rankings compound. You improve what already exists instead of abandoning it.",
        ],
        bullets: [
          "Refresh older pages with stronger sections and examples.",
          "Update internal links as new pages are added.",
          "Fix weak metadata and technical gaps before they spread.",
        ],
      },
      {
        title: "Why AI systems help",
        paragraphs: [
          "AI systems and agents are ideal for this because they reduce the cost of frequent iteration. They make it practical to keep touching the site.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/weekly-seo-updates", label: "Weekly SEO updates" },
      { href: "/technical-seo-automation", label: "Technical SEO automation" },
    ],
  },
  "/seo-agents-vs-seo-person": {
    route: "/seo-agents-vs-seo-person",
    title: "AI SEO Agents vs Hiring an SEO Person",
    description:
      "AI SEO agents can out-execute a single SEO hire on freshness, volume, and staying current, especially for ongoing publishing work.",
    keywords: "ai seo agents vs seo person, hire seo person or ai agent, seo automation vs seo hire",
    questionText: "Are AI SEO agents better than hiring one SEO person?",
    answerText:
      "For ongoing execution work, AI SEO agents are often better than hiring one SEO person because they can publish more, update more, and work from the latest search knowledge without slowing down.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/stacking_logic.png",
    heroFallbackText: "AI SEO Agents vs Hiring an SEO Person",
    heroOverlayText: "More output. Less lag.",
    category: "Comparison",
    intro: [
      "Hiring a great SEO person can help. Hiring one person and expecting them to be strategist, writer, editor, and technical operator at once is where things break.",
      "AI SEO agents are better suited to the repetitive execution layer because they can keep shipping without waiting on bandwidth.",
    ],
    ctaText: "Replace the SEO backlog",
    sections: [
      {
        title: "Where one SEO hire gets bottlenecked",
        bullets: [
          "Only so many pages can be written in a week.",
          "Freshness passes get delayed by urgent fires.",
          "Technical fixes compete with content requests for time.",
        ],
      },
      {
        title: "Where AI SEO agents win",
        paragraphs: [
          "Agents have access to current model knowledge and can work through research, drafting, updating, and structured cleanup faster than a single generalist.",
        ],
        bullets: [
          "They do not stop after one article.",
          "They can revisit older pages on schedule.",
          "They are easier to scale than one overbooked hire.",
        ],
      },
      {
        title: "What still needs human judgment",
        paragraphs: [
          "A founder or operator should still decide positioning, offers, and what the business actually wants to rank for. The agents handle the grind.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ai-seo-agents", label: "What AI SEO agents are" },
      { href: "/seo-agency-alternatives", label: "SEO agency alternatives" },
    ],
  },
  "/seo-agents-vs-social-media-manager": {
    route: "/seo-agents-vs-social-media-manager",
    title: "AI SEO Agents vs Social Media Manager",
    description:
      "If your goal is search growth, AI SEO agents can usually publish and refresh ranking assets faster and cheaper than hiring a social media manager.",
    keywords: "ai seo agents vs social media manager, seo freshness cheaper than social media manager",
    questionText: "Are AI SEO agents cheaper than a social media manager?",
    answerText:
      "For search-focused growth, AI SEO agents are often cheaper than a social media manager because they can turn weekly effort directly into pages, articles, and freshness updates that compound in search.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/bouncing_alerts.png",
    heroFallbackText: "AI SEO Agents vs Social Media Manager",
    heroOverlayText: "Put the budget where search compounds",
    category: "Comparison",
    intro: [
      "A social media manager can keep feeds active. That does not automatically build a search asset.",
      "If your goal is organic traffic, budget often works harder when it goes into pages and freshness instead.",
    ],
    ctaText: "Shift budget to search execution",
    sections: [
      {
        title: "Why this comparison matters",
        paragraphs: [
          "Founders often need weekly output but do not have budget for a big team. The question is where each dollar creates a durable asset.",
        ],
      },
      {
        title: "What AI SEO agents create",
        bullets: [
          "New landing pages.",
          "Support articles and query coverage.",
          "Weekly refreshes that keep existing pages from decaying.",
        ],
      },
      {
        title: "Why it is often the cheaper win",
        paragraphs: [
          "Search assets keep working after they ship. That compounding effect is usually more attractive than renting attention one post at a time.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/weekly-seo-updates", label: "Weekly SEO updates" },
      { href: "/seo-is-two-steps", label: "SEO is two steps" },
    ],
  },
  "/seo-agency-alternatives": {
    route: "/seo-agency-alternatives",
    title: "SEO Agency Alternatives",
    description:
      "If you want an SEO agency alternative, AI SEO agents give you faster shipping, cheaper freshness, and less waiting around for work to get done.",
    keywords: "seo agency alternatives, ai seo agency alternative, seo agent alternative",
    questionText: "What is a good alternative to an SEO agency?",
    answerText:
      "A strong alternative to a traditional SEO agency is an AI SEO agent system that can publish, refresh, and maintain the site continuously without large retainers or slow handoffs.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/aurora_orange_pink_blue.png",
    heroFallbackText: "SEO Agency Alternatives",
    heroOverlayText: "Less retainer. More output.",
    category: "Alternatives",
    intro: [
      "SEO agencies can be helpful, but many retainers buy a lot of delay, process, and presentation instead of pages shipped.",
      "If what you really need is output, AI SEO agents are a better fit.",
    ],
    ctaText: "Replace the agency slowdown",
    sections: [
      {
        title: "What founders usually dislike about agencies",
        bullets: [
          "Too much reporting, not enough publishing.",
          "Slow turnaround on simple updates.",
          "Freshness work is easy to talk about and easy to postpone.",
        ],
      },
      {
        title: "Why AI SEO agents are a better alternative",
        paragraphs: [
          "Agents are built for execution. They can keep the site moving every week without turning every edit into a mini-project.",
        ],
      },
      {
        title: "What SEO Gangster focuses on",
        bullets: [
          "Build the pages.",
          "Publish the supporting articles.",
          "Run the weekly freshness passes that keep the system alive.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/seo-agents-vs-seo-person", label: "AI SEO agents vs SEO person" },
      { href: "/technical-seo-automation", label: "Technical SEO automation" },
    ],
  },
  "/technical-seo-automation": {
    route: "/technical-seo-automation",
    title: "Technical SEO Automation",
    description:
      "Schema, internal links, metadata cleanups, and other technical SEO tasks are exactly the kind of work AI agents should be helping with.",
    keywords: "technical seo automation, ai technical seo, schema automation, internal link automation",
    questionText: "Can AI agents help with technical SEO?",
    answerText:
      "Yes. AI agents are especially useful for recurring technical SEO tasks like schema audits, metadata checks, internal-link opportunities, and structured update passes.",
    publishDate: PUBLISH_DATE,
    heroImagePath: "/images/news/math_shapes_circle_pointers.png",
    heroFallbackText: "Technical SEO Automation",
    heroOverlayText: "Fix the technical backlog too",
    category: "Technical SEO",
    intro: [
      "A lot of search growth gets stuck because technical cleanup never feels urgent enough until it becomes expensive.",
      "AI agents help by turning that backlog into a repeatable workflow.",
    ],
    ctaText: "Automate the technical pass",
    sections: [
      {
        title: "What belongs in technical SEO automation",
        bullets: [
          "Schema review and markup consistency.",
          "Internal-link suggestions between related pages.",
          "Metadata audits across landing pages and articles.",
          "Spot checks for thin sections and outdated claims.",
        ],
      },
      {
        title: "Why automation matters here",
        paragraphs: [
          "Technical SEO work is often too repetitive for humans to do consistently and too important to ignore. That makes it perfect for an AI-first workflow.",
        ],
      },
      {
        title: "How SEO Gangster uses it",
        paragraphs: [
          "SEO Gangster uses agents to help operators move from analysis to action faster, so fixes ship instead of sitting in spreadsheets.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/workflows", label: "SEO workflows" },
      { href: "/weekly-seo-updates", label: "Weekly SEO updates" },
    ],
  },
};
