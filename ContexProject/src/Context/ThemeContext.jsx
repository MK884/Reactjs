import React from "react";
import { useContext } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom hook to use theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
export default useTheme;
