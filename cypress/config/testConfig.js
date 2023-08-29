import { ThemeModeProvider } from '@/components/context/ThemeModeContext';
import React from 'react';


const wrapComponentWithTheme = (Component, pageProps) => (
  <ThemeModeProvider>
    <Component {...pageProps} />
  </ThemeModeProvider>
);

export { wrapComponentWithTheme };