import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CSVReader = ({ setReportData }) => {
  const [file, setFile] = useState();
  // const [headerData, setHeaderData] = useState([]);
  const hiddenFileInput = React.useRef(null);

  useEffect(() => {
    const fileReader = new FileReader();

    const getReportData = (csvData) => {
      const csvHeader = csvData.slice(0, csvData.indexOf("\n")).split(",");
      const csvRows = csvData.slice(csvData.indexOf("\n") + 1).split("\n");

      const array = csvRows.map(i => {
        const values = i.split(",");
        const obj = csvHeader.reduce((object, header, index) => {
          object[header?.replace(/['"]+/g, '')] = values[index]?.replace(/['"]+/g, '');
          return object;
        }, {});
        return obj;
      });

      array.pop();
      setReportData(array);
      // const headerKeys = Object.keys(Object.assign({}, ...array));
      // setHeaderData(headerKeys);
    };

    function readCSV() {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
        getReportData(csvOutput)
      };
      fileReader.readAsText(file);
    };

    if (file) {
      readCSV();
    }
  }, [file, setReportData])

  const fileSelected = (e) => {
    setFile(e.target.files[0]);
  };

  const openCSV = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  }

  return (
    <StyledComponent>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          ref={hiddenFileInput}
          onChange={fileSelected}
        />

        <button
          onClick={(e) => {
            openCSV(e);
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
