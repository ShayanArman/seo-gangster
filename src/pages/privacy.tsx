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

export default function PrivacyPage() {
  const { classes } = useStyles();

  return (
    <Box className={classes.page}>
      <h1 className={classes.title}>Privacy</h1>
      <Text className={classes.body}>
        The current SEO Gangster signup form is a placeholder flow. If you wire it to a real
        backend later, only collect the information needed to contact users about search-growth
        work and keep that usage clear.
      </Text>
      <Text className={classes.body}>
        Do not reuse submitted information for unrelated outreach, and give users a simple way to
        ask for deletion once the real system is live.
      </Text>
    </Box>
  );
}
