import { Column, PageMeta, Row } from "@/components";
import {
  CARD_VARIANTS,
  COLOR_VARIANTS,
  LANDING_CARDS,
} from "@/data/card-styles";
import { Forza } from "@/fonts/fonts";
import * as Tabs from "@radix-ui/react-tabs";
import { CardTemplateOptions } from "@/data/card-templates";
import { styled } from "@/stitches.config";
import Image from "next/image";
import { useRef, useState } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import { ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/router";

const snapPoints = [-50, 135, 135];
const initialSnap = 2; // Initial snap point when sheet is opened

export default function Select() {
  const { back } = useRouter();
  const ref = useRef<SheetRef>();

  const [snapPoint, setSnapPoint] = useState(initialSnap);
  const [selected, setSelected] = useState({
    color: "green",
    type: "spade",
    image: "",
  });

  const snapTo = (i: number) => ref.current?.snapTo(i);

  function handleTypeChange(type: string) {
    setSelected((s) => ({
      ...s,
      type,
    }));
  }

  function handleColorChange(color: string) {
    setSelected((s) => ({
      ...s,
      color,
    }));
  }

  function handleImageChange(image: string) {
    setSelected((s) => ({
      ...s,
      image,
    }));
  }

  return (
    <PageMeta>
      <Wrapper
        css={{
          backgroundImage: selected?.image
            ? `url(/templates/images/${selected.image})`
            : `url(/templates/types/${selected.type}.svg)`,
          backgroundSize: "150%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 10%",
        }}
      >
        <Wrapper
          css={{
            backdropFilter: "blur(30px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <MaxWidthWrapper>
            <Row
              alignItems="center"
              css={{
                height: 56,
                color: "White",
              }}
            >
              <Row css={{ flex: 1 }} alignItems="center" onClick={back}>
                <ArrowLeft2 />
              </Row>
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: 14,
                  color: "White",
                }}
              >
                Choose Ticket Type
              </p>
              <div style={{ flex: 1 }} />
            </Row>
            <Column
              alignItems="center"
              css={{
                paddingTop: 28,
                gap: 24,
              }}
            >
              <Card
                variant={selected.type}
                color={selected.color}
                image={selected.image}
              />
              <Button disabled={!selected.image}>Claim Ticket</Button>
            </Column>
            <Sheet
              rootId="root"
              ref={ref}
              isOpen={true}
              onSnap={setSnapPoint}
              onClose={() => {}}
              snapPoints={snapPoints}
              detent="full-height"
              initialSnap={initialSnap}
              style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                maxWidth: 400,
                marginInline: "auto",
              }}
            >
              <SheetContainer
                style={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 4px 44px 0px rgba(81, 81, 81, 0.15)",
                }}
              >
                <SheetHeader
                  onTap={() => (snapPoint === 1 ? snapTo(0) : snapTo(1))}
                />
                <SheetContent>
                  <Sheet.Scroller style={{ paddingBottom: 60 }}>
                    <Row
                      justifyContent="spaceBetween"
                      css={{ paddingInline: 15, marginBottom: 32 }}
                    >
                      {LANDING_CARDS.map((card, index) => {
                        // @ts-ignore
                        const VariantIcon = CARD_VARIANTS[card.variant].corner;
                        return (
                          <CardTypeButton
                            key={index}
                            onClick={() => {
                              handleTypeChange(card.variant);
                              handleColorChange(card.color);
                            }}
                            css={{
                              borderColor:
                                card.color === selected.color
                                  ? `${COLOR_VARIANTS[card.color]}`
                                  : "transparent",
                            }}
                          >
                            <VariantIcon size="md" />
                          </CardTypeButton>
                        );
                      })}
                    </Row>
                    <Column alignItems="center">
                      <TabsRoot defaultValue="games">
                        <TabsList aria-label="Games list">
                          <TabsTrigger value="games">Game</TabsTrigger>
                          <TabsTrigger value="Anime">Anime</TabsTrigger>
                        </TabsList>
                        <TabsContent value="games">
                          {" "}
                          <ImagesGrid>
                            {Object.values(CardTemplateOptions).map(
                              (template, index) => (
                                <ImageIconWrapper
                                  key={index}
                                  onClick={() => {
                                    handleImageChange(template.image);
                                    snapTo(1);
                                  }}
                                  css={{
                                    borderColor:
                                      template.image === selected.image
                                        ? `${COLOR_VARIANTS[selected.color]}`
                                        : "transparent",
                                  }}
                                >
                                  <ImageIconImage
                                    height={72}
                                    width={72}
                                    src={`/templates/icons/${template.icon}`}
                                    alt="image"
                                  />
                                </ImageIconWrapper>
                              )
                            )}
                          </ImagesGrid>
                        </TabsContent>
                        <TabsContent value="Anime">aa</TabsContent>
                      </TabsRoot>
                    </Column>
                  </Sheet.Scroller>
                </SheetContent>
              </SheetContainer>
            </Sheet>
          </MaxWidthWrapper>
        </Wrapper>
      </Wrapper>
    </PageMeta>
  );
}

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
  const VariantIcon = CARD_VARIANTS[variant].corner;
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
                src={`/templates/images/${image}`}
                alt=""
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

const MaxWidthWrapper = styled("main", {
  padding: "32px 16px 30px 16px",
  maxWidth: 390,
  marginInline: "auto",
  color: "#131416",

  "& h1": {
    maxWidth: "15ch",
    textAlign: "center",
    marginInline: "auto",
    marginTop: 48,
  },

  "& p": {
    color: "#595959",
    maxWidth: "24ch",
    textAlign: "center",
  },
});

const Wrapper = styled("main", {
  background: "#EAEAEA",
  height: "100vh",
});

const TabsRoot = styled(Tabs.Root, {
  //   fontFamily: "inherit",
  all: "unset",
  width: "100%",
});
const TabsList = styled(Tabs.List, {
  display: "flex",
  width: "calc(100% - 16px * 2)",
  padding: 4,
  borderRadius: 6,
  border: "none",
  backgroundColor: "#ECECEC",
  marginBottom: 20,
  marginInline: "auto",
  transition: "all 200ms ease",
});
const TabsTrigger = styled(Tabs.Trigger, {
  border: "none",
  width: "100%",
  borderRadius: 6,
  fontSize: 14,
  height: 41,
  color: "#767676",
  fontFamily: "Satoshi",
  fontWeight: 500,
  background: "transparent",

  "&[data-state='active']": {
    background: "linear-gradient(90deg, #1A69A2 0%, #3FAAF8 100%)",
    color: "white",
  },
});
const TabsContent = styled(Tabs.Content, {});

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

const CardTypeButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid rgba(217, 217, 217, 0.4)",
  height: 69,
  width: 69,
  borderRadius: 20,
  backgroundColor: "rgba(217, 217, 217, 0.4)",
  transition: "all 250ms ease",
});

const SheetContent = styled(Sheet.Content, {
  gap: 15,
  backgroundColor: "#FFFFFF",
  padding: "20px 16px 0px 16px",
});

const SheetHeader = styled(Sheet.Header, {
  justifyContent: "center",
  backgroundColor: "#FFFFFF",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  boxShadow: "0px 4px 44px 0px rgba(81, 81, 81, 0.15)",
  height: 30,
  cursor: "pointer",
});

const SheetContainer = styled(Sheet.Container, {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: "#FFFFFF",
});

const ImagesGrid = styled("div", {
  display: "grid",
  gap: "24px 20px",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateAreas: "auto",
  paddingInline: 16,
});

const ImageIconWrapper = styled(CardTypeButton, {
  aspectRatio: "1/1",
  height: "unset",
  width: "unset",
});

const ImageIconImage = styled(Image, {
  borderRadius: 20,
  overflow: "hidden",
  objectFit: "cover",
  objectPosition: "center",
});

const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 54,
  width: "100%",
  maxWidth: 294,
  fontSize: 16,
  fontWeight: "600",
  background: "linear-gradient(90deg, #1A69A2 0%, #3FAAF8 100%)",
  border: "none",
  borderRadius: 100,
  color: "White",
  transition: "all 250ms ease",

  "&:disabled": {
    background: "rgba(0, 0, 0, 0.2)",
    color: "#87ACA5",
  },
});
