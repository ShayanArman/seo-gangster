import { createStyles, Box, Text, UnstyledButton, Flex } from "@mantine/core";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What does SEO Gangster actually do?",
    answer: "SEO Gangster uses AI SEO agents to build pages, publish articles, run weekly freshness updates, and handle recurring technical SEO work.",
  },
  {
    question: "Why not just hire one SEO person?",
    answer: "One strong SEO hire can help, but a single person usually becomes a bottleneck. AI SEO agents can handle the repetitive production layer faster and more consistently.",
  },
  {
    question: "Why do weekly SEO updates matter?",
    answer: "Because SEO is not one-and-done. Rankings compound when pages stay active, useful, and internally connected through regular refreshes.",
  },
  {
    question: "Can AI agents really help with technical SEO too?",
    answer: "Yes. They are great for recurring technical work like metadata passes, schema cleanup, internal-linking suggestions, and page-by-page update queues.",
  },
  {
    question: "Is this cheaper than a social media manager?",
    answer: "If your goal is search traffic, often yes. AI SEO agents can turn weekly effort into durable search assets like pages and refreshed articles instead of one-off social posts.",
  },
  {
    question: "Can SEO Gangster work on an existing site?",
    answer: "Yes. Existing sites are often the best fit because the AI agents can improve old pages, expand content clusters, and run freshness passes right away.",
  },
  {
    question: "What is the big idea behind the product?",
    answer: "SEO has two steps: build the site and keep it fresh. SEO Gangster exists to make the second step happen consistently.",
  },
  {
    question: "How do I get started?",
    answer: "Use the signup page and tell us about your site, target market, and goals. From there we can shape the right AI SEO workflow for you.",
  },
];

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "6rem 2rem",
    backgroundColor: "white",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 1.5rem",
    },
  },

  inner: {
    maxWidth: 720,
    margin: "0 auto",
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    color: "var(--zi-deep-blue)",
    lineHeight: 1.15,
    letterSpacing: "-1px",
    marginBottom: 48,
    textAlign: "center" as const,

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
      marginBottom: 32,
    },
  },

  item: {
    borderBottom: "1px solid #eee",
  },

  question: {
    width: "100%",
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },

  questionText: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "1.1rem",
    color: "var(--zi-deep-blue)",
    textAlign: "left" as const,
  },

  chevron: {
    flexShrink: 0,
    transition: "transform var(--transition-smooth)",
    color: "#999",
  },

  chevronOpen: {
    transform: "rotate(180deg)",
  },

  answer: {
    overflow: "hidden",
    transition: "max-height 0.3s ease, opacity 0.3s ease",
  },

  answerText: {
    color: "#666",
    fontSize: "1rem",
    lineHeight: 1.6,
    paddingBottom: 20,
  },
}));

function AccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <Box className={classes.item}>
      <UnstyledButton className={classes.question} onClick={() => setIsOpen(!isOpen)}>
        <Text className={classes.questionText}>{item.question}</Text>
        <FiChevronDown
          size={20}
          className={`${classes.chevron} ${isOpen ? classes.chevronOpen : ""}`}
        />
      </UnstyledButton>
      <div
        className={classes.answer}
        style={{
          maxHeight: isOpen ? 300 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <Text className={classes.answerText}>{item.answer}</Text>
      </div>
    </Box>
  );
}

export default function FAQSection() {
  const { classes } = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.inner}>
        <Text className={classes.heading}>Questions? Answered.</Text>
        {faqItems.map((faq, i) => (
          <AccordionItem key={i} item={faq} />
        ))}
      </Box>
    </Box>
  );
}
