import { createContext, Dispatch, SetStateAction } from "react";

export const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}>({ isDark: false, setIsDark: () => {} });
