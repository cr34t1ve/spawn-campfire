/** @format */

import { styled } from "@/stitches.config";
import { Forza } from "@/fonts/fonts";
import {
  Column,
  Input,
  PageMeta,
  Row,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  Text,
  TicketCard,
} from "@/components";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ArrowDown2, ArrowLeft2 } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import html2canvas from "html2canvas";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [page, setPage] = useState<"home" | "ticket">("home");
  const [info, setInfo] = useState({
    name: "",
    social: "twitter",
    handle: "",
  });
  const { push } = useRouter();

  const socials: any = {
    twitter: {
      label: "Twitter",
      icon: "/images/icons/twitter.svg",
    },
    instagram: {
      label: "Instagram",
      icon: "/images/icons/instagram.svg",
    },
    snapchat: {
      label: "Snapchat",
      icon: "/images/icons/snapchat.svg",
    },
  };

  function handleChange(e: any) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  function createSocialLink(social: string, handle: string) {
    switch (social) {
      case "twitter":
        return `https://twitter.com/${handle}`;
      case "instagram":
        return `https://instagram.com/${handle}`;
      case "snapchat":
        return `https://snapchat.com/add/${handle}`;
      default:
        return "";
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("loading");
    const token = process.env.NEXT_PUBLIC_LOGSNAG_TOKEN;
    const channel = process.env.NEXT_PUBLIC_LOGSNAG_CHANNEL;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var raw = JSON.stringify({
      project: "spawn-campfire",
      event: "Invitation",
      user_id: info.handle,
      icon: "👾",
      description: "New invitation claimed",
      tags: {
        social: info.social,
        handle: info.handle,
        name: info.name,
        link: createSocialLink(info.social, info.handle),
      },
      notify: true,
      channel: channel,
    });

    fetch("https://api.logsnag.com/v1/log", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        setStatus("success");
        setPage("ticket");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <PageMeta>
      <>
        <Wrapper className={Forza.className}>
          {page === "home" ? (
            <>
              <Column>
                <Row alignItems="baseline">
                  <Text
                    size={18}
                    transform="uppercase"
                    css={{ color: "#8C6CBC" }}
                  >
                    Open
                  </Text>
                  <Image
                    alt="spawn campfire logo"
                    src="/images/Fire_Without_Wood.gif"
                    width={87}
                    height={87}
                    priority
                    draggable={false}
                  />
                </Row>
                <Text
                  size={18}
                  transform="uppercase"
                  css={{ color: "#8C6CBC" }}
                >
                  Reservations
                </Text>
              </Column>

              <Column
                as="form"
                onSubmit={handleSubmit}
                css={{ gap: 30, marginTop: 30 }}
              >
                <Input
                  placeholder="Full name"
                  name="name"
                  value={info.name}
                  onChange={handleChange}
                />
                <Row css={{ gap: 10, marginTop: -10 }}>
                  <Row
                    css={{
                      borderRadius: 8,
                      padding: "20px 14px 20px 19px",
                      backgroundColor: "#251B2F",
                      gap: 26,
                    }}
                  >
                    <SelectRoot
                      name="social"
                      onValueChange={(value) =>
                        setInfo((prev) => ({ ...prev, social: value }))
                      }
                    >
                      <SelectTrigger aria-label={info.social}>
                        <SelectValue>
                          <Row css={{ gap: 10 }}>
                            <Image
                              alt=""
                              src={socials[info.social].icon as string}
                              width={24}
                              height={24}
                            />
                            <SelectIcon>
                              <ArrowDown2 size={24} color="#A89E90" />
                            </SelectIcon>
                          </Row>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectPortal>
                        <SelectContent>
                          <SelectViewport>
                            <SelectItem value="twitter">
                              <SelectItemText>
                                <Image
                                  alt=""
                                  src="/images/icons/twitter.svg"
                                  width={24}
                                  height={24}
                                />
                              </SelectItemText>
                            </SelectItem>
                            <SelectItem value="snapchat">
                              <SelectItemText>
                                <Image
                                  alt=""
                                  src="/images/icons/snapchat.svg"
                                  width={24}
                                  height={24}
                                />
                              </SelectItemText>
                            </SelectItem>
                            <SelectItem value="instagram">
                              <SelectItemText>
                                <Image
                                  alt=""
                                  src="/images/icons/instagram.svg"
                                  width={24}
                                  height={24}
                                />
                              </SelectItemText>
                            </SelectItem>
                          </SelectViewport>
                        </SelectContent>
                      </SelectPortal>
                    </SelectRoot>
                  </Row>
                  <Input
                    placeholder="@username"
                    value={info.handle}
                    onChange={handleChange}
                    name="handle"
                    css={{
                      width: "calc(100% - 120px)",
                    }}
                  />
                </Row>
                <Button
                  filled
                  type="submit"
                  disabled={
                    !info.name ||
                    !info.handle ||
                    !info.social ||
                    status === "loading"
                  }
                >
                  {status === "loading" ? "Claiming..." : "Claim my invitation"}
                </Button>
              </Column>
              <Row
                wide
                justifyContent="center"
                css={{
                  marginTop: 150,
                }}
              >
                <SnapchatButton href="https://t.snapchat.com/2jL8s3wL">
                  <Image
                    alt="snapchat icon"
                    src="/images/icons/snap.svg"
                    width={45}
                    height={45}
                    priority
                    draggable={false}
                  />
                </SnapchatButton>
              </Row>
            </>
          ) : (
            <TicketPage name={info.name} back={() => setPage("home")} />
          )}
        </Wrapper>
      </>
    </PageMeta>
  );
}

function TicketPage({ name, back }: { name: string; back: () => void }) {
  function handleDownload() {
    const element = document.getElementById("ticket");
    if (element) {
      html2canvas(element, {
        allowTaint: true,
        useCORS: true,
        scrollX: 0,
        scrollY: -window.scrollY,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "ticket.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  }

  return (
    <>
      <PageMeta themeColor="#916BC8" />
      <Column
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 70,
        }}
      >
        <TicketCard name={name} />
        <Row wide css={{ maxWidth: 356, gap: 20 }}>
          <Button
            unstyled
            onClick={back}
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              borderRadius: 8,
              backgroundColor: "#251B2F",
            }}
          >
            <ArrowLeft2 />
          </Button>
          <Button
            onClick={handleDownload}
            css={{ width: "100%", padding: 22, color: "#8C6CBC" }}
          >
            Download Invitation
          </Button>
        </Row>
      </Column>
    </>
  );
}

const Wrapper = styled("main", {
  padding: "70px 16px",
  maxWidth: 426,
  marginInline: "auto",
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
