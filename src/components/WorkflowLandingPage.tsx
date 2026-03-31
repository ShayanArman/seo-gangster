import { SIGNUP_PATH, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";
import { Button, Flex, Text, createStyles } from "@mantine/core";
import Head from "next/head";

export interface WorkflowLandingContent {
  route: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
}

const useStyles = createStyles((theme) => ({
  container: {
    margin: "3rem 0rem",
  },

  section: {
    width: "50%",

    [theme.fn.smallerThan("xl")]: {
      width: "80%",
    },
  },

  title: {
    fontFamily: "Calibri, Arial, sans-serif",
  },

  description: {
    fontFamily: "Calibri, Arial, sans-serif",
    fontSize: "1.3rem",
    lineHeight: "2.2rem",
    alignContent: "center",
  },

  list: {
    margin: 0,
    paddingLeft: "1.3rem",
    fontFamily: "Calibri, Arial, sans-serif",
    fontSize: "1.15rem",
    lineHeight: "2rem",
    color: "rgba(15, 29, 61, 0.82)",
  },
}));

export default function WorkflowLandingPage(content: WorkflowLandingContent) {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}${content.route}`;
  const modifiedDate = getPathLastModified(content.route);

  return (
    <>
      <Head>
        <title>{content.title} - {SITE_NAME}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={content.description} />
        {modifiedDate ? <meta name="last-modified" content={modifiedDate} /> : null}
      </Head>

      <Flex direction="column" align={"center"} className={classes.container} gap={30}>
        <Flex direction="column" align="center" className={classes.section} gap={10}>
          <h1 className={classes.title}>{content.title}</h1>
          <Text className={classes.description}>{content.description}</Text>
          <Button
            mt={15}
            radius="lg"
            component="a"
            href={SIGNUP_PATH}
            size="xl"
            color="dark"
            variant="filled"
          >
            {content.ctaText}
          </Button>
        </Flex>

        <Flex direction="column" align="center" className={classes.section} gap={10}>
          <h2 className={classes.title}>What this workflow helps with</h2>
          <ul className={classes.list}>
            {content.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Flex>

        <Flex direction="column" align="center" className={classes.section} gap={10}>
          <h2 className={classes.title}>Why AI helps here</h2>
          <Text className={classes.description}>
            The repetitive parts of SEO are exactly where AI workflows shine. They keep the site
            moving without making a founder or one overloaded marketer carry the whole backlog alone.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
