import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomStatic = ({ data }) => {
  return (
    <StyledComponent boxShadow={`-6px 0px 0px ${data.color}`}>
      <PartLeft01>
        <PartValue01>{data.value}</PartValue01>
        <PartText01>{data.text}</PartText01>
      </PartLeft01>
      <PartRight01>
        <img src={data.icon} width={"100%"} alt="" />
      </PartRight01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  padding: 50px 60px;
  box-sizing: border-box;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid rgba(113, 111, 150, 0.2);
  border-radius: 20px;

  transition: 0.5s;
  @media (max-width: 1650px) {
    padding: 40px 40px;
  }
`;

const PartLeft01 = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PartRight01 = styled(Box)`
    min-width: 75px;
    min-height : 75px;
`;

const PartValue01 = styled(Box)`
  display: flex;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 136%;
  /* or 65px */

  text-transform: capitalize;

  color: #0d1942;
`;

const PartText01 = styled(Box)`
  display: flex;

  margin-top: 10px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-align: start;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #716f96;
`;

export default CustomStatic;
