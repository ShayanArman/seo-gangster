import { Flex, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  meta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.85rem",
    color: "rgba(15, 29, 61, 0.5)",
    fontWeight: 500,
    marginBottom: "1rem",
  },

  category: {
    color: "rgba(15, 29, 61, 0.7)",
    fontWeight: 600,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: "50%",
    backgroundColor: "rgba(15, 29, 61, 0.3)",
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "2.4rem",
    lineHeight: 1.15,
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.8rem",
    },
  },

  subtitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "1.3rem",
    lineHeight: 1.45,
    color: "rgba(15, 29, 61, 0.72)",
    marginBottom: "0.9rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.1rem",
    },
  },

  excerpt: {
    fontSize: "1.15rem",
    lineHeight: 1.7,
    color: "rgba(15, 29, 61, 0.6)",
    marginBottom: "1rem",
  },
}));

function formatEditorialDate(dateStr: string): string {
  const date = new Date(dateStr);

  if (Number.isNaN(date.getTime())) {
    return dateStr;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function EditorialPageHeader({
  category,
  date,
  title,
  subtitle,
  excerpt,
}: {
  category: string;
  date: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
}) {
  const { classes } = useStyles();

  return (
    <>
      <Flex className={classes.meta}>
        <span className={classes.category}>{category}</span>
        <span className={classes.dot} />
        <span>{formatEditorialDate(date)}</span>
      </Flex>

      <h1 className={classes.title}>{title}</h1>

      {subtitle ? <Text className={classes.subtitle}>{subtitle}</Text> : null}
      {excerpt ? <Text className={classes.excerpt}>{excerpt}</Text> : null}
    </>
  );
}
