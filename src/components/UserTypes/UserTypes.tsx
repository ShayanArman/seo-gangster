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
    title: "Business Professionals",
    description: "Reclaim hours lost to inbox clutter. Stay on top of critical emails and auto-clear the rest.",
  },
  {
    icon: <FiUser size={24} />,
    title: "Freelancers & Creators",
    description: "Focus on your craft, not your inbox. Let Zero AI sort client emails from promotional noise.",
  },
  {
    icon: <FiBook size={24} />,
    title: "Students & Academics",
    description: "Keep university emails front and center. Clear years of built-up clutter in seconds.",
  },
  {
    icon: <FiHeadphones size={24} />,
    title: "Remote Workers",
    description: "Multiple email accounts? Zero Inbox handles them all. Stay organized across every inbox.",
  },
  {
    icon: <FiHeart size={24} />,
    title: "Anyone Overwhelmed",
    description: "Whether you have 100 or 100,000 unread emails, Zero Inbox will clean it up — fast.",
  },
  {
    icon: <FiUsers size={24} />,
    title: "Teams & Companies",
    description: "Boost your team's email productivity. Enterprise-grade security, individual-level control.",
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
          Zero Inbox is for everyone,{"\n"}not just power users.
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
