import { Column, PageMeta, Row } from "@/components";
import DraggableCard from "@/components/DraggableCard";
import { styled } from "@/stitches.config";
import Drag from "@/utils/drag";
import { fetchWithBaseUrl } from "@/utils/fetch";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, Fragment } from "react";

const DUMMY_CARDS = [
  {
    id: "a12b34c5",
    type: "club",
    color: "blue",
    image: "chibis",
    name: "Desmond",
    phone: "233557113242",
    initx: "100.5",
    inity: "200.3",
    created_at: "2024-06-01T10:00:00Z",
  },
  {
    id: "b23c45d6",
    type: "diamond",
    color: "violet",
    image: "Allmight",
    name: "Ama",
    phone: "233501234567",
    initx: "350.2",
    inity: "400.1",
    created_at: "2024-06-02T11:00:00Z",
  },
  {
    id: "c34d56e7",
    type: "spade",
    color: "green",
    image: "apex",
    name: "Kwame",
    phone: "233541234567",
    initx: "700.0",
    inity: "150.0",
    created_at: "2024-06-03T12:00:00Z",
  },
  {
    id: "d45e67f8",
    type: "heart",
    color: "red",
    image: "astra",
    name: "Esi",
    phone: "233551234567",
    initx: "1200.0",
    inity: "900.0",
    created_at: "2024-06-04T13:00:00Z",
  },
  {
    id: "e56f78g9",
    type: "club",
    color: "blue",
    image: "brawl",
    name: "Kojo",
    phone: "233561234567",
    initx: "800.0",
    inity: "600.0",
    created_at: "2024-06-05T14:00:00Z",
  },
  {
    id: "f67g89h0",
    type: "diamond",
    color: "violet",
    image: "brawlgirl",
    name: "Akua",
    phone: "233571234567",
    initx: "200.0",
    inity: "800.0",
    created_at: "2024-06-06T15:00:00Z",
  },
  {
    id: "g78h90i1",
    type: "spade",
    color: "green",
    image: "chibis",
    name: "Yaw",
    phone: "233581234567",
    initx: "1100.0",
    inity: "300.0",
    created_at: "2024-06-07T16:00:00Z",
  },
  {
    id: "h89i01j2",
    type: "heart",
    color: "red",
    image: "Ekko",
    name: "Afia",
    phone: "233591234567",
    initx: "950.0",
    inity: "500.0",
    created_at: "2024-06-08T17:00:00Z",
  },
  {
    id: "i90j12k3",
    type: "club",
    color: "blue",
    image: "gojo",
    name: "Kofi",
    phone: "233601234567",
    initx: "400.0",
    inity: "950.0",
    created_at: "2024-06-09T18:00:00Z",
  },
  {
    id: "j01k23l4",
    type: "diamond",
    color: "violet",
    image: "homelander",
    name: "Abena",
    phone: "233611234567",
    initx: "600.0",
    inity: "700.0",
    created_at: "2024-06-10T19:00:00Z",
  },
  {
    id: "k12l34m5",
    type: "spade",
    color: "green",
    image: "igris",
    name: "Kwabena",
    phone: "233621234567",
    initx: "300.0",
    inity: "250.0",
    created_at: "2024-06-11T20:00:00Z",
  },
  {
    id: "l23m45n6",
    type: "heart",
    color: "red",
    image: "lol",
    name: "Akosua",
    phone: "233631234567",
    initx: "50.0",
    inity: "100.0",
    created_at: "2024-06-12T21:00:00Z",
  },
];

async function getCards() {
  const res = await fetchWithBaseUrl("tickets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default function Home() {
  const [tickets, setTickets] = useState<any>(DUMMY_CARDS);
  const [isShowCards, setIsShowing] = useState<boolean>(false);

  // useEffect(() => {
  //   async function fetchCards() {
  //     const res = await getCards();

  //     if (!res) {
  //       return;
  //     }

  //     setTickets(res);
  //   }

  //   fetchCards();
  // }, []);

  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <PageMeta>
      <Wrapper>
        <MapContainer>
          <ToggleCards isShowing={isShowCards} setIsShowing={setIsShowing} />
          <div style={{ zIndex: 10 }}>
            <div className="mat-texture" />
            <div className="window" />
            <Main initial="hidden" animate="visible" variants={list}>
              <>
                <BoardElement
                  animation={item}
                  src="/stickers/club.svg"
                  width={95}
                  height={92}
                  initialX={160}
                  initialY={76}
                />
                <BoardElement
                  animation={item}
                  src="/stickers/heart.svg"
                  width={91}
                  height={85}
                  initialX={255}
                  initialY={711}
                />
                <BoardElement
                  animation={item}
                  src="/stickers/scfaccra.svg"
                  width={130 + 16}
                  height={80}
                  initialX={543}
                  initialY={223}
                />
                <BoardElement
                  animation={item}
                  src="/stickers/diamond.svg"
                  width={81 + 16}
                  height={101 + 16}
                  initialX={747}
                  initialY={490}
                />
                <BoardElement
                  animation={item}
                  src="/stickers/spade.svg"
                  width={91 + 16}
                  height={103 + 16}
                  initialX={1176}
                  initialY={493}
                />
                <BoardElement
                  animation={item}
                  src="/stickers/sweave.svg"
                  width={176}
                  height={213}
                  initialX={307}
                  initialY={661}
                />
                <Row
                  css={{
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    marginTop: 125,
                    userSelect: "none",
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <Image
                    src="/stickers/scf-graffiti.svg"
                    alt="download sweave"
                    height={469}
                    width={459}
                    draggable={false}
                  />
                </Row>
                <Row
                  css={{
                    position: "absolute",
                    left: 136,
                    top: 806,
                    margin: "auto",
                    userSelect: "none",
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <Image
                    src="/stickers/johnrhule.svg"
                    alt="download sweave"
                    width={121}
                    height={138}
                    draggable={false}
                  />
                </Row>
                <Row
                  css={{
                    position: "absolute",
                    left: 1234,
                    top: 43,
                    margin: "auto",
                    userSelect: "none",
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <Image
                    src="/stickers/osemuix.svg"
                    alt="download sweave"
                    width={110}
                    height={157}
                    draggable={false}
                  />
                </Row>
              </>
              <Fragment>
                {!!tickets && isShowCards && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={cardAnimation}
                    style={{
                      position: "relative",
                      zIndex: 50,
                    }}
                  >
                    {tickets?.map((ticket: any, index: number) => (
                      <motion.div
                        key={index}
                        variants={cardAnimation}
                        transition={{
                          delay: 0.3,
                          type: "spring",
                          duration: 0.5,
                          bounce: 0.25,
                          damping: 10,
                          mass: 1,
                          stiffness: 100,
                          velocity: 2,
                        }}
                      >
                        <DraggableCard
                          type={ticket?.type.toLowerCase() || "spade"}
                          color={ticket?.color || "red"}
                          image={ticket?.image}
                          initialX={parseFloat(ticket?.initx)}
                          initialY={parseFloat(ticket?.inity)}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </Fragment>
            </Main>
          </div>
        </MapContainer>
        <ClaimTicketBanner />
      </Wrapper>
    </PageMeta>
  );
}

function BoardElement({
  src,
  width,
  height,
  initialX,
  initialY,
  animation,
}: {
  src: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;
  animation: any;
}) {
  return (
    <motion.div variants={animation}>
      <Drag initialX={initialX} initialY={initialY}>
        <Image
          src={src}
          height={height}
          width={width}
          alt=""
          draggable={false}
          objectFit="contain"
          objectPosition="center"
        />
      </Drag>
    </motion.div>
  );
}

function ClaimTicketBanner() {
  return (
    <ClaimTicketWrapper>
      <h1>SCF Accra Season 03</h1>
      <Column css={{ gap: 12 }}>
        <Row css={{ gap: 10 }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="#AEAEAE"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2V5"
              stroke="#AEAEAE"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 9.09009H20.5"
              stroke="#AEAEAE"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="#AEAEAE"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6947 13.7H15.7037"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6947 16.7H15.7037"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 13.7H12.0045"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 16.7H12.0045"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 13.7H8.30329"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 16.7H8.30329"
              stroke="#AEAEAE"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Column>
            <h4>Friday Sept 27th 2024</h4>
            <p>2:00 PM GMT</p>
          </Column>
        </Row>
        <Row css={{ gap: 10 }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
              stroke="#AEAEAE"
              stroke-width="1.2"
            />
            <path
              d="M3.61995 8.49C5.58995 -0.169997 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
              stroke="#AEAEAE"
              stroke-width="1.2"
            />
          </svg>
          <Column>
            <h4>LetiArts HQ</h4>
            <p>Prestige Kente, Adenta Municipality</p>
          </Column>
        </Row>
      </Column>
      <Button href="/register/kyc">Claim Your Ticket</Button>
    </ClaimTicketWrapper>
  );
}

function ToggleCards({
  isShowing,
  setIsShowing,
}: {
  isShowing: boolean;
  setIsShowing: any;
}) {
  return (
    <ToggleWrapper
      data-isOn={isShowing}
      onClick={() => {
        setIsShowing(!isShowing);
      }}
    >
      <Row
        css={{
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 16,
          right: 16,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2311_2081)">
            <path
              d="M3 11C3 8.172 3 6.757 3.879 5.879C4.757 5 6.172 5 9 5H11C13.828 5 15.243 5 16.121 5.879C17 6.757 17 8.172 17 11V16C17 18.828 17 20.243 16.121 21.121C15.243 22 13.828 22 11 22H9C6.172 22 4.757 22 3.879 21.121C3 20.243 3 18.828 3 16V11Z"
              stroke="#969696"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.044 11.762L8.427 11.305C9.157 10.435 9.521 10 10 10C10.48 10 10.844 10.435 11.573 11.305L11.956 11.762C12.652 12.593 13 13.009 13 13.5C13 13.991 12.652 14.407 11.956 15.238L11.573 15.695C10.843 16.565 10.479 17 10 17C9.52 17 9.156 16.565 8.427 15.695L8.044 15.238C7.348 14.407 7 13.991 7 13.5C7 13.009 7.348 12.593 8.044 11.762Z"
              stroke="#969696"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.924 19C18.02 18.387 18.393 17.04 19.138 14.347L20.192 10.537C20.938 7.84403 21.311 6.49703 20.678 5.43603C20.045 4.37503 18.654 4.01403 15.872 3.29203L13.905 2.78203C11.123 2.06003 9.732 1.69903 8.636 2.31203C7.856 2.74803 7.443 3.55603 7 4.95803"
              stroke="#969696"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="0.522461"
              y="1.27734"
              width="2.21265"
              height="31.3991"
              transform="rotate(-33.4027 0.522461 1.27734)"
              fill="#969696"
            />
          </g>
          <defs>
            <clipPath id="clip0_2311_2081">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 11C3 8.172 3 6.757 3.879 5.879C4.757 5 6.172 5 9 5H11C13.828 5 15.243 5 16.121 5.879C17 6.757 17 8.172 17 11V16C17 18.828 17 20.243 16.121 21.121C15.243 22 13.828 22 11 22H9C6.172 22 4.757 22 3.879 21.121C3 20.243 3 18.828 3 16V11Z"
            stroke="#969696"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.044 11.762L8.427 11.305C9.157 10.435 9.521 10 10 10C10.48 10 10.844 10.435 11.573 11.305L11.956 11.762C12.652 12.593 13 13.009 13 13.5C13 13.991 12.652 14.407 11.956 15.238L11.573 15.695C10.843 16.565 10.479 17 10 17C9.52 17 9.156 16.565 8.427 15.695L8.044 15.238C7.348 14.407 7 13.991 7 13.5C7 13.009 7.348 12.593 8.044 11.762Z"
            stroke="#969696"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.924 19C18.02 18.387 18.393 17.04 19.138 14.347L20.192 10.537C20.938 7.84403 21.311 6.49703 20.678 5.43603C20.045 4.37503 18.654 4.01403 15.872 3.29203L13.905 2.78203C11.123 2.06003 9.732 1.69903 8.636 2.31203C7.856 2.74803 7.443 3.55603 7 4.95803"
            stroke="#969696"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Row>
      <Switch data-isOn={isShowing} layout>
        {isShowing ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11C3 8.172 3 6.757 3.879 5.879C4.757 5 6.172 5 9 5H11C13.828 5 15.243 5 16.121 5.879C17 6.757 17 8.172 17 11V16C17 18.828 17 20.243 16.121 21.121C15.243 22 13.828 22 11 22H9C6.172 22 4.757 22 3.879 21.121C3 20.243 3 18.828 3 16V11Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.044 11.762L8.427 11.305C9.157 10.435 9.521 10 10 10C10.48 10 10.844 10.435 11.573 11.305L11.956 11.762C12.652 12.593 13 13.009 13 13.5C13 13.991 12.652 14.407 11.956 15.238L11.573 15.695C10.843 16.565 10.479 17 10 17C9.52 17 9.156 16.565 8.427 15.695L8.044 15.238C7.348 14.407 7 13.991 7 13.5C7 13.009 7.348 12.593 8.044 11.762Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.924 19C18.02 18.387 18.393 17.04 19.138 14.347L20.192 10.537C20.938 7.84403 21.311 6.49703 20.678 5.43603C20.045 4.37503 18.654 4.01403 15.872 3.29203L13.905 2.78203C11.123 2.06003 9.732 1.69903 8.636 2.31203C7.856 2.74803 7.443 3.55603 7 4.95803"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2311_2034)">
              <path
                d="M3 11C3 8.172 3 6.757 3.879 5.879C4.757 5 6.172 5 9 5H11C13.828 5 15.243 5 16.121 5.879C17 6.757 17 8.172 17 11V16C17 18.828 17 20.243 16.121 21.121C15.243 22 13.828 22 11 22H9C6.172 22 4.757 22 3.879 21.121C3 20.243 3 18.828 3 16V11Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.044 11.762L8.427 11.305C9.157 10.435 9.521 10 10 10C10.48 10 10.844 10.435 11.573 11.305L11.956 11.762C12.652 12.593 13 13.009 13 13.5C13 13.991 12.652 14.407 11.956 15.238L11.573 15.695C10.843 16.565 10.479 17 10 17C9.52 17 9.156 16.565 8.427 15.695L8.044 15.238C7.348 14.407 7 13.991 7 13.5C7 13.009 7.348 12.593 8.044 11.762Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.924 19C18.02 18.387 18.393 17.04 19.138 14.347L20.192 10.537C20.938 7.84403 21.311 6.49703 20.678 5.43603C20.045 4.37503 18.654 4.01403 15.872 3.29203L13.905 2.78203C11.123 2.06003 9.732 1.69903 8.636 2.31203C7.856 2.74803 7.443 3.55603 7 4.95803"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="1.11914"
                y="-0.513916"
                width="2.21265"
                height="32.533"
                transform="rotate(-28.1852 1.11914 -0.513916)"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2311_2034">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </Switch>
    </ToggleWrapper>
  );
}

const Wrapper = styled("div", {
  height: "100dvh",

  "@sm": {
    height: "100vh",
  },
});

const MapContainer = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  backdropFilter: "blur(10px)",
  overflow: "hidden",
  boxShadow:
    "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2), 0 16px 32px rgba(0, 0, 0, 0.2)",
  background:
    "linear-gradient(90deg, #1A69A2 0%, #3FAAF8 100%), url(/logo.svg)",

  "&:after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: 10,
  },
});

const Main = styled(motion.main, {
  position: "relative",
  zIndex: 20,
  height: "100%",
  width: "100%",
});

const ClaimTicketWrapper = styled("div", {
  position: "fixed",
  bottom: 32,
  left: 0,
  right: 0,
  marginInline: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 16,
  backgroundColor: "#131416",
  borderRadius: 16,
  padding: "20px 16px",
  width: "calc(100% - 25px * 2)",
  maxWidth: 340,

  "& h4": {
    color: "#AEAEAE",
  },
  "& p": {
    fontSize: 12,
    color: "#595959",
  },
});

const Button = styled(Link, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 54,
  width: "100%",
  fontSize: 16,
  fontWeight: "600",
  background: "linear-gradient(90deg, #1A69A2 0%, #3FAAF8 100%)",
  border: "none",
  borderRadius: 8,
  color: "White",
});

const ToggleWrapper = styled("div", {
  isolation: "isolate",
  position: "fixed",
  zIndex: 99999,
  top: 70,
  left: 0,
  right: 0,
  width: 115,
  marginInline: "auto",
  display: "flex",
  justifyContent: "flex-start",
  padding: 3,
  backgroundColor: "#D9D9D9",
  borderRadius: 70,
  cursor: "pointer",

  "&[data-isOn='true']": {
    justifyContent: "flex-end",
  },
});

const Switch = styled(motion.div, {
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 50,
  height: 50,
  borderRadius: "50%",
  backgroundColor: "White",
  transition: "background 450ms ease",
  background: "linear-gradient(90deg, #E45856 0%, #F98A51 100%)",
  cursor: "pointer",

  "&[data-isOn='true']": {
    background: "linear-gradient(90deg, #1A69A2 0%, #3FAAF8 100%)",
  },
});
