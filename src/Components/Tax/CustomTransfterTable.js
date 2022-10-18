import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CustomTransfterTable = ({ data }) => {
  const [pairs, setPairs] = useState("");

  useEffect(() => {
    if (data?.length > 0) {
      let pairs = "";
      data.map(item => {
        pairs += item.pair;
        pairs += ",";
        return pairs;
      });
      getPairs(pairs.slice(0, -1));
    }
  }, [data]);


  function getPairs(pairs) {
    const params = {
      pairs: pairs
    }
    axios.get("/api/kraken/pair", { params }).then((res) => {
      setPairs(res.data.result);
      return res.data.result;
    });
  }

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
              <TableCell align="left">
                <BoxTransfterOut01>
                  <BoxIconTransfter01></BoxIconTransfter01>
                  <BoxTextTransfter01>
                    <TextUpTransfter01>{each.type === "buy" ? "Transfer Out" : "Transfer In"}</TextUpTransfter01>
                    <TextDownTransfter01>Coinbase</TextDownTransfter01>
                  </BoxTextTransfter01>
                </BoxTransfterOut01>
              </TableCell>
              <TableCell align="left">
                <BoxDate01>{each.time}</BoxDate01>
              </TableCell>
              <TableCell align="left">
                <BoxPrice01>
                  <TextPrice01>{parseFloat(each.cost).toFixed(2)} {pairs[each.pair]?.quote}</TextPrice01>
                  <TextArrowRight01>
                    <HiOutlineArrowNarrowRight />
                  </TextArrowRight01>
                  <TextPrice01>{parseFloat(each.cost / each.price).toFixed(2)} {pairs[each.pair]?.base}</TextPrice01>
                </BoxPrice01>
              </TableCell>
              <TableCell align="left">
                <BoxGains01>
                  <TextUpGain01>No Gains</TextUpGain01>
                  <TextDownGain01>Not Taxable</TextDownGain01>
                </BoxGains01>
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

const BoxTransfterOut01 = styled(Box)`
  display: flex;
  align-items: center;
`;
const BoxIconTransfter01 = styled(Box)`
  display: flex;
  width: 65px;
  height: 65px;
  background: #005e95;
  opacity: 0.1;
  border-radius: 100%;
  margin-right: 20px;
`;

const BoxTextTransfter01 = styled(Box)`
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

const BoxDate01 = styled(Box)`
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

const BoxPrice01 = styled(Box)`
  display: flex;
  align-items: center;
`;
const TextPrice01 = styled(Box)`
  display: flex;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */

  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #005e95;
`;

const TextArrowRight01 = styled(Box)`
  display: flex;
  font-size: 2rem;
  color: rgba(0, 94, 149, 1);
  margin-left: 20px;
  margin-right: 20px;
`;

const BoxGains01 = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextUpGain01 = styled(Box)`
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

const TextDownGain01 = styled(Box)`
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

export default CustomTransfterTable;
