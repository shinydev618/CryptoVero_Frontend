import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const CustomEachTestimonials = ({ data }) => {
  return (
    <StyledComponent>
      <TextName01>{data.name}</TextName01>
      <TextContent01>{data.text}</TextContent01>
      <ImageFace01>
        <img
          src={data.image}
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "100%" }}
          alt=""
        />
      </ImageFace01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 350px;
  background: #69a0c0;
  border-radius: 16px;
  padding: 80px 20px 30px 20px;
  align-items: center;
`;

const TextName01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 138% */

  letter-spacing: 0.1em;

  color: #000000;
`;

const TextContent01 = styled(Box)`
    margin-top: 30px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  /* or 153% */

  text-align: center;

  color: #000000;
`;

const ImageFace01 = styled(Box)`
  display: flex;
  position: absolute;
  top: -70px;
  width: 140px;
  height: 140px;
  border-radius: 100%;
`;

export default CustomEachTestimonials;
