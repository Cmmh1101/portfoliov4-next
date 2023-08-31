import Head from "next/head";
// import styles from "@/components/styles/Home.module.css";
import HomeComponent from "../components/home/HomeComponent";
import HomeInteractive from "../components/home/HomeInteractive";


export default function Home() {
  return (
    <>
      <Head>
        <title>Carla Montano | Portfolio</title>
        <meta name="description" content="Carla Montano | Tech projects portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div>
        </div>
        <HomeInteractive />
          {/* <HomeComponent /> */}
         
        </main>
    </>
  );
}
