/** @format */

import Image from "next/image";
import { styled } from "@/stitches.config";
import { inter, helvetica } from "@/fonts/fonts";
import { Column, PageMeta, Row, Text, Input } from "@/components";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import SplitType from "split-type";
import { Button } from "@/components/Button";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import useMousePosition from "@/hooks/useMousePosition";
import { request } from "@/helpers/axios";
import html2canvas from "html2canvas";

gsap.registerPlugin(ScrollTrigger);

const activities_list = [
  { image: "/images/activities/activity-1.png" },
  { image: "/images/activities/activity-2.png" },
  { image: "/images/activities/activity-3.png" },
];

const invitations_list = [
  {
    image: "/images/invites/invite-1.jpeg",
    name: "Ebenezer Gasonoo",
    title: "Co-Founder,GGN",
    basis: 2,
  },
  {
    image: "/images/invites/invite-2.jpeg",
    name: "Dabi Diamond",
    title: "Yetra Gaming",
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
    name: "Sunami Games",
    link: "https://www.sunamigames.com/",
    width: 157,
    height: 43,
  },
  {
    image: "/images/hero-image.png",
    name: "Squad Wipeout",
    link: "https://www.instagram.com/squad_wipeout/",
    width: 121,
    height: 111,
  },
  {
    image: "/images/hero-image.png",
    name: "Leaf PHP",
    link: "https://leafphp.dev/",
    width: 162,
    height: 56,
  },
  {
    image: "/images/hero-image.png",
    name: "Smart Delivery",
    link: "https://www.instagram.com/smartdelivery.gh/",
    width: 140,
    height: 51,
  },
  {
    image: "/images/hero-image.png",
    name: "The Jnk Mag",
    link: "https://www.instagram.com/thejnkmag/",
    width: 128,
    height: 53,
  },
  {
    image: "/images/hero-image.png",
    name: "Panda Esports",
    link: "https://www.instagram.com/thejnkmag/",
    width: 190,
    height: 133,
  },
  {
    image: "/images/hero-image.png",
    name: "Filmonga",
    link: "https://www.instagram.com/filmongaa/?hl=en",
    width: 134,
    height: 134,
  },
  {
    image: "/images/hero-image.png",
    name: "Impulse GG",
    link: "https://www.instagram.com/impulse.ggg/",
    width: 163,
    height: 41,
  },
  {
    image: "/images/hero-image.png",
    name: "Rare Goods Only",
    link: "https://raregood sonly.webflow.io/",
    width: 143,
    height: 63,
  },
  {
    image: "/images/hero-image.png",
    name: "Hilmen Gaming",
    link: "https://raregoodsonly.webflow.io/",
    width: 140,
    height: 103,
  },
];

export default function Home() {
  const main = useRef(null);
  const darkSection = useRef(null);
  const [loading, setLoading] = useState(true);
  const [processStep, setProcessStep] = useState<
    "landing" | "fullName" | "email" | "phone" | "submitted"
  >("landing");

  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "submitted"
  >("idle");

  const [submissionForm, setSubmissionForm] = useState<{
    name: string;
    email: string;
    phone: string;
  }>({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSubmissionForm({
      ...submissionForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!submissionForm.phone) {
      return;
    }

    setSubmissionState("submitting");
    request
      .post("/register", submissionForm)
      .then(function (response) {
        setSubmissionState("submitted");
        setProcessStep("submitted");
      })
      .catch(function (error) {
        const { errors } = error;
        setSubmissionState("idle");
        console.log(errors);
      });
  }

  useEffect(() => {
    window!.onload = function () {
      setLoading(false);
      const timer = setTimeout(() => {
        const preloader1 = document.getElementById("preloader1");
        const preloader2 = document.getElementById("preloader2");
        const preloader3 = document.getElementById("preloader3");
        preloader1!.style.display = "none";
        preloader2!.style.display = "none";
        preloader3!.style.display = "none";
      }, 3000);
      return () => clearTimeout(timer);
    };
    return () => {
      setLoading(false);
    };
  }, []);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context((self: any) => {
  //     const box = self?.selector(".horizontal-overflow-1")!;
  //     const stayTuned = self?.selector(".horizontal-overflow-2")!;
  //     gsap.to(box, {
  //       x: "-100%",
  //       scrollTrigger: {
  //         trigger: ".dark-section",
  //         start: "top 50px",
  //         end: "bottom 0%",
  //         toggleActions: "restart pause reverse pause",
  //         scrub: 1,
  //         markers: true,
  //       },
  //     });
  //     // gsap.to(stayTuned, {
  //     //   x: "-100%",
  //     //   scrollTrigger: {
  //     //     trigger: darkSection.current,
  //     //     start: "30%",
  //     //     end: "bottom -20%",
  //     //     toggleActions: "restart pause reverse pause",
  //     //     scrub: 1,
  //     //     markers: true,
  //     //   },
  //     // });
  //   }, main); // <- Scope!
  //   return () => ctx.revert(); // <- Cleanup!
  // }, []);

  return (
    <PageMeta>
      <>
        <>
          <div
            className="preloader-3"
            id="preloader3"
            style={{
              animationName: loading ? "unset" : "slide-out",
            }}
          ></div>
          <div
            className="preloader"
            id="preloader1"
            style={{ animationName: loading ? "unset" : "slide-out" }}
          ></div>
          <div
            className="preloader-2"
            id="preloader2"
            style={{ animationName: loading ? "unset" : "slide-out" }}
          ></div>
        </>
        <main className={helvetica.className}>
          {processStep === "landing" && (
            <HomePage
              main={main}
              darkSection={darkSection}
              handleClick={() => setProcessStep("fullName")}
            />
          )}
          {processStep === "fullName" && (
            <FullName
              className={inter.className}
              value={submissionForm.name}
              handleChange={handleChange}
              handleSubmit={(e: any) => {
                e?.preventDefault();

                submissionForm.name ? setProcessStep("email") : null;
              }}
            />
          )}
          {processStep === "email" && (
            <Email
              className={inter.className}
              value={submissionForm.email}
              handleChange={handleChange}
              handleSubmit={() => {
                submissionForm.email ? setProcessStep("phone") : null;
              }}
            />
          )}
          {processStep === "phone" && (
            <Phone
              className={inter.className}
              value={submissionForm.phone}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              submissionState={submissionState}
            />
          )}
          {processStep === "submitted" && (
            <Submitted
              className={inter.className}
              value={submissionForm.name}
            />
          )}
        </main>
      </>
    </PageMeta>
  );
}

function FullName({
  value,
  className,
  handleChange,
  handleSubmit,
}: {
  value: any;
  className: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: any;
}) {
  return (
    <>
      <LightSection>
        <Header />
        <Form as="form" className={className}>
          <Input
            name="name"
            placeholder="Enter your full name"
            variant="underline"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleSubmit}>
            Next
          </Button>
        </Form>
        <TicketCooking className={className} />
      </LightSection>
    </>
  );
}

function Email({
  value,
  className,
  handleChange,
  handleSubmit,
}: {
  value: any;
  className: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: any;
}) {
  return (
    <>
      <LightSection>
        <Header />
        <Form as="form" className={className}>
          <Input
            name="email"
            type="email"
            inputMode="email"
            placeholder="Your email address"
            variant="underline"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleSubmit}>
            Next
          </Button>
        </Form>
        <TicketCooking className={className} />
      </LightSection>
    </>
  );
}

function Phone({
  value,
  className,
  handleChange,
  handleSubmit,
  submissionState,
}: {
  value: any;
  className: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: any;
  submissionState: string;
}) {
  return (
    <>
      <LightSection>
        <Header />
        <Form as="form" className={className}>
          <Input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="Your phone number"
            variant="underline"
            value={value}
            onChange={handleChange}
          />
          <Button
            type="button"
            onClick={handleSubmit}
            disabledState={submissionState === "submitting"}
            disabled={submissionState === "submitting"}
          >
            Get ticket
          </Button>
        </Form>
        <TicketCooking className={className} />
      </LightSection>
    </>
  );
}

function Submitted({ value, className }: { value: any; className: string }) {
  const mousePosition = useMousePosition();
  const ref = useRef<HTMLDivElement>(null);

  const [screenshot, setScreenshot] = useState<string | null>(null);

  const takeScreenshot = (): void => {
    const element = ref.current;
    if (!element) return;

    element.style.transform = "none";
    const userName = document.getElementById("user-name")!;
    userName.style.transform = "translateY(-30%)";

    html2canvas(element, { backgroundColor: null }).then((canvas) => {
      const image = canvas.toDataURL();
      setScreenshot(image);

      const downloadLink = document.createElement("a");
      downloadLink.href = image;
      downloadLink.download = "campfire.png";

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      element.style.transform = "revert";
      userName.style.transform = "unset";
    });
  };

  return (
    <>
      <LightSection
        css={{
          backgroundImage: "url(/images/arrow-bg.svg)",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row css={{ position: "fixed", top: 0, width: "100%", padding: 20 }}>
          <Header />
        </Row>
        <Row
          css={{
            marginInline: "auto",
            gap: 50,
            "@md": { flexDirection: "column" },
          }}
        >
          <InvitationCard
            ref={ref}
            id="ticket"
            css={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${
                mousePosition.x! * -0.02
              }deg) rotateY(${mousePosition.y! * -0.02}deg)`,
            }}
          >
            <Row
              css={{
                gap: 78,
                "@md": {
                  flexDirection: "column-reverse",
                  alignItems: "center",
                  gap: 48,
                },
              }}
              alignItems="flexEnd"
            >
              <div>
                <Row css={{ gap: 20 }}>
                  <Row
                    css={{
                      borderRadius: "50%",
                      border: "1px solid rgba(13, 47, 101, 0.2) ",
                      background: "#F5F5F5",
                      padding: "11px 15px",
                    }}
                  >
                    <img
                      src="/images/finger.svg"
                      alt="finger emoji"
                      width={25}
                      height={33}
                    />
                  </Row>

                  <Text
                    className={className}
                    id="user-name"
                    transform="uppercase"
                    size={4}
                  >
                    {value}
                  </Text>
                </Row>
                <Text
                  className={className}
                  color="orange"
                  css={{
                    fontSize: 14,
                    fontWeight: 700,
                    marginTop: 75,
                    "@sm": { fontSize: 9.6, marginTop: 48 },
                  }}
                >
                  HAS RESERVED A SPOT FOR
                </Text>
                <Row css={{ paddingTop: 10, "@md": { width: "85%" } }}>
                  <img src="/images/SPAWN CAMPFIRE.svg" alt="Spawn Campfire" />
                </Row>
                <Row css={{ gap: 10, alignItems: "unset", marginTop: 10 }}>
                  <Text
                    className={className}
                    size={4}
                    color="primary"
                    css={{ "@sm": { fontSize: 11 } }}
                  >
                    Board Games
                  </Text>
                  <CircularDivider />
                  <Text
                    className={className}
                    size={4}
                    color="primary"
                    css={{ "@sm": { fontSize: 11 } }}
                  >
                    Drinks
                  </Text>
                  <CircularDivider />
                  <Text
                    className={className}
                    size={4}
                    color="primary"
                    css={{ "@sm": { fontSize: 11 } }}
                  >
                    Networking
                  </Text>
                  <CircularDivider />
                  <Text
                    className={className}
                    size={4}
                    color="primary"
                    css={{ "@sm": { fontSize: 11 } }}
                  >
                    Free Food
                  </Text>
                </Row>
              </div>
              <Row
                css={{
                  width: 200,
                  height: 200,
                  marginBottom: 30,
                  "@md": { marginBottom: "unset" },
                }}
              >
                <img src="/images/fire.gif" alt="fire gif" />
              </Row>
            </Row>
          </InvitationCard>
          <Row
            onClick={takeScreenshot}
            justifyContent="center"
            alignItems="center"
            css={{
              border: "1px solid $secondaryBackground",
              padding: 38,
              borderRadius: "50%",
              backgroundColor: "$primaryBackground",
              transition: "all .2s ease",
              cursor: "pointer",
              "@sm": {
                display: "none",
              },
              "&:hover": {
                transform: "scale(0.95)",
                backgroundColor: "$secondaryBackground",
                [`& ${Download}`]: {
                  filter:
                    "invert(100%) sepia(33%) saturate(836%) hue-rotate(176deg) brightness(103%) contrast(82%)",
                },
              },
            }}
          >
            <Download
              src="/images/icons/download.svg"
              alt=""
              width={30}
              height={30}
            />
          </Row>
        </Row>
      </LightSection>
    </>
  );
}

function HomePage({
  main,
  darkSection,
  handleClick,
}: {
  main: HTMLElement | any;
  darkSection: HTMLElement | any;
  handleClick: () => void;
}) {
  // const prefersReducedMotion = usePrefersReducedMotion();

  // function handleScrollClick(ev: any) {
  //   // Disable the default anchor-clicking behavior
  //   // of scrolling to the element
  //   ev.preventDefault();

  //   const target = document?.querySelector(`#${location}`);
  //   target?.scrollIntoView({
  //     behavior: prefersReducedMotion ? "auto" : "smooth",
  //   });
  // }

  return (
    <>
      <LightSection className="light-section">
        <Header />
        <Hero>
          <Text
            as="h1"
            color="primary"
            id="hero-text"
            className="hero-text"
            css={{
              fontSize: "$oneFifty",
              fontWeight: 900,
              "@sm": { fontSize: "15.1vw", wordWrap: "initial" },
            }}
          >
            PROMOTING <span> ESPORT AS THE FUTURE </span>
            OF COMPETITIVE SPORTS FOR THE YOUNGER GENERATION
          </Text>
        </Hero>
        <ReserveCard onClick={handleClick}>
          <Column css={{ gap: 40, fontWeight: 900 }}>
            <Text
              size={12}
              transform="uppercase"
              color="orange"
              className="subtitle-text"
              css={{ zIndex: 1, transition: "all .2s ease" }}
              as="h4"
            >
              25th march 2023
            </Text>
            <Text
              css={{
                fontSize: 40,
                zIndex: 1,
                fontWeight: 900,
                transition: "all .2s ease",
              }}
              transform="uppercase"
              color="primary"
              className="main-text"
              as="h3"
            >
              RESERVE A SPOT
            </Text>
          </Column>
          <Arrow src="/images/icons/arrow-right.svg" alt="" />
        </ReserveCard>
        <RightArrow>
          <Image
            src="/images/top-right-arrow.svg"
            alt=""
            fill={true}
            priority
          />
        </RightArrow>
        <HorizontalOverflow>
          <Text
            size="17"
            css={{ whiteSpace: "nowrap", gridArea: "inspiring" }}
            className="horizontal-overflow-1"
          >
            #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA
            #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA
            #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA #SCFACCRA
          </Text>
        </HorizontalOverflow>
        <LocationGrid as="section" id="location">
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
              "@sm": {
                fontSize: "35vw",
              },
            }}
          >
            Inspi
            <br />
            ring
          </Text>
          <LocationCard
            href="https://goo.gl/maps/fH3PLGmzBTtg836v8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Row css={{ gridArea: "location", gap: 10 }}>
              <Image
                src="/images/icons/Show.svg"
                alt=""
                width={38}
                height={38}
              />
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
              fontSize: 20,
              fontWeight: 400,
              maxWidth: "25ch",
              alignSelf: "center",
              justifySelf: "center",
              gridArea: "extract",
              lineHeight: 1.4,
              "@xl": {
                fontSize: "1.150vw",
              },
              "@sm": {
                alignSelf: "initial",
                justifySelf: "initial",
                paddingTop: 64,
              },
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
              "@sm": {
                fontSize: "31.4vw",
              },
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
                "@sm": {
                  fontSize: "15.1vw",
                },
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
      <DarkSection ref={darkSection} className="dark-section">
        <LeftArrow>
          <Image src="/images/bottom-left-arrow.svg" alt="" fill={true} />
        </LeftArrow>
        <Text color="white" transform="uppercase" align="right" size={21}>
          {" "}
          Special <br /> Invitations
        </Text>
        <Column
          css={{
            gap: 38,
            paddingTop: 98,
            "@sm": { flexDirection: "row", gap: 10 },
          }}
        >
          <Row
            css={{
              gap: 20,
              justifyContent: "flex-start",
              paddingLeft: "20rem",
              "@md": {
                paddingLeft: "2rem",
              },
              "@sm": {
                flexDirection: "column",
                paddingLeft: "0",
                flex: 1,
              },
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
                  "@xl": {
                    height: "29.696vw",
                  },
                  "@sm": {
                    width: "100%",
                    height: 237,
                    flex: "unset",
                    padding: "10px 14px",
                    borderRadius: "0px 20px 20px 20px",
                  },
                }}
              >
                <Text
                  color="white"
                  as="h3"
                  size={17}
                  transform="uppercase"
                  css={{ "@sm": { fontSize: 20 } }}
                >
                  {invitation.name}
                </Text>
                <Text
                  color="whiteLightShade"
                  size={11}
                  className={inter.className}
                  css={{ "@sm": { fontSize: 10 } }}
                >
                  {invitation.title}
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
              "@md": {
                paddingLeft: "1rem",
                paddingRight: "3rem",
              },
              "@sm": {
                paddingLeft: "0",
                paddingRight: "0",
                paddingTop: 40,
                flexDirection: "column",
                flex: 1,
              },
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
                  "@xl": {
                    height: "29.696vw",
                  },
                  "@sm": {
                    width: "100%",
                    padding: "10px 14px",
                    height: 237,
                    flex: "unset",
                    borderRadius: "0px 20px 20px 20px",
                  },
                }}
              >
                <Text
                  color="white"
                  as="h3"
                  size={17}
                  transform="uppercase"
                  css={{ "@sm": { fontSize: 20 } }}
                >
                  {invitation.name}
                </Text>
                <Text
                  color="whiteLightShade"
                  size={11}
                  className={inter.className}
                  css={{ "@sm": { fontSize: 10 } }}
                >
                  {invitation.title}
                </Text>
              </ActivityCard>
            ))}
          </Row>
        </Column>
        <HorizontalOverflow
          css={{ paddingTop: 340, "@sm": { paddingTop: 140 } }}
        >
          <Text
            size="22"
            transform="uppercase"
            css={{
              color: "$ash",
              whiteSpace: "nowrap",
              "@sm": { fontSize: "17.4vw" },
            }}
            className="horizontal-overflow-2"
          >
            Stay Tuned &nbsp;Stay Tuned
          </Text>
        </HorizontalOverflow>
        <Column css={{ marginTop: 130, gap: 27, "@sm": { marginTop: 50 } }}>
          <Text
            color="white"
            css={{ fontSize: 18 }}
            className={inter.className}
          >
            Follow Us
          </Text>
          <Row css={{ gap: 20 }}>
            <SocialCircle href="https://instagram.com/scfaccra?igshid=YmMyMTA2M2Y=">
              <Image
                src="/images/icons/instagram.svg"
                alt=""
                width={24}
                height={24}
              />
            </SocialCircle>
            <SocialCircle href="https://twitter.com/spawnesportteam?s=11&t=NKM0cENVw_CuA15l2rK_hw">
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
          css={{ marginTop: 300, "@sm": { marginTop: 150 } }}
        >
          Brands <br /> Attending
        </Text>
        <BrandGrid>
          {brands_list.map((brand, index) => (
            <BrandCard
              key={index}
              href={brand?.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Row
                css={{
                  width: brand.width,
                  height: brand.height,
                  "@sm": { width: 90 },
                }}
              >
                <img
                  src={`/images/brands/brand-${index}.png`}
                  alt={brand.name}
                  style={{ zIndex: 1, transition: "all .2s ease" }}
                />
              </Row>
            </BrandCard>
          ))}
          <DarkReserveCard>
            <Column css={{ gap: 40 }}>
              <Text
                color="white"
                css={{
                  fontSize: 30,
                  fontWeight: 900,
                  zIndex: 1,
                  transition: "all .2s ease",
                }}
                transform="uppercase"
                as="h3"
              >
                SPONSORSHIP PLANS
              </Text>
            </Column>
            <Arrow src="/images/icons/arrow-right-grey.svg" alt="" />
          </DarkReserveCard>
        </BrandGrid>
        <Row
          css={{
            marginTop: 210,
            maxWidth: 1069,
            marginInline: "auto",
            "@sm": { marginTop: 125 },
          }}
        >
          <Text color="white" css={{ fontSize: 56 }}>
            Align yourself with the spawn community and position your brand as a
            key player in the gaming industry.
          </Text>
        </Row>
        <Row
          className={inter.className}
          css={{
            fontSize: 18,
            justifyContent: "flex-end",
            marginTop: 50,
            "@sm": { flexDirection: "column", alignItems: "flex-end" },
          }}
        >
          <Text color="white">WEBSITE BY :</Text>
          <Text color="white" as={Link} href="https://raregoodsonly.webflow.io">
            Rare Goods Only
          </Text>
        </Row>
        <Footer>
          <Text
            css={{
              fontSize: "19vw",
              fontWeight: 900,
              color: "$white",
              textAlign: "center",
              lineHeight: 0.9,
              paddingTop: 315,
              maxWidth: "9ch",
              "@sm": {
                paddingTop: 150,
              },
            }}
          >
            THANK YOU FOR YOUR SUPPORT
          </Text>
          <SpawnLogo>
            <Image alt="" fill={true} src="/images/spawn-logo.svg" />
          </SpawnLogo>
        </Footer>
      </DarkSection>
    </>
  );
}

function Header() {
  return (
    <HeaderWrapper>
      <Text as="h5" color="orange" size={12} transform="uppercase">
        Accra
      </Text>
      <Row css={{ gap: 70 }}>
        <Text
          as={Link}
          href="https://goo.gl/maps/fH3PLGmzBTtg836v8"
          color="orange"
          size={12}
          transform="uppercase"
        >
          Venue
        </Text>
        <Text
          as={Link}
          href="https://discord.gg/h9QmsFYp"
          color="orange"
          size={12}
          transform="uppercase"
          css={{
            transition: "all .2s ease",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Contact Us
        </Text>
      </Row>
    </HeaderWrapper>
  );
}

function TicketCooking({ className }: { className: string }) {
  return (
    <Row justifyContent="center" alignItems="center" css={{ gap: 10 }}>
      <Row css={{ width: 47, height: 47 }}>
        <img src="/images/fire.gif" alt="fire gif" />
      </Row>
      <Text
        className={className}
        size={4}
        color="primary"
        css={{ marginTop: 20 }}
      >
        We are cooking your ticket
      </Text>
    </Row>
  );
}

// ~~~ Styles ~~~

const HeaderWrapper = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 16,
  width: "100%",
});

const LightSection = styled("section", {
  position: "relative",
  overflow: "hidden",
  background: "$primaryBackground",
  padding: "21px 40px 0px 40px",
  "@sm": {
    padding: "63px 16px 0px 16px",
  },
});

const DarkSection = styled(LightSection, {
  background: "$secondaryBackground",
  paddingTop: 480,
  paddingBottom: 230,
  "@sm": {
    paddingTop: 380,
    paddingBottom: 100,
  },
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

const Arrow = styled("img", {
  position: "absolute",
  right: "0.125rem",
  top: "0.1rem",
  transition: "all .2s ease",
});

const ReserveCard = styled("div", {
  position: "relative",
  marginTop: -70,
  marginLeft: "auto",
  width: "calc((100vw - 3.375rem) * 4/14 + 1.875rem)",
  borderRadius: 20,
  border: "1px solid #EB6A4B",
  padding: "14px 11px 11px 24px",
  backgroundColor: "#F3F3F3",
  cursor: "pointer",
  overflow: "hidden",
  isolation: "isolate",

  "@md": {
    marginTop: 70,
    marginLeft: "unset",
    top: "unset",
    width: "100%",
  },

  "&:hover": {
    "&::before": {
      transform: "translate3D(0, 0%, 0)",
    },
    [`& ${Arrow}`]: {
      filter:
        "invert(100%) sepia(33%) saturate(836%) hue-rotate(176deg) brightness(103%) contrast(82%)",
    },
    "& h3": {
      color: "#E7E8E8",
    },
    "& h4": {
      color: "#373B49",
    },
  },

  "&::before": {
    content: `''`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "$orange",
    transform: "translate3D(0, 101%, 0)",
    transformOrigin: "top left",
    transition: "transform .2s cubic-bezier(0.215, 0.61, 0.335, 1)",
    zIndex: 0,
  },
});

const DarkReserveCard = styled(ReserveCard, {
  top: "unset",
  backgroundColor: "rgba(243, 243, 243, 0.1)",
  border: "1px solid #6F6E6F",
  height: "max-content",
  paddingTop: 78,
  gridColumnStart: -3,
  gridColumnEnd: -1,
  backdropFilter: "blur(22px)",
  boxShadow: " 0px 4px 34px rgba(0, 0, 0, 0.05)",
  marginTop: 0,

  "&:hover": {
    "&::before": {
      transform: "translate3D(0, 0%, 0)",
    },
    [`& ${Arrow}`]: {
      filter:
        "invert(100%) sepia(33%) saturate(836%) hue-rotate(176deg) brightness(103%) contrast(82%)",
    },
    "& h3": {
      color: "#1A1B1F",
    },
  },

  "&::before": {
    content: `''`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#F3F3F3",
    transform: "translate3D(0, 101%, 0)",
    transformOrigin: "top left",
    transition: "transform .2s cubic-bezier(0.215, 0.61, 0.335, 1)",
    zIndex: 0,
  },
});

const RightArrow = styled("div", {
  position: "absolute",
  right: 0,
  top: "12.495vw",
  width: "20rem",
  height: "30rem",
  "@xl": {
    top: "22.495vw",
  },
  "@md": {
    top: "15.495vw",
    width: "7rem",
  },
  "@sm": {
    display: "none",
  },
});

const LeftArrow = styled(RightArrow, {
  top: "2rem",
  left: 0,
  width: "30rem",
  "@md": {
    width: "15rem",
  },
  "@sm": {
    top: 0,
    width: "12rem",
    display: "initial",
  },
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
  "@sm": {
    gridTemplateColumns: "unset",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
    "location"
    "inspiring"
    "experience"
    "extract"
    `,
  },
});

const LocationCard = styled(Link, {
  display: "flex",
  width: "100%",
  // height: 574,
  height: "34.696vw",
  paddingBottom: 57,
  justifyContent: "center",
  alignItems: "flex-end",
  borderRadius: 20,
  cursor: "pointer",
  background:
    "linear-gradient(13.78deg, #1D212D -0.25%, rgba(55, 59, 73, 0.3) 99.3%), url(/images/hero-image.png)",
  gridArea: "location",
  backgroundSize: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transition: "background-size .2s ease",
  "@sm": {
    height: 270,
    alignItems: "center",
    paddingBottom: "unset",
  },
  "&:hover": {
    backgroundSize: "110%",
  },
});

const ActivitiesGrid = styled("div", {
  display: "grid",
  gap: 20,
  gridTemplateColumns: "1.7fr 1.3fr 2.5fr",
  paddingTop: 48,
  "@xl": {
    gridTemplateColumns: "30.688vw 22.685vw 38.690vw",
  },
  "@sm": {
    gridTemplateColumns: "unset",
    gridTemplateRows: "223px 153px 290px",
  },
});

const FakeBG = styled("div", {
  width: "100%",
  height: 100,
  background: "$secondaryBackground",
  position: "absolute",
  bottom: 0,
  marginLeft: -40,
  "@sm": {
    marginLeft: -16,
  },
});

const ActivityCard = styled("figure", {
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  height: 450,
  zIndex: 1,
  "@sm": {
    height: "100%",
  },
});

const SocialCircle = styled(Link, {
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
  "@md": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@sm": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

const BrandCard = styled(Link, {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0px 20px 20px 20px",
  border: "1px solid $ash",
  height: 332,
  overflow: "hidden",
  cursor: "pointer",
  "@xl": {
    height: "21.958vw",
  },

  "@sm": {
    height: 170,
  },

  "&:hover": {
    "& img": {
      transform: "scale(90%)",
    },
    "&::before": {
      transform: "translate3D(0, 0%, 0)",
    },
  },

  "&::before": {
    content: `''`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(21, 22, 26)",
    transform: "translate3D(0, 101%, 0)",
    transformOrigin: "top left",
    transition: "transform .2s cubic-bezier(0.215, 0.61, 0.335, 1)",
    zIndex: 0,
  },
});

const Footer = styled("footer", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
});

const SpawnLogo = styled("div", {
  position: "absolute",
  bottom: -900,
  right: 90,
  marginLeft: "auto",
  marginRight: "auto",
  width: "calc(19vw * 1.1)",
  height: "stretch",
  "@md": {
    bottom: -800,
    width: "calc(19vw * 1.1)",
  },
  "@sm": {
    bottom: -300,
    right: 20,
    width: "calc(19vw * 1.1)",
  },
});

const Form = styled(Column, {
  marginTop: 240,
  marginInline: "auto",
  maxWidth: 519,
  gap: 28,
  marginBottom: 300,
  "@sm": {
    marginTop: 240,
    marginBottom: 200,
  },
});

const InvitationCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "34px 20px 40px 50px",
  borderRadius: 20,
  border: "1px solid black",
  background: "rgba(243, 243, 243, 0.8)",
  backdropFilter: "blur(22px)",
  transition: "transform 0.2s",
  willChange: "transform",
  "@md": {
    padding: "50px 20px",
  },
});

const CircularDivider = styled("div", {
  position: "relative",
  top: 6,
  width: 4,
  height: 4,
  borderRadius: "10%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
});

const Download = styled(Image, {
  // content: `""`
});
