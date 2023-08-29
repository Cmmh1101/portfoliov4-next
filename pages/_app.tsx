import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { ThemeModeProvider } from "../context/ThemeModeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeModeProvider>
  );
}
