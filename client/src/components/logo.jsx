import React from 'react';
import {
  Title, Image,
} from './styles/pageStylings';
import logo from '../../public/icons/png/pet.png';

export default ({ onLogoClick }) => (
  <Title>
    <Image
      src={logo}
      type="logo"
      alt="logo"
      onClick={() => onLogoClick()}
    />
    Sheltr
  </Title>
);
