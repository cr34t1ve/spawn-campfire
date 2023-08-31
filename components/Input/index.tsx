/** @format */

import { styled } from "@/stitches.config";

export const Input = styled("input", {
  $$offset: "14px",
  all: "unset",
  borderRadius: 10,
  height: "calc(100% - 40px)",
  width: "100%",
  maxWidth: 363,
  backgroundColor: "transparent",
  border: "1px solid $blackPrimary",
  padding: 20,
  fontSize: 19,
  // fontWeight: "$medium",
  color: "$blackPrimary",
  "@xm": {
    maxWidth: "calc(100% - 40px)",
  },
  "&:read-only": {
    backgroundColor: "$secondaryButton",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  "&::placeholder": {
    fontSize: "$twenty",
    // fontWeight: "$medium",
    color: "#716D5E",
    letterSpacing: 0,
  },

  "&[type='file']": {
    opacity: 0,
    cursor: "pointer",
  },

  "& input::before": {
    content: "",
  },

  "&:active": {
    border: "1px solid $blackPrimary",
  },

  "&:focus": {
    border: "1px solid $blackPrimary",
  },

  variants: {
    variant: {
      underline: {
        border: "none",
        paddingLeft: 0,
        borderBottom: "1px solid #D9D9D9",
        borderRadius: "unset",
        transition: "all 350ms ease",
        "&:focus": {
          border: "none",
          borderBottom: "1px solid $primaryText",
        },
        "&:active": {
          border: "none",
          borderBottom: "1px solid $primaryText",
        },
      },
    },
    font: {
      inter: {
        fontFamily: "$inter",
      },
    },
  },
});
