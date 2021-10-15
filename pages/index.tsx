import type { NextPage } from 'next';
import Head from 'next/head';
import Hello from 'sections/hello';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jelo</title>
        <meta name="description" content="Jelo Rivera - a software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hello />
      </main>
    </div>
  );
};

export default Home;
