import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { dataTaxStatic } from "../../Config/data";
import CustomStatic from "../../Components/Tax/CustomStatic";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const Taxes = () => {
  const [flagSelectYear, setFlagSelectYear] = useState("2022");

  return (
    <StyledComponent>
      <PartHeader01>
        <TextHeader01>Taxes</TextHeader01>
        <PartHeadRight01>
          <TextField
            select
            onChange={(e) => {
              setFlagSelectYear(e.target.value);
            }}
            sx={{ width: "145px", height: "50px", color: "#716F96" }}
            value={flagSelectYear}
            SelectProps={{
              renderValue: (value) => flagSelectYear,
            }}
          >
            <MenuItem value={"2022"}>2022</MenuItem>
            <MenuItem value={"2020"}>2021</MenuItem>
            <MenuItem value={"2019"}>2020</MenuItem>
          </TextField>
        </PartHeadRight01>
      </PartHeader01>
      <PartStatic01>
        {dataTaxStatic.taxes.map((each, index) => {
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
  gap: 40px;
  align-items: center;
`;
export default Taxes;
