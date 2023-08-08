/** @format */

import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui"],
});

export const SFProCondensed = localFont({
  src: [
    {
      path: "./SF-Pro.ttf",
      weight: "870",
      style: "normal",
    },
  ],
});

export const Forza = localFont({
  src: [
    {
      path: "./Forza-Medium.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "./Forza-Black.woff2",
      weight: "450",
      style: "normal",
    },
  ],
});

export const helvetica = localFont({
  src: [
    {
      path: "./helveticaneueltcom-bdcn-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./helveticaneueltcom-blkcn-webfont.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  fallback: ["arial"],
});
