import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CustomStatic from "../../Components/Tax/CustomStatic";
import { dataTaxStatic, dataChartDashboard } from "../../Config/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  return (
    <StyledComponent>
      <PartHeader01>
        <TextHeader01>Dashboard</TextHeader01>
        <PartHeadRight01>Right</PartHeadRight01>
      </PartHeader01>
      <PartStatic01>
        {dataTaxStatic.dashboard.map((each, index) => {
          return <CustomStatic key={index} data={each} />;
        })}
      </PartStatic01>
      <PartPerformance01>
        <TextHeadPerformance01>Portfolio performance</TextHeadPerformance01>
        <PartChart01>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={"100%"}
              height={"100%"}
              data={dataChartDashboard}
              margin={{
                top: 50,
                right: 50,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="0 3" />
              <XAxis dataKey="axisX" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value01"
                // stroke="#8884d8"
                // activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </PartChart01>
      </PartPerformance01>
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
  align-items: center; ;
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

const PartStatic01 = styled(Box)`
  display: flex;
  margin-top: 50px;
  gap: 60px;
  align-items: center;
`;

const PartPerformance01 = styled(Box)`
  display: flex;
  margin-top: 50px;
  border-radius: 20px;
  border: 1px solid rgba(113, 111, 150, 0.2);
  flex-direction: column;
`;

const TextHeadPerformance01 = styled(Box)`
  display: flex;
  height: 95px;
  padding: 0px 60px;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid rgba(113, 111, 150, 0.2);
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #0d1942;
`;

const PartChart01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export default Dashboard;
