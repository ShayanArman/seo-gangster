import { createStyles, Flex, Footer } from "@mantine/core";
import Image from "next/image";
import { Link } from "react-scroll";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "var(--landing-background)"
  }
}));

export default function FooterSection() {
  const { classes } = useStyles();

  return (
      <Footer height={80} className={classes.footer} withBorder={false}>
        <Flex h={"inherit"} justify="center" align="center" style={{backgroundColor: "transparent"}}>
          <Link to="#top" smooth={true} duration={500} offset={-50} >
            <Image width={150} height={40} alt="zero" src="/justLogo.svg" />
          </Link>
        </Flex>
      </Footer>
  );
}
