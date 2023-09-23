/** @format */

import { styled } from "@/stitches.config";

export const Button = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#251B2F",
  color: "#D1CFD5",
  padding: 20,
  borderRadius: 8,
  cursor: "pointer",
  transition: "all .2s ease",

  "&:disabled": {
    backgroundColor: "#1A0F2B",
    color: "#D1CFD5",
    opacity: 0.5,
    cursor: "not-allowed",
  },
});
