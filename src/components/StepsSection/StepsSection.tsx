import { createStyles, Box, Text, Button, Flex } from "@mantine/core";
import { FiUserPlus, FiEdit3, FiZap } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";
import { SIGNUP_URL } from "@/lib/seo";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    icon: <FiUserPlus size={24} />,
    title: "Join the signup list",
    description: "Tell us about your site, market, and what you need to rank for.",
  },
  {
    number: "2",
    icon: <FiEdit3 size={24} />,
    title: "Point us at the site",
    description: "We map the main pages, the content gaps, and the weekly freshness opportunities.",
  },
  {
    number: "3",
    icon: <FiZap size={24} />,
    title: "Ship pages and updates",
    description: "AI SEO agents start producing pages, refreshes, and technical follow-through instead of letting the backlog grow.",
  },
];

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "6rem 2rem",
    backgroundColor: "#ffffff",
    borderTop: "1px solid rgba(17, 17, 17, 0.08)",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 1100,
    margin: "0 auto",
  },

  eyebrow: {
    fontSize: "0.76rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "rgba(17, 17, 17, 0.45)",
    marginBottom: 12,
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    color: "#111111",
    lineHeight: 1.15,
    letterSpacing: "-0.04em",
    marginBottom: 12,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
    },
  },

  subheading: {
    color: "rgba(17, 17, 17, 0.6)",
    fontSize: "1.1rem",
    marginBottom: 48,
    lineHeight: 1.6,
    maxWidth: 620,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr",
      gap: 16,
    },
  },

  card: {
    backgroundColor: "#fcfcfb",
    borderRadius: 24,
    border: "1px solid rgba(17, 17, 17, 0.1)",
    padding: "28px 28px 32px",
    textAlign: "left" as const,
    boxShadow: "0 16px 34px rgba(17, 17, 17, 0.05)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },

  number: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "#111111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "1.1rem",
    color: "#ffffff",
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "#efefec",
    color: "#111111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  stepTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "#111111",
    marginBottom: 8,
  },

  stepDescription: {
    color: "rgba(17, 17, 17, 0.66)",
    fontSize: "0.95rem",
    lineHeight: 1.6,
  },

  ctaButton: {
    border: "1px solid #111111",
    fontWeight: 700,
    fontSize: "1.1rem",
    backgroundColor: "#111111",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#000000",
      transform: "translateY(-2px)",
      boxShadow: "0 10px 24px rgba(17, 17, 17, 0.14)",
    },
  },
}));

export default function StepsSection() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.eyebrow}>How it works</Text>
        <Text className={classes.heading}>Get started in 3 steps.</Text>
        <Text className={classes.subheading}>From signup to active SEO workflows without building a giant team.</Text>

        <div className={classes.grid}>
          {steps.map((step) => (
            <Box key={step.number} className={classes.card}>
              <div className={classes.cardHeader}>
                <div className={classes.number}>{step.number}</div>
                <div className={classes.iconCircle}>{step.icon}</div>
              </div>
              <Text className={classes.stepTitle}>{step.title}</Text>
              <Text className={classes.stepDescription}>{step.description}</Text>
            </Box>
          ))}
        </div>

        <Flex justify="center" mt={48}>
          <Button
            component="a"
            href={SIGNUP_URL}
            size="xl"
            radius="xl"
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            Join the Signup List
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
