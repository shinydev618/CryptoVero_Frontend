import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="#716F96">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const CustomProgressTable = ({ data }) => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TableContainer width={"100%"}>
      <Table sx={{ minWidth: 1024 }}>
        <TableBody>
          {data.map((each, index) => (
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                padding: "0px",
              }}
              hover
              key={index}
            >
              <TableCell align="left" width={"12px"}>
                {""}
              </TableCell>
              <TableCell align="left" width={"70px"}>
                <BoxIconProgress01></BoxIconProgress01>
              </TableCell>
              <TableCell align="left">
                <BoxProgress01>
                  <TextUpTransfter01>
                    <TextProgressEthBig>Ethereum</TextProgressEthBig>
                    <TextProgressEthSmall>(ETH)</TextProgressEthSmall>
                  </TextUpTransfter01>
                  <TextDownTransfter01>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgressWithLabel value={progress} />
                    </Box>
                  </TextDownTransfter01>
                </BoxProgress01>
              </TableCell>
              <TableCell align="left" width={"70px"}>
                <BoxCurrency01>
                  <TextUpCurrency01>ETH</TextUpCurrency01>
                  <TextDownCurrency01>USD</TextDownCurrency01>
                </BoxCurrency01>
              </TableCell>
              <TableCell align="left" width={"12px"}>
                {""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const BoxIconProgress01 = styled(Box)`
  display: flex;
  width: 65px;
  height: 65px;
  background: #005e95;
  opacity: 0.1;
  border-radius: 100%;
  /* margin-right: 20px; */
`;

const BoxProgress01 = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextUpTransfter01 = styled(Box)`
  display: flex;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */

  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #0d1942;
`;

const TextDownTransfter01 = styled(Box)`
  display: flex;
  margin-top: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  color: #716f96;
`;

const BoxCurrency01 = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextUpCurrency01 = styled(Box)`
  display: flex;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */

  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #0d1942;
`;

const TextDownCurrency01 = styled(Box)`
  display: flex;
  margin-top: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  color: #716f96;
`;

const TextProgressEthBig = styled(Box)`
  display: flex;
  margin-right: 10px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */

  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #0d1942;
`;

const TextProgressEthSmall = styled(Box)`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  color: #716f96;
`;

export default CustomProgressTable;
