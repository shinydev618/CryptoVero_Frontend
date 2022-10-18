import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CSVReader = () => {
  return (
    <StyledComponent>
      <form>
        <input type={"file"} accept={".csv"} />
        <button>IMPORT CSV</button>
      </form>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  border: 1px solid rgba(113, 111, 150, 0.2);
  border-radius: 20px;
  padding: 10px 20px;
`;

export default CSVReader;
