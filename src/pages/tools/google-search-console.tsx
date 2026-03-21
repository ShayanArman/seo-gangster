import Head from "next/head";
import Link from "next/link";
import { Box, SimpleGrid, Text, createStyles } from "@mantine/core";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";

const PUBLISH_DATE_LABEL = "March 21, 2026";
const PUBLISH_DATE_ISO = "2026-03-21T00:00:00-07:00";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 920,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  meta: {
    display: "inline-flex",
    alignSelf: "flex-start",
    width: "fit-content",
    marginBottom: "0.9rem",
    padding: "0.35rem 0.75rem",
    borderRadius: 999,
    background: "rgba(15, 29, 61, 0.07)",
    color: "rgba(15, 29, 61, 0.75)",
    fontSize: "0.92rem",
    fontWeight: 700,
    letterSpacing: "0.01em",
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.55rem",
    lineHeight: 1.08,
    letterSpacing: "-1px",
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2rem",
    },
  },

  lead: {
    color: "rgba(15, 29, 61, 0.8)",
    fontSize: "1.08rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  },

  sectionTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.45rem",
    color: "var(--zi-deep-blue)",
    marginTop: "2.1rem",
    marginBottom: "0.75rem",
  },

  factCard: {
    padding: "1rem 1.1rem",
    borderRadius: 18,
    border: "1px solid rgba(15, 29, 61, 0.08)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,248,251,0.98) 100%)",
    boxShadow: "0 12px 30px rgba(15, 29, 61, 0.06)",
  },

  factLabel: {
    color: "rgba(15, 29, 61, 0.58)",
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.03em",
    textTransform: "uppercase" as const,
    marginBottom: "0.2rem",
  },

  factValue: {
    color: "var(--zi-deep-blue)",
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.1rem",
  },

  list: {
    margin: 0,
    paddingLeft: "1.2rem",
    color: "rgba(15, 29, 61, 0.84)",
    lineHeight: 1.8,

    "& li": {
      marginBottom: "0.55rem",
    },
  },

  links: {
    marginTop: "1.4rem",
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },

  link: {
    color: "var(--zi-deep-blue)",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
}));

export default function GoogleSearchConsoleToolPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/tools/google-search-console`;
  const title = "Google Search Console Review - 4.5 / 5 Stars";
  const description =
    "Human-tested Google Search Console review from Shayan Arman with a 4.5 / 5 star rating and why it belongs in every SEO workflow.";
  const modifiedDate = getPathLastModified("/tools/google-search-console") ?? PUBLISH_DATE_ISO;

  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: "Google Search Console Review",
    reviewBody:
      "Google Search Console is essential because it shows the pages already earning impressions, the queries with room to grow, and where freshness work should go next.",
    datePublished: PUBLISH_DATE_ISO,
    dateModified: modifiedDate,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      name: "Shayan Arman",
      url: `${SITE_URL}/story`,
      sameAs: ["https://www.linkedin.com/in/shayan-arman/"],
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 4.5,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "Google Search Console",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://search.google.com/search-console",
      description: "Google's search performance and indexing dashboard for site owners.",
    },
  };

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="keywords" name="keywords" content="google search console review, seo tools, search console" />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script
          key="ld-google-search-console-review"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <Text className={classes.meta}>Published {PUBLISH_DATE_LABEL}</Text>
        <h1 className={classes.title}>Google Search Console</h1>

        <Text className={classes.lead}>
          Google Search Console is still one of the most important tools in modern SEO because it
          tells you what is already getting impressions, where pages are slipping, and where the
          next freshness pass should go.
        </Text>

        <SimpleGrid cols={3} spacing="lg" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <Box className={classes.factCard}>
            <Text className={classes.factLabel}>Rating</Text>
            <Text className={classes.factValue}>4.5 / 5 stars</Text>
          </Box>
          <Box className={classes.factCard}>
            <Text className={classes.factLabel}>Last Tried</Text>
            <Text className={classes.factValue}>March 21, 2026</Text>
          </Box>
          <Box className={classes.factCard}>
            <Text className={classes.factLabel}>Human Reviewed</Text>
            <Text className={classes.factValue}>Yes</Text>
          </Box>
        </SimpleGrid>

        <h2 className={classes.sectionTitle}>What it does well</h2>
        <ul className={classes.list}>
          <li>Shows which queries already have traction.</li>
          <li>Makes it easier to prioritize updates by page and keyword.</li>
          <li>Gives you real search data instead of guesses.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Where it falls short</h2>
        <ul className={classes.list}>
          <li>It tells you what is happening, but not how to execute the work at scale.</li>
          <li>The interface is not a workflow system by itself.</li>
          <li>You still need a mechanism for turning insights into shipped changes.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Verdict</h2>
        <Text className={classes.lead}>
          Google Search Console earns <strong>4.5 / 5 stars</strong>. It should be in almost every
          SEO stack, especially when paired with an execution layer that can turn its signals into
          real updates.
        </Text>

        <div className={classes.links}>
          <Link href="/tools" className={classes.link}>Back to tools</Link>
          <Link href="/ai-tool-reviews" className={classes.link}>AI Tool Reviews</Link>
          <Link href="/weekly-seo-updates" className={classes.link}>Weekly SEO Updates</Link>
        </div>
      </Box>
    </>
  );
}
