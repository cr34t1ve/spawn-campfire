import { styled } from "@/stitches.config";
import Image from "next/image";
import { CARD_VARIANTS, COLOR_VARIANTS } from "@/data/card-styles";
import { Column, PageMeta, Row } from "@/components";
import { Forza, DeadStock } from "@/fonts/fonts";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { fetchWithBaseUrl } from "@/utils/fetch";
import { Sheet, SheetRef } from "react-modal-sheet";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

async function getTicket(id: string) {
  const res = await fetchWithBaseUrl(`tickets/${id}`, {
    method: "GET",
  });
  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default function TicketPage() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef>();
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const { query, push } = useRouter();
  const [selected, setSelected] = useState({
    color: "green",
    type: "spade",
    image: "",
    name: "",
    id: "",
  });

  useEffect(() => {
    if (!query?.id) {
      return;
    }

    const fetchTicket = async () => {
      const res = await getTicket(query.id as string);
      if (!res) {
        return;
      }

      setSelected(res);
    };

    fetchTicket();
  }, [query]);

  return (
    <PageMeta>
      <Wrapper
        css={{
          background: "none",
          "@sm": {
            backgroundImage: selected?.image
              ? `url(/templates/images/${selected.image})`
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
              onClick={() => push("/")}
            >
              home
            </Button>
          </Row>
          <MaxWidthWrapper>
            <Column
              alignItems="center"
              css={{
                gap: 40,
              }}
            >
              <Card variant={selected.type} {...selected} />
              <Row css={{ gap: 16 }}>
                <Button>
                  Download
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.55272 2.4375C7.97222 2.4375 7.48847 2.88075 7.43747 3.459C7.33159 4.66721 7.30479 5.88104 7.35722 7.09275L7.16747 7.10625L6.04997 7.18725C5.88677 7.19917 5.72946 7.25327 5.59344 7.34425C5.45743 7.43522 5.34736 7.55996 5.27403 7.70625C5.2007 7.85253 5.16661 8.01536 5.1751 8.17877C5.18359 8.34219 5.23437 8.5006 5.32247 8.6385C6.14479 9.92529 7.20437 11.0439 8.44472 11.9347L8.89172 12.2565C9.06874 12.3837 9.28123 12.4521 9.49922 12.4521C9.71721 12.4521 9.9297 12.3837 10.1067 12.2565L10.5537 11.9347C11.7941 11.0439 12.8537 9.92531 13.676 8.6385C13.7641 8.5006 13.8148 8.34219 13.8233 8.17877C13.8318 8.01536 13.7977 7.85253 13.7244 7.70625C13.6511 7.55996 13.541 7.43522 13.405 7.34425C13.269 7.25327 13.1117 7.19917 12.9485 7.18725L11.831 7.10625C11.7677 7.10156 11.7045 7.09706 11.6412 7.09275C11.6937 5.8815 11.6667 4.66725 11.561 3.459C11.5366 3.18008 11.4085 2.92044 11.202 2.73133C10.9956 2.54221 10.7257 2.43737 10.4457 2.4375H8.55272ZM8.51072 7.58625C8.4253 6.24572 8.4411 4.90066 8.55797 3.5625H10.4405C10.5576 4.90063 10.5737 6.2457 10.4885 7.58625C10.4838 7.66057 10.494 7.73507 10.5183 7.80544C10.5427 7.87581 10.5807 7.94064 10.6304 7.99617C10.68 8.05171 10.7401 8.09684 10.8073 8.12895C10.8745 8.16107 10.9474 8.17952 11.0217 8.18325C11.2647 8.19525 11.507 8.21025 11.7492 8.22825L12.56 8.2875C11.8399 9.34801 10.9386 10.2734 9.89747 11.0212L9.49997 11.307L9.10097 11.0212C8.05983 10.2734 7.15856 9.34802 6.43847 8.2875L7.24922 8.2275C7.49147 8.21025 7.73447 8.19525 7.97672 8.18325C8.05116 8.17962 8.12413 8.16124 8.1914 8.12916C8.25867 8.09709 8.31889 8.05197 8.36857 7.99643C8.41826 7.94088 8.45641 7.87602 8.48081 7.8056C8.50521 7.73519 8.51538 7.66063 8.51072 7.58625Z"
                      fill="white"
                    />
                    <path
                      d="M4.8125 12.75C4.8125 12.6008 4.75324 12.4577 4.64775 12.3523C4.54226 12.2468 4.39918 12.1875 4.25 12.1875C4.10082 12.1875 3.95774 12.2468 3.85225 12.3523C3.74676 12.4577 3.6875 12.6008 3.6875 12.75V14.25C3.6875 14.9745 4.2755 15.5625 5 15.5625H14C14.3481 15.5625 14.6819 15.4242 14.9281 15.1781C15.1742 14.9319 15.3125 14.5981 15.3125 14.25V12.75C15.3125 12.6008 15.2532 12.4577 15.1477 12.3523C15.0423 12.2468 14.8992 12.1875 14.75 12.1875C14.6008 12.1875 14.4577 12.2468 14.3523 12.3523C14.2468 12.4577 14.1875 12.6008 14.1875 12.75V14.25C14.1875 14.2997 14.1677 14.3474 14.1326 14.3826C14.0974 14.4177 14.0497 14.4375 14 14.4375H5C4.95027 14.4375 4.90258 14.4177 4.86742 14.3826C4.83225 14.3474 4.8125 14.2997 4.8125 14.25V12.75Z"
                      fill="white"
                    />
                  </svg>
                </Button>
                <Button white onClick={open}>
                  Share
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 9L10.2 3.75V6.375C7.8 6.375 3 7.95 3 14.25C3 13.3747 4.44 11.625 10.2 11.625V14.25L15 9Z"
                      stroke="#5B5B5B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </Row>
            </Column>
            <StyledSheet
              ref={ref}
              isOpen={isOpen}
              onClose={close}
              initialSnap={0}
              snapPoints={[-50, 100, 0]}
              detent="content-height"
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
                  boxShadow: "none",
                }}
              >
                <SheetHeader />
                <SheetContent>
                  <Sheet.Scroller
                    style={{ paddingBottom: 60 }}
                    className={inter.className}
                  >
                    <Column
                      css={{
                        gap: 12,
                      }}
                    >
                      <MenuItem blue>
                        Copy link
                        <svg
                          width="29"
                          height="28"
                          viewBox="0 0 29 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7365 12.7633C18.3615 15.3883 18.3615 19.635 15.7365 22.2483C13.1115 24.8616 8.86482 24.8733 6.25149 22.2483C3.63815 19.6233 3.62649 15.3766 6.25149 12.7633"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.8551 15.645C10.1251 12.915 10.1251 8.48165 12.8551 5.73999C15.5851 2.99832 20.0185 3.00999 22.7601 5.73999C25.5018 8.46999 25.4901 12.9033 22.7601 15.645"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </MenuItem>

                      <MenuItem>
                        Instagram
                        <svg
                          width="29"
                          height="28"
                          viewBox="0 0 29 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.41699 14C3.41699 8.77563 3.41699 6.16229 5.03983 4.53946C6.66266 2.91663 9.27483 2.91663 14.5003 2.91663C19.7247 2.91663 22.338 2.91663 23.9608 4.53946C25.5837 6.16229 25.5837 8.77446 25.5837 14C25.5837 19.2243 25.5837 21.8376 23.9608 23.4605C22.338 25.0833 19.7258 25.0833 14.5003 25.0833C9.27599 25.0833 6.66266 25.0833 5.03983 23.4605C3.41699 21.8376 3.41699 19.2255 3.41699 14Z"
                            stroke="#0B6284"
                            stroke-width="1.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.926 7.58325H20.9143M19.75 13.9999C19.75 15.3923 19.1969 16.7277 18.2123 17.7122C17.2277 18.6968 15.8924 19.2499 14.5 19.2499C13.1076 19.2499 11.7723 18.6968 10.7877 17.7122C9.80312 16.7277 9.25 15.3923 9.25 13.9999C9.25 12.6075 9.80312 11.2722 10.7877 10.2876C11.7723 9.30304 13.1076 8.74992 14.5 8.74992C15.8924 8.74992 17.2277 9.30304 18.2123 10.2876C19.1969 11.2722 19.75 12.6075 19.75 13.9999Z"
                            stroke="#0B6284"
                            stroke-width="1.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </MenuItem>
                      <MenuItem>
                        Whatsapp
                        <svg
                          width="29"
                          height="28"
                          viewBox="0 0 29 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.7249 5.72832C21.6553 4.6479 20.3813 3.79127 18.9772 3.20838C17.573 2.62549 16.0669 2.32803 14.5466 2.33332C8.1766 2.33332 2.98494 7.52499 2.98494 13.895C2.98494 15.9367 3.5216 17.92 4.52494 19.67L2.8916 25.6667L9.0166 24.0567C10.7083 24.9783 12.6099 25.4683 14.5466 25.4683C20.9166 25.4683 26.1083 20.2767 26.1083 13.9067C26.1083 10.815 24.9066 7.90999 22.7249 5.72832ZM14.5466 23.5083C12.8199 23.5083 11.1283 23.0417 9.6466 22.1667L9.2966 21.9567L5.6566 22.9133L6.62493 19.3667L6.3916 19.005C5.43231 17.4731 4.92293 15.7024 4.9216 13.895C4.9216 8.59832 9.23827 4.28165 14.5349 4.28165C17.1016 4.28165 19.5166 5.28499 21.3249 7.10499C22.2203 7.99628 22.9299 9.05643 23.4126 10.224C23.8952 11.3915 24.1413 12.6433 24.1366 13.9067C24.1599 19.2033 19.8433 23.5083 14.5466 23.5083ZM19.8199 16.3217C19.5283 16.1817 18.1049 15.4817 17.8483 15.3767C17.5799 15.2833 17.3933 15.2367 17.1949 15.5167C16.9966 15.8083 16.4483 16.4617 16.2849 16.6483C16.1216 16.8467 15.9466 16.87 15.6549 16.7183C15.3633 16.5783 14.4299 16.2633 13.3333 15.2833C12.4699 14.5133 11.8983 13.5683 11.7233 13.2767C11.5599 12.985 11.6999 12.8333 11.8516 12.6817C11.9799 12.5533 12.1433 12.3433 12.2833 12.18C12.4233 12.0167 12.4816 11.8883 12.5749 11.7017C12.6683 11.5033 12.6216 11.34 12.5516 11.2C12.4816 11.06 11.8983 9.63665 11.6649 9.05332C11.4316 8.49332 11.1866 8.56332 11.0116 8.55165H10.4516C10.2533 8.55165 9.94993 8.62165 9.6816 8.91332C9.42493 9.20499 8.67827 9.90499 8.67827 11.3283C8.67827 12.7517 9.7166 14.1283 9.8566 14.315C9.9966 14.5133 11.8983 17.43 14.7916 18.6783C15.4799 18.9817 16.0166 19.1567 16.4366 19.285C17.1249 19.5067 17.7549 19.4717 18.2566 19.4017C18.8166 19.32 19.9716 18.7017 20.2049 18.025C20.4499 17.3483 20.4499 16.7767 20.3683 16.6483C20.2866 16.52 20.1116 16.4617 19.8199 16.3217Z"
                            fill="#0B6284"
                          />
                        </svg>
                      </MenuItem>
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

      <CenterImage>
        {image ? (
          <>
            <Row css={{ position: "relative", width: "65%", height: "100%" }}>
              <Image
                fill
                src={`/templates/images/${image}.png`}
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

      <CardName
        className={DeadStock.className}
        css={{
          color: `${COLOR_VARIANTS[color]} !important`,
        }}
      >
        {name}
      </CardName>

      <NumberWrapper placement="bottomRight">
        3
        <VariantIcon color={COLOR_VARIANTS[color]} />
      </NumberWrapper>
    </CardWrapper>
  );
}

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
    paddingTop: 150,
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
    },
  },
});

const CardName = styled("p", {
  display: "block",
  position: "absolute",
  bottom: 73,
  left: 0,
  right: 0,
  marginInline: "auto",
  fontSize: 20,
  textAlign: "center",
  WebkitTextFillColor: "transparent",
  WebkitTextStroke: "1.26px",
  textTransform: "uppercase",
});

const Button = styled("button", {
  display: "flex",
  gap: 8,
  justifyContent: "center",
  alignItems: "center",
  height: 54,
  width: 140,
  maxWidth: 294,
  fontSize: 16,
  fontWeight: "600",
  background: "linear-gradient(90deg, #1A69A2 0%, #3FAAF8 100%)",
  border: "none",
  borderRadius: 100,
  color: "White",
  transition: "all 250ms ease",
  cursor: "pointer",

  variants: {
    white: {
      true: {
        background: "White",
        color: "#5B5B5B",
      },
    },
  },
});

const StyledSheet = styled(Sheet, {});

const SheetContent = styled(Sheet.Content, {
  gap: 15,
  backgroundColor: "#F9F9F9",
  padding: "0px 16px 0px 16px",
  overflowY: "auto",
});

const SheetHeader = styled(Sheet.Header, {
  justifyContent: "center",
  backgroundColor: "#F9F9F9",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  // boxShadow: "0px 4px 44px 0px rgba(81, 81, 81, 0.15)",
  paddingTop: 16,
  paddingInline: 16,
  cursor: "pointer",
});

const SheetContainer = styled(Sheet.Container, {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: "#F9F9F9",
});

const MenuItem = styled("button", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: 100,
  height: 54,
  border: "none",
  paddingInline: 24,

  variants: {
    blue: {
      true: {
        backgroundColor: "#1976D2",
        color: "#EBE8EE",
      },
    },
  },
});
