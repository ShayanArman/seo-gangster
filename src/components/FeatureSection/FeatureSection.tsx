import { createStyles, Flex, Text, Button, Box } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "../Analytics/GoogleAnalytics";

interface FeatureSectionProps {
  id: string;
  title: string;
  description: React.ReactNode;
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
    padding: "7rem 2rem",
    borderTop: "1px solid rgba(17, 17, 17, 0.08)",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: 72,

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
  },

  mediaFrame: {
    width: "100%",
    maxWidth: 520,
    padding: 20,
    borderRadius: 32,
    border: "1px solid rgba(17, 17, 17, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    boxShadow: "0 24px 52px rgba(17, 17, 17, 0.08)",

    "& img": {
      maxWidth: "100%",
      height: "auto",
      display: "block",
    },
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    marginBottom: 18,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
    },
  },

  description: {
    fontSize: "1.08rem",
    lineHeight: 1.8,
    opacity: 1,
    marginBottom: 28,
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
    marginBottom: 16,
    fontSize: "1rem",
    lineHeight: 1.6,
  },

  checkIcon: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontWeight: 800,
    fontSize: "0.75rem",
    marginTop: 2,
  },

  ctaButton: {
    fontWeight: 700,
    transition: "all var(--transition-smooth)",

    "&:hover": {
      transform: "translateY(-2px)",
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
        size="lg"
        radius="xl"
        rightIcon={<FiArrowRight />}
        onClick={() => registerClickSignUpEventGoogle()}
        className={classes.ctaButton}
        styles={() => ({
          root: {
            border: `1px solid ${textColor === "white" ? "#ffffff" : "#111111"}`,
            backgroundColor: textColor === "white" ? "#ffffff" : "#111111",
            color: textColor === "white" ? "#111111" : "#ffffff",
            "&:hover": {
              backgroundColor: textColor === "white" ? "#f3f3f1" : "#000000",
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
      <div className={classes.mediaFrame}>{image}</div>
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
