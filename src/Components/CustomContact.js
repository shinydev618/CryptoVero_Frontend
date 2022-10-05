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
  @media (max-width: 1204px) {
    padding: 35px 30px;
  }
  @media (max-width: 500px) {
    padding: 20px 20px;
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
  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
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
  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
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

  transition: 0.5s;
  @media (max-width: 1024px) {
    height: none;
    align-items: center;
    font-size: 23px;
  }
  @media (max-width: 500px) {
    margin-top: 10px;
    font-size: 20px;
  }
`;

export default CustomContact;
