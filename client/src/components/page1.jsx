import React from 'react';
import {
  Holder, Title, Login, Input, Button,
} from './styles/page1Stylings';
import logo from '../../public/icons/png/004-kennel.png';

const imgStyle = { height: '40px', width: '40px' };

export default function Page1(props) {
  const { currentPage } = props;
  if (currentPage === 1) {
    return (
      <Holder>
        <Title>
          <img src={logo} style={imgStyle} alt="logo" />
          Sheltr
        </Title>
        <Login>
          Email
          <Input />
          Password
          <Input type="password" />
          <Button>
          Log In!
          </Button>
        </Login>
      </Holder>
    );
  }
  return null;
}
