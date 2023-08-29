import { useMediaQuery } from "@mantine/hooks";

export default function useIsMobile() {
  const isSmallScreen = useMediaQuery('(max-width: 300px)');
  return isSmallScreen;
}

export function useIsLargeScreen() {
  const isLargeScreen = useMediaQuery('(min-width: 1000px)');
  return isLargeScreen;
}
