import React from "react";
import logo from "assets/batyr.png";
import styled from "styled-components";
import { RiAccountCircleFill } from "react-icons/ri";

const HeaderContainer = styled.div`
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #262b2f;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
`;

const Logo = styled.img`
  padding: 0.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer onClick={() => console.log("bring to home page")}>
        <Logo src={logo} alt="logo" /> OGS
      </LogoContainer>
      <div>
        <RiAccountCircleFill size={50} color="white" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
