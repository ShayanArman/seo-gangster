import { createStyles, Box, Text, Card, SimpleGrid } from "@mantine/core";

type UserStory = {
  companyType: string;
  focus: string;
  testimonial: string;
  shippedCount: number;
};

const userStories: UserStory[] = [
  {
    companyType: "Local services",
    focus: "City pages and service pages",
    testimonial: "We finally had fresh pages going live every single week.",
    shippedCount: 118,
  },
  {
    companyType: "B2B team",
    focus: "Commercial pages and comparisons",
    testimonial: "The agents kept our service pages moving faster than any freelancer we tried.",
    shippedCount: 164,
  },
  {
    companyType: "Content site",
    focus: "Article refreshes and internal links",
    testimonial: "Freshness updates stopped being a backlog and became part of the rhythm.",
    shippedCount: 92,
  },
  {
    companyType: "Agency",
    focus: "Repeatable client SEO execution",
    testimonial: "We got the site up, then the weekly SEO pass kept compounding from there.",
    shippedCount: 137,
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "1.2rem 0 0",
    borderTop: "1px solid rgba(17, 17, 17, 0.08)",
  },

  container: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 2rem 1.5rem",

    [theme.fn.smallerThan("md")]: {
      padding: "0 1rem",
    },
  },

  eyebrow: {
    fontSize: "0.76rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "rgba(17, 17, 17, 0.45)",
    textAlign: "center" as const,
    marginBottom: "0.9rem",
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    color: "#111111",
    fontSize: "2.4rem",
    textAlign: "center" as const,
    marginBottom: "0.9rem",

    [theme.fn.smallerThan("md")]: {
      fontSize: "1.9rem",
    },
  },

  subheading: {
    maxWidth: 720,
    margin: "0 auto 2rem",
    textAlign: "center" as const,
    color: "rgba(17, 17, 17, 0.6)",
    fontSize: "1.02rem",
    lineHeight: 1.7,
  },

  card: {
    borderRadius: 24,
    border: "1px solid rgba(17, 17, 17, 0.1)",
    backgroundColor: "#fcfcfb",
    boxShadow: "0 16px 34px rgba(17, 17, 17, 0.05)",
    minHeight: "100%",
  },

  cardEyebrow: {
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "rgba(17, 17, 17, 0.46)",
    marginBottom: "0.75rem",
  },

  focus: {
    color: "#111111",
    fontWeight: 700,
    fontSize: "1rem",
    marginBottom: "0.7rem",
  },

  quote: {
    lineHeight: 1.7,
    color: "rgba(17, 17, 17, 0.72)",
  },

  count: {
    color: "#111111",
    fontWeight: 700,
    marginTop: "1rem",
    fontSize: "0.95rem",
  },
}));

export default function UserCards() {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <Text className={classes.eyebrow}>Proof of motion</Text>
        <Text className={classes.heading}>Used by teams that treat SEO like operations.</Text>
        <Text className={classes.subheading}>
          The promise is not flashy. It is steady output: better pages, better refreshes, and fewer weeks where search work quietly stops.
        </Text>

        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "lg", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          {userStories.map((user) => (
            <Card key={user.companyType} className={classes.card} padding="lg">
              <Text className={classes.cardEyebrow}>{user.companyType}</Text>
              <Text className={classes.focus}>{user.focus}</Text>
              <Text className={classes.quote}>&quot;{user.testimonial}&quot;</Text>
              <Text className={classes.count}>{user.shippedCount.toLocaleString()} updates shipped</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
