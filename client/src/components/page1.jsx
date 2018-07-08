import React from 'react';
import {
  Holder, Login, Input, Button,
} from './styles/pageStylings';
import Logo from './logo';

export default function Page1(props) {
  const { currentPage, onBtnClick, onLogoClick } = props;
  if (currentPage === 1) {
    return (
      <Holder page="1">
        <Logo onLogoClick={onLogoClick} />
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
