import { FEATURES_SECTION, UNSUBSCRIBE_SECTION, SECURITY_SECTION, PRIVACY_SECTION, BUSINESS_SECTION, mainPageSections } from "@/components/ZeroHeader/ZeroHeader";
import { HEADER_PIXEL_HEIGHT } from "@/components/ZeroHeader/ZeroHeader";
import useIsMobile from "@/hooks/useIsMobile";
import { DEFAULT_OG_IMAGE, SIGNUP_URL, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";
import FeatureSection from "@/components/FeatureSection";
import StepsSection from "@/components/StepsSection";
import NewsBar from "@/components/NewsBar/NewsBar";
import { faqItems } from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import UserCards from "@/components/UserCards";
import CTABanner from "@/components/CTABanner";
import UserTypes from "@/components/UserTypes";
import ToolsGrid from "@/components/ToolsGrid";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

type SectionKey = keyof typeof mainPageSections;

export default function Home() {
  const isSmallScreen = useIsMobile();
  const router = useRouter();
  const modifiedDate = getPathLastModified("/");

  const softwareApplicationStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    description:
      "SEO Gangster uses AI SEO agents to create pages, publish articles, and keep sites fresh with weekly updates.",
    featureList: [
      "AI SEO page creation",
      "Weekly freshness updates",
      "Technical SEO automation",
      "Internal linking improvements",
    ],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  useEffect(() => {
    const { section } = router.query;
    if (section && typeof section === "string" && mainPageSections[section as SectionKey]) {
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          offset: -1 * (HEADER_PIXEL_HEIGHT + mainPageSections[section as SectionKey].offset),
          smooth: "easeInOutQuart",
        });
      }, 50);
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <script
          key="ld-software-application"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationStructuredData) }}
        />
        <script
          key="ld-faq-page"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      {/* ── Hero ── */}
      <HeroSection isSmallScreen={isSmallScreen} />

      {/* ── News Bar ── */}
      <NewsBar isSmallScreen={isSmallScreen}/>

      {/* ── User Cards ── */}
      <UserCards />

      {/* ── Feature: Delete Spam ── */}
      <FeatureSection
        id={FEATURES_SECTION}
        title="Build landing pages fast."
        description="SEO starts with the site and the articles. AI agents make that first step faster."
        checks={[
          "Create core service pages around what you actually sell.",
          "Publish supporting articles without waiting on a huge content calendar.",
          "Move from idea to live page in days, not quarters.",
        ]}
        ctaText="Start Building"
        ctaHref={SIGNUP_URL}
        image={
          <Image
            style={{ borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)" }}
            width={320}
            height={320}
            alt="SEO Gangster page creation"
            src="/images/news/interactive_learning.png"
          />
        }
        bgColor="#f6f7f5"
        textColor="var(--zi-deep-blue)"
        checkColor="#007aff"
        isSmallScreen={isSmallScreen}
      />

      {/* ── Feature: Unsubscribe ── */}
      <FeatureSection
        id={UNSUBSCRIBE_SECTION}
        title="Freshness is the second half of SEO."
        description="The site is only step one. Weekly updates are what keep pages relevant and rankings alive."
        checks={[
          "Refresh older pages every week instead of letting them decay.",
          "Expand content clusters as new opportunities show up.",
          "Treat SEO like an operating system, not a launch event.",
        ]}
        ctaText="Run Weekly Updates"
        ctaHref={SIGNUP_URL}
        image={
          <Image
            style={{ borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)" }}
            width={320}
            height={320}
            alt="SEO freshness updates"
            src="/images/news/text_scaling-for-everyone.png"
          />
        }
        bgColor="#f6f7f5"
        textColor="var(--zi-deep-blue)"
        checkColor="#007aff"
        imageFirst={!isSmallScreen}
        isSmallScreen={isSmallScreen}
      />

      {/* ── Feature: Security ── */}
      <FeatureSection
        id={SECURITY_SECTION}
        title="Technical SEO should not sit in a spreadsheet."
        description="Schema issues, internal links, stale metadata, and weak sections should keep getting fixed."
        checks={[
          "Run recurring technical passes across your important pages.",
          "Tighten internal links as the site grows.",
          "Keep titles, metadata, and structure from drifting out of shape.",
        ]}
        ctaText="Automate the Technical Pass"
        ctaHref={SIGNUP_URL}
        image={
          <Image
            style={{ borderRadius: "24px" }}
            width={520}
            height={520}
            alt="Technical SEO automation"
            src="/images/news/model_view_control.png"
          />
        }
        bgColor="#d2e823"
        textColor="var(--zi-deep-blue)"
        checkColor="var(--zi-deep-blue)"
        isSmallScreen={isSmallScreen}
      />

      {/* ── Feature: Privacy ── */}
      <FeatureSection
        id={PRIVACY_SECTION}
        title="Up-to-date knowledge beats stale SEO playbooks."
        description={
          <>
            AI SEO agents can work from the latest available knowledge and keep applying it to your site every week.
          </>
        }
        checks={[
          "Move faster than a single overloaded SEO generalist.",
          "Use systems for the repetitive work and judgment for the real decisions.",
          "Keep shipping instead of waiting for the perfect quarterly plan.",
        ]}
        ctaText="See Why This Works"
        ctaHref={SIGNUP_URL}
        image={
          <Image
            style={{ borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)" }}
            width={320}
            height={320}
            alt="Current SEO knowledge"
            src="/images/news/stacking_logic.png"
          />
        }
        bgColor="var(--zi-lilac)"
        textColor="var(--zi-deep-blue)"
        checkColor="var(--zi-electric-blue)"
        imageFirst={!isSmallScreen}
        isSmallScreen={isSmallScreen}
      />

      {/* ── Tools Grid ── */}
      <ToolsGrid />

      {/* ── Feature: Business ── */}
      <FeatureSection
        id={BUSINESS_SECTION}
        title="Cheaper than building a bloated marketing org."
        description="If the goal is search growth, it is often better to fund pages and freshness than hire around endless manual process."
        checks={[
          "More weekly output than a single SEO hire can usually sustain.",
          "A better search asset than renting attention on social forever.",
          "Built for founders, agencies, and lean teams that need real execution.",
        ]}
        ctaText="Talk to SEO Gangster"
        ctaHref={SIGNUP_URL}
        image={
          <Image
            style={{ borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)" }}
            width={320}
            height={320}
            alt="SEO growth engine"
            src="/images/news/aurora_orange_pink_blue.png"
          />
        }
        bgColor="var(--zi-deep-blue)"
        textColor="white"
        checkColor="var(--zi-lime)"
        isSmallScreen={isSmallScreen}
      />

      {/* ── User Types ── */}
      <UserTypes />

      {/* ── Steps ── */}
      <StepsSection />

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── Final CTA ── */}
      <CTABanner />
    </>
  );
}
