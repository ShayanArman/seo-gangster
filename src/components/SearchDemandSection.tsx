import { Box, Button, Flex, Text, createStyles } from "@mantine/core";
import { registerClickSignUpEventGoogle } from "./Analytics/GoogleAnalytics";
import { SIGNUP_PATH } from "@/lib/seo";
import { FaStar } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "1.6rem 1.5rem 4.8rem",
    background:
      "radial-gradient(circle at 50% 0%, rgba(161, 204, 255, 0.22), transparent 34%), linear-gradient(180deg, #ffffff 0%, #fbfbfa 100%)",

    [theme.fn.smallerThan("md")]: {
      padding: "1rem 1.2rem 4rem",
    },
  },

  inner: {
    maxWidth: 980,
    margin: "0 auto",
    textAlign: "center" as const,
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.55rem 0.95rem",
    borderRadius: 999,
    backgroundColor: "#eef3fb",
    color: "rgba(15, 29, 61, 0.72)",
    fontSize: "0.78rem",
    fontWeight: 800,
    letterSpacing: "0.08em",
    lineHeight: 1,
  },

  heading: {
    margin: "1.4rem auto 0",
    maxWidth: 920,
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "clamp(2.8rem, 7vw, 5.4rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.065em",
    color: "#111111",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "clamp(2.2rem, 12vw, 3.3rem)",
      lineHeight: 1.02,
    },
  },

  highlight: {
    display: "inline",
    padding: "0 0.12em 0.08em",
    boxDecorationBreak: "clone" as const,
    WebkitBoxDecorationBreak: "clone" as const,
    background:
      "linear-gradient(180deg, rgba(177, 214, 255, 0) 0%, rgba(177, 214, 255, 0) 28%, rgba(177, 214, 255, 0.9) 28%, rgba(177, 214, 255, 0.9) 88%, rgba(177, 214, 255, 0) 88%)",
  },

  subtext: {
    maxWidth: 760,
    margin: "1.8rem auto 0",
    color: "rgba(17, 17, 17, 0.6)",
    fontSize: "1.16rem",
    lineHeight: 1.72,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1rem",
    },
  },

  actions: {
    marginTop: "2.3rem",
    display: "flex",
    justifyContent: "center",
  },

  ctaButton: {
    minWidth: 250,
    height: 56,
    paddingLeft: "1.6rem",
    paddingRight: "1.6rem",
    borderRadius: 14,
    border: "1px solid #111111",
    backgroundColor: "#111111",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "1.02rem",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#000000",
      transform: "translateY(-2px)",
      boxShadow: "0 14px 28px rgba(17, 17, 17, 0.16)",
    },

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      maxWidth: 320,
    },
  },

  trustRow: {
    marginTop: "1.35rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
    color: "rgba(17, 17, 17, 0.58)",
    fontSize: "0.98rem",
    fontWeight: 600,
  },

  starRow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    color: "#f1b642",
  },

  trustCopy: {
    lineHeight: 1.4,
  },
}));

export default function SearchDemandSection() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.eyebrow}>SEO For your Business</Text>

        <h2 className={classes.heading}>
          <span className={classes.highlight}>Turn ChatGPT and Google Into Your</span>
          <br />
          <span className={classes.highlight}>#1 Source of Clients</span>
        </h2>

        <Text className={classes.subtext}>
          We help your business rank, convert, and scale with predictable SEO systems that drive
          revenue, not just traffic.
        </Text>

        <div className={classes.actions}>
          <Button
            component="a"
            href={SIGNUP_PATH}
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            Get My Free SEO Audit
          </Button>
        </div>

        <Flex className={classes.trustRow}>
          <Flex className={classes.starRow} aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} size={15} />
            ))}
          </Flex>
          <Text className={classes.trustCopy}>Trusted by growing businesses</Text>
        </Flex>
      </Box>
    </Box>
  );
}
