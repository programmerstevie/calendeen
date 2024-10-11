import Head from "next/head";

const DESCRIPTION =
  "A calendar app designed to help you manage your time more effectively.";
const URL = "https://calendeen.com";
const TITLE = "Calendeen";

// TODO: Add /og-image.jpg
// TODO: Add /twitter-image.jpg

export default function TagSEO(props) {
  return (
    <Head>
      <title>{TITLE}</title>
      <link rel="canonical" href={props.canonicalSlug} />
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content="/twitter-image.jpg" />
    </Head>
  );
}
