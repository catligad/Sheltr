import React from 'react';
import {
  Holder, Title, Login, Input, Button, Image,
} from './styles/pageStylings';
import logo from '../../public/icons/png/004-kennel.png';

export default function Page1(props) {
  const { currentPage, onBtnClick, onLogoClick } = props;
  if (currentPage === 1) {
    return (
      <Holder page="1">
        <Title>
          <Image
            src={logo}
            type="logo"
            alt="logo"
            onClick={onLogoClick}
          />
          Sheltr
        </Title>
        <Login>
          Email
          <Input />
          Password
          <Input type="password" />
          <Button onClick={onBtnClick}>
            Log In!
          </Button>
        </Login>
      </Holder>
    );
  }
  return null;
}
