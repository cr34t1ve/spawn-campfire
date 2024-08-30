/** @format */
import { styled } from "@/stitches.config";
import { Column, PageMeta, Row } from "@/components";
import Link from "next/link";
import { Forza } from "@/fonts/fonts";
import {
  CARD_VARIANTS,
  COLOR_VARIANTS,
  LANDING_CARDS,
} from "@/data/card-styles";
import { keyframes } from "@stitches/react";

type CardVariantI = "spade" | "club" | "diamond" | "heart";
type ColorVariantI = "red" | "green" | "violet" | "blue";

export default function Home() {
  return (
    <PageMeta>
      {/* <MaxWidthWrapper>
        <Image
          src="logo.svg"
          alt="scf logo"
          width={145}
          height={64}
          style={{ marginInline: "auto", marginBottom: 10 }}
          priority
          draggable={false}
        />
        <h2>
          Connecting Accra
          <br />
          Through Gaming
        </h2>
      </MaxWidthWrapper> */}
      <Wrapper>
        <MaxWidthWrapper>
          <Row css={{ position: "relative", width: "100%", height: 320 }}>
            {LANDING_CARDS.map((card, index) => (
              <Row
                key={index}
                justifyContent="center"
                css={{ position: "absolute", inset: 0, width: "100%" }}
              >
                <Card
                  variant={card.variant as string}
                  color={card.color as ColorVariantI}
                  index={index}
                />
              </Row>
            ))}
          </Row>
          <ClaimTicketBanner />
        </MaxWidthWrapper>
      </Wrapper>
    </PageMeta>
  );
}

function Card({
  variant,
  color,
  index,
}: {
  variant: string;
  color: ColorVariantI;
  index: any;
}) {
  // @ts-ignore
  const VariantIcon = CARD_VARIANTS[variant].corner;
  return (
    <CardWrapper
      rotateAngle={index}
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
        <VariantIcon color={COLOR_VARIANTS[color]} size="lg" />
      </CenterImage>

      <NumberWrapper placement="bottomRight">
        3
        <VariantIcon color={COLOR_VARIANTS[color]} />
      </NumberWrapper>
    </CardWrapper>
  );
}

function ClaimTicketBanner() {
  return (
    <ClaimTicketWrapper>
      <h1>SCF Accra Season 03</h1>
      <Column css={{ gap: 12 }}>
        <Row css={{ gap: 10 }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="#AEAEAE"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2V5"
              stroke="#AEAEAE"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 9.09009H20.5"
              stroke="#AEAEAE"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="#AEAEAE"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6947 13.7H15.7037"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6947 16.7H15.7037"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 13.7H12.0045"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 16.7H12.0045"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 13.7H8.30329"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 16.7H8.30329"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Column>
            <h4>Friday Sept 27th 2024</h4>
            <p>2:00 PM GMT</p>
          </Column>
        </Row>
        <Row css={{ gap: 10 }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
              stroke="#AEAEAE"
              stroke-width="1.2"
            />
            <path
              d="M3.61995 8.49C5.58995 -0.169997 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
              stroke="#AEAEAE"
              stroke-width="1.2"
            />
          </svg>
          <Column>
            <h4>LetiArts HQ</h4>
            <p>Prestige Kente, Adenta Municipality</p>
          </Column>
        </Row>
      </Column>
      <Button>Claim Your Ticket</Button>
    </ClaimTicketWrapper>
  );
}

const Wrapper = styled("main", {
  background: "linear-gradient(180deg, #2e66bc 0%, #7be0f4 100%)",
  height: "100vh",
});

const MaxWidthWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "210px 16px 30px 16px",
  maxWidth: 390,
  marginInline: "auto",

  "& h2": {
    fontWeight: "400",
    maxWidth: "15ch",
  },
});

const CenterImage = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  inset: 0,
  margin: "auto",
});

const rotate0 = keyframes({
  "0%": { transform: "rotate(0)" },
  "100%": {
    transform: "rotate(-12.54deg)",
  },
});

const rotate1 = keyframes({
  "0%": { transform: "rotate(0)" },
  "100%": {
    transform: "rotate(-2.64deg)",
  },
});

const rotate2 = keyframes({
  "0%": { transform: "rotate(0)" },
  "100%": {
    transform: "rotate(5.92deg)",
  },
});

const rotate3 = keyframes({
  "0%": { transform: "rotate(0)" },
  "100%": {
    transform: "rotate(14.64deg)",
  },
});

const CardWrapper = styled("div", {
  isolation: "isolate",
  position: "relative",
  backgroundColor: "White",
  width: 194,
  height: 282,
  borderRadius: 10.6,
  border: "0.35px solid #2034A5",
  transformOrigin: "bottom center",
  animationFillMode: "forwards",
  willChange: "transform",

  variants: {
    rotateAngle: {
      0: {
        animation: `${rotate0} 700ms ease-out 1s 1 forwards`,
      },
      1: {
        animation: `${rotate1} 700ms ease-out 1s 1 forwards`,
      },
      2: {
        animation: `${rotate2} 700ms ease-out 1s 1 forwards`,
      },
      3: {
        animation: `${rotate3} 700ms ease-out 1s 1 forwards`,
      },
    },
  },
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

const ClaimTicketWrapper = styled("div", {
  position: "fixed",
  bottom: 32,
  display: "flex",
  flexDirection: "column",
  gap: 16,
  backgroundColor: "#131416",
  borderRadius: 16,
  padding: "20px 16px",
  width: "calc(100% - 25px * 2)",
  maxWidth: 340,

  "& h4": {
    color: "#AEAEAE",
  },
  "& p": {
    fontSize: 12,
    color: "#595959",
  },
});

const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 54,
  width: "100%",
  fontSize: 16,
  fontWeight: "600",
  background: "linear-gradient(90deg, #1A69A2 0%, #3FAAF8 100%)",
  border: "none",
  borderRadius: 8,
  color: "White",
});
