import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomFooterLink = ({ data }) => {
  return (
    <StyledComponent>
      <TextHeader>{data.header}</TextHeader>
      <PartLink01>
        {data.content.map((each, index) => {
          return (
            <a href={each.link} style={{ textDecoration: "none" }} key={index}>
              <TextLink01>{each.text}</TextLink01>
            </a>
          );
        })}
      </PartLink01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const TextHeader = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
`;

const TextLink01 = styled(Box)`
  margin-top: 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* or 267% */

  color: #ffffff;
  opacity: 0.7;

  transition: 0.3s;
  &:hover {
    color: #005e95;
  }
`;

const PartLink01 = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export default CustomFooterLink;
