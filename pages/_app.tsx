import "styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "lib/context/theme-provider";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
