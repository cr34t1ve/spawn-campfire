import { PageMeta, Row } from "@/components";
import DraggableCard from "@/components/DraggableCard";
import { styled } from "@/stitches.config";
import Drag from "@/utils/drag";
import { fetchWithBaseUrl } from "@/utils/fetch";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Fragment } from "react";

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
  const [tickets, setTickets] = useState<any>(null);
  const [isShowCards, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCards() {
      const res = await getCards();

      if (!res) {
        return;
      }

      setTickets(res);
    }

    fetchCards();
  }, []);

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
