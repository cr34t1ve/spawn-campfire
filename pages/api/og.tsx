import { ImageResponse, NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const cardTypes = {
  spade:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8ccd8ef7fd498221ffdfe_spade.svg",
  club: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8ccc53b04bf90edcc6710_club.svg",
  diamond:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8ccc55a6ddfaef9821f81_diamond.svg",
  heart:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8ccc5b9de67c5fa2eb1b6_heart.svg",
};

const colors = {
  spade: "#2EBCA2",
  club: "#3537A6",
  diamond: "#6821A0",
  heart: "#FB5745",
};

const images = {
  allmight:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8063b04bf90edd7311c_allmight.png",
  apex: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806b0be3a37e0e59217_apex.png",
  astra:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806f0423a0c2d2f4cc7_astra.png",
  brawl:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8068802b5edab8b67ba_Brawl.png",
  brawlgirl:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8066ed21d38c808c80b_brawlgirl.png",
  chibis:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806b0be3a37e0e59214_chibis.png",
  ekko: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8062135f316b6192488_ekko.png",
  gojo: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8056535c58d6ae0c989_gojo.png",
  goku: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8057f64bd5d5ad1ec7b_goku.png",
  homelander:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806e621bbb25c641875_homelander.png",
  igris:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d805c2e99154ba0e2ed1_igris.png",
  loba: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8061a0c48094043036e_loba.png",
  lol: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d805e2ae7f6c37f171e5_lol.png",
  luffy:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806f0423a0c2d2f4cd4_luffy.png",
  minion:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d805476c7b715bf4aa37_minion.png",
  omen: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d805c2d1c584bfba2bc9_omen.png",
  oohwee:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8053155744422905f7b_oohwee.png",
  panda:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d80589751be8c30e9199_panda.png",
  rick: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d805ed2845de1a466dfa_rick.png",
  rickmorty:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8062135f316b619248b_rickmorty.png",
  scf: "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806d88a7a2328371efb_scf.png",
  subzero:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d805e2963e56bea0c6bf_subzero.png",
  sweaveicon:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d749a78084cef90269fd_Sweave%20Icon.png",
  sweavelogo:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806e6730e5f4ac89dfb_sweavelogo.png",
  sweavemask:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d805cd65aacb53c14819_sweavemask.png",
  viego:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d805d47373b644f0bda5_viego.png",
  wreckit:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806231877bf610bf2b7_wreckIt.png",
  wukong:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d806b0be3a37e0e5921d_wukong.png",
  yasuo:
    "https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d8056535c58d6ae0c985_yasuo.png",
};

export default async function OG(request: NextRequest) {
  const fontData = await fetch(
    new URL("../../fonts/Forza-Black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  try {
    const { searchParams } = new URL(request.url);

    const hasType = searchParams.has("type");
    const type = hasType ? searchParams.get("type") : "spade";

    const hasImage = searchParams.has("image");
    const image = hasImage ? searchParams.get("image") : "wukong";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "url(https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8d11b2f6eab682bf43838_bg.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#fff",
            gap: 80,
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/62df811957f10071665c1949/66d8c8a7334115d1045a283f_logo.svg"
            alt=""
            width={303}
          />
          <div
            style={{
              display: "flex",
              position: "relative",
              width: 226,
              height: 329,
              borderRadius: 12,
              backgroundColor: "#fff",
              // @ts-ignore
              color: colors[type],
              boxShadow:
                "5.432222843170166px 5.432222843170166px 5.432222843170166px 0px rgba(0, 0, 0, 5%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: 12,
                left: 10,
              }}
            >
              <div>3</div>
              {/* @ts-ignore */}
              <img src={cardTypes[type]} width={19} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                transform: "scale(-1, -1)",
                bottom: 12,
                right: 10,
              }}
            >
              <div>3</div>
              {/* @ts-ignore */}
              <img src={cardTypes[type]} width={19} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 0,
                left: 0,
                top: 0,
                bottom: 0,
                margin: "auto",
              }}
            >
              <img
                // @ts-ignore
                src={hasImage ? images[image!] : cardTypes[type]}
                width={hasImage ? 119 : 108}
              />
            </div>
          </div>
        </div>
      ),
      {
        width: 800,
        height: 400,
        fonts: [
          {
            name: "Forza",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
