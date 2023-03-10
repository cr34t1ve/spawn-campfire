/** @format */

import { styled } from "@/stitches.config";

export const Text = styled("p", {
  textTransform: "none",
  lineHeight: 1,
  variants: {
    size: {
      1: {
        fontSize: "$ten",
        fontWeight: "$regular",
      },
      2: {
        fontSize: "$1",
        fontWeight: "$regular",
      },
      3: {
        fontSize: "$1",
        fontWeight: "$bold",
      },
      4: {
        fontSize: "$2",
        fontWeight: "400",
      },
      5: {
        fontSize: "$3",
        fontWeight: "$regular",
      },
      6: {
        fontSize: "$3",
        fontWeight: 600,
      },
      7: {
        fontSize: "$4",
        fontWeight: "$regular",
      },
      8: {
        fontSize: "$4",
        fontWeight: 600,
      },
      9: {
        fontSize: "$5",
        fontWeight: "$regular",
      },
      10: {
        fontSize: "$5",
        fontWeight: "600",
      },
      11: {
        fontSize: "$eighteen",
        fontWeight: "$regular",
        "@xl": {
          fontSize: "1.190vw",
        },
      },
      12: {
        fontSize: "$twenty",
        fontWeight: "$black",
      },
      13: {
        fontSize: "$twenty",
        fontWeight: "$black",
      },
      14: {
        fontSize: "$6",
        fontWeight: "$black",
      },
      15: {
        fontSize: "$8",
        fontWeight: "$black",
      },
      16: {
        fontSize: "$9",
        fontWeight: "$black",
      },
      17: {
        fontSize: "$forty",
        fontWeight: "$black",
        "@xl": {
          fontSize: "2.646vw",
        },
      },
      18: {
        fontSize: "$10",
        fontWeight: "$black",
      },
      19: {
        fontSize: "$11",
        fontWeight: "$black",
      },
      20: {
        fontSize: "$oneTwentySeven",
        fontWeight: "$black",
      },
      21: {
        fontSize: "$oneFifty",
        fontWeight: "$black",
        "@sm": {
          fontSize: "15.1vw",
        },
      },
      22: {
        fontSize: "$twoSeventy",
        fontWeight: "$black",
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    transform: {
      uppercase: {
        textTransform: "uppercase",
      },
      capitalize: {
        textTransform: "capitalize",
      },
    },
    color: {
      primary: {
        color: "$primaryText",
      },
      secondary: {
        color: "$secondaryText",
      },
      hyperlink: {
        color: "$hyperlink",
      },
      white: {
        color: "$white",
      },
      whiteLightShade: {
        color: "$whiteLightShade",
      },
      silver: {
        color: "$silver",
      },
      danger: {
        color: "$red",
      },
      brightRed: {
        color: "$brightRed",
      },
      lightGreen: {
        color: "$lightGreen",
      },
      paleGreen: {
        color: "$paleGreen",
      },
      grey: {
        color: "$grey",
      },
      orange: {
        color: "$orange",
      },
      green: {
        color: "$green",
      },
    },
  },
});
