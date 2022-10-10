import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { dataTaxStatic } from "../../Config/data";
import CustomStatic from "../../Components/Tax/CustomStatic";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import CustomMainButton from "../../Components/CustomMainButton";

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
      <PartContent01>
        <PartContentLeft01>
          <PartHeaderTransaction01>
            <TextContentTitle02>2021 Tax Forms</TextContentTitle02>
            <PartRightContent01>
              <ButtonLearnMore01>
                <CustomMainButton
                  width={"100%"}
                  height={"100%"}
                  text={"learn more"}
                  backColor={"white"}
                  color={"#005E95"}
                  borderRadius={"100px"}
                  border={"1px solid #005E95"}
                  fontSize={"16px"}
                />
              </ButtonLearnMore01>
            </PartRightContent01>
          </PartHeaderTransaction01>
          <PartContentDown01></PartContentDown01>
        </PartContentLeft01>
        <PartContentRight01>
          <PartHeaderTransaction01>
            <TextContentTitle02>Cost Basis Method</TextContentTitle02>
            <PartRightContent01>
              <ButtonLearnMore01>
                <CustomMainButton
                  width={"100%"}
                  height={"100%"}
                  text={"learn more"}
                  backColor={"white"}
                  color={"#005E95"}
                  borderRadius={"100px"}
                  border={"1px solid #005E95"}
                  fontSize={"16px"}
                />
              </ButtonLearnMore01>
            </PartRightContent01>
          </PartHeaderTransaction01>
          <PartContentDown01></PartContentDown01>
        </PartContentRight01>
      </PartContent01>
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

const PartContent01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;
  gap: 20px;
  justify-content: space-between;
`;

const PartContentLeft01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(113, 111, 150, 0.2);
  flex-direction: column;
`;

const PartContentRight01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(113, 111, 150, 0.2);
  flex-directiocolumnn
`;

const PartHeaderTransaction01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 95px;
  padding: 0px 60px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(113, 111, 150, 0.2);
`;

const TextContentTitle02 = styled(Box)`
  display: flex;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #0d1942;
`;

const PartRightContent01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonLearnMore01 = styled(Box)`
  display: flex;
  width: 155px;
  height: 40px;
`;

const PartContentDown01 = styled(Box)`
  display: flex;
  width: 100%;
`;

export default Taxes;
