import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Image from './styles/imageStylings';
import msgLogo from '../../public/icons/png/love.png';
import settingsLogo from '../../public/icons/png/settings.png';

const LogoHolder = styled.div`
  position: absolute;
  width: inherit;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding-top: 15px;
  border-radius: 30px 30px 0px 0px;
  border-bottom: 1px solid grey;
  background-color: white;
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
