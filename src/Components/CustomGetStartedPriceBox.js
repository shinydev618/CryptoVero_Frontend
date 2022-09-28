import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomGetStartedPriceBox = ({ data }) => {
  return (
    <StyledComponent>
      <TextType01>{data.type}</TextType01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 16px;
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const TextType01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* or 40px */
  text-transform: capitalize;

  color: #000000;
`;

export default CustomGetStartedPriceBox;
