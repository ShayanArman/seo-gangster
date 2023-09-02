import { createStyles, Flex, Button } from "@mantine/core";
import { HEADER_HEIGHT } from "../ZeroHeader/ZeroHeader";

const useStyles = createStyles(
    (theme) => ({
      container: {
        position: "fixed", 
        left: 0, 
        rowGap: 5,
        top: HEADER_HEIGHT, 
        zIndex: 8000, 
        backgroundColor: "var(--landing-blur)"
      }
    })
)

export default function NavBar({opened}: { opened: boolean }) {
    const { classes } = useStyles();

    if(!opened) {
        return <></>;
    }

    return (
      <Flex 
        direction="column"
        h={`100%`} 
        w={"100%"} 
        className={classes.container}> 
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
        <Button>Fourth</Button>
      </Flex>
    );
}