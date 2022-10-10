import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CustomProgressTable from "../../Components/Tax/CustomProgressTable";

const Holdings = () => {
  return (
    <StyledComponent>
      <PartHeader01>
        <TextHeader01>Holdings</TextHeader01>
        <PartHeadRight01></PartHeadRight01>
      </PartHeader01>
      <PartTransactions01>
        <PartHeaderTransaction01>
          <TabHoldings01>Holdings</TabHoldings01>
          <TabHoldings01>Success</TabHoldings01>
        </PartHeaderTransaction01>
        <PartTableTransaction01>
        <CustomProgressTable data={new Array(10).fill(null)}  />
        </PartTableTransaction01>
      </PartTransactions01>
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

const PartTransactions01 = styled(Box)`
  display: flex;
  margin-top: 50px;
  border-radius: 20px;
  border: 1px solid rgba(113, 111, 150, 0.2);
  flex-direction: column;
  justify-content: space-between;
`;

const PartHeaderTransaction01 = styled(Box)`
  display: flex;
  height: 95px;
  /* padding: 0px 60px; */
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid rgba(113, 111, 150, 0.2);
`;

const PartTableTransaction01 = styled(Box)`
  display: flex;
  width: 100%;
`;

const TabHoldings01 = styled(Box)`
  display: flex;
  width: 210px;
  height: 100%;
  align-items: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */

  text-align: center;
  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #005e95;
  justify-content: center;
  border-bottom: 3px solid #005e95;
`;

export default Holdings;
