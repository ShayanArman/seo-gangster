import Link from "next/link";

export default function NewsBar({ isSmallScreen }: { isSmallScreen: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f6f7f5",
        padding: "0.75rem 1.25rem 0",
      }}
    >
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.5rem",
          background: "rgba(15, 29, 61, 0.04)",
          border: "1px solid rgba(15, 29, 61, 0.1)",
          borderRadius: isSmallScreen ? "16px" : "100px",
          padding: "0.4rem 0.75rem 0.4rem 0.35rem",
          fontSize: "0.82rem",
          color: "rgba(15, 29, 61, 0.72)",
          lineHeight: 1.5,
        }}
      >
        {/* "NEW" pill */}
        <span
          style={{
            background: "var(--zi-lime, #d2e823)",
            color: "var(--zi-deep-blue, #0f1d3d)",
            fontWeight: 700,
            fontSize: "0.65rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            borderRadius: "100px",
            padding: "0.15rem 0.55rem",
            flexShrink: 0,
          }}
        >
          New
        </span>

        {/* Date */}
        <span style={{ opacity: 0.55, fontSize: "0.78rem", flexShrink: 0 }}>Mar 2, 2026</span>

        {/* Divider */}
        {!isSmallScreen && <span style={{ opacity: 0.2, fontSize: "0.9rem" }}>|</span>}

        {/* Message */}
        <span style={{ flex: 1, minWidth: 0 }}>
          Launched{" "}
          <code
            style={{
              fontFamily: "ui-monospace, 'Fira Code', monospace",
              fontSize: "0.79rem",
              background: "rgba(15, 29, 61, 0.07)",
              borderRadius: "4px",
              padding: "0.05rem 0.35rem",
              color: "var(--zi-deep-blue, #0f1d3d)",
            }}
          >
            @zeroinbox/dynamo
          </code>{" "}
          — TypeScript DynamoDB ORM.{" "}
          <code
            style={{
              fontFamily: "ui-monospace, 'Fira Code', monospace",
              fontSize: "0.79rem",
              background: "rgba(15, 29, 61, 0.07)",
              borderRadius: "4px",
              padding: "0.05rem 0.35rem",
              color: "var(--zi-deep-blue, #0f1d3d)",
            }}
          >
            npm i @zeroinbox/dynamo
          </code>
        </span>

        {/* CTA arrow link */}
        <Link
          href="/news/zeroinbox-dynamo-launch"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.2rem",
            color: "var(--zi-deep-blue, #0f1d3d)",
            fontWeight: 700,
            fontSize: "0.82rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          Read more
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "0.5px" }}
          >
            <path
              d="M2.5 6.5h8M7 3.5l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
    </div>
  )
}