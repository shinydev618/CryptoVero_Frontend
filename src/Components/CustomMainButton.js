import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomMainButton = ({
  width,
  height,
  text,
  backColor,
  color,
  borderRadius,
  border,
  boxShadow
}) => {
  return (
    <StyledComponent
      width={width}
      height={height}
      bgcolor={backColor}
      color={color}
      borderRadius={borderRadius}
      border={border}
      boxShadow={boxShadow}
    >
      {text}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    color: #69a0c1;
    box-shadow: 0px 0px 25px rgba(0,0,0,0.5);
  }
  &:active {
    color: #69a0c1;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  }
`;

export default CustomMainButton;
