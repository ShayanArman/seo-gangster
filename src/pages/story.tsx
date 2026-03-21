import { createStyles, Flex, Text } from "@mantine/core";
import {
  FiBookOpen,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { getPathLastModified } from "@/lib/seo";

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

  socialRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 8,
  },

  socialCircle: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    border: "1px solid rgba(15, 29, 61, 0.25)",
    color: "rgba(15, 29, 61, 0.9)",
    fontFamily: "Calibri, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "0.92rem",
    transition: "all 140ms ease",

    "&:hover": {
      borderColor: "var(--zero-red-darker)",
      color: "var(--zero-red-darker)",
      transform: "translateY(-1px)",
    },
  },
}));

const shayanLinks: { icon: JSX.Element; href: string; title: string }[] = [
  { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/shayan-arman/", title: "LinkedIn" },
  { icon: <FiTwitter size={18} />, href: "https://x.com/InboxZero", title: "X" },
  { icon: <FiGithub size={18} />, href: "https://github.com/ShayanArman", title: "GitHub" },
  { icon: <FiYoutube size={18} />, href: "https://www.youtube.com/@quantumrysics", title: "YouTube" },
  { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/_shayanarman/", title: "Instagram" },
  { icon: <FiBookOpen size={18} />, href: "https://shayanarman.substack.com/", title: "Substack" },
];

function formatPublishedDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Story() {
  const { classes } = useStyles();
  const publishedDate = formatPublishedDate(getPathLastModified("/story") ?? "2026-02-27T10:50:24-08:00");

  return (
    <Flex direction="column" align={"center"} className={classes.container} gap={30}>
      <Flex direction="column" className={classes.section} gap={10}>
        <Text className={classes.meta}>Published {publishedDate}</Text>
        <h1 className={classes.title}>
          The Story Behind SEO Gangster
        </h1>
        <p className={classes.description}>
          After leaving Siri at Apple, Shayan Arman kept seeing the same thing in online business: teams would launch a site,
          maybe publish a few articles, and then stall. Search did not need more theory. It needed a faster way to keep shipping.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h2 className={classes.title}>
          Why We Started
        </h2>
        <p className={classes.description}>
          We saw the same failure pattern everywhere: businesses knew they needed SEO, but the work after launch was too slow.
          Pages did not get refreshed, technical fixes sat in docs, and the site stopped compounding. SEO Gangster was built to
          rethink that workflow with AI agents so the site can keep moving.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h2 className={classes.title}>
          Founder
        </h2>
        <p className={classes.description}>
          Shayan finished Waterloo Computer Engineering, worked at Apple on Siri from 2017 to 2021, and then started SEO Gangster
          to help businesses do SEO with AI first. Learn more at{" "}
          <PeopleLink link="https://shayanarman.com/" content="shayanarman.com" />
          {" "}and see all links at{" "}
          <PeopleLink link="https://shayanarman.com/links" content="shayanarman.com/links" />.
        </p>
        <div className={classes.socialRow}>
          {shayanLinks.map((item) => (
            <a
              key={item.title}
              className={classes.socialCircle}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              title={item.title}
              aria-label={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
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
