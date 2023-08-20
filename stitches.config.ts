/** @format */

import { createStitches } from "@stitches/react";

export const { styled, getCssText, keyframes, css } = createStitches({
  theme: {
    fonts: {
      inter: "Inter",
    },
    colors: {
      darkPurple: "#140A23",
      purpleText: "#C0B1D6",
      primaryPurple: "#906CC8",
      blackPrimary: "#101010",
      backroundPrimary: "#E7DEBF",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "22px",
      5: "24px",
      6: "26px",
      7: "30px",
      8: "32px",
      9: "34px",
      10: "42px",
      11: "56px",
      12: "72px",
      ten: "10px",
      eighteen: "18px",
      twenty: "20px",
      forty: "40px",
      sixtyFour: "64px",
      oneTwentySeven: "127px",
      oneFifty: "9.8vw",
      twoSeventy: "270px",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      black: 900,
      forzaMedium: 350,
      forzaBold: 400,
      forzaBlack: 450,
    },
  },
  media: {
    xm: "(max-width: 425px)",
    sm: "(max-width: 725px)",
    md: "(max-width: 1024px)",
    xl: "(min-width: 1441px)",
  },
});
