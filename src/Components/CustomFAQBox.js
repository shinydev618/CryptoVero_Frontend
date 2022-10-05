import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Collapse from "@mui/material/Collapse";

const CustomFAQBox = ({ data }) => {
  const [flagFAQDown, setFlagFAQDown] = useState(false);

  return (
    <StyledComponent
      onClick={() => {
        setFlagFAQDown(!flagFAQDown);
      }}
    >
      <PartUp01>
        <TextTitle01>{data.title}</TextTitle01>
        <PartIcon01>
          {!flagFAQDown ? (
            <ArrowDropDownRoundedIcon />
          ) : (
            <ArrowDropUpRoundedIcon />
          )}
        </PartIcon01>
      </PartUp01>
      <Collapse in={flagFAQDown}>
        <PartDown01>{data.description}</PartDown01>
      </Collapse>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 55px 70px;
  border: 1px solid rgba(113, 111, 150, 0.2);
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: white;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding: 50px 60px;
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
  justify-content: space-between;
`;

const PartIcon01 = styled(Box)`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: #005e95;
  margin-left: 20px;
  > svg {
    font-size: 3rem;
  }
  cursor: pointer;

  transition: 0.5s;

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    > svg {
    font-size: 2.5rem;
  }
   
  }
  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
    font-size: 2rem;
  }
`;

const TextTitle01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 136%;
  /* identical to box height, or 44px */

  text-transform: capitalize;

  color: #0d1942;
  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const PartDown01 = styled(Box)`
  display: flex;
  margin-top: 20px;
  width: 100%;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 43px;
  /* identical to box height, or 160% */

  color: #0d1942;

  transition: 0.5s;
  @media (max-width: 1024px) {
    align-items: center;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export default CustomFAQBox;
