import { Column, PageMeta, Row } from "@/components";
import {
  CARD_VARIANTS,
  COLOR_VARIANTS,
  LANDING_CARDS,
} from "@/data/card-styles";
import { Forza, DeadStock } from "@/fonts/fonts";
import { CardTemplateOptions } from "@/data/card-templates";
import { styled } from "@/stitches.config";
import Image from "next/image";
import { useRef, useState } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import { ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/router";
import { fetchWithBaseUrl } from "@/utils/fetch";
import { ActionStatus } from "@/utils/types";

const snapPoints = [-50, 135, 135];
const initialSnap = 2; // Initial snap point when sheet is opened

export default function Select() {
  const { back, query, push } = useRouter();
  const [submitStatus, setSubmitStatus] = useState<ActionStatus>("idle");

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

  async function handleCreateTicket() {
    const image = selected?.image?.split(".");
    const res = await fetchWithBaseUrl("tickets", {
      body: JSON.stringify({
        type: selected?.type,
        color: selected?.color,
        image: image[0] || "",
        name: query?.name,
        phone: query?.phone,
      }),
      method: "POST",
    });

    if (!res.ok) {
      setSubmitStatus("failed");
      return;
    }

    const j = await res.json();

    console.log(j);

    push(`/s3/${j.id}?type=${j.type}&image=${j?.image}`);
  }

  return (
    <PageMeta>
      <Wrapper
        css={{
          background: "none",
          "@sm": {
            backgroundImage: selected?.image
              ? `url(/templates/cover/${selected.image})`
              : `url(/templates/types/${selected.type}.svg)`,
            backgroundSize: "150%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 10%",
          },
        }}
      >
        <div className="mat-texture" />
        <div className="window" />
        <Wrapper
          css={{
            background: "none",
            "@sm": {
              backdropFilter: "blur(30px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <Row
            css={{
              display: "flex",
              justifyContent: "flex-start",
              maxWidth: 1168,
              paddingInline: 16,
              width: "100%",
              marginInline: "auto",
              paddingTop: 40,
              marginBottom: 60,
              "@sm": { display: "none" },
            }}
          >
            <Button
              css={{
                display: "flex",
                width: "max-content",
                height: 35,
                padding: "0px 20px",
                borderRadius: 20,
              }}
              onClick={back}
            >
              home
            </Button>
          </Row>
          <MaxWidthWrapper>
            <Row
              alignItems="center"
              css={{
                height: 56,
                color: "White",
                display: "none",

                "@sm": {
                  display: "flex",
                },
              }}
            >
              <Row
                css={{ flex: 1, cursor: "pointer" }}
                alignItems="center"
                onClick={back}
              >
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
            <Column className="md-hide">
              <ImagesGrid>
                {Object.values(CardTemplateOptions)
                  .slice(0, 15)
                  .map((template, index) => (
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
                        draggable={false}
                        height={72}
                        width={72}
                        src={`/templates/icons/${template.icon}`}
                        alt="image"
                      />
                    </ImageIconWrapper>
                  ))}
              </ImagesGrid>
            </Column>
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
                name={(query?.name as string) || ""}
              />
              <Button
                onClick={handleCreateTicket}
                disabled={submitStatus === "loading"}
              >
                {submitStatus === "loading"
                  ? "Creating Ticket"
                  : "Claim Ticket"}{" "}
              </Button>
              <Row className="md-hide">
                <Row
                  justifyContent="spaceBetween"
                  css={{ paddingInline: 15, marginBottom: 32, gap: 16 }}
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
              </Row>
            </Column>
            <StyledSheet
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
                <SheetHeader>
                  <Row
                    css={{
                      height: 4,
                      width: 41,
                      borderRadius: 50,
                      backgroundColor: "#C0BFC0",
                      marginInline: "auto",
                      marginBottom: 32,
                    }}
                  />
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
                </SheetHeader>
                <SheetContent>
                  <Sheet.Scroller style={{ paddingBottom: 60 }}>
                    <Column alignItems="center">
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
                                draggable={false}
                                height={72}
                                width={72}
                                src={`/templates/icons/${template.icon}`}
                                alt="image"
                              />
                            </ImageIconWrapper>
                          )
                        )}
                      </ImagesGrid>
                    </Column>
                  </Sheet.Scroller>
                </SheetContent>
              </SheetContainer>
            </StyledSheet>
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
  name,
}: {
  variant: string;
  color: any;
  image?: string;
  name?: string;
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
      <NumberWrapper placement="upperRight">
        <Image width={41} height={15} src="/scf-black.svg" alt="" />
      </NumberWrapper>
      <NumberWrapper placement="bottomLeft">
        <CardName
          className={DeadStock.className}
          css={{
            color: `${COLOR_VARIANTS[color]} !important`,
          }}
        >
          {name}
        </CardName>
      </NumberWrapper>

      <CenterImage>
        {image ? (
          <>
            <Row css={{ position: "relative", width: "65%", height: "100%" }}>
              <Image
                fill
                src={`/templates/cover/${image}`}
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

const MaxWidthWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "32px 16px 30px 16px",
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

  maxWidth: 820,
  "@sm": {
    display: "block",
    maxWidth: 390,
  },
});

const Wrapper = styled("div", {
  background: "#EAEAEA",
  height: "100vh",

  "& .mat-texture, .window": {
    position: "fixed",
  },

  "@sm": {
    "& .mat-texture, .window": {
      display: "none",
    },
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

const CardWrapper = styled("div", {
  isolation: "isolate",
  position: "relative",
  backgroundColor: "White",
  width: 194,
  height: 282,
  borderRadius: 10.6,
  border: "0.35px solid #2034A5",
  boxShadow:
    "0px 5.073200225830078px 30.43920135498047px 0px rgba(0, 0, 0, 25%)",
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
      upperRight: {
        left: "unset",
        top: 23.5,
        right: 11.8,
        bottom: "unset",
      },
      bottomLeft: {
        left: 21.14,
        top: "unset",
        right: "unset",
        bottom: 15.5,
      },
    },
  },
});

const CardName = styled("p", {
  display: "block",
  bottom: 73,
  left: 0,
  right: 0,
  marginInline: "auto",
  fontSize: 15,
  textTransform: "uppercase",
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
  cursor: "pointer",
});

const SheetContent = styled(Sheet.Content, {
  gap: 15,
  backgroundColor: "#FFFFFF",
  padding: "0px 16px 0px 16px",
  overflowY: "auto",
});

const SheetHeader = styled(Sheet.Header, {
  justifyContent: "center",
  backgroundColor: "#FFFFFF",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  boxShadow: "0px 4px 44px 0px rgba(81, 81, 81, 0.15)",
  paddingTop: 16,
  paddingInline: 16,
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
  position: "relative",
  aspectRatio: "1 / 1",
  height: 92,
  width: 92,
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
  cursor: "pointer",

  "&:disabled": {
    background: "rgba(0, 0, 0, 0.2)",
    color: "#87ACA5",
  },
});

const StyledSheet = styled(Sheet, {
  display: "none",
  "@sm": {
    display: "revert",
  },
});
