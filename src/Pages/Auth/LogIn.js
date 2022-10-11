import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgLogoBack01 from "../../Assets/Images/background/login_human01.png";
import CustomInputBox from "../../Components/CustomInputBox";
import CustomMainButton from "../../Components/CustomMainButton";
import imgGoogle01 from "../../Assets/Images/icons/google01.png";
import imgFacebook01 from "../../Assets/Images/icons/facebook01.png";
import imgComingSoon01 from "../../Assets/Images/background/coming_soon01.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import Header from "../../Layouts/Header";
import { actionLogIn } from "../../Redux/Actions/Auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgAlert, setMsgAlert] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = () => {
    if (email === "") {
      setMsgAlert("Type your email.");
      return;
    }
    if (email !== "") {
      if (!isValidEmail(email)) {
        setMsgAlert("Invalid email, check it again.");
        return;
      }
    }
    if (password === "") {
      setMsgAlert("Type your password.");
      return;
    }
    // setMsgAlert("Success!");
    // setTimeout(() => {
    //   navigate("/TaxHome/Dashboard");
    // }, 2000);
    let dataLogIn = {
      email: email,
      password: password,
    };
    console.log(dataLogIn);

    actionLogIn(dataLogIn).then((res) => {
      console.log(res);
      if (res.message === "no_user") {
        setMsgAlert("Can't find user.");
        return;
      }
      if (res.message === "no_permission") {
        setMsgAlert("Wait for approval.");
        return;
      }
      if (res.message === "wrong_pass") {
        setMsgAlert("Password is wrong.");
        return;
      }
      if (res.message === "success") {
        console.log(res.jwtToken);
        setMsgAlert("Success!");
        setTimeout(() => {
          navigate("/TaxHome/Dashboard");
        }, 2000);
      }
    });
  };

  const detectViewport = () => {
    return window.innerWidth >= 1024 ? "desktop" : "mobile";
  };
  const [viewport, setViewport] = useState(detectViewport());
  const changeViewport = () => {
    setViewport(detectViewport());
  };

  useEffect(() => {
    window.addEventListener("resize", changeViewport);
    return () => {
      window.removeEventListener("resize", changeViewport);
    };
  });

  return (
    <StyledComponent>
      {viewport === "desktop" ? (
        <PartMax01>
          <PartImage01>
            <ImageLogoBack01>
              <img src={imgLogoBack01} width={"100%"} height={"100%"} alt="" />
            </ImageLogoBack01>
            <TextTitle01>Hey there, Welcome aboard</TextTitle01>
            <TextDescription01>
              just a couple of clicks and we start
            </TextDescription01>
            <ButtonBack01
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"Back"}
                backColor={""}
                color={"white"}
                border={"2px solid white"}
                borderRadius={"100px"}
                boxShadow={"0px 0px 0px white"}
              />
            </ButtonBack01>
          </PartImage01>

          <PartLogin01>
            <PartContent01>
              <TextLogin01>Log In to Continue</TextLogin01>
              <InputEmail01>
                <CustomInputBox
                  width={"100%"}
                  height={"100%"}
                  text={"Email"}
                  icon={<EmailOutlinedIcon />}
                  type={"text"}
                  value={email}
                  action={setEmail}
                />
              </InputEmail01>
              <InputPassword01>
                <CustomInputBox
                  width={"100%"}
                  height={"100%"}
                  text={"Password"}
                  icon={<LockOutlinedIcon />}
                  type={"password"}
                  value={password}
                  action={setPassword}
                />
              </InputPassword01>
              <TextAlert01>{msgAlert}</TextAlert01>
              <ButtonLogin01 onClick={() => handleLogin()}>
                <CustomMainButton
                  width={"100%"}
                  height={"100%"}
                  text={"Log In"}
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
              <PartOtherSign01>
                <EachSign01 mr={"20px"}>
                  <IconEachSign01>
                    <img
                      src={imgGoogle01}
                      width={"100%"}
                      height={"100%"}
                      alt={""}
                    />
                  </IconEachSign01>
                  <TextEachSign01>Google</TextEachSign01>
                </EachSign01>
                <EachSign01>
                  <IconEachSign01>
                    <img
                      src={imgFacebook01}
                      width={"100%"}
                      height={"100%"}
                      alt={""}
                    />
                  </IconEachSign01>
                  <TextEachSign01>Facebook</TextEachSign01>
                </EachSign01>
              </PartOtherSign01>
              <PartAccountSign01>
                <TextLeft01>Don't have an account?</TextLeft01>
                <TextRight01
                  onClick={() => {
                    navigate("/SignUp");
                  }}
                >
                  Sign Up
                </TextRight01>
              </PartAccountSign01>
            </PartContent01>
          </PartLogin01>
        </PartMax01>
      ) : (
        <>
          <Header />
          <PartMobileMax01>
            <PartMobileContent01>
              <IamgeComingSoon01>
                <img
                  src={imgComingSoon01}
                  width={"100%"}
                  height={"100%"}
                  alt=""
                />
              </IamgeComingSoon01>
              <TextComingSoon01>
                Please log in on Desktop, Mobile
              </TextComingSoon01>
              <TextComingBorder01>Coming Soon</TextComingBorder01>
            </PartMobileContent01>
          </PartMobileMax01>
        </>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;

  transition: 0.5s;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
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

const ButtonBack01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 50px;
  top: 50px;
  height: 40px;
  width: 90px;
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

const TextAlert01 = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  height: 25px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  /* #F63E48 */
  color: #f63e48;
  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

const ButtonLogin01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 70px;
  margin-top: 10px;

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
  margin-top: 30px;
  justify-content: space-between;
`;

const EachSign01 = styled(Box)`
  display: flex;
  flex: 1;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(113, 111, 150, 0.2);
  border-radius: 1000px;

  cursor: pointer;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px black;
    text-shadow: 0px 0px 3px #005e95;
  }
  &:active {
    box-shadow: 0px 0px 5px black;
    text-shadow: 0px 0px 0px #005e95;
  }
`;

const IconEachSign01 = styled(Box)`
  display: flex;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

const TextEachSign01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #005e95;
`;

const PartAccountSign01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`;

const TextLeft01 = styled(Box)`
  margin-right: 10px;
  color: #716f96;
`;
const TextRight01 = styled(Box)`
  color: #005e95;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 3px;
  }
  &:active {
    text-shadow: 0px 0px 0px;
  }
`;

const PartMobileMax01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
`;

const PartMobileContent01 = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  background: #ffffff;
  border: 0.401392px solid rgba(113, 111, 150, 0.2);
  box-shadow: 0px 19px 34px rgba(0, 94, 149, 0.09), 0px -7px 0px #005e95;
  border-radius: 19px;
`;

const IamgeComingSoon01 = styled(Box)`
  display: flex;
  width: 125px;
  height: 125px;
`;

const TextComingSoon01 = styled(Box)`
  width: 300px;
  margin-top: 50px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  /* or 48px */

  text-align: center;
  text-transform: capitalize;

  color: #0d1942;
`;

const TextComingBorder01 = styled(Box)`
  position: relative;
  width: 200px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  /* or 48px */

  text-align: center;
  text-transform: capitalize;
  color: #005e95;

  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 0;
    height: 20px;
    width: 100%;
    border: solid 2px #005e95;
    border-color: #005e95 transparent transparent transparent;
    border-radius: 70%;
  }
`;

export default SignUp;
