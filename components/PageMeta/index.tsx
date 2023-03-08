/** @format */

import Head from "next/head";
import React from "react";

export function PageMeta({
  title = "Spawn Campfire",
  image = "https://uploads-ssl.webflow.com/637f643d4e36527b45571b80/63c44c5bcff8189621075df8_OpenGraph.png",
  children,
}: {
  title?: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        {/* <meta charset="utf-8" /> */}
        <link rel="icon" href="/favicon32.png" />
        <meta name="theme-color" content="#F8F8F8" />
        <link rel="apple-touch-icon" href="/favicon192.png" />
        <meta property="og:image" content={image} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="AuctionPapa" />
        <meta property="og:description" content={title} />

        <meta property="twitter:card" content={title} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={title} />
        <meta property="twitter:image" content={image} />
      </Head>
      {children}
    </>
  );
}
