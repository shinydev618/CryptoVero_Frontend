import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Sidebar from "../../Layouts/Tax/Sidebar";
import Header from "../../Layouts/Tax/Header";
import Dashboard from "./Dashboard";
import { useParams } from "react-router-dom";

const TaxHome = () => {
  const { step: stepParam } = useParams();
  let stepNumber = Number(stepParam || "dashboard");
  const [step, setStep] = useState(stepNumber);
  let component;
  switch (step) {
    case "dashboard":
      component = <Dashboard />;
      break;
    // case 2:
    //   component =
    //   break
    // case 3:
    //   component =
    //   break
    // case 4:
    //   component =
    //   break;
    default:
      component = <Dashboard />;
  }

  return (
    <StyledComponent>
      <Sidebar />
      <PartRight01>
        <Header />
        <PartContent>{component}</PartContent>
      </PartRight01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #005e95;
`;

const PartRight01 = styled(Box)`
  display: flex;
  flex: 1;
  margin-left: 350px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: -28px 0px 68px #005080;
  border-radius: 60px 0px 0px 0px;
  z-index: 70;
`;

const PartContent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 90px;
  padding: 70px;
  box-sizing: border-box;
  border-top: 1px solid rgba(113, 111, 150, 0.2);

`;

export default TaxHome;
