import { createStyles, Flex, Text, NavLink } from "@mantine/core";
import Link from "next/link";
import { HEADER_HEIGHT, headerLinks } from "../ZeroHeader/ZeroHeader";
import { useRouter } from "next/router";
import { SIGNUP_PATH } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  container: {
    position: "fixed",
    top: HEADER_HEIGHT,
    left: 0,
    zIndex: 8000,
    backgroundColor: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    boxShadow: "0 18px 40px rgba(17, 17, 17, 0.08)",
    backdropFilter: "blur(16px)",
    padding: "20px",

    [theme.fn.largerThan("xs")]: {
      width: "20rem",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      height: "95%",
    },
  },

  content: {
    rowGap: 5,
    marginLeft: "2rem",
    width: "80%",
    [theme.fn.largerThan("sm")]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },

  rootNav: {
    backgroundColor: "transparent",
    borderRadius: "7px",
    color: "#333",
    transition: "color var(--transition-fast), background-color var(--transition-fast)",

    "&:hover": {
      color: "var(--zero-red-darker)",
      backgroundColor: "rgba(255,50,119,0.06)",
    },
  },

  label: {
    fontWeight: 500,
    fontSize: "1.5rem",
    color: "inherit",
  },
}));

export default function NavBar({ opened, closeNavBar }: { opened: boolean; closeNavBar: () => void }) {
  const { classes } = useStyles();
  const router = useRouter();

  if (!opened) {
    return <></>;
  }

  return (
    <Flex className={classes.container}>
      <Flex direction="column" className={classes.content}>
        {headerLinks.map((link) => (
          <Link key={link.label} shallow={true} href={link.link} target={link.newTab ? "_blank" : "_self"} passHref>
            <NavLink
              component="a"
              label={link.label}
              style={link.link === router.asPath ? {
                backgroundColor: "rgba(255,50,119,0.06)",
                color: "var(--zero-red-darker)",
              } : {}}
              classNames={{
                root: classes.rootNav,
                label: classes.label,
              }}
              onClick={() => closeNavBar()}
              variant="filled"
              active={router.asPath === link.link}
            />
          </Link>
        ))}

        <Link href={SIGNUP_PATH} passHref>
          <NavLink
            component="a"
            label="Sign Up"
            classNames={{ root: classes.rootNav, label: classes.label }}
            onClick={() => closeNavBar()}
            variant="filled"
          />
        </Link>
        <Link href={SIGNUP_PATH} passHref>
          <NavLink
            component="a"
            label="Get Started"
            classNames={{ root: classes.rootNav, label: classes.label }}
            onClick={() => closeNavBar()}
            variant="filled"
          />
        </Link>
      </Flex>
    </Flex>
  );
}
