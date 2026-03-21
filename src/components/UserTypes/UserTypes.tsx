import { createStyles, Box, Text } from "@mantine/core";
import { FiBriefcase, FiUser, FiBook, FiHeadphones, FiHeart, FiUsers } from "react-icons/fi";

interface UserType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const userTypes: UserType[] = [
  {
    icon: <FiBriefcase size={24} />,
    title: "Founders",
    description: "Launch the site, keep pages fresh, and stop letting search become a someday project.",
  },
  {
    icon: <FiUser size={24} />,
    title: "Freelancers & Consultants",
    description: "Use AI SEO agents to ship client pages and freshness updates without hiring a full team.",
  },
  {
    icon: <FiBook size={24} />,
    title: "Content Sites",
    description: "Turn stale articles into active search assets with regular refreshes and internal-link passes.",
  },
  {
    icon: <FiHeadphones size={24} />,
    title: "Local Service Businesses",
    description: "Create city pages, service pages, and supporting articles without the usual content bottleneck.",
  },
  {
    icon: <FiHeart size={24} />,
    title: "Lean Marketing Teams",
    description: "Get more search output than a single overloaded hire can usually deliver alone.",
  },
  {
    icon: <FiUsers size={24} />,
    title: "Agencies",
    description: "Use agent workflows to expand production capacity without turning every update into a meeting.",
  },
];

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "6rem 2rem",
    backgroundColor: "#f7f7f5",
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
    textAlign: "center" as const,
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    color: "#111111",
    lineHeight: 1.15,
    letterSpacing: "-0.04em",
    marginBottom: 18,
    textAlign: "center" as const,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
      marginBottom: 32,
    },
  },

  subheading: {
    maxWidth: 720,
    margin: "0 auto 40px",
    textAlign: "center" as const,
    color: "rgba(17, 17, 17, 0.62)",
    fontSize: "1.02rem",
    lineHeight: 1.7,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,

    [theme.fn.smallerThan("lg")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    [theme.fn.smallerThan("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(17, 17, 17, 0.1)",
    borderRadius: 24,
    padding: 28,
    transition: "transform var(--transition-smooth), box-shadow var(--transition-smooth)",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 18px 36px rgba(17, 17, 17, 0.06)",
    },
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#111111",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  cardTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "#111111",
    marginBottom: 6,
  },

  cardDescription: {
    color: "rgba(17, 17, 17, 0.66)",
    fontSize: "0.92rem",
    lineHeight: 1.55,
  },
}));

export default function UserTypes() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.eyebrow}>Who it is for</Text>
        <Text className={classes.heading}>
          SEO Gangster is for teams with more backlog than bandwidth.
        </Text>
        <Text className={classes.subheading}>
          Founders, agencies, lean marketing teams, and local businesses all run into the same problem: they know what should ship, but they do not have a clean system for shipping it every week.
        </Text>
        <div className={classes.grid}>
          {userTypes.map((type) => (
            <Box key={type.title} className={classes.card}>
              <div className={classes.cardIcon}>{type.icon}</div>
              <Text className={classes.cardTitle}>{type.title}</Text>
              <Text className={classes.cardDescription}>{type.description}</Text>
            </Box>
          ))}
        </div>
      </Box>
    </Box>
  );
}
