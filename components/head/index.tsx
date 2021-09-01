import { Helmet } from "react-helmet";

const Head = () => {
  const seo = {
    title: "Jelo Rivera",
    description:
      "Jelo Rivera is a full stack web development engineer whose tech stack includes React, Javascript, Typescript, NodeJS, GraphQL and everything in between.",
    image: "https://jelo.studio/me.png",
    url: "https://jelo.studio",
  };

  const twitterUsername = "jelonotgelo";

  return (
    <Helmet
      title={seo.title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${seo.title}`}
    >
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta
        name="google-site-verification"
        content="O9cCPUZNoLNjQi5v0GT_5VkUtzlAFHF8e5iTq5YwYSo"
      />
    </Helmet>
  );
};

export default Head;
