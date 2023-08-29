// ThemeContext.tsx
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
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if localStorage is available on the client side
      const saved = localStorage.getItem("darkMode");
      const initialValue = JSON.parse(saved!);
      return initialValue === null ? true : initialValue;
    } else {
      // Default value when running on the server (SSR)
      return true; // Change this to your desired server-side default
    }
  });

  // Function to toggle darkMode
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Colors for dark and light themes
  const dark = "#15141a";
  const light = "#fbfbfe";

  // Effect to update localStorage when darkMode changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if localStorage is available on the client side
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