/** @format */
import { styled } from "@/stitches.config";

export const Row = styled("div", {
  display: "flex",
  alignItems: "center",
  variants: {
    wide: {
      true: {
        width: "100%",
      },
    },
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
      baseline: {
        alignItems: "baseline",
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
    // visible: {
    //   tabletOnly: {
    //     display: "none",
    //     "@sm": {
    //       display: "revert",
    //     },
    //   },
    //   mobileOnly: {
    //     display: "none",
    //     "@xm": {
    //       display: "revert",
    //     },
    //   },
    // },
  },
});
