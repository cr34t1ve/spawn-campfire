import { Column, PageMeta, Row } from "@/components";
import { styled } from "@/stitches.config";
import { Forza } from "@/fonts/fonts";
import Image from "next/image";
import { Button } from "@/components/Button";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

const LIST = [1, 2, 3, 4];
const BRAND_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18];

export default function Registration() {
  return (
    <>
      <PageMeta themeColor="#916BC8" />
      <Wrapper className={Forza.className}>
        <TVFrame />
        <ContentWrapper>
          <Row
            alignItems="flexEnd"
            css={{
              "@sm": {
                justifyContent: "space-between",
              },
            }}
          >
            <Row alignItems="flexEnd">
              <Row
                css={{
                  position: "relative",
                  width: 81,
                  height: 81,

                  "@sm": {
                    width: 40,
                    height: 40,
                  },
                }}
              >
                <Image
                  fill
                  src="/images/Fire_Without_Wood.gif"
                  alt="fire gif"
                />
              </Row>
              <ForzaText size="24Black" transform="uppercase">
                Spawn <br /> Campfire
              </ForzaText>
            </Row>
            <ForzaText
              css={{
                marginLeft: 46,
                marginRight: 70,
                "@sm": {
                  display: "none",
                },
              }}
              size="24Black"
              transform="uppercase"
            >
              Hyde <br /> Gardens
            </ForzaText>
            <ForzaText size="24Black" transform="uppercase">
              SAT. 23
              <br />
              SEPT 2023
            </ForzaText>
          </Row>
          <BannerWrapper>
            <Image
              alt="banner"
              priority
              draggable={false}
              src="/images/Respawn-Banner.png"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </BannerWrapper>
          <Row
            css={{
              gap: 20,
              marginTop: 34,
              marginBottom: 210,
              "@sm": {
                flexDirection: "column",
                marginBottom: 90,
              },
            }}
          >
            <RegistrationButton>
              Regular Ticket
              <ArrowRight color="#E7DEBF" />
            </RegistrationButton>
            <RegistrationButton outline>
              All Access Ticket
              <ArrowRight color="#140A23" />
            </RegistrationButton>
          </Row>
          <ForzaText size="85Black">
            For a more exciting future, we need to{" "}
            <span> revisit the past</span> in Retro Style.
          </ForzaText>
          <ForzaText size="24Black" css={{ marginTop: 40 }}>
            A community Event for Gamers and Creatives.
          </ForzaText>
          <Column as="section" css={{ marginTop: 164 }}>
            <ForzaText size="24Black">Location</ForzaText>
            <BorderedImage
              css={{
                marginTop: 20,
                height: 356,
                backgroundImage: "url('/images/hero-image.png')",
              }}
            >
              <RegistrationButton
                as={Link}
                href="https://goo.gl/maps/qcoBcktzmgBosYKv8"
                target="_blank"
              >
                View Location on maps
                <ArrowRight color="#E7DEBF" />
              </RegistrationButton>
            </BorderedImage>
          </Column>
          <Column as="section" css={{ marginTop: 120, gap: 20 }}>
            <ForzaText size="24Black">Activities</ForzaText>
            <ActivityGrid>
              {LIST.map((item, index) => (
                <BorderedImage
                  key={index}
                  css={{
                    gridArea: `act${item}`,
                    backgroundImage: `url('/images/activities/act0${
                      index + 1
                    }.png')`,
                    "@sm": {
                      gridArea: "initial",
                    },
                  }}
                />
              ))}
            </ActivityGrid>
          </Column>
          <Column as="section" css={{ marginTop: 120, gap: 20 }}>
            <ForzaText size="24Black">Spacial invitations</ForzaText>
            <InviteGrid>
              {LIST.map((item, index) => (
                <BorderedImage
                  key={index}
                  css={{
                    gridArea: `invite${item}`,
                    backgroundImage: `url('/images/invites/invite0${
                      index + 1
                    }.png')`,
                    backgroundPosition: "100% 20%",
                    "@sm": {
                      gridArea: "initial",
                    },
                  }}
                />
              ))}
            </InviteGrid>
          </Column>
          <Column as="section" css={{ marginTop: 120, gap: 20 }}>
            <ForzaText size="24Black">Brands Attending</ForzaText>
            <Row css={{ flexWrap: "wrap", gap: 20 }}>
              {BRAND_LIST.map((item, index) => (
                <img
                  key={index}
                  src={`/images/brands/brand${index + 1}.png`}
                  alt="brand"
                />
              ))}
            </Row>
          </Column>
          <Row
            css={{
              marginInline: "auto",
              marginTop: 120,
            }}
            justifyContent="center"
          >
            <Image
              width={81}
              height={81}
              src="/images/Fire_Without_Wood.gif"
              alt="fire gif"
            />
            <Image
              width={81}
              height={81}
              src="/images/Fire_Without_Wood.gif"
              alt="fire gif"
            />
            <Image
              width={81}
              height={81}
              src="/images/Fire_Without_Wood.gif"
              alt="fire gif"
            />
          </Row>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled("main", {
  position: "relative",
  width: "100%",
  //   height: "100vh",
  backgroundColor: "$backroundPrimary",
  paddingBottom: "250px",
});

const TVFrame = styled("div", {
  position: "fixed",
  zIndex: 1,
  inset: 0,
  width: "100%",
  height: "100%",
  background: "url('images/tv-frame.png') no-repeat ",
  backgroundSize: "100% 100%",
  userSelect: "none",
  pointerEvents: "none",

  "@sm": {
    background: "url('images/mobile-frame.png') no-repeat ",
    backgroundSize: "100% 100%",
  },
});

const ContentWrapper = styled("article", {
  maxWidth: "58.563rem",
  // margin: '0 auto',
  // padding: '0 1.5rem',
  paddingLeft: "9.125rem",
  paddingTop: "10.375rem",

  "@sm": {
    padding: "80px 50px",
  },
});

const ForzaText = styled("p", {
  color: "$darkPurple",
  lineHeight: 1,

  "& span": {
    color: "$primaryPurple",
  },
  variants: {
    size: {
      "24Black": {
        fontSize: "1.5rem",
        fontWeight: "$forzaBlack",

        "@sm": {
          fontSize: 12,
        },
      },
      "85Black": {
        fontSize: "5.313rem",
        fontWeight: "$forzaBlack",

        "@sm": {
          fontSize: 28,
        },
      },
    },
    color: {
      darkPurple: {
        color: "$darkPurple",
      },
      purpleText: {
        color: "$purpleText",
      },
      primaryPurple: {
        color: "$primaryPurple",
      },
      blackPrimary: {
        color: "$blackPrimary",
      },
      backgroundPrimary: {
        color: "$backgroundPrimary",
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
  },
});

const BannerWrapper = styled("div", {
  position: "relative",
  width: "100%",
  height: 356,
  marginTop: 54,

  "@sm": {
    height: 117,
  },
});

const RegistrationButton = styled(Button, {
  justifyContent: "space-between",
  width: "100%",
  maxWidth: 262,
  padding: "24px 40px",
  backgroundColor: "$darkPurple",
  border: "1px solid $darkPurple",
  color: "$backroundPrimary",

  variants: {
    outline: {
      true: {
        backgroundColor: "transparent",
        color: "$darkPurple",
        border: "1px solid $darkPurple",
      },
    },
  },
});

const BorderedImage = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  border: "6px solid $darkPurple",
  width: "100%",
  height: "100%",
  padding: "11px 13px",
  backgroundSize: "cover",
  backgroundPosition: "100% 90%",
  backgroundRepeat: "no-repeat",
});

const ActivityGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(2, 225px)",
  gap: "22px 32px",
  gridTemplateAreas: `
        "act1 act2 act3"
        "act4 act4 act4"
    `,

  "@sm": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(4, 180px)",
    gridTemplateAreas: "unset",
  },
});

const InviteGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(2, 225px)",
  gap: "22px 32px",
  gridTemplateAreas: `
        "invite1 invite1 invite2 invite2 invite2 "
        "invite3 invite3 invite3 invite4 invite4"
    `,
  "@sm": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(4, 180px)",
    gridTemplateAreas: "unset",
  },
});
