import { COLOR_VARIANTS, CARD_VARIANTS } from "@/data/card-styles";
import { styled } from "@/stitches.config";
import Drag from "@/utils/drag";
import { motion } from "framer-motion";
import { memo } from "react";
import { Row } from "../Layout";
import Image from "next/image";
import { Forza } from "@/fonts/fonts";

const DraggableCard = memo(function DragComponent({
  type = "spade",
  color = "green",
  image = "wukong",
  initialX,
  initialY,
}: {
  type?: string;
  color?: string;
  image?: string;
  initialX: number;
  initialY: number;
}) {
  return (
    <Drag initialX={initialX} initialY={initialY}>
      <MotionDiv>
        <Card color={color} variant={type} image={image} />
      </MotionDiv>
    </Drag>
  );
});

function Card({
  variant,
  color,
  image,
}: {
  variant: string;
  color: any;
  image?: string;
}) {
  // @ts-ignore
  const VariantIcon = CARD_VARIANTS[variant]?.corner;
  return (
    <CardWrapper
      className={Forza.className}
      css={{
        color: COLOR_VARIANTS[color],
      }}
    >
      <NumberWrapper placement="upperLeft">
        3
        <VariantIcon color={COLOR_VARIANTS[color]} />
      </NumberWrapper>

      <CenterImage>
        {image ? (
          <>
            <Row css={{ position: "relative", width: "65%", height: "100%" }}>
              <Image
                fill
                src={`/templates/images/${image}.png`}
                alt=""
                draggable={false}
                style={{
                  objectFit: "contain",
                }}
              />
            </Row>
          </>
        ) : (
          <>
            <VariantIcon color={COLOR_VARIANTS[color]} size="lg" />
          </>
        )}
      </CenterImage>

      <NumberWrapper placement="bottomRight">
        3
        <VariantIcon color={COLOR_VARIANTS[color]} />
      </NumberWrapper>
    </CardWrapper>
  );
}

const CenterImage = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  inset: 0,
  margin: "auto",
});

const CardWrapper = styled("div", {
  isolation: "isolate",
  position: "relative",
  backgroundColor: "White",
  width: 194,
  height: 282,
  borderRadius: 10.6,
  border: "0.35px solid #2034A5",
  transform: "scale(0.7)",
});

const NumberWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  left: 9.5,
  top: 8.5,
  fontSize: 24,
  fontWeight: "$black",

  variants: {
    placement: {
      upperLeft: {},
      bottomRight: {
        left: "unset",
        top: "unset",
        right: 9.5,
        bottom: 8.5,
        transform: "scale(-1, -1)",
      },
    },
  },
});

const MotionDiv = styled(motion.div, {
  // maxWidth: 165,
});

export default DraggableCard;
