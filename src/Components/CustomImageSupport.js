import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomImageSupport = ({ width, height, image }) => {
  return (
    <StyledComponent width={width} height={height}>
      <image src={image} width={"100%"} height={"100%"} />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CustomImageSupport;
