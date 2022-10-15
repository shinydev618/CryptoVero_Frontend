import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import styled from "styled-components";
import CustomMainButton from "../../Components/CustomMainButton";
import CustomTransfterTable from "../../Components/Tax/CustomTransfterTable";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { dataSelectTransaction } from "../../Config/data";

const Transactions = () => {
  const [flagSelectType, setFlagSelectType] = useState(
    dataSelectTransaction.type[0]
  );
  const [flagSelectFlag, setFlagSelectFlag] = useState(
    dataSelectTransaction.flag[0]
  );
  const [flagSelectSource, setFlagSelectSource] = useState(
    dataSelectTransaction.source[0]
  );
  const [flagSelectCurrency, setFlagSelectCurrency] = useState(
    dataSelectTransaction.currency[0]
  );
  const [flagSelectDate, setFlagSelectDate] = useState(
    dataSelectTransaction.date[0]
  );

  const [flagSelectOrderBy, setFlagSelectOrderBy] = useState(
    dataSelectTransaction.orderBy[0]
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    axios.get("/api/trading/tx_covalent", { address: "0xa79e63e78eec28741e711f89a672a4c40876ebf3" }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <StyledComponent>
      <PartHeader01>
        <TextHeader01>Transactions</TextHeader01>
        <PartHeadRight01>
          <ButtonExport01>
            <CustomMainButton
              width={"100%"}
              height={"100%"}
              text={"Export transaction"}
              backColor={"#005E95"}
              color={"white"}
              borderRadius={"100px"}
              border={"1px solid #005E95"}
              fontSize={"16px"}
            />
          </ButtonExport01>
          <ButtonAdd01>
            <CustomMainButton
              width={"100%"}
              height={"100%"}
              text={"Add transaction"}
              backColor={"white"}
              border={"1px solid #005E95"}
              color={"#005E95"}
              borderRadius={"100px"}
              fontSize={"16px"}
            />
          </ButtonAdd01>
        </PartHeadRight01>
      </PartHeader01>
      <PartTransactions01>
        <PartHeaderTransaction01>
          <TextHeaderTransaction01>
            <TextField
              select
              onChange={(e) => {
                setFlagSelectType(e.target.value);
              }}
              sx={{ width: "145px", height: "50px", color: "#716F96" }}
              value={flagSelectType}
            >
              {dataSelectTransaction.type.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              onChange={(e) => {
                setFlagSelectFlag(e.target.value);
              }}
              sx={{ width: "145px", height: "50px", color: "#716F96" }}
              value={flagSelectFlag}
            >
              {dataSelectTransaction.flag.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              onChange={(e) => {
                setFlagSelectSource(e.target.value);
              }}
              sx={{ width: "145px", height: "50px", color: "#716F96" }}
              value={flagSelectSource}
            >
              {dataSelectTransaction.source.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              onChange={(e) => {
                setFlagSelectCurrency(e.target.value);
              }}
              sx={{ width: "145px", height: "50px", color: "#716F96" }}
              value={flagSelectCurrency}
            >
              {dataSelectTransaction.currency.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              onChange={(e) => {
                setFlagSelectDate(e.target.value);
              }}
              sx={{ width: "145px", height: "50px", color: "#716F96" }}
              value={flagSelectDate}
            >
              {dataSelectTransaction.date.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </TextHeaderTransaction01>
          <RightHeaderPart02>
            <TextOrderBy01>Order by</TextOrderBy01>
            <TextField
              select
              onChange={(e) => {
                setFlagSelectOrderBy(e.target.value);
              }}
              sx={{ width: "145px", height: "50px", color: "#716F96" }}
              value={flagSelectOrderBy}
            >
              {dataSelectTransaction.orderBy.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </RightHeaderPart02>
        </PartHeaderTransaction01>
        <PartTableTransaction01>
          <CustomTransfterTable data={new Array(10).fill(null)} />
        </PartTableTransaction01>
      </PartTransactions01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const PartHeader01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const TextHeader01 = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 51px;
  line-height: 64px;
  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #0d1942;
`;

const PartHeadRight01 = styled(Box)`
  display: flex;
`;

const ButtonExport01 = styled(Box)`
  display: flex;
  width: 250px;
  height: 60px;
`;

const ButtonAdd01 = styled(Box)`
  display: flex;
  margin-left: 20px;
  width: 250px;
  height: 60px;
`;

const PartTransactions01 = styled(Box)`
  display: flex;
  margin-top: 50px;
  border-radius: 20px;
  border: 1px solid rgba(113, 111, 150, 0.2);
  flex-direction: column;
  justify-content: space-between;
`;

const PartHeaderTransaction01 = styled(Box)`
  display: flex;
  height: 140px;
  padding: 0px 60px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(113, 111, 150, 0.2);
`;

const TextHeaderTransaction01 = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RightHeaderPart02 = styled(Box)`
  display: flex;
  align-items: center;
`;

const PartTableTransaction01 = styled(Box)`
  display: flex;
  width: 100%;
`;

const TextOrderBy01 = styled(Box)`
  display: flex;
  margin-right: 20px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #0d1942;
`;

// export const CustomTextField = styled(TextField)`
//   fieldset {
//     border-radius: 100px;
//   }
// `;

export default Transactions;
