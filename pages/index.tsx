/** @format */

import { styled } from "@/stitches.config";
import { SFProCondensed, Forza } from "@/fonts/fonts";
import { Column, PageMeta, Row, Text } from "@/components";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CalendarAdd, Link21 } from "iconsax-react";

export default function Home() {
  const daysLeft = new Date("2021-10-31").getTime() - new Date().getTime();
  return (
    <PageMeta>
      <>
        <Wrapper className={SFProCondensed.className}>
          <Row justifyContent="spaceBetween">
            <Text
              className={SFProCondensed.className}
              transform="uppercase"
              color="purple"
              css={{ fontSize: 24 }}
            >
              Spawn <br />
              Campfire
            </Text>
            <Button css={{ "@sm": { display: "none" } }}>
              Season 01 Review
              <Link21 color="#C0B1D6" size={24} />
            </Button>
          </Row>
          <Row as="section" css={{ marginTop: 120, "@sm": { marginTop: 50 } }}>
            <HeroText className={Forza.className}>
              Bringing a new age of{" "}
              <span>excitement to the younger generations</span> of creatives,
              through gaming.
            </HeroText>
          </Row>
          <Column css={{ marginTop: 53, gap: 16, "@sm": { marginTop: 36 } }}>
            <Button css={{ display: "none", "@sm": { display: "flex" } }}>
              Season 01 Review
              <Link21 color="#C0B1D6" size={24} />
            </Button>
            <Button filled>
              Registration opens in 15 days
              <StyledCaledarAdd color="#C0B1D6" />
            </Button>
          </Column>
        </Wrapper>
      </>
    </PageMeta>
  );
}

// ~~~ Styles ~~~
const Wrapper = styled("main", {
  padding: "50px 70px",
  "@sm": {
    padding: "32px 16px",
  },
});

const HeroText = styled("h1", {
  fontSize: 108,
  fontWeight: 450,
  textTransform: "capitalize",
  color: "$purpleText",
  lineHeight: 0.97,

  "@sm": { fontSize: 46 },

  "& span": {
    color: "$primaryPurple",
  },
});

const StyledCaledarAdd = styled(CalendarAdd, {
  width: 30,
  height: 30,

  "& path": {
    width: 30,
    height: 30,
  },

  "@sm": {
    width: 24,
    height: 24,
  },
});
