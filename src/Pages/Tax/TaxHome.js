import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const TaxHome = () => {
  const { step: stepParam } = useParams();
  let stepNumber = Number(stepParam || 1);
  const [step, setStep] = useState(stepNumber);
  let component;
  // switch (step) {
  //   case 1:
  //     component = (
  //       <LoginPane
  //         setStep={setStep}
  //         redirectPath="/buyNFT"
  //         siteCopy={siteCopy}
  //         textLogin={textLogin}
  //       />
  //     );
  //     break;
  //   case 2:
  //     component = 
  //     break
  //   case 3:
  //     component = 
  //     break
  //   case 4:
  //     component = 
  //     break;
  //   default:
  //     component = 
  // }

  return <StyledComponent></StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #005e95;
`;

export default TaxHome;
