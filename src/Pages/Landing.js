import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CustomMainButton from "../Components/CustomMainButton";
import CustomEachTestimonials from "../Components/CustomEachTestimonials";
// import CustomImageSupport from "../Components/CustomImageSupport";
import imgComputer from "../Assets/Images/background/playing with a computer.png";
import imgSupport01 from "../Assets/Images/mark/support01.png";
import imgSupport02 from "../Assets/Images/mark/support02.png";
import imgSupport03 from "../Assets/Images/mark/support03.png";
import imgSupport04 from "../Assets/Images/mark/support04.png";
import imgDashboard01 from "../Assets/Images/background/dashboard01.png";
import imgWorking01 from "../Assets/Images/background/working01.png";
import { dataTestimonials } from "../Config/data";

const Landing = () => {
  return (
    <StyledComponent>
      <PartMax01>
        <PartTop01>
          <PartTopLeft01>
            <PartTopTitleText01>We handle your Taxes,</PartTopTitleText01>
            <PartTopTitleText01>
              {"\u00a0"}
              {"\u00a0"}
              {"\u00a0"}
              {"\u00a0"}
              {"\u00a0"}So you can focus on investing
            </PartTopTitleText01>
            <PartTopContentText01>
              Take Crypto Tax stress away! We are a certified Tax Software.
              Compile your Finnish taxes fast. We show you every step
            </PartTopContentText01>
            <PartTopButton01>
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"Try Now!"}
                backColor={"#0D1942"}
                color={"white"}
                borderRadius={"12px"}
              />
            </PartTopButton01>
          </PartTopLeft01>
          <PartTopRight01>
            <img src={imgComputer} width={"100%"} height={"100%"} alt="" />
          </PartTopRight01>
        </PartTop01>
        <PartSupportedPlatforms01>
          <TextSupportedText01>Supported Platforms</TextSupportedText01>
          <BoxSupported01>
            <ImageSupport01>
              <img src={imgSupport01} width={"100%"} height={"100%"} alt="" />
            </ImageSupport01>
            <ImageSupport02>
              <img src={imgSupport02} width={"100%"} height={"100%"} alt="" />
            </ImageSupport02>
            <ImageSupport03>
              <img src={imgSupport03} width={"100%"} height={"100%"} alt="" />
            </ImageSupport03>
            <ImageSupport04>
              <img src={imgSupport04} width={"100%"} height={"100%"} alt="" />
            </ImageSupport04>
          </BoxSupported01>
        </PartSupportedPlatforms01>
        <PartGraph01>
          <PartGroupLeft01>
            <img src={imgDashboard01} width={"100%"} height={"100%"} alt="" />
          </PartGroupLeft01>
          <PartGroupRight01>
            <PartTopTitleText02>
              Built for Crypto Beginners
              <br /> as well as <br />
              Crypto Power-users
            </PartTopTitleText02>
            <PartTopContentText02>
              We make it easy. <br />
              Simply import your transactions and let our
              <br />
              powerful platform do the rest.
              <br /> From just a few trades, to OGs with hundrend <br />
              of thousands of trades, we have the tools for <br />
              you!
            </PartTopContentText02>
            <PartGraphButton01>
              <CustomMainButton
                width={"100%"}
                height={"100%"}
                text={"Start for free"}
                backColor={"#0D1942"}
                color={"white"}
                borderRadius={"12px"}
              />
            </PartGraphButton01>
          </PartGroupRight01>
        </PartGraph01>
        <PartGetStarted01>
          <TextGetStartedTitle01>Get started for free</TextGetStartedTitle01>
          <PartPrice01>
            <PartPriceFree01>
              <TextEachPriceSmallTitle01></TextEachPriceSmallTitle01>
            </PartPriceFree01>
            <PartPricePro01></PartPricePro01>
            <PartPriceEnterprise01></PartPriceEnterprise01>
          </PartPrice01>
        </PartGetStarted01>
        <PartGenerate01>
          <PartGenerateText01>
            <TextGenerateTitle01>
              Generate VeroToimisto
              <br /> forms instantly <br />
              Get detailed Analysis
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
                backColor={"#0D1942"}
                color={"white"}
                borderRadius={"12px"}
              />
            </PartGenerateButton01>
          </PartGenerateText01>
          <PartGenerateImage01>
            <img src={imgWorking01} width={"100%"} height={"100%"} alt={""} />
          </PartGenerateImage01>
        </PartGenerate01>
        <PartTestimonials01>
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
        </PartTestimonials01>
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const PartMax01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  padding: 0px 190px 0px 190px;
  box-sizing: border-box;
`;

const PartTop01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  position: relative;
  margin-top: 50px;
`;

const PartTopLeft01 = styled(Box)`
  display: flex;
  position: absolute;
  flex-direction: column;
  z-index: 12;
  top: 100px;
`;

const PartTopTitleText01 = styled(Box)`
  display: flex;
  text-align: left;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  /* or 40px */
  text-transform: capitalize;
  color: #000000;
`;

const PartTopRight01 = styled(Box)`
  display: flex;
  position: absolute;
  width: 650px;
  height: 490px;
  right: -80px;
  z-index: 11;
`;

const PartTopContentText01 = styled(Box)`
  display: flex;
  width: 443px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  /* or 153% */
  margin-left: 50px;
  margin-top: 50px;
  color: #000000;
`;

const PartTopButton01 = styled(Box)`
  display: flex;
  margin-left: 200px;
  margin-top: 50px;
  width: 135px;
  height: 60px;
`;

const PartGraphButton01 = styled(Box)`
  display: flex;
  width: 185px;
  height: 60px;
`;

const PartSupportedPlatforms01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const TextSupportedText01 = styled(Box)`
  display: flex;
  text-align: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 138% */

  letter-spacing: 0.1em;
  color: #000000;
`;

const BoxSupported01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 90px;
  padding: 0px 60px 0px 60px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 94, 149, 0.59);
  border-radius: 8px;
  margin-top: 30px;
`;

const ImageSupport01 = styled(Box)`
  display: flex;
  width: 120px;
  height: 45px;
  cursor: pointer;
`;
const ImageSupport02 = styled(Box)`
  display: flex;
  width: 105px;
  height: 20px;
  cursor: pointer;
`;
const ImageSupport03 = styled(Box)`
  display: flex;
  width: 45px;
  height: 25px;
  cursor: pointer;
`;
const ImageSupport04 = styled(Box)`
  display: flex;
  width: 75px;
  height: 20px;
  cursor: pointer;
`;

const PartGraph01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 100px;
`;
const PartGroupLeft01 = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PartGroupRight01 = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-left: 100px;
  flex-direction: column;
`;

const PartTopTitleText02 = styled(Box)`
  display: flex;
  width: 370px;
  text-align: left;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  /* or 30px */

  text-transform: capitalize;

  color: #000000;
`;

const PartTopContentText02 = styled(Box)`
  display: flex;
  width: 443px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  /* or 153% */

  color: #000000;
  margin-top: 30px;
  margin-bottom: 30px;
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
  font-size: 30px;
  line-height: 100%;
  /* or 30px */
  text-transform: capitalize;
`;

const PartPrice01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const PartPriceFree01 = styled(Box)`
  display: flex;
  width: 345px;
  border-radius: 16px;
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;
`;

const PartPricePro01 = styled(Box)`
  display: flex;
  width: 345px;
  border-radius: 16px;
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;
`;

const PartPriceEnterprise01 = styled(Box)`
  display: flex;
  width: 345px;
  border-radius: 16px;
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;
`;

const TextEachPriceSmallTitle01 = styled(Box)`
  display: flex;
`;

const PartGenerate01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
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
  width: 100%;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  /* or 30px */

  text-transform: capitalize;

  color: #000000;
`;

const TextGenerateContent01 = styled(Box)`
  display: flex;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  /* or 153% */

  color: #000000;
  margin-top: 50px;
`;

const PartGenerateButton01 = styled(Box)`
  display: flex;
  width: 185px;
  height: 60px;
  margin-top: 50px;
`;

const PartGenerateImage01 = styled(Box)`
  display: flex;
  flex: 1.5;
  width: 100%;
  align-items: center;
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

export default Landing;
