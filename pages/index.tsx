/** @format */

import Image from "next/image";
import { styled } from "@/stitches.config";
import { inter, helvetica } from "@/fonts/fonts";
import { Column, PageMeta, Row, Text } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <PageMeta>
      <main className={helvetica.className}>
        <LightSection>
          <Header>
            <Text as="h5" color="orange" size={12} transform="uppercase">
              Accra
            </Text>
            <Row css={{ gap: 70 }}>
              <Text as="h5" color="orange" size={12} transform="uppercase">
                Venue
              </Text>
              <Text
                as={Link}
                href="http://www.google.com"
                color="orange"
                size={12}
                transform="uppercase"
              >
                Contact Us
              </Text>
            </Row>
          </Header>
          <Hero>
            <Text
              as="h1"
              color="primary"
              css={{ fontSize: "9.8vw", fontWeight: 900 }}
            >
              PROMOTING <span> ESPORT AS THE FUTURE </span>
              OF COMPETITIVE SPORTS FOR THE YOUNGER GENERATION
            </Text>
          </Hero>
          <ReserveCard>
            <Column css={{ gap: 40, fontWeight: 900 }}>
              <Text size={12} transform="uppercase" color="orange">
                25th march 2023
              </Text>
              <Text css={{ fontSize: 40 }} transform="uppercase">
                RESERVE A SPOT
              </Text>
            </Column>
            <Arrow src="/images/icons/arrow-right.svg" alt="" />
          </ReserveCard>
          <RightArrow>
            <Image src="/images/top-right-arrow.svg" alt="" fill={true} />
          </RightArrow>
          <HorizontalOverflow>
            <Text size="17" css={{ whiteSpace: "nowrap" }}>
              #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA
              #SCFACCRA #SCFACCRA #SCFACCRA
            </Text>
          </HorizontalOverflow>
        </LightSection>
      </main>
    </PageMeta>
  );
}

const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 16,
});

const LightSection = styled("section", {
  position: "relative",
  overflow: "hidden",
  background: "$primaryBackground",
  padding: "21px 40px 0px 40px",
});

const Hero = styled("div", {
  maxWidth: "93%",
  "& span": {
    color: "transparent",
    background:
      "linear-gradient(89.16deg, #0D2F65 -11.12%, #DF6F53 32.51%, #599C9B 71.83%)",
    backgroundClip: "text",
  },
});

const ReserveCard = styled("div", {
  position: "relative",
  top: "-80px",
  marginLeft: "auto",
  width: "calc((100vw - 3.375rem) * 4/14 + 1.875rem)",
  borderRadius: 20,
  border: "1px solid #EB6A4B",
  padding: "14px 11px 11px 24px",
  backgroundColor: "#F3F3F3",
  cursor: "pointer",
});

const Arrow = styled("img", {
  position: "absolute",
  right: "0.625rem",
  top: "0.5rem",
});

const RightArrow = styled("div", {
  position: "absolute",
  right: 0,
  top: "10vw",
  width: "20rem",
  height: "30rem",
});

const HorizontalOverflow = styled("div", {
  color: "rgba(45, 49, 63, 0.07)",
  marginLeft: -40,
  paddingTop: 50,
});
