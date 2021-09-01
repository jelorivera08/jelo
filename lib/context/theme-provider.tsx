import React, { useState, createContext } from "react";

type ThemeContextProviderValue = {
  theme: string;
  setTheme: (val: "light" | "dark") => void;
  isLight: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextProviderValue);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  const isLight = theme === "light";

  const toggleTheme = () => setTheme(isLight ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export default useTheme;
