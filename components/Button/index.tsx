/** @format */

import { styled } from "@/stitches.config";

export const Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 40,
  border: "1px solid $purpleText",
  color: "$purpleText",
  padding: "16px 14px 16px 17px",
  fontSize: 16,
  width: "max-content",
  cursor: "pointer",
  transition: "all .2s ease",

  "@sm": {
    width: "calc(100% - 40px - 2px)",
    padding: "32px 20px",
    justifyContent: "space-between",
    gap: 0,
    fontSize: 16,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    filled: {
      true: {
        border: "none",
        justifyContent: "space-between",
        backgroundColor: "#1A0F2B",
        padding: "49px 40px",
        fontSize: 24,
        gap: 250,
        "@sm": {
          width: "calc(100% -  - 2px)",
          padding: "32px 20px",
          gap: 0,
          fontSize: 16,
        },
        // "&:hover": {
        //   color: "$primaryBackground",
        //   background: "transparent",
        // },
      },
    },
  },

  // "&:hover": {
  //   color: "$primaryBackground",
  //   background: "$primaryText",
  // },
});
