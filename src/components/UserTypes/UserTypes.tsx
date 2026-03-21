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
    backgroundColor: "var(--zi-lilac)",

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
    marginBottom: 48,
    textAlign: "center" as const,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
      marginBottom: 32,
    },
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
    backgroundColor: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(8px)",
    borderRadius: "var(--radius-lg)",
    padding: 28,
    transition: "transform var(--transition-smooth), box-shadow var(--transition-smooth)",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    },
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: "var(--radius-md)",
    backgroundColor: "var(--zi-deep-blue)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  cardTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "var(--zi-deep-blue)",
    marginBottom: 6,
  },

  cardDescription: {
    color: "#555",
    fontSize: "0.92rem",
    lineHeight: 1.55,
  },
}));

export default function UserTypes() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.heading}>
          SEO Gangster is for people who know{"\n"}search needs ongoing work.
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
