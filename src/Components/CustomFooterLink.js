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
              <Box display={"flex"} alignItems="center" mt={"20px"}>
                {each.icon ? (
                  <>
                    <Icon01>
                      <img
                        src={each.icon}
                        width={"100%"}
                        height={"100%"}
                        alt=""
                      />
                    </Icon01>
                    <TextLink01>{each.text}</TextLink01>
                  </>
                ) : (
                  <TextLink01>{each.text}</TextLink01>
                )}
              </Box>
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

  transition: 0.5s;
  @media (max-width: 500px) {
    height: 0%;
  }
`;

const TextHeader = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
`;

const TextLink01 = styled(Box)`
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* or 267% */

  color: #ffffff;
  opacity: 0.7;

  transition: 0.3s;
  &:hover {
    opacity: 1;
    text-shadow: 0px 0px 10px white;
  }
`;

const PartLink01 = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Icon01 = styled(Box)`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #005e95;
  margin-right: 10px;
`;

export default CustomFooterLink;
