import { PageMeta, Row } from "@/components";
import { Button } from "@/components/Button";
import { styled } from "@/stitches.config";
import { ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/router";

export default function CollaboratorsPage() {
  const { back } = useRouter();
  const list = Array.from({ length: 11 }, (_, i) => i + 1);
  return (
    <PageMeta>
      <Wrapper>
        <Button onClick={back}>
          <ArrowLeft2 color="#E7DEBF" />
        </Button>
        <Grid>
          {list.map((i, index) => (
            <Row
              wide
              justifyContent="center"
              key={i}
              css={{ position: "relative", height: 150, gap: 10 }}
            >
              <img src={`/collabs/${index}.png`} alt="collaborator" />
            </Row>
          ))}
        </Grid>
      </Wrapper>
    </PageMeta>
  );
}

const Wrapper = styled("main", {
  padding: "70px 16px",
  maxWidth: 426,
  marginInline: "auto",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px 0px",
  marginTop: 20,
});
