import localFont from "next/font/local";

export const Forza = localFont({
  src: [
    {
      path: "./Forza-Book.woff2",
      weight: "325",
      style: "normal",
    },
    {
      path: "./Forza-Medium.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "./Forza-Bold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Forza-Black.woff2",
      weight: "450",
      style: "normal",
    },
  ],
  // fallback: ["system-ui"]
});

export const DeadStock = localFont({
  src: [
    {
      path: "./DeadStock.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
