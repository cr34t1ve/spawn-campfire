/** @format */

import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui"],
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
