/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/ai-email-organizer", destination: "/ai-seo-agents", permanent: true },
      { source: "/best-ai-email-organizer", destination: "/best-ai-seo-agent", permanent: true },
      { source: "/clean-and-organize-emails", destination: "/weekly-seo-updates", permanent: true },
      { source: "/what-website-should-i-use-to-clean-or-organize-my-emails", destination: "/what-website-should-i-use-for-seo", permanent: true },
      { source: "/mark-zuckerberg-loves-inbox-zero-ai", destination: "/seo-is-two-steps", permanent: true },
      { source: "/sanebox-alternatives", destination: "/seo-agency-alternatives", permanent: true },
      { source: "/sanebox-vs-superhuman", destination: "/seo-agents-vs-seo-person", permanent: true },
      { source: "/superhuman-alternatives", destination: "/seo-agents-vs-social-media-manager", permanent: true },
      { source: "/fyxer-alternatives", destination: "/technical-seo-automation", permanent: true },
      { source: "/fyxer-ai-vs-zero-inbox-ai", destination: "/seo-agents-vs-seo-person", permanent: true },
      { source: "/fyxer-ai-vs-superhuman", destination: "/seo-agents-vs-social-media-manager", permanent: true },
      { source: "/tools/superhuman", destination: "/tools/google-search-console", permanent: true },
      { source: "/workflows/email-management", destination: "/workflows/content-refresh", permanent: true },
      { source: "/workflows/accounting", destination: "/workflows/technical-seo", permanent: true },
      { source: "/workflows/sales", destination: "/workflows/local-pages", permanent: true },
      { source: "/workflows/workflow/email-cleaner", destination: "/workflows/workflow/freshness-pass", permanent: true },
      { source: "/workflows/workflow/contacts-sync", destination: "/workflows/workflow/internal-linking", permanent: true },
      { source: "/workflows/workflow/sequencer", destination: "/workflows/workflow/page-briefs", permanent: true },
      { source: "/workflows/workflow/transaction-summary", destination: "/workflows/workflow/schema-audit", permanent: true },
      { source: "/terms.pdf", destination: "/terms", permanent: true },
      { source: "/privacy.pdf", destination: "/privacy", permanent: true },
    ];
  },
};

module.exports = nextConfig
