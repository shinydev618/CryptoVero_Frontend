import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomMainButton from "./CustomMainButton";

const CustomGetStartedPriceSliderBox = ({ data }) => {
  return (
    <StyledComponent bgcolor={!data.popular ? "white" : "#005E95"}>
      <TextType01 color={!data.popular ? "#005E95" : "white"}>
        {data.type}
      </TextType01>
      <TextTitle01 color={!data.popular ? "#0D1942" : "white"}>
        {data.title + "\u00a0"}
        <STitle01 color={!data.popular ? "#0D1942" : "white"}>
          {data.stitle}
        </STitle01>
      </TextTitle01>
      <TextDescription01
        color={!data.popular ? "#716F96" : "white"}
        style={{
          opacity: !data.popular ? "1" : "0.6",
        }}
      >
        {data.description}
      </TextDescription01>
      {!data.popular ? (
        <PartContent01>
          {data.content.map((each, index) => {
            return (
              <PartEachService01 key={index}>
                <IconEachService01 color={each.valid ? "#005E95" : "#B1B3C2"}>
                  <CheckCircleIcon />
                </IconEachService01>
                <TextEachService01 color={each.valid ? "#0D1942" : "#B1B3C2"}>
                  {each.text}
                </TextEachService01>
              </PartEachService01>
            );
          })}
        </PartContent01>
      ) : (
        <PartContent01>
          {data.content.map((each, index) => {
            return (
              <PartEachService01 key={index}>
                <IconEachService01 color={each.valid ? "white" : "#B1B3C2"}>
                  <CheckCircleIcon />
                </IconEachService01>
                <TextEachService01 color={each.valid ? "white" : "#B1B3C2"}>
                  {each.text}
                </TextEachService01>
              </PartEachService01>
            );
          })}
        </PartContent01>
      )}

      <PartButton01>
        <CustomMainButton
          width="100%"
          height="100%"
          text={"Choose " + data.type}
          backColor={!data.popular ? "white" : "white"}
          color={!data.popular ? "#0099FF" : "#005E95"}
          borderRadius={"100px"}
          border={!data.popular ? "1px solid #0099FF" : "1px solid white"}
        />
      </PartButton01>
      {data.popular ? <PartPopular01>Most Popular</PartPopular01> : <></>}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 20px;
  padding: 50px 30px;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  /* &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  } */
  transition: 0.5s;
  @media (max-width: 500px) {
    border-radius: 15px;
    padding: 30px 15px;
  }
`;

const PartPopular01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: 30px;
  width: 150px;
  height: 40px;
  background: #7771f1;
  border-radius: 19px 0px 0px 19px;
  justify-content: center;
  align-items: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 15.8378px;
  line-height: 26px;
  /* or 165% */

  text-align: center;

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 500px) {
    width: 110px;
    height: 30px;
    font-size: 12px;
    line-height: 19px;
  }
`;

const TextType01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 26.0858px;
  line-height: 33px;
  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  transition: 0.5s;
  @media (max-width: 500px) {
    font-size: 19px;
    line-height: 24px;
  }
`;

const TextTitle01 = styled(Box)`
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 47.5134px;
  line-height: 60px;
  /* identical to box height */

  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  transition: 0.5s;
  @media (max-width: 500px) {
    margin-top: 10px;
    font-size: 34px;
    line-height: 45px;
  }
  `;

const TextDescription01 = styled(Box)`
  height: 50px;
  margin-top: 10px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 21.4276px;
  line-height: 37px;

  transition: 0.5s;
  @media (max-width: 500px) {
    height: 30px;
    font-size: 16px;
    line-height: 27px;
  }
`;

const PartContent01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;

const PartEachService01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  
`;

const TextEachService01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* or 148% */

  transition: 0.5s;
  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 17px;
  }
`;
const IconEachService01 = styled(Box)`
  margin-right: 30px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;

  transition: 0.5s;
  @media (max-width: 500px) {
    margin-right: 20px;
    font-size: 12px;
    line-height: 100%;
  }
  @media (max-width: 350px) {
    margin-right: 10px;
  }
`;

const PartButton01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  margin-top: 50px;
`;

const STitle01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 21.4276px;
  line-height: 37px;
  /* identical to box height, or 174% */

  text-align: center;
  transition: 0.5s;
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 27px;
  }
`;

export default CustomGetStartedPriceSliderBox;
