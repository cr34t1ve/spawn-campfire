import { Column, Input, PageMeta, Row, TicketCard } from "@/components";
import { Button } from "@/components/Button";
import { Forza } from "@/fonts/fonts";
import { styled } from "@/stitches.config";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useState } from "react";

export default function TicketPage() {
  const [ticketInput, setTicketInput] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  function handleTicketInput(e: any) {
    setTicketInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <PageMeta themeColor="#916BC8" />
      <Wrapper className={Forza.className}>
        <TVFrame />
        <ContentWrapper>
          <Button unstyled css={{ gap: 10, color: "Black" }}>
            <ArrowLeft />
            Back
          </Button>
          <Row
            css={{
              justifyContent: "center",
              gap: 70,
              "@sm": {
                flexDirection: "column-reverse",
              },
            }}
          >
            <form>
              <Column css={{ gap: 16 }}>
                <Input
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  inputMode="text"
                  value={ticketInput.firstName}
                  onChange={handleTicketInput}
                />
                <Input
                  name="email"
                  placeholder="Email"
                  type="email"
                  inputMode="email"
                  value={ticketInput.email}
                  onChange={handleTicketInput}
                />
                <Input
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="tel"
                  inputMode="tel"
                  value={ticketInput.phoneNumber}
                  onChange={handleTicketInput}
                />
              </Column>
              <RegisterButton
                disabled={
                  !ticketInput.firstName ||
                  !ticketInput.email ||
                  !ticketInput.phoneNumber
                }
                css={{ marginTop: 36 }}
              >
                Get Ticket
                <ArrowRight />
              </RegisterButton>
            </form>
            <TicketCard name={ticketInput.firstName} />
          </Row>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled("main", {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "$backroundPrimary",
  paddingBottom: "250px",
});

const ContentWrapper = styled("article", {
  maxWidth: "68vw",
  paddingLeft: "10vw",
  paddingTop: "14vh",

  "@sm": {
    maxWidth: "58.563rem",
    padding: "80px 50px",
  },
});

const TVFrame = styled("div", {
  position: "fixed",
  zIndex: 1,
  inset: 0,
  width: "100%",
  height: "100%",
  background: "url('images/tv-frame.png') no-repeat ",
  backgroundSize: "100% 100%",
  userSelect: "none",
  pointerEvents: "none",

  "@sm": {
    background: "url('images/mobile-frame.png') no-repeat ",
    backgroundSize: "100% 100%",
  },
});

const RegisterButton = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 10,
  backgroundColor: "$primaryPurple",
  padding: "24px 20px",
  fontSize: 18,
  width: "100%",
  maxWidth: 363,
  cursor: "pointer",
  transition: "all .2s ease",
  color: "#E7DEBF",

  "@sm": {
    width: "calc(100% - 40px)",
  },

  "&:disabled": {
    cursor: "not-allowed",
    backgroundColor: "$blackPrimary",
  },
});
