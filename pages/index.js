import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bushido Warband Builder</title>
        <meta
          name="description"
          content="An application for building Warbands in the game Risen Sun"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Bushido Warband Builder</h1>
      </main>
    </div>
  );
}
