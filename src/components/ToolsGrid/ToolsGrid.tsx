import { createStyles, Box, Text } from "@mantine/core";
import { FiLink, FiShield, FiBarChart2 } from "react-icons/fi";

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const tools: Tool[] = [
  {
    icon: <FiLink size={28} />,
    title: "Internal Link Builder",
    description: "Surface linking opportunities between pages so authority flows through the site instead of getting stranded.",
  },
  {
    icon: <FiShield size={28} />,
    title: "Technical SEO Passes",
    description: "Run recurring checks for schema gaps, metadata issues, and on-page fixes that are easy to miss manually.",
  },
  {
    icon: <FiBarChart2 size={28} />,
    title: "Freshness Engine",
    description: "Keep pages active with weekly update suggestions and shipping rhythms that compound in search.",
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
    color: "rgba(17, 17, 17, 0.62)",
    fontSize: "1.15rem",
    maxWidth: 560,
    margin: "0 0 48px",
    lineHeight: 1.6,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    backgroundColor: "#fcfcfb",
    borderRadius: 28,
    border: "1px solid rgba(17, 17, 17, 0.1)",
    padding: 32,
    boxShadow: "0 18px 36px rgba(17, 17, 17, 0.05)",
    transition: "transform var(--transition-smooth), box-shadow var(--transition-smooth)",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 22px 40px rgba(17, 17, 17, 0.08)",
    },
  },

  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#111111",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  cardTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.25rem",
    color: "#111111",
    marginBottom: 8,
  },

  cardDescription: {
    color: "rgba(17, 17, 17, 0.66)",
    fontSize: "0.95rem",
    lineHeight: 1.6,
  },
}));

export default function ToolsGrid() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.eyebrow}>System</Text>
        <Text className={classes.heading}>What the system keeps handling.</Text>
        <Text className={classes.subheading}>
          The point is not one magical feature. It is a set of repeatable workflows that keep search work moving without constant intervention.
        </Text>
        <div className={classes.grid}>
          {tools.map((tool) => (
            <Box key={tool.title} className={classes.card}>
              <div className={classes.cardIcon}>{tool.icon}</div>
              <Text className={classes.cardTitle}>{tool.title}</Text>
              <Text className={classes.cardDescription}>{tool.description}</Text>
            </Box>
          ))}
        </div>
      </Box>
    </Box>
  );
}
