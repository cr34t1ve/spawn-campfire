import { styled } from "@/stitches.config";
import Image from "next/image";
import { CARD_VARIANTS, COLOR_VARIANTS } from "@/data/card-styles";
import { Column, PageMeta, Row } from "@/components";
import { Forza, DeadStock } from "@/fonts/fonts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchWithBaseUrl } from "@/utils/fetch";

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
                <Button white>
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
