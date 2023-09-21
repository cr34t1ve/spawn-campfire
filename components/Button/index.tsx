/** @format */

import { styled } from "@/stitches.config";

export const Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 40,
  border: "1px solid $purpleText",
  backgroundColor: "#1A0F2B",
  color: "#D1CFD5",
  padding: 24,
  borderRadius: 8,
  fontSize: 16,
  fontWeight: "$forzaMedium",
  width: "100%",
  cursor: "pointer",
  transition: "all .2s ease",

  "@sm": {
    width: "calc(100% - 40px - 2px)",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    filled: {
      true: {
        border: "none",
        justifyContent: "center",
        backgroundColor: "#1A0F2B",
        // padding: "49px 40px",
        // fontSize: 24,
        // gap: 250,
        // "@sm": {
        //   width: "calc(100% -  - 2px)",
        //   padding: "32px 20px",
        //   gap: 0,
        //   fontSize: 16,
        // },
        // "&:hover": {
        //   color: "$primaryBackground",
        //   background: "transparent",
        // },
      },
    },
    unstyled: {
      true: {
        border: "none",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        padding: "unset",
        width: "max-content",
      },
    },
  },

  // "&:hover": {
  //   color: "$primaryBackground",
  //   background: "$primaryText",
  // },
});
