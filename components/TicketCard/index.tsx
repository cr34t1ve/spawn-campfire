import { styled } from "@/stitches.config";
import { Column, Row } from "../Layout";

export function TicketCard({ name }: { name: string }) {
  return (
    <Wrapper>
      <ForzaText size="36Book">{name || "Name"}</ForzaText>
      <Row style={{ gap: 46, marginTop: 10 }}>
        <ForzaText>
          SPAWN <br />
          CAMPFIRE
        </ForzaText>
        <ForzaText>
          HYDE <br />
          GARDENS
        </ForzaText>
      </Row>
      <Column alignItems="center" style={{ marginTop: 100 }}>
        <ForzaText size="14Bold">4:00 PM till Midnight</ForzaText>
        <ForzaText size="207Black">23</ForzaText>
        <ForzaText size="51Black" css={{ marginTop: -30 }}>
          September
        </ForzaText>
        <ForzaText size="14Medium" css={{ textAlign: "center", marginTop: 12 }}>
          Free Entry - Drinks - Games - Snacks - Exhibitions - Virtual Reality -
          Networking
        </ForzaText>
        <ForzaText size="14Bold" css={{ marginTop: 34 }}>
          scfaccra.com
        </ForzaText>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  borderRadius: 15,
  background: "linear-gradient(180deg, #1E1E1E 24.48%, #916BC8 100%)",
  width: 356,
  padding: "32px 36px 17px 36px",

  "@sm": {
    transform: "scale(0.75)",
    marginTop: -40,
  },
});

const ForzaText = styled("p", {
  color: "white",
  lineHeight: 1,

  variants: {
    size: {
      "14Medium": {
        fontSize: "0.875rem",
        fontWeight: "$forzaMedium",
      },
      "14Bold": {
        fontSize: "0.875rem",
        fontWeight: "$forzaBold",
      },
      "24Black": {
        fontSize: "1.5rem",
        fontWeight: "$forzaBlack",

        "@sm": {
          fontSize: 12,
        },
      },
      "36Book": {
        fontSize: "2.25rem",
        fontWeight: "$forzaBook",
      },
      "51Black": {
        fontSize: "3.188rem",
        fontWeight: "$forzaBlack",
      },
      "85Black": {
        fontSize: "5.313rem",
        fontWeight: "$forzaBlack",

        "@sm": {
          fontSize: 28,
        },
      },
      "207Black": {
        fontSize: "12.938rem",
        fontWeight: "$forzaBlack",
      },
    },
    transform: {
      uppercase: {
        textTransform: "uppercase",
      },
      capitalize: {
        textTransform: "capitalize",
      },
    },
  },
});
