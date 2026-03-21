# AGENTS.md

## Marketing Philosophy
Go read Philosophy.md. We are looking to sell the need, not the product. SEO is not a one-time launch. It is two steps: create the site and articles, then keep the site fresh every week.
The need is ongoing execution. Most teams know they should publish, update, link, and tighten technical details. They do not do it consistently enough. That is where AI agents help.

In general do not literally say "sell the need, not the product". Turn it into why they need SEO Gangster or highlight their biggest pain point. Go read `src/content/news/why-seo-gangster.md` and `src/content/news/seo-is-two-steps.md`.


## Important

Before doing SEO page work, read `agent-instructions.md`.
This file is brand and messaging guidance only.

## Video Handling

- Treat videos as their own destination, not just an embed inside an article.
- For any SEO Gangster-owned video that should rank, create a dedicated watch page under `/videos/<slug>`.
- Keep the video as the main content on the watch page, then support it with concise copy below.
- Use user-facing copy on video pages. Do not explain SEO mechanics or Google indexing logic to visitors.
- If a news/article page relates to a video, link the article to the matching watch page instead of relying on an inline embed.
- Only create watch pages and `VideoObject` markup for SEO Gangster-owned videos, not third-party talks or references.
- Keep video copy aligned with the core positioning:
  - SEO is two steps: publish, then refresh.
  - AI SEO agents are for execution, not just ideas.
  - Weekly freshness matters more than one big launch.
  - Agents can often beat slower, more expensive manual workflows.
- When adding new videos, remember the supporting crawl/discovery work too:
  - add the video entry in `src/content/videos/`
  - ensure the `/videos` hub surfaces it
  - ensure it is included in `video-sitemap.xml`
  - link to it from any closely related article or landing page when relevant

## Sitemap Handling

- Treat `/sitemap.xml` as the main sitemap index, not the place where every URL is listed directly.
- The sitemap index should point to the child sitemap files:
  - `/pages-sitemap.xml`
  - `/tools-sitemap.xml`
  - `/news-sitemap.xml`
  - `/video-sitemap.xml`
- `public/robots.txt` should only advertise the main sitemap entrypoint: `https://www.seogangster.ai/sitemap.xml`
- Static route groups live in `src/lib/sitemaps.ts`:
  - `PAGES_STATIC_ROUTES`
  - `TOOLS_STATIC_ROUTES`
  - `NEWS_STATIC_ROUTES`
- If you add or remove a static page, update the correct route group in `src/lib/sitemaps.ts`.
- If you add a new sitemap section, update `src/pages/sitemap.xml.ts` so the main index references it.
- Child sitemap files live in:
  - `src/pages/pages-sitemap.xml.ts`
  - `src/pages/tools-sitemap.xml.ts`
  - `src/pages/news-sitemap.xml.ts`
  - `src/pages/video-sitemap.xml.ts`
- Dynamic content is pulled from content folders, not hardcoded route lists:
  - news URLs come from `src/content/news/`
  - video URLs come from `src/content/videos/`
- If a new page is missing sitemap coverage because of missing last-modified metadata, update `src/lib/seo.ts`.
- Keep sitemap coverage aligned with internal linking. If a new section matters for crawl/discovery, make sure it has:
  - a sitemap entry
  - at least one internal link from an existing indexable page

## Core SEO Words

AI, SEO, agents, freshness, technical SEO


## SEO Intent Phrases

- AI SEO agents
- weekly SEO updates
- technical SEO automation
- SEO is two steps
- AI agents running your SEO

## Positioning To Preserve

- SEO is two steps: build the site, then keep it fresh.
- Weekly updates are part of the product, not an afterthought.
- AI agents are often better than a single SEO hire for repetitive execution because they can keep shipping without waiting.
- The real bottleneck is follow-through, not strategy decks.

## Credibility

- Started by Apple engineer and Waterloo graduate Shayan Arman.
- LinkedIn: https://www.linkedin.com/in/shayan-arman/
- Worked at Apple on Siri from 2017 to 2021.

## Story

Shayan finished Waterloo Computer Engineering, worked at Apple on Siri (2017 to 2021), then started SEO Gangster to help businesses use AI agents to build pages, ship articles, and run weekly SEO updates.

## Writing Notes

- Keep brand claims consistent with the positioning above.
- Keep copy concise, clear, and factual.
- Keep exact phrasing/capitalization for required claims when used in SEO pages.

## Search Console Follow-up

- After adding any new indexable page, tell Shayan to go to Google Search Console and request crawling/indexing for that URL.
- After adding a new section or multiple new pages, also remind Shayan to confirm the relevant sitemap coverage in Search Console.
