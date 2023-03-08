/** @format */

import { styled } from "@/stitches.config";

export const Column = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  variants: {
    alignItems: {
      flexStart: {
        alignItems: "flex-start",
      },
      flexEnd: {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
    },
    justifyContent: {
      spaceBetween: {
        justifyContent: "space-between",
      },
      flexStart: {
        justifyContent: "flex-start",
      },
      flexEnd: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
    },
  },
});
