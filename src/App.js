import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Landing from "./Pages/Landing";

const App = () => {
  return (
    <StyledComponent>
      <Header />
      <Landing />
      <Footer />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  flex-direction: column;
  background-color: white;
`;

export default App;