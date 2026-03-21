import { createStyles, Flex, Text } from "@mantine/core";
import { JOBS_EMAIL, getPathLastModified } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  container: {
    margin: "7rem 0rem 3rem",
  },

  section: {
    width: "50%",

    [theme.fn.smallerThan("xl")]: {
      width: "80%",
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
    fontFamily: "Calibri, Arial, sans-serif",
  },

  description: {
    fontFamily: "Calibri, Arial, sans-serif",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
  },
}));

function formatPublishedDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function About() {
  const { classes } = useStyles();
  const publishedDate = formatPublishedDate(getPathLastModified("/about") ?? "2026-02-27T10:49:51-08:00");

  return (
    <Flex direction="column" align={"center"} className={classes.container} gap={30}>
      <Flex direction="column" className={classes.section} gap={10}>
        <Text className={classes.meta}>Published {publishedDate}</Text>
        <h1 className={classes.title}>
          The Future of SEO
        </h1>
        <p className={classes.description}>
          The goal of SEO Gangster is to redesign how SEO work gets done. Most sites do not fail because the strategy is
          impossible. They fail because the execution slows down after launch. Pages do not get built fast enough, articles
          stall, and freshness updates keep getting pushed back.
          Using AI SEO agents, that work can keep moving every single week instead of living in a backlog.
        </p>
      </Flex>

      <Flex id="team" direction="column" className={classes.section} gap={10} style={{ scrollMarginTop: "7rem" }}>
        <h2 className={classes.title}>
          Team
        </h2>
        <p className={classes.description}>
          SEO Gangster is led by <span><PeopleLink link="https://www.linkedin.com/in/shayan-arman/" content="Shayan Arman" /></span>, a Waterloo Computer Engineering graduate who worked on Siri at Apple from 2017 to 2021. The business is built around practical AI execution, not vague SEO theory.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h2 className={classes.title}>
          What We Believe
        </h2>
        <p className={classes.description}>
          SEO is two steps: create the site and content, then keep it fresh. The second step is where most teams lose momentum. SEO Gangster exists to make that second step happen.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h2 className={classes.title}>
          Join Us
        </h2>
        <p className={classes.description}>
          We are recruiting engineers who care about AI systems, search, and shipping. Drop us a line with your CV <span><PeopleLink link={`mailto:${JOBS_EMAIL}?subject=Roles - SEO Gangster`} content="here" /></span>.
        </p>
      </Flex>
    </Flex>
  );
}

function PeopleLink({ link, content }: { link: string; content: string }) {
  return (
    <a style={{ textDecoration: "underline" }} href={link} target="_blank" rel="noreferrer noopener">
      {content}
    </a>
  );
}
