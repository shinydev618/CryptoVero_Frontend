import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomContact = ({ data }) => {
  return (
    <StyledComponent>
      <PartUp01>
        <PartIcon01>
          <img src={data.icon} width={"100%"} height={"100%"} alt="" />
        </PartIcon01>
        <PartName01>{data.type}</PartName01>
      </PartUp01>
      <PartDown01>{data.contact}</PartDown01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 45px 65px;
  border: 1px solid rgba(113, 111, 150, 0.2);

  transition: 0.5s;
  &:hover {
    background-color: white;
  }

  transition: 0.5s;
  @media (max-width: 1600px) {
    padding: 30px 50px;
  }
  @media (max-width: 1200px) {
    padding: 20px 40px;
  }
`;

const PartUp01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const PartIcon01 = styled(Box)`
  display: flex;
  width: 90px;
  height: 90px;
  margin-right: 20px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 70px;
    height: 70px;
  }
`;

const PartName01 = styled(Box)`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 21.3333px;
  line-height: 43px;
  /* identical to box height, or 200% */
  letter-spacing: 4px;
  text-transform: uppercase;

  color: #005e95;
`;

const PartDown01 = styled(Box)`
  display: flex;
  height: 80px;
  margin-top: 20px;
  width: 100%;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 26.6667px;
  line-height: 43px;
  /* identical to box height, or 160% */

  color: #0d1942;
`;

export default CustomContact;
