import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { useSpring } from 'react-spring';

interface IThemeModeContext {
  dark: string;
  light: string;
  darkMode: boolean;
  handleToggleTheme: () => void;
  englishMode: boolean;
  handleToggleLanguage: () => void;
//   styles: any;
  setDarkMode: (value: boolean) => void;
}

const ThemeModeContext = createContext<IThemeModeContext | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw new Error("Theme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeModeProviderProps {
  children: ReactNode;
}

function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    const initialValue = JSON.parse(saved!);
    return initialValue === null ? true : initialValue;
  });
  const [englishMode, setEnglishMode] = useState(() => {
    const saved = localStorage.getItem("englishMode");
    const initialValue = JSON.parse(saved!);
    return initialValue;
  });

  const handleToggleLanguage = () => {
    setEnglishMode(!englishMode);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const dark = "#15141a";
  const light = "#fbfbfe";

//   const styles = useSpring({
//     from: {
//       opacity: 0,
//     },
//     to: {
//       opacity: 1,
//     },
//     delay: 1200,
//   });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("englishMode", JSON.stringify(englishMode));
  }, [darkMode, englishMode]);

  const contextValue: IThemeModeContext = {
    dark,
    light,
    darkMode,
    handleToggleTheme,
    englishMode,
    handleToggleLanguage,
    // styles,
    setDarkMode,
  };

  return (
    <ThemeModeContext.Provider value={contextValue}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export { ThemeModeProvider, useTheme, ThemeModeContext };