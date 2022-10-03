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
        <PartLeft01>
          <TextTitle01>CryptoVero.fi</TextTitle01>
          <TextDescription01>
            Lorem ipsum is typically a corrupted finibus bonorum et malorum',
          </TextDescription01>
        </PartLeft01>
        <PartRight01>
          {dataFooterLink.map((each, index) => {
            return <CustomFooterLink data={each} key={index} />;
          })}
        </PartRight01>
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  background-image: url(${imgFooter01});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background-color: #0d1942; */
  justify-content: center;
  align-items: center;
`;

const PartMax01 = styled(Box)`
  display: flex;
  height: 300px;
  max-width: 1920px;
  width: 100%;
  padding: 70px 250px;
  box-sizing: border-box;
  align-items: center;
`;

const PartLeft01 = styled(Box)`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

const PartRight01 = styled(Box)`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const TextTitle01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  color: #ffffff;
`;

const TextDescription01 = styled(Box)`
  display: flex;
  margin-top: 20px;
  width: 350px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  /* or 194% */

  color: #ffffff;
  opacity: 0.7;
`;


export default Footer;
