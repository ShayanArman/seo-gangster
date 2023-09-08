import { createContext, useContext, useState } from "react";

const ReadingContext = createContext<{isHeroReading?: boolean; setIsHeroReading?: any}>({});

export const useReadingStatus = () => {
  return useContext(ReadingContext);
};

export const ReadingProvider = ({children}: any) => {
  const [isHeroReading, setIsHeroReading] = useState(true);

  return (
    <ReadingContext.Provider value={{ isHeroReading, setIsHeroReading }}>
      { children }
    </ReadingContext.Provider>
  );
}