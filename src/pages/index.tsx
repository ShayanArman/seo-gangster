import { FEATURES_SECTION, UNSUBSCRIBE_SECTION, SECURITY_SECTION, PRIVACY_SECTION, BUSINESS_SECTION, mainPageSections } from "@/components/ZeroHeader/ZeroHeader";
import { HEADER_PIXEL_HEIGHT } from "@/components/ZeroHeader/ZeroHeader";
import useIsMobile from "@/hooks/useIsMobile";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";
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
      "Zero Inbox is an ai email organizer that helps users clean email, unsubscribe from noise, and keep important messages.",
    featureList: [
      "AI email categorization",
      "Bulk inbox cleanup",
      "One-click unsubscribe",
      "Inbox organization",
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
        title="Delete spam fast with Zero Inbox."
        description="You've got too much going on to clean emails."
        checks={[
          "AI-powered email organization in seconds.",
          "Bulk delete thousands of emails with one click.",
          "Smart filters keep what matters to you.",
        ]}
        ctaText="Start Cleaning"
        ctaHref="https://app.zeroinbox.ai"
        image={
          <Image
            style={{ borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)" }}
            width={200}
            height={400}
            alt="Zero Inbox features"
            src="/images/features-1200px.png"
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
        title="Unsubscribe is here."
        description="Unsubscribe seamlessly from newsletters and promotions. With the press of a button, clean your inbox and stay at zero."
        checks={[
          "One-click unsubscribe from any sender.",
          "Permanently block unwanted newsletters.",
          "Track every unsubscribe action.",
        ]}
        ctaText="Try Unsubscribe"
        ctaHref="https://app.zeroinbox.ai"
        image={
          <Image
            style={{ borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)" }}
            width={200}
            height={400}
            alt="Unsubscribe feature"
            src="/images/unsubscribe-1200px.png"
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
        title="Secure from the ground up."
        description="Google Security Partner. End-to-end encryption at every step. Your emails are never stored or shared."
        checks={[
          "Google Security Partner certified.",
          "End-to-end encryption for all data.",
          "No email content is ever stored on our servers.",
        ]}
        ctaText="Learn More"
        ctaHref="https://app.zeroinbox.ai"
        image={
          <Image
            style={{ borderRadius: "24px" }}
            width={619}
            height={580}
            alt="Security"
            src="/images/security-1200px.png"
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
        title="You're in control."
        description={
          <>
            Inbox Zero AI{" "}
            <strong>always</strong>{" "}
            asks for your permission before deleting or moving emails. You remain in complete control.
          </>
        }
        checks={[
          "Delete your account and data instantly.",
          "No third-party data sharing. Ever.",
          "Full transparency over what we access.",
        ]}
        ctaText="Privacy Info"
        ctaHref="https://app.zeroinbox.ai"
        image={
          <Image
            style={{ borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)" }}
            width={200}
            height={400}
            alt="Privacy controls"
            src="/images/privacy-1200px.png"
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
        title="Zero Inbox for Business."
        description="Be more productive. The average employee spends an hour a day on email. Let Zero AI handle the clutter so your team can focus."
        checks={[
          "Enterprise-grade security and compliance.",
          "Per-user controls and admin dashboard.",
          "Boost team email productivity instantly.",
        ]}
        ctaText="Contact Us"
        ctaHref="mailto:info@zeroinbox.ai?subject=Zero Inbox for Business"
        image={
          <Image
            style={{ borderRadius: "24px", boxShadow: "7px 7px 10px 0px var(--shadow-color)" }}
            width={200}
            height={400}
            alt="Business features"
            src="/images/business-1200px.png"
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
