import { Column, PageMeta, Row } from "@/components";
import { Button } from "@/components/Button";
import { styled } from "@/stitches.config";
import { ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Forza } from "@/fonts/fonts";
import Image from "next/image";

const lenses = [
  {
    title: "SPAWN After-Fire",
    link: "https://t.snapchat.com/TiU0P2CK",
    image: "/lenses/afterfire.png",
  },
];

export default function LensesPage() {
  const { back } = useRouter();
  return (
    <PageMeta>
      <Wrapper className={Forza.className}>
        <Button onClick={back}>
          <ArrowLeft2 color="#E7DEBF" />
        </Button>
        <Grid>
          {lenses.map((lens, index) => (
            <Column key={index} alignItems="center" css={{ gap: 20 }}>
              <Row wide css={{ position: "relative", aspectRatio: "1/1" }}>
                <Link href={lens.link} target="_blank" prefetch>
                  <Image
                    src={lens.image}
                    alt={lens.title}
                    fill
                    priority
                    draggable={false}
                  />
                </Link>
              </Row>
              <ForzaText>{lens.title}</ForzaText>
            </Column>
          ))}
        </Grid>
      </Wrapper>
    </PageMeta>
  );
}

const Wrapper = styled("main", {
  padding: "70px 16px",
  maxWidth: 426,
  marginInline: "auto",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px 0px",
  marginTop: 20,
});

const ForzaText = styled("p", {
  fontSize: 18,
  fontWeight: "$forzaBook",
  color: "White",
  textAlign: "center",
});
