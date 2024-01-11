import { createContext, useContext, useState } from "react";

const ReadingContext = createContext<{isHeroFinishedReading?: boolean; setIsHeroFinishedReading?: any}>({});

export const useReadingStatus = () => {
  return useContext(ReadingContext);
};

export const ReadingProvider = ({children}: any) => {
  const [isHeroFinishedReading, setIsHeroFinishedReading] = useState(false);

  return (
    <ReadingContext.Provider value={{ isHeroFinishedReading, setIsHeroFinishedReading }}>
      { children }
    </ReadingContext.Provider>
  );
}