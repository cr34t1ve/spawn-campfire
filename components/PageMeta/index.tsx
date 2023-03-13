/** @format */

import Head from "next/head";
import Script from "next/script";
import React from "react";

export function PageMeta({
  title = "Spawn Campfire",
  image = "https://uploads-ssl.webflow.com/637f643d4e36527b45571b80/6409e9b48f17ec01128d6cbb_OpenGraph.png",
  gif = "https://media.giphy.com/media/I0eDKcJcs5KfdmXDot/giphy.gif",
  gifPage = "https://giphy.com/gifs/POnf57xNb61o4WuoBm",
  mp4 = "https://media.giphy.com/media/I0eDKcJcs5KfdmXDot/giphy.mp4",
  description = "Promoting Esports as the future of competitive sports for the younger generation",
  url = "https://www.scfaccra.com",
  children,
}: {
  title?: string;
  image?: string;
  gif?: string;
  gifPage?: string;
  mp4?: string;
  url?: string;
  description?: string | undefined;
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   window.addEventListener("load", function () {
  //     const preloaderEle = document.getElementById("preloader");
  //     preloaderEle!.className += " hidden";
  //     console.log("done here");
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <link rel="apple-touch-icon" href="/favicon192.png" />
        <link rel="icon" href="/favicon32.png" />
        <meta name="theme-color" content="#F8F8F8" />
        {/* <meta charset="utf-8" /> */}
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />

        <meta property="og:type" content="video.other" />
        <meta property="og:image" content={gif} />
        <meta property="og:image:width" content="912" />
        <meta property="og:image:height" content="382" />

        <meta property="og:type" content="video" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="270" />
        <meta property="og:video" content={gif} />
        <meta property="og:video:secure_url" content={gif} />
        <meta
          property="og:video:type"
          content="application/x-shockwave-flash"
        />
        <meta property="og:video:width" content="470" />
        <meta property="og:video:height" content="196" />

        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@raregoodsonly" />
        <meta name="twitter:site" content="@raregoodsonly" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={image} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:domain" content={url} />

        <meta
          name="twitter:player"
          content="https://giphy.com/embed/47ymsVajD2CEN04m3w/twitter/iframe"
        />
        <meta name="twitter:player:width" content="435" />
        <meta name="twitter:player:height" content="182" />
        {/* <Script id="preloader">{``}</Script> */}
      </Head>
      <>
        {/* <div id="preloader">
          <img src="/favicon192.png" className="loader" />
        </div> */}
        {children}
      </>
    </>
  );
}
