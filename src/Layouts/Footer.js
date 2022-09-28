import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgFooter01 from "../Assets/Images/background/footer01.png";
import CustomFooterLink from "../Components/CustomFooterLink";
import { dataFooterLink } from "../Config/data";

const Footer = () => {
  return (
    <StyledComponent>
      <PartMax01>
        {dataFooterLink.map((each, index) => {
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
