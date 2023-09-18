import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { ThemeModeProvider } from "../context/ThemeModeContext";
import { Roboto } from "@next/font/google";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Carla Montano | Portfolio</title>
        <meta name="description" content="Carla Montano | Technical portfolio to showcase my experience and projects" />
      </Head>
      <ThemeModeProvider>
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeModeProvider>
    </>
    
  );
}
