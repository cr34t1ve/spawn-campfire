/** @format */

import Head from "next/head";
import React from "react";

export function PageMeta({
  title = "Spawn Campfire",
  image = "https://uploads-ssl.webflow.com/637f643d4e36527b45571b80/6409e9b48f17ec01128d6cbb_OpenGraph.png",
  gif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWVmMWY1ZjQxMmFlYjY4ZmVjZmZhYzlkMmU1MDlhYjBkYTkxNWJlMyZjdD1z/zbnKJalVlLtXxcUsaA/giphy.gif",
  children,
}: {
  title?: string;
  image?: string;
  gif?: string;
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
        {/* <link rel="icon" href="/favicon32.png" />
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
          <meta property="twitter:image" content={image} /> */}
        <meta property="fb:app_id" content="406655189415060" />
        <meta property="og:site_name" content="Giphy" />
        <meta property="og:url" content={gif} />
        <meta property="og:title" content="Animated GIF" />
        <meta property="og:description" content="The best GIFs are on Giphy" />

        <meta property="og:type" content="video.other" />
        <meta property="og:image" content={gif} />
        <meta property="og:image:width" content="912" />
        <meta property="og:image:height" content="382" />

        <meta property="og:type" content="video" />
        <meta
          property="og:image"
          content="http://media.giphy.com/media/djeEV9Xji6zjgLXBxug/giphy-facebook_s.jpg"
        />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="270" />
        <meta
          property="og:video"
          content="http://giphygifs.s3.amazonaws.com/swiphy20141103.swf?api_hostname=&gif_url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FdjeEV9Xji6zjgLXBxug%2Fgiphy.gif&giphy_height=382&video_url=&giphyWidth=912&path=%2Fgifs%2Frhuber-test-djeEV9Xji6zjgLXBxug&destination_url=http%3A%2F%2Fgiphy.com%2Fgifs%2FdjeEV9Xji6zjgLXBxug&giphyHeight=382&gif_id=djeEV9Xji6zjgLXBxug&mode=embed&giphy_width=912"
        />
        <meta
          property="og:video:secure_url"
          content="https://giphygifs.s3.amazonaws.com/swiphy20141103.swf?api_hostname=&gif_url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FdjeEV9Xji6zjgLXBxug%2Fgiphy.gif&giphy_height=382&video_url=&giphyWidth=912&path=%2Fgifs%2Frhuber-test-djeEV9Xji6zjgLXBxug&destination_url=http%3A%2F%2Fgiphy.com%2Fgifs%2FdjeEV9Xji6zjgLXBxug&giphyHeight=382&gif_id=djeEV9Xji6zjgLXBxug&mode=embed&giphy_width=912"
        />
        <meta
          property="og:video:type"
          content="application/x-shockwave-flash"
        />
        <meta property="og:video:width" content="470" />
        <meta property="og:video:height" content="196" />

        <meta name="twitter:account_id" content="1020383864" />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content="Animated GIF" />
        <meta name="twitter:creator" content="@giphy" />
        <meta name="twitter:site" content="@giphy" />
        <meta name="twitter:description" content="The best GIFs are on Giphy" />
        <meta
          name="twitter:image:src"
          content="https://media0.giphy.com/media/djeEV9Xji6zjgLXBxug/giphy-facebook_s.jpg?t=1"
        />
        <meta
          name="twitter:image"
          content="https://media0.giphy.com/media/djeEV9Xji6zjgLXBxug/giphy-facebook_s.jpg?t=1"
        />
        <meta name="twitter:domain" content="giphy.com" />

        <meta
          name="twitter:player"
          content="https://giphy.com/embed/djeEV9Xji6zjgLXBxug/twitter/iframe"
        />
        <meta name="twitter:player:width" content="435" />
        <meta name="twitter:player:height" content="182" />
      </Head>
      {children}
    </>
  );
}
