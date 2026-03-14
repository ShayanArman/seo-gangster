import { Flex } from "@mantine/core";
import Link from "next/link";

export default function NewsBar({ isSmallScreen }: { isSmallScreen: boolean }) {
  const badgeText = "Zero Inbox v3.0.3";
  const ctaText = "Read update";

  return (
    <Flex
      justify="center"
      style={{
        width: "100%",
        backgroundColor: "#f6f7f5",
        padding: isSmallScreen ? "0.65rem 0.5rem 0" : "0.7rem 1.25rem 0",
      }}
    >
      <Flex
        justify="center"
        style={{
          width: "100%",
          maxWidth: 1100,
        }}
      >
        <Flex
          align="center"
          justify="center"
          direction="row"
          style={{
            width: "fit-content",
            maxWidth: "100%",
            gap: isSmallScreen ? "0.35rem" : "0.48rem",
            border: "1px solid var(--zero-red-light, #f4d0dc)",
            borderRadius: isSmallScreen ? "14px" : "14px",
            backgroundColor: "#fff7fb",
            boxShadow: "0 2px 6px rgba(230, 94, 140, 0.14)",
            padding: isSmallScreen ? "0.24rem 0.28rem" : "0.26rem 0.38rem",
          }}
        >
          <Flex
            align="center"
            justify="center"
            style={{
              width: "auto",
              gap: isSmallScreen ? "0.35rem" : "0.42rem",
              background: "linear-gradient(135deg, #f33f96 0%, #e12381 100%)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: isSmallScreen ? "0.78rem" : "0.84rem",
              lineHeight: 1.2,
              borderRadius: "9px",
              padding: isSmallScreen ? "0.38rem 0.5rem" : "0.34rem 0.58rem",
              whiteSpace: "nowrap",
            }}
          >
            <svg width={isSmallScreen ? "13" : "14"} height={isSmallScreen ? "13" : "14"} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M9.47 1.56 3.36 9.2a.83.83 0 0 0 .65 1.35h3.12l-.54 4.9c-.05.48.56.76.9.42l6.12-7.64a.83.83 0 0 0-.65-1.35H9.83l.53-4.9c.05-.48-.56-.76-.9-.42Z"
                fill="currentColor"
              />
            </svg>
            <span>{badgeText}</span>
          </Flex>

          <Link
            href="https://app.zeroinbox.ai"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.28rem",
              color: "var(--zero-red-darker, #ff3277)",
              fontWeight: 600,
              fontSize: isSmallScreen ? "0.8rem" : "0.84rem",
              textDecoration: "none",
              lineHeight: 1.2,
              textAlign: "center",
              width: "auto",
              whiteSpace: "nowrap",
              padding: isSmallScreen ? "0.02rem 0.08rem 0.05rem" : "0 0.14rem",
            }}
          >
            {ctaText}
            <svg width={isSmallScreen ? "12" : "13"} height={isSmallScreen ? "12" : "13"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M5.25 3.5 8.75 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
