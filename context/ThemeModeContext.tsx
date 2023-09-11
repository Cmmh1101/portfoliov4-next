import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface IThemeModeContext {
  dark: string;
  light: string;
  darkMode: boolean;
  handleToggleTheme: () => void;
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
  // Initialize darkMode based on localStorage if available, or use a default value
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : true; 
    } else {
      return true;
    }
  }); 

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const dark = "#15141a";
  const light = "#fbfbfe";

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const contextValue: IThemeModeContext = {
    dark,
    light,
    darkMode,
    handleToggleTheme,
    setDarkMode,
  };

  return (
    <ThemeModeContext.Provider value={contextValue}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export { ThemeModeProvider, useTheme, ThemeModeContext };
