import { Column, Input, PageMeta, Row } from "@/components";
import { styled } from "@/stitches.config";
import { useRouter } from "next/router";
import { ArrowLeft2 } from "iconsax-react";
import { useState } from "react";
import Image from "next/image";

export default function KYC() {
  const { back, push } = useRouter();
  const [userData, setUserData] = useState({
    firstname: "",
    phone: "",
  });

  function handleChange(e: any) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    push("/register/select");
  }

  return (
    <PageMeta>
      <Wrapper>
        <MaxWidthWrapper>
          <Row alignItems="center">
            <Row
              css={{ flex: 1, cursor: "pointer" }}
              alignItems="center"
              onClick={back}
            >
              <ArrowLeft2 />
            </Row>
            <Image
              height={32}
              width={72}
              alt="Spawn Campfire logo"
              src="/logoblue.svg"
            />
            <div style={{ flex: 1 }} />
          </Row>
          <Form onSubmit={handleSubmit}>
            <h1>Let&apos;s start with your name and number</h1>
            <Column css={{ gap: 16 }}>
              <Input
                name="firstname"
                placeholder="First Name"
                value={userData.firstname}
                onChange={handleChange}
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                type="tel"
                value={userData.phone}
                onChange={handleChange}
              />
            </Column>
            <Button>Choose Ticket Type</Button>
          </Form>
          <Column alignItems="center" css={{ gap: 8, marginTop: 162 }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1512_1901)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.823 2.39302C10.9634 2.21511 11.1423 2.07133 11.3463 1.97248C11.5502 1.87362 11.7739 1.82227 12.0005 1.82227C12.2272 1.82227 12.4509 1.87362 12.6548 1.97248C12.8588 2.07133 13.0376 2.21511 13.178 2.39302L19.781 10.761C20.0596 11.114 20.2111 11.5504 20.2111 12C20.2111 12.4496 20.0596 12.8861 19.781 13.239L13.178 21.607C13.0377 21.7851 12.8587 21.9291 12.6547 22.028C12.4506 22.127 12.2268 22.1784 12 22.1784C11.7733 22.1784 11.5495 22.127 11.3454 22.028C11.1414 21.9291 10.9624 21.7851 10.822 21.607L4.22005 13.24C3.94152 12.8871 3.79004 12.4506 3.79004 12.001C3.79004 11.5514 3.94152 11.115 4.22005 10.762L10.823 2.39402V2.39302Z"
                  fill="#FFC107"
                />
              </g>
              <defs>
                <clipPath id="clip0_1512_1901">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Your ticket link would be sent to you via sms.</p>
          </Column>
        </MaxWidthWrapper>
      </Wrapper>
    </PageMeta>
  );
}

const MaxWidthWrapper = styled("main", {
  padding: "32px 16px 30px 16px",
  maxWidth: 390,
  marginInline: "auto",
  color: "#131416",

  "& h1": {
    maxWidth: "15ch",
    textAlign: "center",
    marginInline: "auto",
    marginTop: 48,
  },

  "& p": {
    color: "#595959",
    maxWidth: "24ch",
    textAlign: "center",
  },
});

const Wrapper = styled("main", {
  background: "#EAEAEA",
  height: "100vh",
});

const Form = styled("form", {
  paddingInline: 24,
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 54,
  width: "100%",
  fontSize: 16,
  fontWeight: "600",
  background: "linear-gradient(90deg, #1A69A2 0%, #3FAAF8 100%)",
  border: "none",
  borderRadius: 100,
  color: "White",
  cursor: "pointer",
});
