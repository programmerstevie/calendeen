import config from "@/config";
import Head from "next/head";
import { useEffect } from "react";

// TODO: Add /og-image.jpg
// TODO: Add /twitter-image.jpg

export default function TagSEO(props) {
  // UP TO 50 CHARACTERS https://wordcounter.net/character-count
  const description = "Align your day with your deen.";

  // useEffect(() => {
  //   if (description.length > 50) console.error("nooo", description.length);
  //   console.log(description.length);
  // }, description);

  return (
    <Head>
      <title>{`${description} | ${config.appName}`}</title>
      <link rel="canonical" href={props.canonicalSlug} />
      <meta name="description" content={description} />
      <meta
        property="og:title"
        content={`${description} | ${config.appName}`}
      />
      <meta property="og:description" content={config.description} />
      {/* og-image.jpg should be around 1200 X 630 pixels */}
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content={`https://${config.domainName}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.appName} />
      <meta name="twitter:description" content={config.description} />
      {/* twitter-image.jpg should be around 1600 X 900 pixels */}
      <meta name="twitter:image" content="/twitter-image.jpg" />
    </Head>
  );
}
