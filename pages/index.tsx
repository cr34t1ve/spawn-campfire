/** @format */

import { styled } from "@/stitches.config";
import { Forza } from "@/fonts/fonts";
import { Column, PageMeta, Row } from "@/components";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ArrowDown2, ArrowLeft2 } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const folders = [
  {
    title: "Collaborators",
    image: "/folders/collaborators.svg",
    link: "/collaborators",
    target: "",
  },
  {
    title: "Event Photos",
    image: "/folders/photos.svg",
    link: "#",
    target: "",
  },
  {
    title: "Spotify Playlist",
    image: "/folders/spotify.svg",
    link: "https://open.spotify.com/playlist/1wsdL3uf9VtSMoqCuTDrsg?si=a06c46e85c7f4402",
    target: "_blank",
  },
  {
    title: "Snapchat Lenses",
    image: "/folders/snap.svg",
    link: "/lenses",
    target: "",
  },
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [page, setPage] = useState<"home" | "ticket">("home");
  const [info, setInfo] = useState({
    name: "",
    social: "twitter",
    handle: "",
  });

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
          <Image
            src="/images/Fire_Without_Wood.gif"
            alt="scf logo"
            width={123}
            height={123}
            style={{ marginInline: "auto", marginBottom: 50 }}
          />
          <Grid>
            {folders.map((folder, index) => (
              <Column key={index} alignItems="center" css={{ gap: 20 }}>
                <Row wide css={{ position: "relative", height: 151 }}>
                  <Link href={folder.link} target={folder.target}>
                    <Image
                      src={folder.image}
                      alt={folder.title}
                      fill
                      priority
                    />
                  </Link>
                </Row>
                <ForzaText>{folder.title}</ForzaText>
              </Column>
            ))}
          </Grid>
        </Wrapper>
      </>
    </PageMeta>
  );
}

const Wrapper = styled("main", {
  padding: "80px 16px 30px 16px",
  maxWidth: 426,
  marginInline: "auto",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px 0px",
});

const ForzaText = styled("p", {
  fontSize: 18,
  fontWeight: "$forzaBook",
  color: "White",
  textAlign: "center",
});
