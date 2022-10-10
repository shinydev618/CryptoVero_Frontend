import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Sidebar from "../../Layouts/Tax/Sidebar";
import Header from "../../Layouts/Tax/Header";
import Dashboard from "./Dashboard";
import Taxes from "./Taxes";
import Transactions from "./Transactions";
import Holdings from "./Holdings";

const TaxHome = () => {
  const { step: stepParam } = useParams();
  let stepNumber = stepParam || "Dashboard";
  const [step, setStep] = useState(stepNumber);
  const [flagClickLink, setFlagClickLink] = useState([
    true,
    false,
    false,
    false,
  ]);
  let component;
  switch (step) {
    case "Dashboard":
      component = <Dashboard setStep={setStep} setFlagClickLink={setFlagClickLink} />;
      break;
    case "Taxes":
      component = <Taxes />;
      break;
    case "Transactions":
      component = <Transactions />;
      break;
    case "Holdings":
      component = <Holdings />;
      break;
    default:
      component = <Dashboard />;
  }

  return (
    <StyledComponent>
      <Sidebar setStep={setStep} flagClickLink={flagClickLink} setFlagClickLink={setFlagClickLink} />
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
  flex-direction: column;
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
  /* margin-top: 90px; */
  padding: 70px;
  box-sizing: border-box;
  border-top: 1px solid rgba(113, 111, 150, 0.2);
`;

export default TaxHome;
