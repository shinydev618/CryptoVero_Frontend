import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomFooterLink = ({ data }) => {
  return (
    <StyledComponent>
      <TextHeader>{data.header}</TextHeader>
      {data.content.map((each, index) => {
        return (
          <a href={each.link} style={{ textDecoration: "none" }} key={index} >
            <TextLink01>{each.text}</TextLink01>
          </a>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;

  flex-direction: column;
`;

const TextHeader = styled(Box)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
  margin-bottom: 10px;
`;

const TextLink01 = styled(Box)`
  margin-top: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    color: #69a0c1;
  }
`;

export default CustomFooterLink;
