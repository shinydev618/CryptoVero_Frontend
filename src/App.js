import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Landing from "./Pages/Landing";
import ContactUs from "./Pages/ContactUs";
import LogIn from "./Pages/Auth/LogIn";
import SignUp from "./Pages/Auth/SignUp";
import TaxHome from "./Pages/Tax/TaxHome";
import "./Redux/api";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <StyledComponent>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<LogIn to="/LogIn" replace />} /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/TaxHome/:step"
            element={
              localStorage.getItem("userInfo") ? <TaxHome /> : <LogIn />
            }
          />
        </Routes>
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
  background-color: #faf9ff;
`;

export default App;
