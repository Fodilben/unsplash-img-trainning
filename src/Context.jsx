import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
const AppContext = createContext();
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedlocal = localStorage.getItem("darkThem") === "true";

  return storedlocal || prefersDarkMode;
};
export const AppProvider = ({ children }) => {
  const [isDarkOpen, setIsdarkOpen] = useState(getInitialDarkMode());

  const toggleDark = () => {
    const newDark = !isDarkOpen;
    setIsdarkOpen(newDark);
    localStorage.setItem("darkThem", newDark);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkOpen);
    console.log(isDarkOpen);
  }, [isDarkOpen]);

  const [searchValue, setSearchvalue] = useState("dog");

  return (
    <AppContext.Provider
      value={{
        isDarkOpen,
        toggleDark,

        searchValue,
        setSearchvalue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
// localStorage.clear();
