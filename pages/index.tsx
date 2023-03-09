/** @format */

import Image from "next/image";
import { styled } from "@/stitches.config";
import { inter, helvetica } from "@/fonts/fonts";
import { Column, PageMeta, Row, Text } from "@/components";
import Link from "next/link";

const activities_list = [
  { image: "/images/hero-image.png" },
  { image: "/images/hero-image.png" },
  { image: "/images/hero-image.png" },
];

const invitations_list = [
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
    basis: 2,
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
    basis: 3,
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
    basis: 2,
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
    basis: 3,
  },
];

// TODO: add selective width
const brands_list = [
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
  {
    image: "/images/hero-image.png",
    name: "Samuel Darko",
    title: "CEO of Panda Esports",
  },
];

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
            <Text
              size="17"
              css={{ whiteSpace: "nowrap", gridArea: "inspiring" }}
            >
              #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA
              #SCFACCRA #SCFACCRA #SCFACCRA
            </Text>
          </HorizontalOverflow>
          <LocationGrid>
            <Text
              as="h1"
              transform="uppercase"
              color="orange"
              css={{
                fontSize: "17vw",
                fontWeight: 900,
                lineHeight: "0.8",
                alignSelf: "end",
                gridArea: "inspiring",
              }}
            >
              Inspi
              <br />
              ring
            </Text>
            <LocationCard
              css={{
                background:
                  "linear-gradient(13.78deg, #1D212D -0.25%, rgba(55, 59, 73, 0.3) 99.3%), url(/images/hero-image.png) no-repeat top/cover",
                gridArea: "location",
              }}
            >
              <Row css={{ gridArea: "location" }}>
                <Text
                  transform="uppercase"
                  color="whiteLightShade"
                  className={inter.className}
                  css={{ fontSize: 18, fontWeight: 400 }}
                >
                  Explore Location
                </Text>
              </Row>
            </LocationCard>
            <Text
              className={inter.className}
              color="grey"
              css={{
                fontSize: 18,
                fontWeight: 400,
                maxWidth: "25ch",
                alignSelf: "center",
                justifySelf: "center",
                gridArea: "extract",
              }}
            >
              Talks, networking, activities, and parties. Learn from global
              experts, connect with like-minded professionals, and move the
              industry forward together.
            </Text>
            <Text
              transform="uppercase"
              color="green"
              as="h1"
              css={{
                gridArea: "experience",
                fontSize: "17vw",
                lineHeight: "0.8",
                alignSelf: "end",
                fontWeight: 900,
              }}
            >
              EXPERI
              <br />
              ENCE
            </Text>
          </LocationGrid>
          <Column>
            <Row css={{ marginTop: 330 }}>
              <Text
                css={{
                  color: "transparent",
                  background:
                    "linear-gradient(89.16deg, #0D2F65 -11.12%, #DF6F53 32.51%, #599C9B 71.83%)",
                  backgroundClip: "text",
                  fontSize: 150,
                  fontWeight: 900,
                }}
                transform="uppercase"
              >
                Activities
              </Text>
            </Row>
            <ActivitiesGrid>
              {activities_list.map((activity, index) => (
                <ActivityCard
                  key={index}
                  css={{
                    background: `linear-gradient(13.78deg, #1D212D -0.25%, rgba(55, 59, 73, 0.3) 99.3%), url(${activity.image}) no-repeat top/cover`,
                  }}
                ></ActivityCard>
              ))}
            </ActivitiesGrid>
          </Column>
          <FakeBG />
        </LightSection>
        <DarkSection>
          <Text color="white" transform="uppercase" align="right" size={21}>
            Special <br /> Invitations
          </Text>
          <Column css={{ gap: 38, paddingTop: 98 }}>
            <Row
              css={{
                gap: 20,
                justifyContent: "flex-start",
                paddingLeft: "20rem",
              }}
            >
              {invitations_list.slice(0, 2).map((invitation, index) => (
                <ActivityCard
                  key={index}
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    background: `linear-gradient(13.78deg, #1D212D -0.25%, rgba(55, 59, 73, 0.3) 99.3%), url(${invitation.image}) no-repeat center/cover`,
                    flex: invitation.basis,
                    borderRadius:
                      index === 0 ? `0px 20px 20px 20px` : `20px 20px 0px 20px`,
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    padding: 30,
                  }}
                >
                  <Text color="white" as="h3" size={17} transform="uppercase">
                    {invitation.name}
                  </Text>
                  <Text
                    color="whiteLightShade"
                    size={11}
                    className={inter.className}
                  >
                    {invitation.name}
                  </Text>
                </ActivityCard>
              ))}
            </Row>
            <Row
              css={{
                gap: 20,
                justifyContent: "flex-start",
                paddingRight: "35rem",
                paddingLeft: "8rem",
              }}
            >
              {invitations_list.slice(2, 4).map((invitation, index) => (
                <ActivityCard
                  key={index}
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    background: `linear-gradient(13.78deg, #1D212D -0.25%, rgba(55, 59, 73, 0.3) 99.3%), url(${invitation.image}) no-repeat center/cover`,
                    flex: invitation.basis,
                    borderRadius:
                      index === 0 ? `0px 20px 20px 20px` : `20px 20px 0px 20px`,
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    padding: 30,
                  }}
                >
                  <Text color="white" as="h3" size={17} transform="uppercase">
                    {invitation.name}
                  </Text>
                  <Text
                    color="whiteLightShade"
                    size={11}
                    className={inter.className}
                  >
                    {invitation.name}
                  </Text>
                </ActivityCard>
              ))}
            </Row>
          </Column>
          <HorizontalOverflow css={{ paddingTop: 340 }}>
            <Text
              size="22"
              transform="uppercase"
              css={{ color: "$ash", whiteSpace: "nowrap" }}
            >
              Stay Tuned &nbsp;Stay Tuned
            </Text>
          </HorizontalOverflow>
          <Column css={{ marginTop: 130, gap: 27 }}>
            <Text
              color="white"
              css={{ fontSize: 18 }}
              className={inter.className}
            >
              Follow Us
            </Text>
            <Row css={{ gap: 20 }}>
              <SocialCircle>
                <Image
                  src="/images/icons/instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </SocialCircle>
              <SocialCircle>
                <Image
                  src="/images/icons/twitter.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </SocialCircle>
            </Row>
          </Column>
          <Text
            size={21}
            color="white"
            transform="uppercase"
            css={{ marginTop: 300 }}
          >
            Brands <br /> Attending
          </Text>
          <BrandGrid>
            {brands_list.map((brand, index) => (
              <BrandCard key={index}>
                <img src={`/images/brands/brand-${index}.png`} alt="" />
              </BrandCard>
            ))}
            <DarkReserveCard>
              <Column css={{ gap: 40, fontWeight: 900 }}>
                <Text
                  color="white"
                  css={{ fontSize: 30 }}
                  transform="uppercase"
                >
                  SPONSORSHIP PLANS
                </Text>
              </Column>
              <Arrow src="/images/icons/arrow-right-grey.svg" alt="" />
            </DarkReserveCard>
          </BrandGrid>
          <Row css={{ marginTop: 210, maxWidth: 1069, marginInline: "auto" }}>
            <Text color="white" css={{ fontSize: 56 }}>
              Align yourself with the spawn community and position your brand as
              a key player in the gaming industry.
            </Text>
          </Row>
          <Row
            className={inter.className}
            css={{ fontSize: 18, justifyContent: "flex-end", marginTop: 50 }}
          >
            <Text color="white">WEBSITE BY :</Text>
            <Text
              color="white"
              as={Link}
              href="https://raregoodsonly.webflow.io"
            >
              Rare Goods Only
            </Text>
          </Row>
          <Footer>
            <Text
              css={{
                fontSize: 220,
                fontWeight: 900,
                color: "$white",
                textAlign: "center",
                lineHeight: 0.9,
                paddingTop: 315,
                maxWidth: "9ch",
              }}
            >
              THANK YOU FOR YOUR SUPPORT
            </Text>
            <SpawnLogo>
              <Image alt="" fill={true} src="/images/spawn-logo.svg" />
            </SpawnLogo>
          </Footer>
        </DarkSection>
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

const DarkSection = styled(LightSection, {
  background: "$secondaryBackground",
  paddingTop: 480,
  paddingBottom: 230,
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

const DarkReserveCard = styled(ReserveCard, {
  top: "unset",
  backgroundColor: "rgba(243, 243, 243, 0.1)",
  border: "1px solid #6F6E6F",
  height: "max-content",
  paddingTop: 68,
  gridColumnStart: -3,
  gridColumnEnd: -1,
  backdropFilter: "blur(22px)",
  boxShadow: " 0px 4px 34px rgba(0, 0, 0, 0.05)",
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

const LocationGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridTemplateRows: "repeat(2, auto)",
  gap: "20px 0px",
  gridTemplateAreas: `
  "inspiring inspiring inspiring inspiring inspiring location location location location location location location"
  "extract extract extract extract experience experience experience experience experience experience experience experience"
  `,
  paddingTop: 180,
});

const LocationCard = styled("div", {
  display: "flex",
  width: "100%",
  height: 574,
  paddingBottom: 57,
  justifyContent: "center",
  alignItems: "flex-end",
  borderRadius: 20,
});

const ActivitiesGrid = styled("div", {
  display: "grid",
  gap: 20,
  gridTemplateColumns: "2fr 1fr 3fr",
  paddingTop: 48,
});

const FakeBG = styled("div", {
  width: "100%",
  height: 100,
  background: "$secondaryBackground",
  position: "absolute",
  bottom: 0,
  marginLeft: -40,
});

const ActivityCard = styled("figure", {
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  height: 450,
  zIndex: 1,
});

const SocialCircle = styled("div", {
  width: 80,
  height: 80,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  border: "1px solid #6F6E6F",
});

const BrandGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "30px 20px",
  paddingTop: 38,
});

const BrandCard = styled("figure", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0px 20px 20px 20px",
  border: "1px solid $ash",
  height: 332,
});

const Footer = styled("footer", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
});

const SpawnLogo = styled("div", {
  position: "absolute",
  bottom: -100,
  right: 0,
  left: 900,
  marginLeft: "auto",
  marginRight: "auto",
  width: 300,
  height: 337,
});
