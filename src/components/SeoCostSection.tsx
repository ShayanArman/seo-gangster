import { Box, Text, createStyles } from "@mantine/core";
import { FiCheck, FiX } from "react-icons/fi";

const COST_COLUMNS = [
  {
    eyebrow: "MISSING THE FIRST PAGE",
    title: "No Visibility",
    problems: [
      "Not showing up on Google or ChatGPT",
      "Losing organic traffic",
      "Pages never build enough authority",
    ],
    wins: [
      "Core pages built around what you actually sell",
      "Fresh updates that compound rankings",
      "Targeted local and service traffic",
    ],
  },
  {
    eyebrow: "TRAFFIC THAT GOES NOWHERE",
    title: "Wasted Traffic",
    problems: [
      "Visitors leave immediately",
      "Slow, outdated landing pages",
      "No clear call-to-action",
    ],
    wins: [
      "High-intent page structure",
      "Faster load times and tighter UX",
      "Offers and forms that turn visits into leads",
    ],
  },
  {
    eyebrow: "UNPREDICTABLE LEAD FLOW",
    title: "Inconsistent Growth",
    problems: [
      "Lead volume fluctuates",
      "Reliance on expensive ads",
      "No repeatable pipeline",
    ],
    wins: [
      "Predictable lead flow from search",
      "Lower blended acquisition cost",
      "Clear visibility into what pages produce",
    ],
  },
] as const;

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "2.5rem 1.5rem 5.6rem",
    background: "linear-gradient(180deg, #f7f8fb 0%, #f4f7fb 100%)",
    borderTop: "1px solid rgba(17, 17, 17, 0.05)",

    [theme.fn.smallerThan("md")]: {
      padding: "2rem 1.2rem 4.5rem",
    },
  },

  inner: {
    maxWidth: 1180,
    margin: "0 auto",
  },

  header: {
    maxWidth: 760,
    margin: "0 auto 2.6rem",
    textAlign: "center" as const,
  },

  heading: {
    margin: 0,
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "clamp(2.2rem, 5vw, 4rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.05em",
    color: "#111111",
  },

  subtext: {
    marginTop: "1.1rem",
    color: "rgba(15, 29, 61, 0.64)",
    fontSize: "1.08rem",
    lineHeight: 1.75,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "0.98rem",
    },
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 20,

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    display: "grid",
    gridTemplateRows: "1fr auto",
    minHeight: 100,
    borderRadius: 22,
    overflow: "hidden",
    border: "1px solid rgba(174, 188, 214, 0.62)",
    backgroundColor: "#ffffff",
    boxShadow: "0 18px 42px rgba(15, 29, 61, 0.06)",
  },

  cardTop: {
    padding: "1.5rem 1.4rem 1.7rem",
    backgroundColor: "#ffffff",
  },

  cardBottom: {
    padding: "1.45rem 1.4rem 1.55rem",
    backgroundColor: "#f7f9fc",
    borderTop: "1px solid rgba(174, 188, 214, 0.5)",
  },

  eyebrow: {
    color: "rgba(106, 127, 163, 0.72)",
    fontSize: "0.7rem",
    fontWeight: 800,
    letterSpacing: "0.11em",
    lineHeight: 1.2,
  },

  cardTitle: {
    margin: "0.9rem 0 1rem",
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "1.9rem",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    color: "#111111",
  },

  listLabel: {
    color: "rgba(106, 127, 163, 0.72)",
    fontSize: "0.68rem",
    fontWeight: 800,
    letterSpacing: "0.12em",
    lineHeight: 1.2,
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: "0.95rem 0 0",
    display: "grid",
    gap: 12,
  },

  listItem: {
    display: "grid",
    gridTemplateColumns: "18px 1fr",
    gap: 10,
    alignItems: "start",
    color: "rgba(15, 29, 61, 0.74)",
    fontSize: "0.98rem",
    lineHeight: 1.55,
  },

  problemIcon: {
    color: "#ff5f57",
    marginTop: 2,
  },

  winIcon: {
    color: "#13b86d",
    marginTop: 2,
  },
}));

export default function SeoCostSection() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Box className={classes.header}>
          <h2 className={classes.heading}>The Hidden Cost of Poor SEO</h2>
          <Text className={classes.subtext}>
            Most businesses are not losing because they lack marketing. They are losing because
            their SEO is not built to rank, convert, and stay fresh every week.
          </Text>
        </Box>

        <Box className={classes.grid}>
          {COST_COLUMNS.map((column) => (
            <Box key={column.title} className={classes.card}>
              <Box className={classes.cardTop}>
                <Text className={classes.eyebrow}>{column.eyebrow}</Text>
                <h3 className={classes.cardTitle}>{column.title}</h3>

                <Text className={classes.listLabel}>THE PROBLEM</Text>
                <ul className={classes.list}>
                  {column.problems.map((problem) => (
                    <li key={problem} className={classes.listItem}>
                      <FiX className={classes.problemIcon} size={16} aria-hidden="true" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </Box>

              <Box className={classes.cardBottom}>
                <Text className={classes.listLabel}>WITH CONSISTENT EXECUTION</Text>
                <ul className={classes.list}>
                  {column.wins.map((win) => (
                    <li key={win} className={classes.listItem}>
                      <FiCheck className={classes.winIcon} size={16} aria-hidden="true" />
                      <span>{win}</span>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
