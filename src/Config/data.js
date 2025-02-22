import imgPeople01 from "../Assets/Images/photo/risto.png";
import imgPeople02 from "../Assets/Images/photo/bethany.png";
import imgPeople03 from "../Assets/Images/photo/laura.png";
import imgEmail from "../Assets/Images/icons/email_circle.png";
import imgLinkedIn from "../Assets/Images/icons/linkedIn_circle.png";
import imgInstagram from "../Assets/Images/icons/instagram_circle.png";
import imgEmailBig from "../Assets/Images/icons/email_circle_b.png";
import imgPhoneBig from "../Assets/Images/icons/phone_circle_b.png";
import imgAddressBig from "../Assets/Images/icons/address_circle_b.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import TaskIcon from "@mui/icons-material/Task";
import imgChart01 from "../Assets/Images/icons/chart01.png";
import imgChart02 from "../Assets/Images/icons/chart02.png";

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
      { text: "Home", link: "", icon: "" },
      { text: "About", link: "", icon: "" },
      { text: "Blog", link: "", icon: "" },
    ],
  },
  {
    header: "Legal",
    content: [
      { text: "Security", link: "", icon: "" },
      { text: "Disclaimer", link: "", icon: "" },
      { text: "Privacy", link: "", icon: "" },
    ],
  },
  {
    header: "Contact",
    content: [
      { text: "Email", link: "", icon: imgEmail },
      { text: "LinkedIn", link: "", icon: imgLinkedIn },
      { text: "Instagram", link: "", icon: imgInstagram },
    ],
  },
];

export const dataEmailType = [
  {
    value: "0",
    label: "Subject",
  },
  {
    value: "1",
    label: "Support",
  },
  {
    value: "2",
    label: "Marketing",
  },
  {
    value: "3",
    label: "Other",
  },
];

export const dataContact = [
  {
    type: "phone",
    contact: "+1 (234) 567-89-00",
    icon: imgPhoneBig,
  },
  {
    type: "email",
    contact: "info@agency.com",
    icon: imgEmailBig,
  },
  {
    type: "address",
    contact: "2247 Lunetta Street, TX 76301",
    icon: imgAddressBig,
  },
];

export const dataFAQ = [
  {
    title: "Mattis et magna elementum nunc.",
    description:
      "Facilisis sed sed laoreet morbi semper nec. Condimentum ultricies condimentum pellentesque velit nibh leo nunc. Pellentesque urna, fermentum tincidunt volutpat gravida mattis iaculis a, placerat. Iaculis malesuada et eu ultrices vitae amet. Integer ultrices quis sodales.",
  },
  {
    title: "Adipiscing dui ut nisi rhoncus.",
    description:
      "Facilisis sed sed laoreet morbi semper nec. Condimentum ultricies condimentum pellentesque velit nibh leo nunc. Pellentesque urna, fermentum tincidunt volutpat gravida mattis iaculis a, placerat. Iaculis malesuada et eu ultrices vitae amet. Integer ultrices quis sodales.",
  },
  {
    title: "Donec faucibus ac erat.",
    description:
      "Facilisis sed sed laoreet morbi semper nec. Condimentum ultricies condimentum pellentesque velit nibh leo nunc. Pellentesque urna, fermentum tincidunt volutpat gravida mattis iaculis a, placerat. Iaculis malesuada et eu ultrices vitae amet. Integer ultrices quis sodales.",
  },
  {
    title: "Erat mattis morbi aenean nisl.",
    description:
      "Facilisis sed sed laoreet morbi semper nec. Condimentum ultricies condimentum pellentesque velit nibh leo nunc. Pellentesque urna, fermentum tincidunt volutpat gravida mattis iaculis a, placerat. Iaculis malesuada et eu ultrices vitae amet. Integer ultrices quis sodales.",
  },
];

export const dataTaxLink = [
  {
    text: "Dashboard",
    image: <DashboardIcon />,
  },
  {
    text: "Taxes",
    image: <WorkHistoryIcon />,
  },
  {
    text: "Transactions",
    image: <NextWeekIcon />,
  },
  {
    text: "Holdings",
    image: <TaskIcon />,
  },
];

export const dataTaxStatic = {
  dashboard: [
    {
      value: "844.92",
      text: "Total market value",
      icon: imgChart01,
      color: "#B1DD34",
    },
    {
      value: "-$13.50",
      text: "Total 2022 realized gains/losses",
      icon: imgChart02,
      color: "#5E56E8",
    },
  ],
  taxes: [
    {
      value: "-$5,345.21",
      text: "ACTUAL ACQUISITION GAINS/LOSSES",
      icon: {},
      color: "#EF6565",
    },
    {
      value: "$13.50",
      text: "DEEMED ACQUISITION GAINS/LOSSES",
      icon: {},
      color: "#71E03D",
    },
    {
      value: "$9.50",
      text: "Total income",
      icon: {},
      color: "#005E95",
    },
  ],
};

export const dataChartDashboard = [
  {
    axisX: "Jan",
    axisY: "10",
    value01: "14",
  },
  {
    axisX: "Feb",
    axisY: "20",
    value01: "20",
  },
  {
    axisX: "Mar",
    axisY: "30",
    value01: "24",
  },
  {
    axisX: "Apr",
    axisY: "40",
    value01: "18",
  },
  {
    axisX: "May",
    axisY: "50",
    value01: "32",
  },
  {
    axisX: "Jun",
    value01: "36",
  },
  {
    axisX: "Jul",
    value01: "45",
  },
  {
    axisX: "Sep",
    value01: "39",
  },
  {
    axisX: "Oct",
    value01: "28",
  },
  {
    axisX: "Nov",
    value01: "35",
  },
  {
    axisX: "Dec",
    value01: "15",
  },
];

export const dataSelectTransaction = {
  type: ["Any Type", "Type01", "Type02", "Type03"],
  flag: ["Any Flag", "True", "False"],
  source: ["Any Source", "Source01", "Source02", "Source03"],
  currency: ["Any Currency", "Bitcoin", "Ethereum", "BSC", "Polygon"],
  date: ["Any Date", "2022 yrs", "2021 yrs"],
  orderBy:['Newest', 'Oldest']
};
