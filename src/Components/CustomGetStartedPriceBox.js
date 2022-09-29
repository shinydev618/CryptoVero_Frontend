import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomMainButton from "./CustomMainButton";

const CustomGetStartedPriceBox = ({ data }) => {
  return (
    <StyledComponent>
      <TextType01 color={data.color}>{data.type}</TextType01>
      <TextTitle01>{data.title}</TextTitle01>
      <TextDescription01>{data.description}</TextDescription01>
      <PartContent01>
        {data.content.map((each, index) => {
          return (
            <PartEachService01 key={index}>
              <TextEachService01>{each.text}</TextEachService01>
              <IconEachService01 color={data.color}>
                {!each.valid ? <BlockIcon /> : <CheckCircleIcon />}
              </IconEachService01>
            </PartEachService01>
          );
        })}
      </PartContent01>
      <PartButton01>
        <CustomMainButton
          width={"100%"}
          height={"100%"}
          text={"Start "+data.type}
          backColor={data.color}
          color={"white"}
          borderRadius={"12px"}
        />
      </PartButton01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 16px;
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const TextType01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* or 40px */
  text-transform: capitalize;
`;

const TextTitle01 = styled(Box)`
  margin-top: 30px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 100%;
  /* or 40px */
  text-transform: capitalize;

  color: #000000;
`;

const TextDescription01 = styled(Box)`
  margin-top: 10px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* or 40px */
  text-transform: capitalize;

  color: #000000;
`;

const PartContent01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;
`;

const PartEachService01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  margin-top: 20px;
`;

const TextEachService01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  /* or 40px */
  text-transform: capitalize;
  color: #000000;
`;
const IconEachService01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
`;

const PartButton01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 50px;
`;

export default CustomGetStartedPriceBox;
