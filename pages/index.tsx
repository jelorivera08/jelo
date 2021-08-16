import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jelo</title>
        <meta name="description" content="jelo's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{`Jelo's portfolio`}</main>

      <footer className={styles.footer}>Powered by Jelo</footer>
    </div>
  );
};

export default Home;
