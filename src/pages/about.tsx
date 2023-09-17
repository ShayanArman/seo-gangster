import { createStyles, Flex, Title, Text } from "@mantine/core";


const useStyles = createStyles((theme) => ({
  container: {
    margin: "3rem 3rem 3rem 3rem",

  },

  title: {
    fontFamily: "Calibri"
  },

  description: {
    fontFamily: "Calibri",
    fontSize: "1rem",
    lineHeight: "1rem"
  }
}));

export default function About() {
  const { classes } = useStyles();

  return (
    <Flex direction="column" align={"center"} className={classes.container}>
      <Flex direction="column" align="left" gap={10}>
        <h1 className={classes.title}>
          The Future of Email
        </h1>
        <p className={classes.description}>
          The goal of Zero Inbox is to simplify Email. Information overload, caused by too many emails, is simply stressful.
          But it doesn&apos;t have to be this way.
        </p>
      </Flex>
    </Flex>
  );
}