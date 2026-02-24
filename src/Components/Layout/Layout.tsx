import useIsMobile from "@/hooks/useIsMobile";
import { createStyles, Box, Flex } from "@mantine/core";
import Head from "next/head";
import FooterSection from "@/Components/Footer";
import ZeroHeader from "@/Components/ZeroHeader/ZeroHeader";
import GoogleAnalytics from "../Analytics/GoogleAnalytics";

const useStyles = createStyles(() => ({
  container: {
    backgroundColor: "var(--landing-background)",
  },

  content: {
    flex: 1,
  },
}));

export default function Layout({ children }: { children: JSX.Element }) {
  const isSmallScreen = useIsMobile();
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Zero Inbox — AI Email Manager. Clean your inbox, keep what matters.</title>
        <link rel="icon" href="/logo.ico" />
        <link rel="canonical" href="https://www.zeroinbox.ai" />
        <meta
          name="description"
          content="Zero Inbox is the AI email manager that deletes spam, unsubscribes from noise, and organizes what's left — in seconds. Be more productive. Get to inbox zero."
        />
        <meta
          property="og:description"
          content="Clean your email inbox and get to inbox zero with Zero Inbox — the AI-powered email organizer. Be more productive, stay organized."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:title"
          content="Zero Inbox — AI Email Manager. Clean your inbox, keep what matters."
        />
        <meta property="og:url" content="https://www.zeroinbox.ai" />
        <meta property="og:type" content="website" />
      </Head>

      <Flex id="#top" direction="column" mih="100vh" className={classes.container}>
        <GoogleAnalytics />
        <ZeroHeader isSmallScreen={isSmallScreen} />

        <Box className={classes.content}>
          {children}
        </Box>

        <FooterSection />
      </Flex>
    </>
  );
}
