import React from "react";
import styled from "styled-components";
import wallpaperImage from "assets/background_pixel.png";
import Assets from "components/Assets/Assets";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1279ae;
`;
const Wallpaper = styled.img`
  height: 40vh;
  width: 100%;
`;

// background: rgb(2, 0, 36);
// background: linear-gradient(
//   90deg,
//   rgba(2, 0, 36, 1) 0%,
//   rgba(9, 9, 121, 1) 35%,
//   rgba(0, 212, 255, 1) 100%
// );

const Main = () => {
  return (
    <MainContainer>
      <Wallpaper src={wallpaperImage} alt="VPSH" />
      <Assets />
    </MainContainer>
  );
};

export default Main;
