import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function SEO() {
  return (
    <>
      <Head>
        <title>Jelo Rivera</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Jelo Rivera's personal website" />
        <meta
          name="keywords"
          content="Jelo Rivera, jelorivera, jelorivera.studio, react jelo rivera, web dev jelo rivera"
        />
        <link rel="canonical" href="https://jelo.studio" />
        <meta name="author" content="Jelo Rivera" />
        <meta name="copyright" content="Jelo Rivera" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta title="Jerald Rivera | Full Stack Web Developer" />
      </Head>
      <DefaultSeo
        openGraph={{
          profile: {
            firstName: "Jelo",
            lastName: "Rivera",
            gender: "male",
          },
          type: "website",
          locale: "en_US",
          url: "https://jelo.studio",
          site_name: "Jelo Rivera | Web Development",
          title: "Jelo Rivera",
          description:
            "Jelo Rivera is a full stack web development engineer whose tech stack includes React, Javascript, Typescript, NodeJS, GraphQL and everything in between.",
        }}
        twitter={{
          handle: "@jelonotgelo",
          site: "https://twitter.com/jelonotgelo",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
