import { createStyles, Flex, Text, Button, Box } from "@mantine/core";
import Link from "next/link";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { HEADER_PIXEL_HEIGHT } from "../ZeroHeader/ZeroHeader";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";
import HeroLiveMetric from "../HeroLiveMetric";
import { SIGNUP_PATH } from "@/lib/seo";
import NewsBar from "../NewsBar/NewsBar";

const useStyles = createStyles((theme) => ({
  container: {
    background:
      "radial-gradient(circle at top left, rgba(17, 17, 17, 0.05), transparent 28%), linear-gradient(180deg, #ffffff 0%, #fbfbfa 100%)",
    padding: `${HEADER_PIXEL_HEIGHT}px 5rem 0`,
    position: "relative",
    overflow: "hidden",
    borderBottom: "1px solid rgba(17, 17, 17, 0.08)",

    [theme.fn.smallerThan("md")]: {
      padding: `calc(${HEADER_PIXEL_HEIGHT}px + env(safe-area-inset-top)) 1.5rem 0`,
    },
  },

  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
    alignItems: "end",
    gap: 40,
    paddingTop: 88,
    paddingBottom: 88,

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr",
      paddingTop: 48,
      paddingBottom: 48,
    },
  },

  content: {
    maxWidth: 720,
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "0.45rem 0.78rem",
    borderRadius: 999,
    border: "1px solid rgba(17, 17, 17, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    color: "#111111",
    fontSize: "0.76rem",
    fontWeight: 700,
    letterSpacing: "0.11em",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
  },

  title: {
    fontSize: "clamp(3.7rem, 7vw, 6.2rem)",
    fontWeight: 800,
    color: "#111111",
    fontFamily: "var(--font-heading)",
    lineHeight: 0.98,
    letterSpacing: "-0.05em",
    margin: 0,

    [theme.fn.smallerThan("md")]: {
      fontSize: "3rem",
    },
  },

  highlight: {
    color: "rgba(17, 17, 17, 0.45)",
  },

  subtitle: {
    color: "rgba(17, 17, 17, 0.68)",
    fontSize: "1.3rem",
    fontWeight: 400,
    maxWidth: 620,
    lineHeight: 1.6,
    fontFamily: "var(--font-body)",
    marginTop: "1.5rem",

    [theme.fn.smallerThan("md")]: {
      fontSize: "1.1rem",
    },
  },

  actions: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginTop: "2rem",
  },

  primaryButton: {
    border: "1px solid #111111",
    fontWeight: 700,
    fontSize: "1.1rem",
    backgroundColor: "#111111",
    color: "#ffffff",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#000000",
      transform: "translateY(-2px)",
      boxShadow: "0 10px 28px rgba(17, 17, 17, 0.18)",
    },
  },

  secondaryButton: {
    border: "1px solid rgba(17, 17, 17, 0.14)",
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#111111",
    backgroundColor: "#ffffff",

    "&:hover": {
      backgroundColor: "#f3f3f1",
      borderColor: "rgba(17, 17, 17, 0.28)",
    },
  },

  note: {
    marginTop: "1.2rem",
    color: "rgba(17, 17, 17, 0.48)",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    maxWidth: 560,
  },

  sideRail: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    width: "100%",
  },

  panel: {
    borderRadius: 28,
    border: "1px solid rgba(17, 17, 17, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    boxShadow: "0 24px 52px rgba(17, 17, 17, 0.08)",
    padding: "1.5rem",
  },

  panelLabel: {
    fontSize: "0.74rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(17, 17, 17, 0.45)",
    marginBottom: "0.85rem",
  },

  panelHeading: {
    fontFamily: "var(--font-heading)",
    color: "#111111",
    fontSize: "1.4rem",
    lineHeight: 1.2,
    fontWeight: 700,
    marginBottom: "1rem",
  },

  panelRule: {
    height: 1,
    backgroundColor: "rgba(17, 17, 17, 0.08)",
    marginBottom: "1rem",
  },

  panelList: {
    display: "grid",
    gap: 12,
  },

  panelItem: {
    display: "grid",
    gridTemplateColumns: "28px 1fr",
    gap: 12,
    alignItems: "start",
  },

  panelNumber: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    backgroundColor: "#111111",
    color: "#ffffff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.82rem",
    fontWeight: 700,
  },

  panelText: {
    color: "rgba(17, 17, 17, 0.72)",
    fontSize: "0.97rem",
    lineHeight: 1.55,
  },
}));

export default function HeroSection({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
  onFinishedReading?: () => void;
}) {
  const { classes } = useStyles();
  const heroMinHeight = "100svh";
  const operatingNotes = [
    "Build the core pages around what you actually sell.",
    "Refresh the site every week so rankings keep compounding.",
    "Handle technical SEO follow-through without spreadsheet drift.",
  ];

  return (
    <Flex
      direction="column"
      justify={isSmallScreen ? "flex-start" : "center"}
      mih={heroMinHeight}
      className={classes.container}
    >
      <Box className={classes.inner}>
        <Box className={classes.content}>
          <Text className={classes.eyebrow}>SEO Gangster</Text>

          <h1 className={classes.title}>
            Build the site.
            <br />
            <span className={classes.highlight}>Keep it fresh.</span>
          </h1>

          <Text className={classes.subtitle}>
            AI SEO agents for founders and lean teams that want search to look serious, stay current,
            and compound over time.
          </Text>

          <div className={classes.actions}>
            <Button
              component={Link}
              href={SIGNUP_PATH}
              size={isSmallScreen ? "lg" : "xl"}
              radius="xl"
              leftIcon={<FiZap />}
              onClick={() => registerClickSignUpEventGoogle()}
              className={classes.primaryButton}
            >
              Join the signup
            </Button>
            <Button
              component={Link}
              href="/workflows"
              size={isSmallScreen ? "lg" : "xl"}
              radius="xl"
              variant="default"
              rightIcon={<FiArrowRight />}
              className={classes.secondaryButton}
            >
              See workflows
            </Button>
          </div>

          <Text className={classes.note}>
            No rainbow growth hacks. Just pages, weekly freshness, internal links, and technical SEO
            that keep getting shipped.
          </Text>
        </Box>

        <Box className={classes.sideRail}>
          <Box className={classes.panel}>
            <Text className={classes.panelLabel}>Operating system for search</Text>
            <Text className={classes.panelHeading}>
              Search rewards the teams that keep touching the site.
            </Text>
            <div className={classes.panelRule} />
            <div className={classes.panelList}>
              {operatingNotes.map((note, index) => (
                <div key={note} className={classes.panelItem}>
                  <span className={classes.panelNumber}>{index + 1}</span>
                  <Text className={classes.panelText}>{note}</Text>
                </div>
              ))}
            </div>
          </Box>

          <HeroLiveMetric
            value="14,000+"
            label="pages and refreshes shipped"
            statusLabel="Search ops running"
          />
        </Box>
      </Box>
    </Flex>
  );
}
