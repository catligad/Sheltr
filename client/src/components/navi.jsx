import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Image from './styles/imageStylings';
import msgLogo from '../../public/icons/png/love.png';
import settingsLogo from '../../public/icons/png/settings.png';

const LogoHolder = styled.div`
  position: relative;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding-top: 1%;
  justify-content: space-around;
  border-radius: 30px 30px 0px 0px;
  border-bottom: 1px solid grey;
  background-color: white;
  box-shadow: 0 2px 2px -2px gray;
`;

export default ({ onLogoClick, onHeartClick }) => (
  <LogoHolder>
    <Image
      src={settingsLogo}
      alt="Settings"
      type="nav"
      nav="settings"
    />
    <Logo onLogoClick={onLogoClick} />
    <Image
      src={msgLogo}
      alt="Liked Animals"
      type="nav"
      nav="liked"
      onClick={() => onHeartClick()}
    />
  </LogoHolder>
);
