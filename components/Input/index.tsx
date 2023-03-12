/** @format */

import { styled } from "@/stitches.config";

export const Input = styled("input", {
  $$offset: "14px",
  all: "unset",
  borderRadius: 6,
  height: "calc(100% - 28px)",
  width: 519,
  backgroundColor: "transparent",
  border: "1px solid #D8D9DD",
  paddingTop: 15,
  paddingBottom: 20,
  paddingLeft: 20,
  paddingRight: 20,
  fontSize: "$twenty",
  fontWeight: "$medium",
  color: "$primaryText",
  marginTop: "5px",
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
    fontWeight: "$regular",
    color: "#A0A2A9",
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
    border: "1px solid $secondaryStroke",
  },

  "&:focus": {
    border: "1px solid $secondaryStroke",
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
