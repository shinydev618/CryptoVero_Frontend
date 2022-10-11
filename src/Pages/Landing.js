import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import CustomMainButton from "../Components/CustomMainButton";
import CustomGetStartedPriceBox from "../Components/CustomGetStartedPriceBox";
// import CustomEachTestimonials from "../Components/CustomEachTestimonials";
import CustomSupportImageBox from "../Components/CustomSupportImageBox";
import CustomGetStartedPriceSliderBox from "../Components/CustomGetStartedPriceSliderBox";
import imgIllustration0101 from "../Assets/Images/background/Crypt Vero1 IllustrationTransparent.png";
import imgIllustration0102 from "../Assets/Images/background/Crypt Vero2 IllustrationTransparent.png";
import imgSupport01 from "../Assets/Images/mark/support01.png";
import imgSupport02 from "../Assets/Images/mark/support02.png";
import imgSupport03 from "../Assets/Images/mark/support03.png";
import imgSupport04 from "../Assets/Images/mark/support04.png";
import imgSupport05 from "../Assets/Images/mark/support05.png";
import imgDashboard01 from "../Assets/Images/background/dashboard01.png";
import imgAnalysis01 from "../Assets/Images/background/analysis01.png";
import imgBackRound01 from "../Assets/Images/background/round01.png";
import { dataGetStartedPrice } from "../Config/data";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Landing = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <SliderArrowRightBox onClick={onClick}>
        <KeyboardArrowRightRoundedIcon />
      </SliderArrowRightBox>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <SliderArrowLeftBox onClick={onClick}>
        <KeyboardArrowLeftRoundedIcon />
      </SliderArrowLeftBox>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 1,
          speed: 500,
          slidesToScroll: 1,
          centerPadding: "20px",
          centerMode: true,
          variableWidth: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <StyledComponent>
      <Header />
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
            <img
              src={imgIllustration0101}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </PartTopRight01>
        </PartTop01>
        <PartSupportedPlatforms01>
          <Marquee
            gradient={true}
            gradientColor={[250, 249, 250]}
            // style={{ borderRadius: "20px", height: "100%" }}
            gradientWidth={"100px"}
            speed={"40"}
          >
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
          </Marquee>
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
          <PartPrice02>
            <Slider {...settings}>
              {dataGetStartedPrice.map((each, index) => {
                return (
                  <CustomGetStartedPriceSliderBox data={each} key={index} />
                );
              })}
            </Slider>
          </PartPrice02>
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
        <PartMaxTaxQuestions01>
          <PartGroupTaxQuestion01>
            <img
              src={imgIllustration0102}
              width={"100%"}
              height={"100%"}
              alt=""
            />
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
        </PartMaxTaxQuestions01>
      </PartTaxQuestion01>
      <Footer />
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
  align-items: center;
`;

const PartMax01 = styled(Box)`
  display: flex;
  max-width: 1920px;
  width: 100%;
  flex-direction: column;
  padding: 0px 250px;
  box-sizing: border-box;
  align-items: center;
  margin-top: 100px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    margin-top: 120px;
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

const PartTop01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    margin-top: 0px;
    flex-direction: column-reverse;
  }
`;

const PartTopLeft01 = styled(Box)`
  display: flex;
  flex-direction: column;
  top: 100px;
  flex: 1;
  width: 100%;

  transition: 0.5s;
  @media (max-width: 1400px) {
    align-items: center;
  }
`;

const PartTopTitleText01 = styled(Box)`
  display: flex;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 123.5%;
  /* or 79px */
  text-transform: capitalize;

  color: #0d1942;

  transition: 0.5s;
  @media (max-width: 1400px) {
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 500px) {
    font-size: 38px;
  }
`;

const PartTopRight01 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const PartTopContentText01 = styled(Box)`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 43px;
  /* or 215% */

  color: #716f96;
  /* or 153% */
  margin-top: 50px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 1024px) {
    margin-top: 30px;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    font-size: 16px;
  }
`;

const PartTopButton01 = styled(Box)`
  display: flex;
  width: 200px;
  height: 65px;
  margin-top: 50px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    margin-top: 30px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const PartGraphButton01 = styled(Box)`
  display: flex;
  width: 250px;
  height: 65px;

  transition: 0.5s;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const PartSupportedPlatforms01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  mix-blend-mode: luminosity;
  margin-top: 150px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    margin-top: 100px;
  }
`;

const PartDashboard01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;
const PartGroupLeft01 = styled(Box)`
  display: flex;
  width: 785px;
  /* height: 470px; */
  transition: 0.5s;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const PartGroupRight01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom: 50px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    margin-left: 0px;
    align-items: center;
    margin-top: 30px;
  }
`;

const PartTopTitleText02 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 136%;
  /* or 54px */

  text-transform: capitalize;
  margin-bottom: 30px;

  color: #0d1942;
  transition: 0.5s;
  @media (max-width: 1400px) {
    text-align: center;
  }
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

const PartTopContentText02 = styled(Box)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  /* or 194% */
  color: #716f96;
  margin-bottom: 30px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    text-align: center;
  }
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const PartGetStarted01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
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

  transition: 0.5s;
  @media (max-width: 1400px) {
    text-align: center;
  }
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

const PartPrice01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const PartPrice02 = styled(Box)`
  display: none;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const PartGenerate01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    flex-direction: column-reverse;
  }
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

  transition: 0.5s;
  @media (max-width: 1400px) {
    justify-content: center;
    text-align: center;
    margin-top: 50px;
  }
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 32px;
  }
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

  transition: 0.5s;
  @media (max-width: 1400px) {
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const PartGenerateButton01 = styled(Box)`
  display: flex;
  width: 250px;
  height: 65px;
  margin-top: 50px;

  transition: 0.5s;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const PartGenerateImage01 = styled(Box)`
  display: flex;
  width: 710px;
  margin-left: 50px;
  box-shadow: -27px 40px 122px rgba(0, 94, 149, 0.2);
  border-radius: 8px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    margin-left: 0px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

// const PartTestimonials01 = styled(Box)`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 100px;
//   margin-bottom: 200px;
// `;

// const TextTestimonialsSmallTitle01 = styled(Box)`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   font-family: "Outfit";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 20px;
//   line-height: 28px;
//   /* or 138% */

//   text-align: center;
//   letter-spacing: 0.1em;

//   color: #000000;
// `;

// const TextTestimonialsBigTitle01 = styled(Box)`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   font-family: "Outfit";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 30px;
//   line-height: 100%;
//   /* identical to box height, or 30px */

//   text-transform: capitalize;

//   color: #000000;
// `;

// const PartTestimonialsContent01 = styled(Box)`
//   display: flex;
//   width: 100%;
//   gap: 20px;
//   justify-content: space-between;
//   margin-top: 100px;
// `;

// const PartTestimonialsButton01 = styled(Box)`
//   display: flex;
//   width: 360px;
//   height: 60px;
//   margin-top: 50px;
// `;

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

  transition: 0.5;
  @media (max-width: 500px) {
    display: none;
  }
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

  transition: 0.5;
  @media (max-width: 500px) {
    display: none;
  }
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

  transition: 0.5;
  @media (max-width: 500px) {
    display: none;
  }
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

  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 50px;
    width: 200px;
  }
  @media (max-width: 500px) {
    font-size: 38px;
    width: 150px;
  }

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
  width: 700px;
  margin-top: 50px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const PartTaxQuestion01 = styled(Box)`
  display: flex;
  width: 100%;
  background-image: url(${imgBackRound01});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  margin-top: 100px;

  transition: 0.5s;
`;

const PartMaxTaxQuestions01 = styled(Box)`
  display: flex;
  max-width: 1920px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 250px;
  box-sizing: border-box;

  transition: 0.5s;
  @media (max-width: 1600px) {
    padding: 0px 150px;
  }
  @media (max-width: 1400px) {
    flex-direction: column;
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

const SliderArrowRightBox = styled(Box)`
  display: flex;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 33px;
  height: 33px;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #005e95;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  z-index: 200;
  cursor: pointer;
  > svg {
    font-size: 1.8rem;
  }
  &:active {
    > svg {
      font-size: 1.5rem;
    }
  }
`;
const SliderArrowLeftBox = styled(Box)`
  display: flex;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 33px;
  height: 33px;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #005e95;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  z-index: 200;
  cursor: pointer;
  > svg {
    font-size: 1.8rem;
  }
  &:active {
    > svg {
      font-size: 1.5rem;
    }
  }
`;
export default Landing;
