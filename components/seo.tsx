import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function SEO() {
  return (
    <>
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
