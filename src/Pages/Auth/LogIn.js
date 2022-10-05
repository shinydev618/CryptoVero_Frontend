import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgLogoBack01 from "../../Assets/Images/background/login_human01.png";
import CustomInputBox from "../../Components/CustomInputBox";
import CustomMainButton from "../../Components/CustomMainButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LogIn = () => {
  return (
    <StyledComponent>
      <PartMax01>
        <PartImage01>
          <ImageLogoBack01>
            <img src={imgLogoBack01} width={"100%"} height={"100%"} alt="" />
          </ImageLogoBack01>
          <TextTitle01>Hey there, Welcome aboard</TextTitle01>
          <TextDescription01>
            just a couple of clicks and we start
          </TextDescription01>
        </PartImage01>

        <PartLogin01>
          <PartContent01>
            <TextLogin01>Login to Continue</TextLogin01>
            <InputEmail01>
              <CustomInputBox
                width={"100%"}
                height={"100%"}
                text={"Email"}
                icon={<EmailOutlinedIcon />}
                type={"text"}
              />
            </InputEmail01>
            <InputPassword01>
              <CustomInputBox
                width={"100%"}
                height={"100%"}
                text={"Password"}
                icon={<LockOutlinedIcon />}
                type={"password"}
              />
            </InputPassword01>
            <ButtonLogin01>
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"LOGIN"}
                backColor={"#005E95"}
                color={"white"}
                borderRadius={"100px"}
                boxShadow={"0px 22px 55px rgba(0, 94, 149, 0.46)"}
              />
            </ButtonLogin01>
            <PartBorder01>
              <PartLine01></PartLine01>
              <TextOr01>Or</TextOr01>
              <PartLine01></PartLine01>
            </PartBorder01>
            {/* <PartOtherSign01>
          <EachSign01>
            <img src={imgApple01} width={"100%"} height={"100%"} alt={""} />
          </EachSign01>
          <EachSign01>
            <img src={imgGoogle01} width={"100%"} height={"100%"} alt={""} />
          </EachSign01>
          <EachSign01>
            <img src={imgFacebook01} width={"100%"} height={"100%"} alt={""} />
          </EachSign01>
        </PartOtherSign01> */}
          </PartContent01>
        </PartLogin01>
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const PartMax01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1920px;
`;

const PartImage01 = styled(Box)`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #005e95;

  transition: 0.5s;
  @media (max-width: 1400px) {
    flex: 1;
  }
`;

const PartLogin01 = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #faf9ff;
`;

const PartContent01 = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 450px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 400px;
  }
`;

const ImageLogoBack01 = styled(Box)`
  width: 450px;
  height: 450px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 300px;
    height: 300px;
  }
`;

const TextTitle01 = styled(Box)`
  margin-top: 30px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 200%;
  /* identical to box height, or 80px */
  display: flex;
  align-items: center;
  text-align: center;
  /* Palette / jnt-white-color */
  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 30px;
  }
`;

const TextDescription01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 200%;
  /* identical to box height, or 44px */
  display: flex;
  align-items: center;
  text-align: center;
  /* Palette / jnt-white-color */
  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

const TextLogin01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 136%;
  /* identical to box height, or 44px */

  text-align: center;
  text-transform: capitalize;

  color: #0d1942;
`;

const InputEmail01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 70px;
  margin-top: 50px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 60px;
  }
`;

const InputPassword01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 70px;
  margin-top: 20px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 60px;
  }
`;

const ButtonLogin01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 70px;
  margin-top: 30px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 60px;
  }
`;

const PartBorder01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 30px;
  align-items: center;
`;
const PartLine01 = styled(Box)`
  display: flex;
  height: 1px;
  flex: 1;
  background-color: #716f96;
  opacity: 0.3;
`;

const TextOr01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #716f96;
  margin-left: 10px;
  margin-right: 10px;
`;

const PartOtherSign01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const EachSign01 = styled(Box)`
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default LogIn;
