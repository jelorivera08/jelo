import "styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jelo</title>
        <meta
          name="description"
          content="Jelo Rivera - full stack web developer"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
