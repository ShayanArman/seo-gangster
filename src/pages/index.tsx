import React, { useState } from "react";
import { Box } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import ZeroHeader, { HEADER_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import TextSection from "@/Components/TextSection";
import HeroSection from "@/Components/HeroSection";
import Footer from "@/Components/Footer";
import useIsMobile from "@/hooks/useIsMobile";

/**
 * Fires when the element passed in is fully in Window.
 * @param
 * @returns 
 */
// function WaypointWrapper({ Component, innerText }: {Component: typeof TextSection, innerText: string }) {
//   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <>
//       <Component isActive={isVisible} innerText={innerText} />
//       <Waypoint
//         topOffset={800}
//         onEnter={() => {
//           setIsVisible(true);
//         }} />
//     </>
//   );
// }

export default function Home() {
  const [scrolledToHeader, setScrolledToHeader] = useState(false);
  const [seenComponents, setSeenComponents] = useState<Set<string>>(new Set());
  const isSmallScreen = useIsMobile();

  // Add item to the set
  const addSeenComponent = (component: string) => {
    setSeenComponents((prevItems) => new Set(prevItems).add(component));
  };

  return (
      <Box>
        <ZeroHeader isSmallScreen={isSmallScreen} scrolledToHeader={scrolledToHeader} />

        <Waypoint
          onEnter={() => { setScrolledToHeader(false); }}
          onLeave={() => { setScrolledToHeader(true);}}
        >
          <Box mih={HEADER_HEIGHT} w={"100%"} style={{ backgroundColor: "white"}}>
          </Box>
        </Waypoint>

        <HeroSection isSmallScreen={isSmallScreen} />

        <TextSection 
          key="text1" 
          isVisible={seenComponents.has("text1")} 
          innerText="With private messaging and calling, you can be yourself, speak freely
          and feel close to the most important people in your life no matter where
          they are."/>
        <Waypoint topOffset={800} onEnter={() => {!seenComponents.has("text1") ? addSeenComponent("text1") : null }} />

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "white"}}>
        </Box>

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "black"}}>
        </Box>

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "white"}}>
        </Box>

        {/* <WaypointWrapper Component={TextSection} innerText={"With Zero AI, organizing your overflowing inbox is easy! You can focus on what's important. While junk emails take seconds to manage."} /> */}

        <Footer />
      </Box>
  )
}
