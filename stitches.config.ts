/** @format */

import { createStitches } from "@stitches/react";

export const { styled, getCssText, keyframes, css } = createStitches({
  theme: {
    fonts: {
      inter: "Inter",
    },
    colors: {
      primaryBackground: "#E7E8E9",
      secondaryBackground: "#1A1B1F",
      primaryText: "#373B49",
      secondaryText: "#636676",
      primaryButton: "#6151C1",
      primaryButtonHover: "#5342C0",
      secondaryButton: "#434654",
      secondaryButtonHover: "#3B3F51",
      primaryStroke: "#D8D9DD",
      secondaryStroke: "#C7CFE2",
      formStroke: "#484B53",
      formBorder: "#35363A",
      hyperlink: "#63B3ED",
      gradient: "#1A1B1F",
      orange: "#EB6A4B",
      yellow: "#EBC84D",
      green: "#589B9A",
      lightGreen: "#1AB97F",
      paleGreen: "#D7F9ED",
      white: "#E6E6E6",
      whiteLightShade: "#F3F5F2",
      ash: "#6F6E6F",
      grey: "#8F9194",
      greyWithOpacity: "rgba(45, 49, 63, 0.07)",
      footerDark: "#1E1E1E",
      footersub: "#8F9194",
      footerTitle: "#D1D1D1",
      brightRed: "#FF3D00",
      red: "#B42740",
      redHover: "#D33737",
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
      oneFifty: "150px",
      twoSeventy: "270px",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      black: 900,
    },
  },
  media: {
    xm: "(max-width: 425px)",
    sm: "(max-width: 725px)",
    md: "(max-width: 1024px)",
    xl: "(min-width: 1440px)",
  },
});