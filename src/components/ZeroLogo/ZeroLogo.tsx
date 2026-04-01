import { createStyles, rem, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { LOGO_PATH, SITE_NAME } from "@/lib/seo";

type ZeroLogoProps = {
  variant?: "light" | "dark";
  href?: string;
  hoverable?: boolean;
  imageSize?: number;
  textSize?: number;
};

type StyleParams = {
  hoverable: boolean;
  textSize: number;
  variant: "light" | "dark";
};

const useStyles = createStyles((_, params: StyleParams) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    gap: rem(10),
    padding: params.hoverable ? `${rem(4)} ${rem(10)} ${rem(4)} ${rem(4)}` : 0,
    borderRadius: "var(--radius-md)",
    textDecoration: "none",
    color: params.variant === "dark" ? "rgba(255,255,255,0.92)" : "#333",
    transition: "color var(--transition-fast), background-color var(--transition-fast)",

    "&:hover": params.hoverable
      ? {
          color: params.variant === "dark" ? "white" : "var(--zero-red-darker)",
          backgroundColor: params.variant === "dark" ? "rgba(255,255,255,0.08)" : "rgba(255,50,119,0.06)",
        }
      : undefined,
  },

  text: {
    color: "inherit",
    fontSize: rem(params.textSize),
    lineHeight: 1,
    fontWeight: 500,
  },
}));

export default function ZeroLogo({
  variant = "light",
  href = "/",
  hoverable = true,
  imageSize = 42,
  textSize = 15,
}: ZeroLogoProps) {
  const { classes } = useStyles({ hoverable, textSize, variant });

  return (
    <Link href={href} className={classes.root}>
      <Image width={imageSize} height={imageSize} alt={SITE_NAME} src={LOGO_PATH} style={{ filter: "contrast(1.3)" }} />
      <Text className={classes.text}>{SITE_NAME}</Text>
    </Link>
  );
}
