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
}) => {
  return (
    <StyledComponent
      width={width}
      height={height}
      bgcolor={backColor}
      color={color}
      borderRadius={borderRadius}
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
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 138% */

  text-align: center;
  letter-spacing: 0.1em;
  cursor: pointer;
`;

export default CustomMainButton;
