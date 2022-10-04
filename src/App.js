import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Landing from "./Pages/Landing";
import ContactUs from "./Pages/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <StyledComponent>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Landing />
        <Footer />
      </BrowserRouter>
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