/** @format */

import { styled } from "@/stitches.config";

export const Input = styled("input", {
  // all: "unset",
  borderRadius: 8,
  height: 50,
  width: "100%",
  backgroundColor: "transparent",
  padding: "24px 16px",
  fontSize: 14,
  color: "#131416",
  border: "1px solid #AEAEAE",
  "&:read-only": {
    backgroundColor: "$secondaryButton",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  "&::placeholder": {
    fontSize: 14,
    color: "#A89E90",
  },

  "&[type='file']": {
    opacity: 0,
    cursor: "pointer",
  },

  "&:active": {
    border: "1px solid $blackPrimary",
  },

  "&:focus": {},
});
