import { createStyles, Flex, Text, NavLink } from "@mantine/core";
import Link from "next/link";
import { HEADER_HEIGHT, headerLinks } from "../ZeroHeader/ZeroHeader";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  container: {
    position: "fixed",
    top: HEADER_HEIGHT,
    left: 0,
    zIndex: 8000,
    backgroundColor: "var(--landing-blur)",
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
  },

  label: {
    fontWeight: 500,
    fontSize: "1.5rem",
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
              style={link.link === router.asPath ? { backgroundColor: "var(--blue-light)" } : {}}
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

        {/* App links */}
        <Link href="https://app.zeroinbox.ai" target="_blank" passHref>
          <NavLink
            component="a"
            label="Log In"
            classNames={{ root: classes.rootNav, label: classes.label }}
            onClick={() => closeNavBar()}
            variant="filled"
          />
        </Link>
        <Link href="https://app.zeroinbox.ai" target="_blank" passHref>
          <NavLink
            component="a"
            label="Sign Up"
            classNames={{ root: classes.rootNav, label: classes.label }}
            onClick={() => closeNavBar()}
            variant="filled"
          />
        </Link>
      </Flex>
    </Flex>
  );
}