import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomInputBox = ({ width, height, icon, text, type }) => {
  return (
    <Box display={"flex"} width={"100%"} height={"100%"} position={"relative"}>
      <StyledComponent
        component={"input"}
        type={type}
        placeholder={text}
        width={width}
        height={height}
      ></StyledComponent>
      <Icon01>{icon}</Icon01>
    </Box>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid rgba(113, 111, 150, 0.2);
  border-radius: 1000px;
  padding-left: 60px;
  padding-right: 30px;
  box-sizing: border-box;
  outline: none;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  color: #716f96;

  transition: 0.5s;
  &:hover {
    border: 1px solid #005e95;
  }
`;

const Icon01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 30px;
  color: #716f96;
  top: 50%;
  transform: translateY(-50%);
`;


export default CustomInputBox;
