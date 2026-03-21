# SEO Gangster SEO Creation Playbook

This file documents the current pattern for creating SEO Gangster landing pages, news posts, workflow pages, and videos without drifting back to the retired email-era structure.

## Goal

Create SEO content that:

1. Matches SEO Gangster positioning from `AGENTS.md`.
2. Focuses on AI SEO agents, weekly freshness, and execution.
3. Keeps metadata, sitemap coverage, and structured data consistent.
4. Preserves redirects when replacing an older route.

## Current Architecture

- Top-level landing pages are driven by `src/components/SeoLandingPage.tsx`.
- Their copy lives in `src/lib/marketingPages.ts`.
- Each route wrapper in `src/pages/` is now usually tiny and just loads a config entry.
- Workflow pages are driven by `src/components/WorkflowLandingPage.tsx`.
- Workflow copy lives in `src/lib/workflowPages.ts`.
- Editorial articles live in `src/content/news/`.
- Video destinations live in `src/content/videos/`.
- Shared metadata lives in `src/lib/seo.ts`.
- Static sitemap route groups live in `src/lib/sitemaps.ts`.
- Legacy route migrations live in `next.config.js` as permanent redirects.

## Content Types

### 1. Marketing landing pages

Use this path when you are creating a static page like:

- `AI SEO Agents`
- `Best AI SEO Agent`
- `Weekly SEO Updates`
- `SEO Is Two Steps`
- `AI SEO Agents vs SEO Person`

Typical workflow:

1. Add or update the page content in `src/lib/marketingPages.ts`.
2. Add the route wrapper in `src/pages/` if it does not already exist.
3. Add metadata and last-modified entries in `src/lib/seo.ts`.
4. Add the route to `PAGES_STATIC_ROUTES` in `src/lib/sitemaps.ts`.
5. Add related internal links when the page introduces a new cluster.

### 2. Workflow pages

Use this path when the page is really a repeatable operating procedure:

- freshness passes
- internal linking
- page briefs
- schema audits
- local SEO page production

Typical workflow:

1. Add or update the workflow entry in `src/lib/workflowPages.ts`.
2. Add the wrapper page in `src/pages/workflows/` or `src/pages/workflows/workflow/`.
3. Add metadata and last-modified entries in `src/lib/seo.ts`.
4. Add the route to `PAGES_STATIC_ROUTES` in `src/lib/sitemaps.ts`.

### 3. News articles

Use markdown in `src/content/news/` when the content should read like an editorial article.

Required frontmatter:

- `title`
- `subtitle`
- `date`
- `category`
- `excerpt`
- `slug`
- `thumbnail`
- `imageFallbackText`

News URLs are pulled into the sitemap dynamically, so no manual `NEWS_STATIC_ROUTES` entry is needed for each article.

### 4. Video pages

Use markdown in `src/content/videos/` for SEO Gangster-owned videos.

Required frontmatter:

- `title`
- `subtitle`
- `date`
- `category`
- `excerpt`
- `slug`
- `posterImage`
- `youtubeUrl`
- `relatedUrl`
- `relatedLabel`

If a video supports an article, cross-link both directions.

## Copy Rules

- Keep the central idea intact: SEO is two steps, and freshness is the second step.
- Favor execution language over vague strategy language.
- Make the pain concrete: teams stop shipping, pages decay, clusters stall, technical cleanup gets postponed.
- When comparing against manual hiring, emphasize speed, consistency, and up-to-date search execution.
- Keep CTA language pointed at `https://seogangster.ai/signup`.
- Prefer precise SEO phrases like `AI SEO agents`, `weekly SEO updates`, `technical SEO automation`, and `local SEO pages`.

## Redirect and Rename Rules

When replacing an older page:

1. Create the new destination route first.
2. Add a permanent redirect in `next.config.js`.
3. Delete the stale old route file once the replacement exists.
4. Remove old-brand references from internal docs, scripts, and helper files.

Do not keep duplicate old and new route files around if the redirect is already handling the migration.

## Metadata and Schema

- `SeoLandingPage.tsx` already emits `Article`, `QAPage`, and `BreadcrumbList` JSON-LD.
- `WorkflowLandingPage.tsx` handles basic page metadata for workflow routes.
- Markdown news and video pages inherit their structured data from the dynamic page templates.
- Every new static route still needs entries in `src/lib/seo.ts` for title/description and last modified date.

## Validation Commands

Run these after meaningful SEO page work:

1. `yarn lint`
2. `python3 scripts/check_unique_editorial_images.py`
3. `rg -n "seogangster|AI SEO agents|weekly SEO updates" src/content src/pages`
4. `git status --short`

## Search Console Follow-up

1. Open Google Search Console for `seogangster.ai`.
2. Request indexing for new or heavily changed URLs.
3. Confirm the relevant sitemap is surfacing the new routes.
4. If you added a new content cluster, check that internal links and sitemap coverage both exist.
