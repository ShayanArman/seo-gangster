import { createStyles, Flex, Text, Button, Box } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";

interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  checks: string[];
  ctaText: string;
  ctaHref: string;
  image: React.ReactNode;
  bgColor: string;
  textColor?: string;
  checkColor?: string;
  imageFirst?: boolean;
  isSmallScreen: boolean;
}

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "6rem 2rem",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: 60,

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column !important" as any,
      gap: 40,
    },
  },

  textSide: {
    flex: 1,
    minWidth: 0,
  },

  imageSide: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    justifyContent: "center",

    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    lineHeight: 1.15,
    letterSpacing: "-1px",
    marginBottom: 16,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
    },
  },

  description: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    opacity: 0.85,
    marginBottom: 24,
  },

  checkList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 32px 0",
  },

  checkItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 14,
    fontSize: "1.05rem",
    lineHeight: 1.5,
  },

  checkIcon: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontWeight: 700,
    fontSize: "0.75rem",
    marginTop: 2,
  },

  ctaButton: {
    border: "none",
    fontWeight: 600,
    transition: "all var(--transition-smooth)",

    "&:hover": {
      transform: "translateX(4px)",
    },
  },
}));

export default function FeatureSection({
  id,
  title,
  description,
  checks,
  ctaText,
  ctaHref,
  image,
  bgColor,
  textColor = "white",
  checkColor = "var(--zi-lime)",
  imageFirst = false,
  isSmallScreen,
}: FeatureSectionProps) {
  const { classes } = useStyles();

  const textBlock = (
    <Box className={classes.textSide}>
      <Text className={classes.title} style={{ color: textColor }}>
        {title}
      </Text>
      <Text className={classes.description} style={{ color: textColor }}>
        {description}
      </Text>

      {checks.length > 0 && (
        <ul className={classes.checkList}>
          {checks.map((item, i) => (
            <li key={i} className={classes.checkItem} style={{ color: textColor }}>
              <span className={classes.checkIcon} style={{ backgroundColor: checkColor, color: bgColor }}>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      <Button
        component="a"
        href={ctaHref}
        target="_blank"
        size="lg"
        radius="xl"
        rightIcon={<FiArrowRight />}
        onClick={() => registerClickSignUpEventGoogle()}
        className={classes.ctaButton}
        styles={() => ({
          root: {
            backgroundColor: textColor === "white" ? "white" : "var(--zero-red-darker)",
            color: textColor === "white" ? bgColor : "white",
            "&:hover": {
              backgroundColor: textColor === "white" ? "rgba(255,255,255,0.9)" : "#d4205a",
            },
          },
        })}
      >
        {ctaText}
      </Button>
    </Box>
  );

  const imageBlock = (
    <Box className={classes.imageSide}>
      {image}
    </Box>
  );

  return (
    <Box id={id} className={classes.section} style={{ backgroundColor: bgColor, color: textColor }}>
      <Flex className={classes.inner} direction={isSmallScreen ? "column" : (imageFirst ? "row-reverse" : "row")}>
        {textBlock}
        {imageBlock}
      </Flex>
    </Box>
  );
}
