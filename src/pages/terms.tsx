import { Box, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  page: {
    width: "100%",
    maxWidth: 760,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.4rem",
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",
  },

  body: {
    color: "rgba(15, 29, 61, 0.8)",
    lineHeight: 1.8,
    marginBottom: "1rem",
  },
}));

export default function TermsPage() {
  const { classes } = useStyles();

  return (
    <Box className={classes.page}>
      <h1 className={classes.title}>Terms</h1>
      <Text className={classes.body}>
        By using SEO Gangster and submitting the signup form, you agree that the site is currently
        informational, that results depend on your business and market, and that no search ranking
        outcome is guaranteed.
      </Text>
      <Text className={classes.body}>
        Any future product access, paid plan, or service scope can be governed by additional terms
        once the real signup backend is connected.
      </Text>
    </Box>
  );
}
