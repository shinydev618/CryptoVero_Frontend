import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomLinkButtonTax = ({ data }) => {
  return (
    <StyledComponent>
      <PartIcon01>{data?.image}</PartIcon01>
      <PartText01>{data?.text}</PartText01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-left: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 72px;
  align-items: center;
  color: white;
  cursor: pointer;

  transition: 0.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const PartIcon01 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PartText01 = styled(Box)`
  display: flex;
  margin-left: 10px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;

  color: #ffffff;
`;

export default CustomLinkButtonTax;
