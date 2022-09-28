import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgFooter01 from "../Assets/Images/background/footer01.png";
import CustomFooterLink from "../Components/CustomFooterLink";

const dataLink = [
  {
    header: "CryptoVero",
    content: [
      { text: "Home", link: "" },
      { text: "About", link: "" },
      { text: "Blog", link: "" },
    ],
  },
  {
    header: "Legal",
    content: [
      { text: "Security", link: "" },
      { text: "Disclaimer", link: "" },
      { text: "Privacy", link: "" },
    ],
  },
  {
    header: "Contact",
    content: [
      { text: "Email", link: "" },
      { text: "LinkedIn", link: "" },
      { text: "Instagram", link: "" },
    ],
  },
];

const Footer = () => {
  return (
    <StyledComponent>
      <PartMax01>
        {dataLink.map((each, index) => {
          return <CustomFooterLink data={each} key={index} />;
        })}
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;

  background-image: url(${imgFooter01});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  align-items: center;
`;

const PartMax01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 250px;
  max-width: 1440px;
  padding: 50px 190px 0px 190px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

export default Footer;
