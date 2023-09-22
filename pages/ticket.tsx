import { Column, PageMeta, Row, TicketCard } from "@/components";
import { Button } from "@/components/Button";
import { Forza } from "@/fonts/fonts";
import { styled } from "@/stitches.config";
import { ArrowLeft2 } from "iconsax-react";
import { useState } from "react";
import html2canvas from "html2canvas";

export default function TicketPage() {
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
      <Wrapper className={Forza.className}>
        <Column
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 70,
          }}
        >
          <TicketCard name={"Desmond Sofua"} />
          <Row wide css={{ maxWidth: 356, gap: 20 }}>
            <Button
              unstyled
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
      </Wrapper>
    </>
  );
}

const Wrapper = styled("main", {
  position: "relative",
  width: "100%",
  padding: "70px 16px",
});
