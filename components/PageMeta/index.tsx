/** @format */

import Head from "next/head";
import React from "react";

export function PageMeta({
  title = "Spawn Campfire",
  image = "https://uploads-ssl.webflow.com/6250fbc8391fc5310375f1da/650d020878b7863a0ae9508e_OpenGraph1.jpg",
  description = "Bringing a new age of excitement to the younger generations of creatives, through gaming.",
  url = "https://www.scfaccra.com",
  themeColor = "#140A23",
  keywords = "spawn campfire, scf, scfaccra, scf, gaming, espo, valorant, league of legends, ghana, accra, hyde gardens",
  children,
}: {
  title?: string;
  image?: string;
  description?: string;
  url?: string;
  themeColor?: string;
  keywords?: string;
  children?: React.ReactNode;
}) {
  const siteName = "Spawn Campfire";

  return (
    <>
      <Head>
        <title>
          {title.includes(siteName) ? title : `${title} | ${siteName}`}
        </title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        {/* <meta charset="utf-8" /> */}
        <link rel="icon" href="/favicon32.png" />
        <meta name="theme-color" content={themeColor} />
        <link rel="apple-touch-icon" href="/favicon192.png" />
        <meta name="keywords" content={keywords} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content={title} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:domain" content={url} />
        <meta property="twitter:image" content={image} />
      </Head>
      {children}
    </>
  );
}
