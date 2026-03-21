import { createStyles, Box, Text, Flex } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, LOGO_PATH, SIGNUP_URL } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    padding: "4rem 2rem 2rem",
    backgroundColor: "var(--zi-dark)",

    [theme.fn.smallerThan("md")]: {
      padding: "3rem 1.5rem 2rem",
    },
  },

  inner: {
    maxWidth: 1100,
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 40,
    marginBottom: 48,

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
    },

    [theme.fn.smallerThan("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  brand: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  brandText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.9rem",
    lineHeight: 1.6,
    maxWidth: 260,
  },

  columnTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    marginBottom: 16,
  },

  link: {
    display: "block",
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.95rem",
    padding: "6px 0",
    transition: "color var(--transition-fast)",

    "&:hover": {
      color: "white",
    },
  },

  divider: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: 24,
  },

  bottomText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.8rem",
  },
}));

export default function FooterSection() {
  const { classes } = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Box className={classes.inner}>
        <div className={classes.grid}>
          {/* Brand Column */}
          <div className={classes.brand}>
            <Image
              width={168}
              height={39}
              alt="SEO Gangster"
              src={LOGO_PATH}
              style={{ filter: "brightness(0) invert(1) grayscale(1) contrast(1.2)" }}
            />
            <Text className={classes.brandText}>
              AI SEO agents for pages, articles, technical cleanup, and weekly freshness updates.
            </Text>
          </div>

          {/* Product Column */}
          <div>
            <Text className={classes.columnTitle}>Platform</Text>
            <Link href="/ai-seo-agents" className={classes.link}>AI SEO Agents</Link>
            <Link href="/weekly-seo-updates" className={classes.link}>Weekly SEO Updates</Link>
            <Link href="/technical-seo-automation" className={classes.link}>Technical SEO Automation</Link>
            <Link href="/workflows" className={classes.link}>Workflows</Link>
          </div>

          {/* Resources Column */}
          <div>
            <Text className={classes.columnTitle}>Resources</Text>
            <Link href="/news" className={classes.link}>News</Link>
            <Link href="/videos" className={classes.link}>Videos</Link>
            <Link href="/tools" className={classes.link}>Tools</Link>
            <Link href="/about" className={classes.link}>About</Link>
            <Link href="/story" className={classes.link}>Story</Link>
            <Link href={`mailto:${CONTACT_EMAIL}`} className={classes.link}>Contact</Link>
            <Link href="/terms" className={classes.link}>Terms</Link>
          </div>

          {/* Learn More Column */}
          <div>
            <Text className={classes.columnTitle}>Learn more</Text>
            <Link href="/best-ai-seo-agent" className={classes.link}>Best AI SEO Agent</Link>
            <Link href="/what-website-should-i-use-for-seo" className={classes.link}>What Website Should I Use for SEO?</Link>
            <Link href="/seo-is-two-steps" className={classes.link}>SEO Is Two Steps</Link>
            <Link href="/seo-agents-vs-seo-person" className={classes.link}>AI SEO Agents vs SEO Person</Link>
            <Link href="/seo-agents-vs-social-media-manager" className={classes.link}>AI SEO Agents vs Social Media Manager</Link>
            <Link href="/seo-agency-alternatives" className={classes.link}>SEO Agency Alternatives</Link>
          </div>

          {/* Account Column */}
          <div>
            <Text className={classes.columnTitle}>Get Started</Text>
            <Link href={SIGNUP_URL} className={classes.link}>Sign Up</Link>
            <Link href="/invest" className={classes.link}>Partnerships</Link>
            <Link href="/privacy" className={classes.link}>Privacy</Link>
          </div>
        </div>

        <Flex justify="space-between" align="center" className={classes.divider} wrap="wrap" gap={12}>
          <Text className={classes.bottomText}>© {new Date().getFullYear()} SEO Gangster. All rights reserved.</Text>
          <Flex gap={20}>
            <Link href="/terms" className={classes.link} style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Terms</Link>
            <Link href="/privacy" className={classes.link} style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Privacy</Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
