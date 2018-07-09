import React from 'react';
import {
  Login, Input, Button,
} from './styles/page1Stylings';
import Holder from './styles/holderStylings';
import Logo from './logo';

export default function Page1(props) {
  const { currentPage, onBtnClick, onLogoClick } = props;
  return (
    <Holder page={currentPage}>
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
