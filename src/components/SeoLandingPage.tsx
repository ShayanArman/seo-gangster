import { createStyles, Box, Text, Button, Flex } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import EditorialHeroMedia from "@/components/EditorialHeroMedia";
import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import { SIGNUP_URL, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";

export interface SeoLandingSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface SeoLandingLink {
  href: string;
  label: string;
}

export interface SeoLandingContent {
  route: string;
  title: string;
  description: string;
  keywords: string;
  questionText: string;
  answerText: string;
  publishDate: string;
  heroImagePath?: string | null;
  heroFallbackText: string;
  heroOverlayText?: string;
  category?: string;
  intro: string[];
  sections: SeoLandingSection[];
  ctaText: string;
  relatedLinks?: SeoLandingLink[];
}

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 820,
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
    fontSize: "2.8rem",
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
    marginTop: "2.2rem",
    marginBottom: "0.75rem",
  },

  body: {
    color: "rgba(15, 29, 61, 0.82)",
    fontSize: "1rem",
    lineHeight: 1.8,
    marginBottom: "0.95rem",
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

  ctaWrap: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },

  ctaButton: {
    border: "none",
    fontWeight: 700,
    fontSize: "1rem",
    backgroundColor: "var(--zero-red-darker)",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#d4205a",
      transform: "translateY(-2px)",
      boxShadow: "0 10px 24px rgba(255, 50, 119, 0.25)",
    },
  },

  relatedHeading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "var(--zi-deep-blue)",
    marginBottom: "0.75rem",
  },

  relatedLinks: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 16,
  },

  relatedLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "var(--zi-deep-blue)",
    fontWeight: 700,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
}));

function formatPublishedDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function SeoLandingPage(content: SeoLandingContent) {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}${content.route}`;
  const modifiedDate = getPathLastModified(content.route) ?? content.publishDate;
  const organizationAuthor = {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.description,
    url: canonicalUrl,
    datePublished: content.publishDate,
    dateModified: modifiedDate,
    author: organizationAuthor,
    publisher: organizationAuthor,
  };

  const qaStructuredData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: content.questionText,
      text: content.questionText,
      url: canonicalUrl,
      datePublished: content.publishDate,
      author: organizationAuthor,
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: content.answerText,
        url: canonicalUrl,
        datePublished: content.publishDate,
        author: organizationAuthor,
        upvoteCount: 1,
      },
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: content.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">{content.title}</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={content.description} />
        <meta key="keywords" name="keywords" content={content.keywords} />
        <meta key="og:title" property="og:title" content={content.title} />
        <meta key="og:description" property="og:description" content={content.description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={content.title} />
        <meta key="twitter:description" name="twitter:description" content={content.description} />
        <script
          key={`ld-article-${content.route}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
        <script
          key={`ld-qa-${content.route}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaStructuredData) }}
        />
        <script
          key={`ld-breadcrumb-${content.route}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <Text className={classes.meta}>
          {content.category ?? "SEO Guide"} • Published {formatPublishedDate(content.publishDate)}
        </Text>
        <h1 className={classes.title}>{content.title}</h1>
        <EditorialHeroMedia
          src={content.heroImagePath}
          alt={content.title}
          fallbackText={content.heroFallbackText}
          overlayText={content.heroOverlayText}
        />

        {content.intro.map((paragraph) => (
          <Text key={paragraph} className={classes.lead}>
            {paragraph}
          </Text>
        ))}

        <div className={classes.ctaWrap}>
          <Button
            component="a"
            href={SIGNUP_URL}
            radius="xl"
            size="lg"
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            {content.ctaText}
          </Button>
        </div>

        {content.sections.map((section) => (
          <div key={section.title}>
            <h2 className={classes.sectionTitle}>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <Text key={paragraph} className={classes.body}>
                {paragraph}
              </Text>
            ))}
            {section.bullets?.length ? (
              <ul className={classes.list}>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}

        {content.relatedLinks?.length ? (
          <Box mt="xl">
            <Text className={classes.relatedHeading}>Related pages</Text>
            <Flex className={classes.relatedLinks}>
              {content.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className={classes.relatedLink}>
                  {link.label}
                  <FiArrowRight size={16} />
                </Link>
              ))}
            </Flex>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
