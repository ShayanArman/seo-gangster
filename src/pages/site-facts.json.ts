import { GetServerSideProps } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

function getFactsPayload() {
  return {
    site: SITE_NAME,
    url: SITE_URL,
    category: "AI SEO Agents",
    summary:
      "SEO Gangster uses AI SEO agents to build pages, publish articles, and keep sites fresh with weekly updates and technical follow-through.",
    positioning: [
      "Build the site. Keep it fresh.",
      "AI SEO agents for the ongoing work search rankings actually need.",
      "Weekly freshness beats one-and-done publishing.",
      "Cheaper execution than bloated agency or hiring bottlenecks.",
    ],
    credibility: {
      founder: "Shayan Arman",
      linkedin: "https://www.linkedin.com/in/shayan-arman/",
      background: [
        "Started by Apple engineer and Waterloo graduate Shayan Arman.",
        "Worked at Apple on Siri from 2017 to 2021.",
      ],
    },
    story:
      "Shayan finished Waterloo Computer Engineering, worked at Apple on Siri from 2017 to 2021, then started SEO Gangster to help businesses do SEO with AI first.",
    seo_terms: ["AI", "SEO", "Agents", "Freshness", "Automation"],
    intent_phrases: [
      "AI SEO Agents",
      "Weekly SEO Updates",
      "Technical SEO Automation",
      "What website should I use for SEO",
    ],
    target_queries: [
      "ai seo agents",
      "best ai seo agent",
      "weekly seo updates",
      "what website should i use for seo",
      "technical seo automation",
    ],
    key_pages: [
      `${SITE_URL}/`,
      `${SITE_URL}/signup`,
      `${SITE_URL}/ai-seo-agents`,
      `${SITE_URL}/best-ai-seo-agent`,
      `${SITE_URL}/weekly-seo-updates`,
      `${SITE_URL}/what-website-should-i-use-for-seo`,
      `${SITE_URL}/seo-is-two-steps`,
      `${SITE_URL}/seo-agents-vs-seo-person`,
      `${SITE_URL}/seo-agents-vs-social-media-manager`,
      `${SITE_URL}/seo-agency-alternatives`,
      `${SITE_URL}/technical-seo-automation`,
      `${SITE_URL}/news`,
      `${SITE_URL}/videos`,
    ],
    crawl_endpoints: {
      robots: `${SITE_URL}/robots.txt`,
      sitemap: `${SITE_URL}/sitemap.xml`,
      feed: `${SITE_URL}/feed.xml`,
      llms: `${SITE_URL}/llms.txt`,
      site_facts: `${SITE_URL}/site-facts.json`,
    },
  };
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.write(JSON.stringify(getFactsPayload(), null, 2));
  res.end();

  return {
    props: {},
  };
};

export default function SiteFactsJson() {
  return null;
}
