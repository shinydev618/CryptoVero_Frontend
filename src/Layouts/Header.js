import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgLogo01 from "../Assets/Images/mark/logo01.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Header = () => {
  const [flagLanguage, setFlagLanguage] = useState(true);
  return (
    <StyledComponent>
      <PartMax01>
        <PartMark01>
          <img src={imgLogo01} width={"100%"} height={"100%"} alt={""} />
        </PartMark01>
        <PartLink01>
          <LinkEach01>Solution</LinkEach01>
          <LinkEach01>Pricing</LinkEach01>
          <LinkEach01>Contact Us</LinkEach01>
          <LinkEach01>Sign Up</LinkEach01>
          <LinkEach01>Login</LinkEach01>
          <ButtonSwitchLanguage01>
            <Box display={"flex"} width="100%" height="100%">
              <ButtonLeft01
                onClick={() => setFlagLanguage(false)}
                flag={flagLanguage ? 1 : 0}
              >
                FIN
              </ButtonLeft01>
              <ButtonRight01
                onClick={() => setFlagLanguage(true)}
                flag={flagLanguage ? 1 : 0}
              >
                ENG
              </ButtonRight01>
            </Box>
          </ButtonSwitchLanguage01>
        </PartLink01>
        <ButtonMenu01>
          <MenuRoundedIcon />
        </ButtonMenu01>
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: fixed;
  width: 100%;
  min-height: 100px;
  justify-content: center;
  background-color: #ffffff;
  z-index: 100;

  transition: 0.5s;
  @media (max-width: 1024px) {
    min-height: 60px;
  }
`;

const PartMax01 = styled(Box)`
  display: flex;
  max-width: 1920px;
  width: 100%;
  padding: 0px 250px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1600px) {
    padding: 0px 150px;
  }
  @media (max-width: 1200px) {
    padding: 0px 80px;
  }
  @media (max-width: 1024px) {
    padding: 0px 50px;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
  }
`;

const PartMark01 = styled(Box)`
  display: flex;
  width: 235px;
  height: 35px;
  cursor: pointer;

  transition: 0.5s;
  @media (max-width: 1024px) {
    width: 165px;
    height: 25px;
  }
`;

const PartLink01 = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 30px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LinkEach01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  color: #0d1942;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    color: #005e95;
    text-shadow: 0px 0px 1px black;
  }
`;

const ButtonSwitchLanguage01 = styled(Box)`
  display: flex;
  width: 120px;
  height: 38px;
  background: #ffffff;
  box-shadow: 0px 12px 33px rgba(69, 62, 194, 0.25);
  border-radius: 10000px;
  padding: 3px;
  box-sizing: border-box;
  align-items: center;
`;

const ButtonLeft01 = styled(Box)`
  display: flex;
  width: 60px;
  height: 100%;
  color: ${({ flag }) => (flag ? "#005e95" : "#ffffff")};
  background: ${({ flag }) => (flag ? "white" : "#005e95")};
  border-radius: 10000px;
  justify-content: center;
  align-items: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  cursor: pointer;

  transition: 0.3s;
`;

const ButtonRight01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: ${({ flag }) => (!flag ? "#005e95" : "#ffffff")};
  background: ${({ flag }) => (!flag ? "white" : "#005e95")};
  border-radius: 10000px;
  cursor: pointer;

  transition: 0.3s;
`;

const ButtonMenu01 = styled(Box)`
  display: none;
  color: #0d1942;
  cursor: pointer;
  > svg {
    font-size: 2rem;
  }
  transition: 0.5s;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export default Header;
