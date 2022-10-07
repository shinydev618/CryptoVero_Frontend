import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomLinkButtonTax = ({ data }) => {
  return (
    <StyledComponent>
      <PartIcon01></PartIcon01>
      <PartText01></PartText01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 75px;
  align-items: center;
  color: white;
`;

const PartIcon01 = styled(Box)`
  display: flex;
`;
const PartText01 = styled(Box)`
  display: flex;
  margin-left: 16px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;

  color: #ffffff;
`;

export default CustomLinkButtonTax;
