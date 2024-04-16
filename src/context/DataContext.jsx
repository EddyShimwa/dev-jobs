import React, { createContext, useContext, useMemo, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [detailedSeach, setDetailedSearch] = useState(false);

  //FORM
  const [searchTitle, setSearchTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);

  const contextData = useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
      searchTitle,
      setSearchTitle,
      detailedSeach,
      setDetailedSearch,
      location,
      setLocation,
      isFullTime,
      setIsFullTime,
    }),

    [
      isDarkMode,
      setIsDarkMode,
      searchTitle,
      setSearchTitle,
      setDetailedSearch,
      detailedSeach,
      location,
      setLocation,
      isFullTime,
      setIsFullTime,
    ]
  );

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("There is no data!");
  }

  return context;
}
