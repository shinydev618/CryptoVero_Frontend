import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgProfile01 from "../../Assets/Images/icons/profile01.jpg";
import { RiNotification2Line, RiLogoutCircleLine } from "react-icons/ri";
import BellIcon from "react-bell-icon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [flagAlertOver, setFlagAlertOver] = useState(false);

  return (
    <StyledComponent>
      <PartAlert01
        onMouseOver={() => {
          setFlagAlertOver(true);
        }}
        onMouseLeave={() => {
          setFlagAlertOver(false);
        }}
      >
        <BellIcon
          width="30"
          height="30"
          active={flagAlertOver}
          animate={flagAlertOver}
          color={"#0D1942"}
        />
        <PartPoint></PartPoint>
      </PartAlert01>
      <PartUser01>
        <PartImageProfile01>
          <img src={imgProfile01} width={"100%"} height={"100%"} alt="" />
        </PartImageProfile01>
        <TextUsername01>Rhonnie</TextUsername01>
      </PartUser01>
      <PartLogOut
        onClick={() => {
          navigate("/");
        }}
      >
        <IconLogOut>
          <RiLogoutCircleLine />
        </IconLogOut>
        <TextLogOut>Logout</TextLogOut>
      </PartLogOut>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  /* position: fixed; */
  width: 100%;
  min-height: 90px;
  height: 90px;
  align-items: center;
  padding: 0px 70px;
  box-sizing: border-box;
  justify-content: flex-end;
  /* border-bottom: 1px solid #716f96; */
  z-index: 68;
`;

const PartLogOut = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 50px;
  color: #f63e48;
  cursor: pointer;
`;

const IconLogOut = styled(Box)`
  display: flex;
  font-size: 1.8rem;
`;

const TextLogOut = styled(Box)`
  display: flex;
  margin-left: 5px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  /* #F63E48 */

  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 5px;
  }
`;

const PartUser01 = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const PartImageProfile01 = styled(Box)`
  display: flex;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  > img {
    border-radius: 100%;
  }
`;

const TextUsername01 = styled(Box)`
  display: flex;
  margin-left: 10px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  color: #0d1942;
`;

const PartAlert01 = styled(Box)`
  display: flex;
  position: relative;
  font-size: 1.8rem;
  color: #0d1942;
  cursor: pointer;
`;

const PartPoint = styled(Box)`
  display: flex;
  position: absolute;
  width: 10px;
  height: 10px;
  right: 5px;
  top: 0px;
  background-color: #f63e48;
  border-radius: 100%;
`;

export default Header;
