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
    title: "Smart Unsubscribe",
    description: "One-click unsubscribe from newsletters and promotions. Stay unsubscribed permanently.",
  },
  {
    icon: <FiShield size={28} />,
    title: "Privacy Controls",
    description: "Complete control over your data. Delete your account and all data with a single click.",
  },
  {
    icon: <FiBarChart2 size={28} />,
    title: "Inbox Insights",
    description: "See how many emails were cleaned, what categories they fell into, and track your inbox health.",
  },
];

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "6rem 2rem",
    backgroundColor: "var(--zi-cream)",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 1100,
    margin: "0 auto",
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    color: "var(--zi-deep-blue)",
    lineHeight: 1.15,
    letterSpacing: "-1px",
    marginBottom: 12,
    textAlign: "center" as const,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
    },
  },

  subheading: {
    color: "#555",
    fontSize: "1.15rem",
    textAlign: "center" as const,
    maxWidth: 560,
    margin: "0 auto 48px",
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
    backgroundColor: "white",
    borderRadius: "var(--radius-lg)",
    padding: 32,
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    transition: "transform var(--transition-smooth), box-shadow var(--transition-smooth)",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
    },
  },

  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: "var(--radius-md)",
    backgroundColor: "var(--zi-lilac)",
    color: "var(--zi-deep-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  cardTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.25rem",
    color: "var(--zi-deep-blue)",
    marginBottom: 8,
  },

  cardDescription: {
    color: "#666",
    fontSize: "0.95rem",
    lineHeight: 1.6,
  },
}));

export default function ToolsGrid() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.heading}>More tools. Smarter inbox.</Text>
        <Text className={classes.subheading}>
          Everything you need to take control of your email, all built into one powerful platform.
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
