import { createStyles } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles(() => ({
  mediaWrap: {
    position: "relative" as const,
    width: "100%",
    aspectRatio: "16 / 9",
    marginBottom: "1.25rem",
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
    backgroundColor: "#000000",
    boxShadow: "0 14px 40px rgba(15, 29, 61, 0.12)",
  },

  mediaImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
  },

  mediaFallback: {
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(15,29,61,1) 0%, rgba(31,67,138,1) 52%, rgba(225,40,95,1) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },

  mediaFallbackText: {
    fontFamily: "var(--font-heading)",
    fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "#ffffff",
    textAlign: "center" as const,
    textWrap: "balance" as const,
  },
}));

export default function EditorialHeroMedia({
  src,
  alt,
  fallbackText,
}: {
  src?: string | null;
  alt: string;
  fallbackText: string;
}) {
  const { classes } = useStyles();

  return (
    <div className={classes.mediaWrap}>
      {src ? (
        <Image
          className={classes.mediaImage}
          src={src}
          alt={alt}
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 760px"
        />
      ) : (
        <div className={classes.mediaFallback}>
          <span className={classes.mediaFallbackText}>{fallbackText}</span>
        </div>
      )}
    </div>
  );
}
