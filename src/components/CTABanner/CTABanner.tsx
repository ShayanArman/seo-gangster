import { keyframes } from "@emotion/react";
import { createStyles, Box, Text, Button, Flex } from "@mantine/core";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";
import { SIGNUP_PATH } from "@/lib/seo";

const pulse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  70% {
    transform: scale(2.4);
    opacity: 0;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "5rem 2rem",
    background: "#ffffff",
    borderTop: "1px solid rgba(17, 17, 17, 0.08)",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 700,
    margin: "0 auto",
    textAlign: "center" as const,
    borderRadius: 36,
    backgroundColor: "#111111",
    padding: "3.2rem 2rem",
    boxShadow: "0 28px 60px rgba(17, 17, 17, 0.16)",
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.4rem",
    color: "white",
    lineHeight: 1.15,
    letterSpacing: "-1px",
    marginBottom: 16,

    [theme.fn.smallerThan("md")]: {
      fontSize: "1.8rem",
    },
  },

  subtext: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "1.1rem",
    lineHeight: 1.6,
    marginBottom: 32,
  },

  ctaButton: {
    border: "1px solid #ffffff",
    fontWeight: 700,
    fontSize: "1.1rem",
    backgroundColor: "#ffffff",
    color: "#111111",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#efefec",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(255,255,255,0.14)",
    },
  },

  liveDotWrap: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 10,
    height: 10,
  },

  liveDotPulse: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    animation: `${pulse} 1.8s ease-out infinite`,
  },

  liveDot: {
    position: "relative",
    display: "inline-block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#111111",
  },
}));

export default function CTABanner() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.heading}>Ready to stop letting your site go stale?</Text>
        <Text className={classes.subtext}>
          Join SEO Gangster and let AI SEO agents handle the pages, articles, and weekly updates that search growth really needs.
        </Text>
        <Flex justify="center">
          <Button
            component="a"
            href={SIGNUP_PATH}
            size="xl"
            radius="xl"
            leftIcon={
              <span className={classes.liveDotWrap}>
                <span className={classes.liveDotPulse} />
                <span className={classes.liveDot} />
              </span>
            }
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
