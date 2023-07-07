import ZeroHeader from "@/Components/ZeroHeader";
import { HEADER_PIXEL_HEIGHT } from "@/Components/ZeroHeader/ZeroHeader";
import { Box, Text } from "@mantine/core";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

export default function Security() {
  const [scrolledToHeader, setScrolledToHeader] = useState(false);

  const onEnter = () => {
    setScrolledToHeader(false);
  };

  const onLeave = () => {
    setScrolledToHeader(true);
  };
  return (
    <Box>
      <ZeroHeader scrolledToHeader={scrolledToHeader} />
      <Waypoint onLeave={onLeave}>
        <Box mih={"60px"} w={"100%"} style={{ backgroundColor: "white" }}></Box>
      </Waypoint>

      {/* EnterWaypoint  topOffset is height plus 40*/}
      <Waypoint onEnter={onEnter} topOffset={200 + HEADER_PIXEL_HEIGHT - 20}>
        <Box
          mih="200px"
          w={"100%"}
          style={{ backgroundColor: "#fcf5eb" }}
          id="section1"
        >
          Ryan -
        </Box>
      </Waypoint>

      <Box
        mih="200px"
        w={"100%"}
        style={{ backgroundColor: "black" }}
        id="section1"
      >
        Second
      </Box>

      <Box
        mih="100px"
        w={"100%"}
        style={{ backgroundColor: "white" }}
        id="section1"
      >
        Second
      </Box>

      <Box
        mih="200px"
        w={"100%"}
        style={{ backgroundColor: "black" }}
        id="section1"
      >
        Second
      </Box>
      <Box
        mih="200px"
        w={"100%"}
        style={{ backgroundColor: "black" }}
        id="section1"
      >
        Second
      </Box>

      <Box
        mih="100px"
        w={"100%"}
        style={{ backgroundColor: "white" }}
        id="section1"
      >
        Second
      </Box>

      <Box
        mih="200px"
        w={"100%"}
        style={{ backgroundColor: "black" }}
        id="section1"
      >
        Second
      </Box>
    </Box>
  );
}
