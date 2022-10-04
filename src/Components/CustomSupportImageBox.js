import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomSupportImageBox = ({ width, height, image }) => {
  return (
    <StyledComponent width={width} height={height}>
      <img src={image} width={"100%"} height={"100%"} alt="" />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 150px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    margin-right: 100px;
  }
  @media (max-width: 500px) {
    margin-right: 50px;
  }
`;

export default CustomSupportImageBox;
