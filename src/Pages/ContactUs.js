import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledComponent>
      <PartMax01>
        <PartHeader01>
          <TextTitleHeader01>
            Contact
          </TextTitleHeader01>
          <TextDescriptionHeader01>
            Tempus egestas lorem nulla dui quis felis curabitur ultricies in. Ultrices in diam libero sapien sed blandit nisl purus. Non lectus scelerisque tincidunt lectus viverra molestie.
          </TextDescriptionHeader01>
        </PartHeader01>
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  background-color: #FAF9FF;
  justify-content: center;
  align-items: center;
`;

const PartMax01 = styled(Box)`
   display: flex;
  max-width: 1920px;
  width: 100%;
  flex-direction: column;
  padding: 0px 250px;
  box-sizing: border-box;
  align-items: center;
  margin-top: 100px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    margin-top: 120px;
    padding: 0px 150px;
  }
  @media (max-width: 1200px) {
    padding: 0px 80px;
  }
  @media (max-width: 1024px) {
    margin-top: 60px;
    padding: 0px 50px;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
  }
`;

const PartHeader01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  background-color: #005E95;
`
const TextTitleHeader01 = styled(Box)`
font-family: 'Outfit';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 123.5%;
/* identical to box height, or 79px */

text-transform: capitalize;

color: #FFFFFF;  
`
const TextDescriptionHeader01 = styled(Box)`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 43px;
/* or 215% */

text-align: center;

color: #FFFFFF;
`

export default ContactUs;
