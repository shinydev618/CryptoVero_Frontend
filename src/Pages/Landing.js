import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CustomMainButton from "../Components/CustomMainButton";
import CustomGetStartedPriceBox from "../Components/CustomGetStartedPriceBox";
// import CustomEachTestimonials from "../Components/CustomEachTestimonials";
import CustomSupportImageBox from "../Components/CustomSupportImageBox";
import imgComputer from "../Assets/Images/background/playing with a computer.png";
import imgSupport01 from "../Assets/Images/mark/support01.png";
import imgSupport02 from "../Assets/Images/mark/support02.png";
import imgSupport03 from "../Assets/Images/mark/support03.png";
import imgSupport04 from "../Assets/Images/mark/support04.png";
import imgSupport05 from "../Assets/Images/mark/support05.png";
import imgDashboard01 from "../Assets/Images/background/dashboard01.png";
import imgAnalysis01 from "../Assets/Images/background/analysis01.png";
import imgBackRound01 from "../Assets/Images/background/round01.png";
import { dataGetStartedPrice, dataTestimonials } from "../Config/data";

const Landing = () => {
  return (
    <StyledComponent>
      <PartMax01>
        <PartTop01>
          <PartTopLeft01>
            <PartTopTitleText01>
              We handle your Taxes, So you can focus on
            </PartTopTitleText01>
            <TextCurveline01>Investing</TextCurveline01>
            <PartTopContentText01>
              Take Crypto Tax stress away! We are a certified Tax Software.
              Compile your Finnish taxes fast. We show you every step
            </PartTopContentText01>

            <PartTopButton01>
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"Try Now!"}
                backColor={"#005e95"}
                color={"white"}
                borderRadius={"100px"}
                boxShadow={"0px 22px 55px rgba(0, 94, 149, 0.46)"}
              />
            </PartTopButton01>
          </PartTopLeft01>
          <PartTopRight01>
            <img src={imgComputer} width={"100%"} height={"100%"} alt="" />
          </PartTopRight01>
        </PartTop01>
        <PartSupportedPlatforms01>
          <CustomSupportImageBox
            width={"180px"}
            height={"60px"}
            image={imgSupport01}
          />
          <CustomSupportImageBox
            width={"135px"}
            height={"40px"}
            image={imgSupport02}
          />
          <CustomSupportImageBox
            width={"145px"}
            height={"60px"}
            image={imgSupport03}
          />
          <CustomSupportImageBox
            width={"105px"}
            height={"25px"}
            image={imgSupport04}
          />
          <CustomSupportImageBox
            width={"155px"}
            height={"30px"}
            image={imgSupport05}
          />
        </PartSupportedPlatforms01>
        <PartDashboard01>
          <PartGroupLeft01>
            <img src={imgDashboard01} width={"100%"} height={"100%"} alt="" />
          </PartGroupLeft01>
          <PartGroupRight01>
            <PartTopTitleText02>
              Built for Crypto Beginners as well as Crypto Power-users
            </PartTopTitleText02>
            <PartTopContentText02>
              We make it easy. Simply import your transactions and let our
              powerful platform do the rest. From just a few trades, to OGs with
              hundrend of thousands of trades, we have the tools for you!
            </PartTopContentText02>
            <PartGraphButton01>
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"Start for free"}
                backColor={"#005E95"}
                color={"white"}
                borderRadius={"100px"}
                boxShadow={"0px 22px 55px rgba(0, 94, 149, 0.46)"}
              />
            </PartGraphButton01>
          </PartGroupRight01>
        </PartDashboard01>
        <PartGetStarted01>
          <TextGetStartedTitle01>Get started for free</TextGetStartedTitle01>
          <PartPrice01>
            {dataGetStartedPrice.map((each, index) => {
              return <CustomGetStartedPriceBox data={each} key={index} />;
            })}
          </PartPrice01>
        </PartGetStarted01>
        <PartGenerate01>
          <PartGenerateText01>
            <TextGenerateTitle01>
              Generate VeroToimisto forms instantly Get detailed Analysis
            </TextGenerateTitle01>
            <TextGenerateContent01>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inct alt nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim iborum.
            </TextGenerateContent01>
            <PartGenerateButton01>
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"Start for free"}
                backColor={"#005E95"}
                color={"white"}
                borderRadius={"100px"}
                boxShadow={"0px 22px 55px rgba(0, 94, 149, 0.46)"}
              />
            </PartGenerateButton01>
          </PartGenerateText01>
          <PartGenerateImage01>
            <img src={imgAnalysis01} width={"100%"} height={"100%"} alt={""} />
          </PartGenerateImage01>
        </PartGenerate01>
        {/* <PartTestimonials01>
          <TextTestimonialsSmallTitle01>
            Testimonials
          </TextTestimonialsSmallTitle01>
          <TextTestimonialsBigTitle01>
            Read what others are saying
          </TextTestimonialsBigTitle01>
          <PartTestimonialsContent01>
            {dataTestimonials.map((each, index) => {
              return <CustomEachTestimonials data={each} key={index} />;
            })}
          </PartTestimonialsContent01>
          <PartTestimonialsButton01>
            <CustomMainButton
              width={"100%"}
              height={"100%"}
              text={"Try Now"}
              backColor={"#0D1942"}
              color={"white"}
              borderRadius={"12px"}
            />
          </PartTestimonialsButton01>
        </PartTestimonials01> */}
      </PartMax01>
      <PartTaxQuestion01>
        <PartGroupTaxQuestion01>
          <img src={imgComputer} width={"100%"} height={"100%"} alt="" />
        </PartGroupTaxQuestion01>
        <PartGroupRight01>
          <PartTopTitleText02>
            We Guide You Through All Your Tax Questions
          </PartTopTitleText02>
          <PartTopContentText02>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor inct alt nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim iborum.
          </PartTopContentText02>
          <PartGraphButton01>
            <CustomMainButton
              width={"100%"}
              height={"100%"}
              text={"Start for free"}
              backColor={"#005E95"}
              color={"white"}
              borderRadius={"100px"}
              boxShadow={"0px 22px 55px rgba(0, 94, 149, 0.46)"}
            />
          </PartGraphButton01>
        </PartGroupRight01>
      </PartTaxQuestion01>
      <PartBackCircle01></PartBackCircle01>
      <PartBackCircle02></PartBackCircle02>
      <PartBackCircle03></PartBackCircle03>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  background-color: #faf9ff;
  flex-direction: column;
`;

const PartMax01 = styled(Box)`
  display: flex;
  max-width: 1920px;
  width: 100%;
  flex-direction: column;
  padding: 0px 250px;
  box-sizing: border-box;
`;

const PartTop01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`;

const PartTopLeft01 = styled(Box)`
  display: flex;
  flex-direction: column;
  top: 100px;
  flex: 1;
  width: 100%;
`;

const PartTopTitleText01 = styled(Box)`
  display: flex;
  width: 670px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 123.5%;
  /* or 79px */

  text-transform: capitalize;

  color: #0d1942;
`;

const PartTopRight01 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 630px;
`;

const PartTopContentText01 = styled(Box)`
  display: flex;
  width: 600px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 43px;
  /* or 215% */

  color: #716f96;
  /* or 153% */
  margin-top: 50px;
`;

const PartTopButton01 = styled(Box)`
  display: flex;
  width: 200px;
  height: 65px;
  margin-top: 50px;
`;

const PartGraphButton01 = styled(Box)`
  display: flex;
  width: 250px;
  height: 65px;
`;

const PartSupportedPlatforms01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  mix-blend-mode: luminosity;
  margin-top: 150px;
`;

const PartDashboard01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin-top: 100px;
`;
const PartGroupLeft01 = styled(Box)`
  display: flex;
  width: 785px;
  height: 470px;
`;

const PartGroupRight01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  margin-left: 50px;
  gap: 50px;
`;

const PartTopTitleText02 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 136%;
  /* or 54px */

  text-transform: capitalize;

  color: #0d1942;
`;

const PartTopContentText02 = styled(Box)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  /* or 194% */
  color: #716f96;
`;

const PartGetStarted01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const TextGetStartedTitle01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 136%;
  /* or 54px */

  text-align: center;
  text-transform: capitalize;

  color: #0d1942;
`;

const PartPrice01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
`;

const PartGenerate01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin-top: 100px;
`;

const PartGenerateText01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const TextGenerateTitle01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 136%;
  /* or 54px */

  text-transform: capitalize;

  color: #0d1942;
`;

const TextGenerateContent01 = styled(Box)`
  display: flex;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  /* or 194% */

  color: #716f96;
  margin-top: 50px;
`;

const PartGenerateButton01 = styled(Box)`
  display: flex;
  width: 250px;
  height: 65px;
  margin-top: 50px;
`;

const PartGenerateImage01 = styled(Box)`
  display: flex;
  width: 710px;
  height: 450px;
`;

const PartTestimonials01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 200px;
`;

const TextTestimonialsSmallTitle01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* or 138% */

  text-align: center;
  letter-spacing: 0.1em;

  color: #000000;
`;

const TextTestimonialsBigTitle01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  /* identical to box height, or 30px */

  text-transform: capitalize;

  color: #000000;
`;

const PartTestimonialsContent01 = styled(Box)`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  margin-top: 100px;
`;

const PartTestimonialsButton01 = styled(Box)`
  display: flex;
  width: 360px;
  height: 60px;
  margin-top: 50px;
`;

const PartBackCircle01 = styled(Box)`
  position: absolute;
  width: 700px;
  height: 700px;
  background: #005e95;
  opacity: 0.15;
  border: 1px solid #0d1942;
  filter: blur(200px);
  left: -406px;
  top: -405px;
`;

const PartBackCircle02 = styled(Box)`
  position: absolute;
  width: 700px;
  height: 700px;
  background: #005e95;
  opacity: 0.15;
  border: 1px solid #0d1942;
  filter: blur(200px);
  right: -400px;
  top: -405px;
`;

const PartBackCircle03 = styled(Box)`
  position: absolute;
  width: 700px;
  height: 700px;
  background: #005e95;
  opacity: 0.15;
  border: 1px solid #0d1942;
  filter: blur(200px);
  right: -400px;
  top: 800px;
`;

const TextCurveline01 = styled(Box)`
  position: relative;
  width: 270px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 123.5%;
  /* or 79px */

  text-transform: capitalize;
  color: #005e95;
  margin-top: 0px;

  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 0;
    height: 30px;
    width: 100%;
    border: solid 2px #005e95;
    border-color: #005e95 transparent transparent transparent;
    border-radius: 70%;
  }
`;
const PartGroupTaxQuestion01 = styled(Box)`
  display: flex;
  width: 650px;
  height: 650px;
  margin-top: 50px;
`;

const PartTaxQuestion01 = styled(Box)`
  display: flex;
  width: 100%;
  background-image: url(${imgBackRound01});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0px 200px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin-top: 100px;
`;

export default Landing;
