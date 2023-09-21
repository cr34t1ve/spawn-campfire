/** @format */

import { styled } from "@/stitches.config";

export const Input = styled("input", {
  $$offset: "14px",
  all: "unset",
  borderRadius: 8,
  height: "calc(100% - 40px)",
  width: "100%",
  maxWidth: 363,
  backgroundColor: "#251B2F",
  // border: "1px solid $blackPrimary",
  padding: "24px 16px",
  fontSize: 16,
  fontWeight: "$forzaMedium",
  color: "#A89E90",
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
    fontSize: 16,
    fontWeight: "$forzaMedium",
    color: "#A89E90",
    letterSpacing: 0,
  },

  "&[type='file']": {
    opacity: 0,
    cursor: "pointer",
  },

  // "& input::before": {
  //   content: "",
  // },

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
