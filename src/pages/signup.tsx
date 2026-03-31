import Head from "next/head";
import { Box, Button, Paper, Stack, Text, TextInput, Textarea, createStyles } from "@mantine/core";
import { SIGNUP_FORM_ENDPOINT, SIGNUP_URL, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  page: {
    width: "100%",
    maxWidth: 760,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  meta: {
    display: "inline-flex",
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
    fontSize: "clamp(2.4rem, 6vw, 4rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.04em",
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",
  },

  lead: {
    color: "rgba(15, 29, 61, 0.74)",
    fontSize: "1.05rem",
    lineHeight: 1.75,
    marginBottom: "1.2rem",
  },

  formCard: {
    marginTop: "1.5rem",
    padding: "1.5rem",
    borderRadius: 24,
    border: "1px solid rgba(15, 29, 61, 0.08)",
    boxShadow: "0 18px 50px rgba(15, 29, 61, 0.08)",
  },

  submitButton: {
    border: "none",
    fontWeight: 700,
    backgroundColor: "var(--zero-red-darker)",

    "&:hover": {
      backgroundColor: "#d4205a",
    },
  },
}));

export default function SignupPage() {
  const { classes } = useStyles();
  const canonicalUrl = SIGNUP_URL;
  const modifiedDate = getPathLastModified("/signup");
  const title = `Sign Up - ${SITE_NAME}`;
  const description = "Tell SEO Gangster about your site and your growth goals.";

  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonicalUrl,
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
        />
      </Head>

      <Box className={classes.page}>
        <Text className={classes.meta}>SEO Gangster signup</Text>
        <h1 className={classes.title}>Tell us what you want to rank for.</h1>
        <Text className={classes.lead}>
          This is a simple signup form for the new SEO Gangster flow. Share your site, your market,
          and the kind of search growth you want help with.
        </Text>
        <Text className={classes.lead}>
          The form posts to a placeholder endpoint for now so you can wire the real backend later.
        </Text>

        <Paper component="form" action={SIGNUP_FORM_ENDPOINT} method="post" className={classes.formCard}>
          <Stack>
            <TextInput name="name" label="Name" placeholder="Shayan Arman" required />
            <TextInput name="email" type="email" label="Email" placeholder="hello@company.com" required />
            <TextInput name="website" label="Website" placeholder="https://example.com" />
            <TextInput name="focus" label="What do you need to rank for?" placeholder="AI SEO agents, local SEO, service pages..." />
            <Textarea
              name="notes"
              label="What should the agents help with?"
              minRows={5}
              placeholder="Page creation, weekly freshness updates, technical SEO cleanup, internal linking..."
            />
            <Button type="submit" radius="xl" size="lg" className={classes.submitButton}>
              Join the signup list
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
