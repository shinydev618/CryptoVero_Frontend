import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CSVReader = () => {
  const [file, setFile] = useState();
  const fileReader = new FileReader();

  const fileSelected = (e) => {
    setFile(e.target.files[0]);
  };

  const readCSV = (e) => {
    e.preventDefault();
    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
        console.log(csvOutput);
      };
      fileReader.readAsText(file);
    }
  };

  return (
    <StyledComponent>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={fileSelected}
        />

        <button
          onClick={(e) => {
            readCSV(e);
          }}
        >
          Read
        </button>
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
