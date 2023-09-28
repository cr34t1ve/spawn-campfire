/** @format */

import { styled } from "@/stitches.config";
import { Forza } from "@/fonts/fonts";
import { Column, PageMeta, Row } from "@/components";
import Link from "next/link";
import Image from "next/image";

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
    link: "https://www.dropbox.com/scl/fo/xmkt9a9rupwx29n6xxz0v/h?rlkey=e2kdrg7e1uccbcjtjzg0kvvds&dl=0",
    target: "_blank",
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
            priority
            draggable={false}
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
                      draggable={false}
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
