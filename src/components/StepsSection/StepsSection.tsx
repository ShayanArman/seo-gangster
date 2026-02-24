import { createStyles, Box, Text, Button, Flex } from "@mantine/core";
import { FiUserPlus, FiMail, FiZap } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";

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
    title: "Create your account",
    description: "Sign up and connect your Gmail securely. Google Security Partner — your data is always encrypted.",
  },
  {
    number: "2",
    icon: <FiMail size={24} />,
    title: "Let Zero AI scan",
    description: "Zero AI analyzes your inbox and categorizes every email. Spam, promotions, newsletters — all sorted instantly.",
  },
  {
    number: "3",
    icon: <FiZap size={24} />,
    title: "Clean & organize",
    description: "Review what Zero found and clean with one click. Unsubscribe, delete and organize — done.",
  },
];

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "6rem 2rem",
    backgroundColor: "#f6f7f5",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    textAlign: "center" as const,
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    color: "var(--zi-deep-blue)",
    lineHeight: 1.15,
    letterSpacing: "-1px",
    marginBottom: 12,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
    },
  },

  subheading: {
    color: "#666",
    fontSize: "1.1rem",
    marginBottom: 48,
    lineHeight: 1.6,
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
    backgroundColor: "white",
    borderRadius: 20,
    padding: "28px 28px 32px",
    textAlign: "left" as const,
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
    backgroundColor: "#d2e823",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "1.1rem",
    color: "var(--zi-deep-blue)",
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "var(--zi-deep-blue)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  stepTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "var(--zi-deep-blue)",
    marginBottom: 8,
  },

  stepDescription: {
    color: "#666",
    fontSize: "0.95rem",
    lineHeight: 1.6,
  },

  ctaButton: {
    border: "none",
    fontWeight: 700,
    fontSize: "1.1rem",
    backgroundColor: "var(--zero-red-darker)",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#d4205a",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(255,50,119,0.3)",
    },
  },
}));

export default function StepsSection() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.heading}>Get started in 3 easy steps.</Text>
        <Text className={classes.subheading}>From sign-up to a clean inbox in under a minute.</Text>

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
            href="https://app.zeroinbox.ai"
            target="_blank"
            size="xl"
            radius="xl"
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            Get Started Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
