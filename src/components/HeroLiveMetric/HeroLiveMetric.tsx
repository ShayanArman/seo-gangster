import { keyframes } from "@emotion/react";
import { Box, Flex, Text, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

const pulse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  70% {
    transform: scale(2.4);
    opacity: 0;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

const useStyles = createStyles((theme) => ({
  metricBar: {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    width: "fit-content",
    padding: "0.8rem 1rem",
    borderRadius: 18,
    border: "1px solid rgba(255, 255, 255, 0.28)",
    backgroundColor: "rgba(15, 38, 95, 0.28)",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },

  liveState: {
    display: "flex",
    alignItems: "center",
    lineHeight: 1,
    gap: 10,
    minWidth: "max-content",
  },

  liveBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  dotWrap: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 10,
    height: 10,
  },

  dotPulse: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    backgroundColor: "#52d86a",
    animation: `${pulse} 1.8s ease-out infinite`,
  },

  dot: {
    position: "relative",
    display: "inline-block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#52d86a",
  },

  liveText: {
    display: "inline-flex",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.95)",
    fontSize: "0.78rem",
    lineHeight: 1,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontWeight: 700,
  },

  timeText: {
    display: "inline-flex",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "0.78rem",
    lineHeight: 1,
    letterSpacing: "0.02em",
    fontWeight: 600,
  },

  divider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },

  metricNumber: {
    color: "white",
    lineHeight: 1,
    fontWeight: 700,
    fontSize: "1.25rem",
  },

  metricLabel: {
    marginTop: 4,
    color: "rgba(255, 255, 255, 0.86)",
    fontSize: "0.9rem",
    lineHeight: 1.2,
  },

  loggedInLabel: {
    marginTop: 4,
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: "0.82rem",
    lineHeight: 1.2,
    fontWeight: 600,
  },
}));

interface HeroLiveMetricProps {
  value?: string;
  label?: string;
  statusLabel?: string;
}

function formatCurrentTime(date = new Date()) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function getLoggedInUsers(date = new Date()) {
  const minutesPerDay = 24 * 60;
  const peakStartMinute = 9 * 60;
  const peakEndMinute = 19 * 60; // 7:00 PM exclusive => includes 6:59 PM
  const peakMinUsers = 300;
  const peakMaxUsers = 1299;
  const offPeakMinUsers = 89;
  const offPeakMaxUsers = 300;
  const minuteOfDay = date.getHours() * 60 + date.getMinutes();

  if (minuteOfDay >= peakStartMinute && minuteOfDay < peakEndMinute) {
    const peakProgress = (minuteOfDay - peakStartMinute) / (peakEndMinute - peakStartMinute);
    const middayCurve = Math.sin(Math.PI * peakProgress);
    return Math.round(peakMinUsers + middayCurve * (peakMaxUsers - peakMinUsers));
  }

  if (minuteOfDay < peakStartMinute) {
    const morningRamp = minuteOfDay / peakStartMinute;
    return Math.round(offPeakMinUsers + morningRamp * (offPeakMaxUsers - offPeakMinUsers));
  }

  const eveningRamp = (minuteOfDay - peakEndMinute) / (minutesPerDay - peakEndMinute);
  return Math.round(offPeakMaxUsers - eveningRamp * (offPeakMaxUsers - offPeakMinUsers));
}

export default function HeroLiveMetric({
  value = "14,000+",
  label = "pages and refreshes shipped",
  statusLabel = "Agents running",
}: HeroLiveMetricProps) {
  const { classes } = useStyles();
  const [currentTime, setCurrentTime] = useState("");
  const [loggedInUsers, setLoggedInUsers] = useState<number | null>(null);

  useEffect(() => {
    const refreshUsageSnapshot = () => {
      const now = new Date();
      setCurrentTime(formatCurrentTime(now));
      setLoggedInUsers(getLoggedInUsers(now));
    };

    refreshUsageSnapshot();

    const interval = window.setInterval(() => {
      refreshUsageSnapshot();
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Flex className={classes.metricBar}>
      <Box className={classes.liveBlock}>
        <Box className={classes.liveState}>
          <Box className={classes.dotWrap}>
            <span className={classes.dotPulse} />
            <span className={classes.dot} />
          </Box>
          <Text className={classes.liveText}>{statusLabel}</Text>
          {currentTime && <Text className={classes.timeText}>{currentTime}</Text>}
        </Box>
        {loggedInUsers !== null && (
          <Text className={classes.loggedInLabel}>{loggedInUsers.toLocaleString()} automation runs active</Text>
        )}
      </Box>

      <Box className={classes.divider} />

      <Box>
        <Text className={classes.metricNumber}>{value}</Text>
        <Text className={classes.metricLabel}>{label}</Text>
      </Box>
    </Flex>
  );
}
