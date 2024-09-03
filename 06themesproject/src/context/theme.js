import { createContext, useContext } from "react";

export const ThemeContxt = createContext({
  themeMode: "light",
  darkTheme: () => {},
  light: () => {},
});
    
export const ThemeProvider = ThemeContxt.Provider;
export default function useTheme() {
  return useContext(ThemeContxt);
}
