/** @format */

import { styled } from "@/stitches.config";

export const Button = styled("button", {
  all: "unset",
  borderRadius: 4,
  border: "1px solid $primaryText",
  padding: "14px 30px",
  width: "max-content",
  cursor: "pointer",
  transition: "all .2s ease",
  variants: {
    disabledState: {
      true: {
        border: "1px solid $grey",
        pointerEvents: "none",
        cursor: "not-allowed",
        color: "$grey",
        "&:hover": {
          color: "$primaryBackground",
          background: "transparent",
        },
      },
    },
  },

  "&:hover": {
    color: "$primaryBackground",
    background: "$primaryText",
  },
});
