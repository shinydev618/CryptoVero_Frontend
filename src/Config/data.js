import imgPeople01 from "../Assets/Images/photo/risto.png";
import imgPeople02 from "../Assets/Images/photo/bethany.png";
import imgPeople03 from "../Assets/Images/photo/laura.png";
import imgEmail from "../Assets/Images/icons/email_circle.png";
import imgLinkedIn from "../Assets/Images/icons/linkedIn_circle.png";
import imgInstagram from "../Assets/Images/icons/instagram_circle.png";


export const dataGetStartedPrice = [
  {
    type: "Free",
    title: "Free",
    stitle: "",
    description: "Email Support",
    popular: false,
    content: [
      {
        text: "Data Ingestion Across 500+ Platforms",
        valid: true,
      },
      {
        text: "Current-Year Tax Forms for All Supported TaxBit Network Companies",
        valid: true,
      },
      {
        text: "DeFi and NFT Tax Engine*",
        valid: true,
      },
      {
        text: "Current-Year Tax Forms for All Other Platforms",
        valid: false,
      },
      {
        text: "Historical Tax Forms",
        valid: false,
      },
      {
        text: "Concierge Support for CSV Uploads",
        valid: false,
      },
      {
        text: "NFT Suite",
        valid: false,
      },
      {
        text: "Tax Optimization and Tax-Loss Harvesting",
        valid: false,
      },
      {
        text: "Portfolio Performance Suite",
        valid: false,
      },
      {
        text: "CPA Review and IRS Audit Support",
        valid: false,
      },
    ],
  },
  {
    type: "Pro",
    title: "$100",
    stitle: "/ month",
    description: "Live Web Chat Support",
    popular: true,
    content: [
      {
        text: "Data Ingestion Across 500+ Platforms",
        valid: true,
      },
      {
        text: "Current-Year Tax Forms for All Supported TaxBit Network Companies",
        valid: true,
      },
      {
        text: "DeFi and NFT Tax Engine*",
        valid: true,
      },
      {
        text: "Current-Year Tax Forms for All Other Platforms",
        valid: true,
      },
      {
        text: "Historical Tax Forms",
        valid: true,
      },
      {
        text: "Concierge Support for CSV Uploads",
        valid: true,
      },
      {
        text: "NFT Suite",
        valid: false,
      },
      {
        text: "Tax Optimization and Tax-Loss Harvesting",
        valid: false,
      },
      {
        text: "Portfolio Performance Suite",
        valid: false,
      },
      {
        text: "CPA Review and IRS Audit Support",
        valid: false,
      },
    ],
  },
  {
    type: "Enterprise",
    title: "$300",
    stitle: "/ month",
    description: "Dedicated Concierge + Live Web Chat",
    popular: false,
    content: [
      {
        text: "Data Ingestion Across 500+ Platforms",
        valid: true,
      },
      {
        text: "Current-Year Tax Forms for All Supported TaxBit Network Companies",
        valid: true,
      },
      {
        text: "DeFi and NFT Tax Engine*",
        valid: true,
      },
      {
        text: "Current-Year Tax Forms for All Other Platforms",
        valid: true,
      },
      {
        text: "Historical Tax Forms",
        valid: true,
      },
      {
        text: "Concierge Support for CSV Uploads",
        valid: true,
      },
      {
        text: "NFT Suite",
        valid: true,
      },
      {
        text: "Tax Optimization and Tax-Loss Harvesting",
        valid: true,
      },
      {
        text: "Portfolio Performance Suite",
        valid: true,
      },
      {
        text: "CPA Review and IRS Audit Support",
        valid: true,
      },
    ],
  },
];

export const dataTestimonials = [
  {
    image: imgPeople01,
    name: "Risto Korkeamäki",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    image: imgPeople02,
    name: "Risto Korkeamäki",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    image: imgPeople03,
    name: "Risto Korkeamäki",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

export const dataFooterLink = [
  {
    header: "CryptoVero",
    content: [
      { text: "Home", link: "", icon:"" },
      { text: "About", link: "", icon:"" },
      { text: "Blog", link: "", icon:"" },
    ],
  },
  {
    header: "Legal",
    content: [
      { text: "Security", link: "", icon:"" },
      { text: "Disclaimer", link: "", icon:"" },
      { text: "Privacy", link: "", icon:"" },
    ],
  },
  {
    header: "Contact",
    content: [
      { text: "Email", link: "", icon:imgEmail },
      { text: "LinkedIn", link: "", icon:imgLinkedIn },
      { text: "Instagram", link: "", icon:imgInstagram },
    ],
  },
];
