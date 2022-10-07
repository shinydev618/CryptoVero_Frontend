import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const Header = () => {
  return <StyledComponent>123</StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  min-width: 90px;
  height: 90px;
  position: fixed;
  align-items: center;
  padding: 0px 70px;
  box-sizing: border-box;

  border-bottom: 1px solid #716f96;
`;

export default Header;
