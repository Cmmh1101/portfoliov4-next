import '@/components/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeModeProvider } from '../context/ThemeModeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />
    </ThemeModeProvider>
  );
}
