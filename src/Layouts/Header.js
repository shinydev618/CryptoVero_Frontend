import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledComponent>
      <PartMax01>
        <PartMark01>CryptoVero.fi</PartMark01>
        <PartLink01>
          <LinkEach01>Learn</LinkEach01>
          <LinkEach01 ml={"30px"}>Pricing</LinkEach01>
          <LinkEach01 ml={"100px"}>Sign in</LinkEach01>
          <LinkEach01 ml={"30px"}>Get Started for Free</LinkEach01>
        </PartLink01>
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 62px;
  justify-content: center;
  background-color: #005e95;
`;

const PartMax01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0px 190px 0px 190px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

const PartMark01 = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 138% */

  color: #ffffff;
  cursor: pointer;
`;

const PartLink01 = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LinkEach01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 138% */
  color: #ffffff;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    color: #69a0c1;
  }
`;

export default Header;
