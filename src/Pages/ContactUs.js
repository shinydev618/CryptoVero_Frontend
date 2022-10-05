import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgMap01 from "../Assets/Images/background/map01.png";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { dataEmailType, dataContact } from "../Config/data";
import CustomMainButton from "../Components/CustomMainButton";
import CustomContact from "../Components/CustomContact";

const ContactUs = () => {
  const [emailType, setEmailType] = useState("Subject");

  return (
    <StyledComponent>
      <PartMaxHead01>
        <PartHeader01>
          <TextTitleHeader01>Contact</TextTitleHeader01>
          <TextDescriptionHeader01>
            Tempus egestas lorem nulla dui quis felis curabitur ultricies in.
            Ultrices in diam libero sapien sed blandit nisl purus. Non lectus
            scelerisque tincidunt lectus viverra molestie.
          </TextDescriptionHeader01>
        </PartHeader01>
        <PartGetInTouch02>
          <TextTitleGet01>Get In Touch</TextTitleGet01>
          <PartEmailAddress01>
            <TextField
              label="Your email"
              variant="outlined"
              sx={{ width: "100%", height: "100%" }}
            />
          </PartEmailAddress01>
          <SelectBox01>
            <TextField
              select
              onChange={(e) => {
                setEmailType(e.target.value);
              }}
              sx={{ width: "100%", height: "100%" }}
              value={emailType}
            >
              {dataEmailType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </SelectBox01>
          <PartEmailContent01>
            <TextField
              label="Message"
              rows={4}
              variant="outlined"
              sx={{ width: "100%", height: "100%" }}
              multiline
            />
          </PartEmailContent01>
          <PartButtonSubmit01>
            <ButtonSubmitNow01>
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"Submit now"}
                backColor={"#005E95"}
                color={"white"}
                borderRadius={"100px"}
              />
            </ButtonSubmitNow01>
          </PartButtonSubmit01>
        </PartGetInTouch02>
      </PartMaxHead01>
      <PartMap01>
        <PartGetInTouch01>
          <TextTitleGet01>Get In Touch</TextTitleGet01>
          <PartEmailAddress01>
            <TextField
              label="Your email"
              variant="outlined"
              sx={{ width: "100%", height: "100%" }}
            />
          </PartEmailAddress01>
          <SelectBox01>
            <TextField
              select
              onChange={(e) => {
                setEmailType(e.target.value);
              }}
              sx={{ width: "100%", height: "100%" }}
              value={emailType}
            >
              {dataEmailType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </SelectBox01>
          <PartEmailContent01>
            <TextField
              label="Message"
              rows={4}
              variant="outlined"
              sx={{ width: "100%", height: "100%" }}
              multiline
            />
          </PartEmailContent01>
          <PartButtonSubmit01>
            <ButtonSubmitNow01>
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"Submit now"}
                backColor={"#005E95"}
                color={"white"}
                borderRadius={"100px"}
              />
            </ButtonSubmitNow01>
          </PartButtonSubmit01>
        </PartGetInTouch01>
      </PartMap01>
      <PartDownMax01>
        <PartContact01>
          {dataContact.map((each, index)=>{
            return(
              <CustomContact data={each} key={index} />
            )
          })}
        </PartContact01>
      </PartDownMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #faf9ff;
  align-items: center;
`;

const PartMaxHead01 = styled(Box)`
  display: flex;
  position: relative;
  max-width: 1920px;
  width: 100%;
  background-color: #005e95;
  padding: 0px 250px;
  box-sizing: border-box;
  margin-top: 100px;
  justify-content: center;

  transition: 0.5s;
  @media (max-width: 1600px) {
    padding: 0px 150px;
  }
  @media (max-width: 1200px) {
    padding: 0px 80px;
  }
  @media (max-width: 1024px) {
    margin-top: 60px;
    padding: 0px 50px;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
  }
`;

const PartHeader01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #005e95;
  padding: 100px 0px;
  box-sizing: border-box;
`;
const TextTitleHeader01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 123.5%;
  /* identical to box height, or 79px */

  text-transform: capitalize;

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 500px) {
    font-size: 38px;
  }
`;
const TextDescriptionHeader01 = styled(Box)`
  width: 60%;
  margin-top: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 43px;
  /* or 215% */

  text-align: center;

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 18px;
    width: 80%;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 31px;
    width: 100%;
  }
`;

const PartMap01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1920px;
  height: 900px;
  background-image: url(${imgMap01});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  align-items: center;
  padding: 0px 250px;
  box-sizing: border-box;

  transition: 0.5s;
  @media (max-width: 1600px) {
    padding: 0px 150px;
  }
  @media (max-width: 1200px) {
    padding: 0px 80px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const PartGetInTouch01 = styled(Box)`
  display: flex;
  width: 600px;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 35px 80px rgba(13, 25, 66, 0.13);
  border-radius: 20.496px;
  padding: 80px 65px;
  box-sizing: border-box;
`;

const PartGetInTouch02 = styled(Box)`
  display: none;
  position: absolute;
  left: 50%;
  bottom: -520px;
  transform: translateX(-50%);
  width: 600px;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 35px 80px rgba(13, 25, 66, 0.13);
  border-radius: 20.496px;
  padding: 80px 65px;
  box-sizing: border-box;

  transition: 0.5;
  @media (max-width: 1024px) {
    display: flex;
    width: 450px;
    padding: 60px 50px;
  }
  @media (max-width: 500px) {
    display: flex;
    width: 330px;
    padding: 50px 30px;
    bottom: -500px;
  }
  @media (max-width: 350px) {
    display: flex;
    width: 300px;
    padding: 40px 20px;
    bottom: -480px;
  }
`;

const TextTitleGet01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 136%;
  /* or 54px */

  text-transform: capitalize;

  color: #0d1942;
  transition: 0.5;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const PartEmailAddress01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

const SelectBox01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const PartEmailContent01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const PartButtonSubmit01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 40px;

  transition: 0.5;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const ButtonSubmitNow01 = styled(Box)`
  display: flex;
  width: 200px;
  height: 60px;

  transition: 0.5;
  @media (max-width: 1024px) {
    width: 160px;
    height: 50px;
  }
`;

const PartDownMax01 = styled(Box)`
  display: flex;
  position: relative;
  max-width: 1920px;
  width: 100%;
  padding: 0px 250px;
  box-sizing: border-box;
  margin-top: 150px;
  justify-content: center;


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

const PartContact01 = styled(Box)`
  display: flex;
  width: 100%;
`;
export default ContactUs;
