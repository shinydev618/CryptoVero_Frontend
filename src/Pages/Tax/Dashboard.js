import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CustomStatic from "../../Components/Tax/CustomStatic";
import { dataTaxStatic } from "../../Config/data";

const Dashboard = () => {
  return (
    <StyledComponent>
      <PartHeader01>
        <TextHeader01>Dashboard</TextHeader01>
        <PartHeadRight01>Right</PartHeadRight01>
      </PartHeader01>
      <PartStatic01>
        {dataTaxStatic.dashboard.map((each, index) => {
          return <CustomStatic key={index} data={each} />;
        })}
      </PartStatic01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const PartHeader01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
;
`;

const TextHeader01 = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 51px;
  line-height: 64px;
  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #0d1942;
`;

const PartHeadRight01 = styled(Box)`
  display: flex;
`;

const PartStatic01 = styled(Box)`
  display: flex;
  margin-top: 50px;
  gap: 60px;
  align-items: center;
`;
export default Dashboard;
