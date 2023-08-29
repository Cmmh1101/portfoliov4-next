import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeModeProvider } from "../context/ThemeModeContext";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeModeProvider>
  );
}
