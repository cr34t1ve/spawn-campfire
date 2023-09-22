import * as RadixSelect from "@radix-ui/react-select";
import { styled } from "@/stitches.config";

export const SelectRoot = styled(RadixSelect.Root, {});
export const SelectTrigger = styled(RadixSelect.Trigger, {
  all: "unset",
  display: "flex",
});
export const SelectContent = styled(RadixSelect.Content, {
  overflow: "hidden",
  backgroundColor: "#30233E",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});
export const SelectValue = styled(RadixSelect.Value, {
  display: "flex",
});
export const SelectItem = styled(RadixSelect.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: "#fff",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "15px 5px",
  position: "relative",
  userSelect: "none",

  //   "&[data-disabled]": {
  //     color: mauve.mauve8,
  //     pointerEvents: "none",
  //   },

  "&[data-highlighted]": {
    outline: "none",
    // backgroundColor: violet.violet9,
    // color: violet.violet1,
  },
});
export const SelectItemText = styled(RadixSelect.ItemText, {});
export const SelectIcon = styled(RadixSelect.Icon, {});
export const SelectPortal = styled(RadixSelect.Portal, {});
export const SelectViewport = styled(RadixSelect.Viewport, {
  padding: 5,
});
