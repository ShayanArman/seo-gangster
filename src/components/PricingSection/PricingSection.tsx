import { createStyles, Box, Text, Button } from "@mantine/core";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";
import { SIGNUP_URL } from "@/lib/seo";

const PACKAGE_FEATURES = [
  "Comprehensive SEO Strategy",
  "On-Page & Technical Optimization",
  "High-Intent Content Creation",
  "Local SEO & Google Business Profile",
  "Conversion Rate Optimization (CRO)",
  "Monthly Analytics & ROI Reporting",
];

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "6rem 2rem",
    background:
      "linear-gradient(180deg, #f8f8f6 0%, #fbfbfa 100%)",
    borderTop: "1px solid rgba(17, 17, 17, 0.08)",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 1080,
    margin: "0 auto",
    textAlign: "center" as const,
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    color: "#111111",
    marginBottom: 14,
  },

  subtext: {
    maxWidth: 640,
    margin: "0 auto",
    color: "rgba(17, 17, 17, 0.52)",
    fontSize: "1.06rem",
    lineHeight: 1.7,
  },

  cardWrap: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem",
  },

  card: {
    width: "100%",
    maxWidth: 560,
    textAlign: "left" as const,
    padding: "2rem 2rem 2.2rem",
    borderRadius: 30,
    border: "2px solid #1b1b1b",
    backgroundColor: "#ffffff",
    boxShadow: "0 26px 60px rgba(17, 17, 17, 0.08)",

    [theme.fn.smallerThan("sm")]: {
      padding: "1.5rem 1.3rem 1.6rem",
      borderRadius: 24,
    },
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.55rem 0.85rem",
    borderRadius: 999,
    backgroundColor: "#f2f4f7",
    color: "rgba(17, 17, 17, 0.62)",
    fontSize: "0.72rem",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },

  priceRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: 8,
    marginTop: "1.8rem",
  },

  price: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "clamp(4rem, 12vw, 5.6rem)",
    lineHeight: 0.92,
    letterSpacing: "-0.06em",
    color: "#111111",
  },

  priceUnit: {
    color: "rgba(17, 17, 17, 0.5)",
    fontSize: "1.8rem",
    fontWeight: 700,
    lineHeight: 1.1,
    paddingBottom: "0.45rem",
  },

  description: {
    marginTop: "1.25rem",
    color: "rgba(17, 17, 17, 0.56)",
    fontSize: "1.2rem",
    lineHeight: 1.7,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1rem",
    },
  },

  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "1.8rem 0 2.1rem 0",
    display: "grid",
    gap: 16,
  },

  featureItem: {
    display: "grid",
    gridTemplateColumns: "18px 1fr",
    gap: 14,
    alignItems: "start",
    color: "rgba(17, 17, 17, 0.62)",
    fontSize: "1.04rem",
    lineHeight: 1.55,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "0.96rem",
    },
  },

  check: {
    color: "#67c587",
    fontWeight: 800,
    fontSize: "1.1rem",
    lineHeight: 1.35,
  },

  button: {
    width: "100%",
    height: 56,
    borderRadius: 14,
    border: "1px solid #111111",
    backgroundColor: "#111111",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "1.08rem",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#000000",
      transform: "translateY(-2px)",
      boxShadow: "0 12px 28px rgba(17, 17, 17, 0.18)",
    },
  },
}));

export default function PricingSection() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.heading}>Simple, Transparent Pricing</Text>
        <Text className={classes.subtext}>
          No long-term lock-ins. No confusing tiers. Just one flat rate for a complete SEO growth
          system.
        </Text>

        <Box className={classes.cardWrap}>
          <Box className={classes.card}>
            <Text className={classes.badge}>The Growth Package</Text>

            <Box className={classes.priceRow}>
              <Text className={classes.price}>$999</Text>
              <Text className={classes.priceUnit}>/mo</Text>
            </Box>

            <Text className={classes.description}>
              Everything required to rank, convert, and scale your service business.
            </Text>

            <ul className={classes.featureList}>
              {PACKAGE_FEATURES.map((feature) => (
                <li key={feature} className={classes.featureItem}>
                  <span className={classes.check}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              component="a"
              href={SIGNUP_URL}
              onClick={() => registerClickSignUpEventGoogle()}
              className={classes.button}
            >
              Claim Your Spot
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
