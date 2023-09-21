/** @format */

import { styled } from "@/stitches.config";
import { Forza } from "@/fonts/fonts";
import { Column, Input, PageMeta, Row, Text } from "@/components";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ArrowDown2 } from "iconsax-react";
import dayjs from "dayjs";
import Image from "next/image";

export default function Home() {
  const targetDate = dayjs("2023-09-05");

  return (
    <PageMeta>
      <>
        <Wrapper className={Forza.className}>
          <Column>
            <Row alignItems="baseline">
              <Text size={18} transform="uppercase" css={{ color: "#8C6CBC" }}>
                Open
              </Text>
              <Image
                alt="spawn campfire logo"
                src="/images/Fire_Without_Wood.gif"
                width={87}
                height={87}
              />
            </Row>
            <Text size={18} transform="uppercase" css={{ color: "#8C6CBC" }}>
              Reservations
            </Text>
          </Column>

          <Column as="form" css={{ gap: 30 }}>
            <Input placeholder="Full name" />
            <Row css={{ gap: 10 }}>
              <Row
                css={{
                  borderRadius: 8,
                  padding: "20px 14px 20px 19px",
                  backgroundColor: "#251B2F",
                  gap: 26,
                }}
              >
                <p>Tw</p>
                <ArrowDown2 />
              </Row>
              <Input placeholder="@username" />
            </Row>
            <Button filled>Claim my invitation</Button>
          </Column>
          <Row
            wide
            justifyContent="center"
            css={{
              marginTop: 70,
            }}
          >
            <SnapchatButton href="https://t.snapchat.com/2jL8s3wL">
              <Image
                alt="snapchat icon"
                src="/images/icons/snap.svg"
                width={45}
                height={45}
              />
            </SnapchatButton>
          </Row>
        </Wrapper>
      </>
    </PageMeta>
  );
}

const Wrapper = styled("main", {
  padding: "70px 16px",
  "@sm": {
    padding: "32px 16px",
  },
});

const SnapchatButton = styled(Link, {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: 97,
  height: 97,
  borderRadius: "50%",
  backgroundColor: "#DECF44",

  "&::before": {
    content: "",
    transform: "translate(-12.5%, -12.5%)",
    position: "absolute",
    borderRadius: "50%",
    inset: 0,
    width: 129,
    height: 129,
    backgroundColor: "rgba(222, 207, 68, 0.10)",
  },

  "&::after": {
    content: "",
    transform: "translate(-8.5%, -8.5%)",
    position: "absolute",
    borderRadius: "50%",
    inset: 0,
    width: 117,
    height: 117,
    backgroundColor: "rgba(222, 207, 68, 0.10)",
  },
});
