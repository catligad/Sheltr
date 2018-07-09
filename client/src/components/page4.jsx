import React from 'react';
import Holder from './styles/holderStylings';
import Navi from './navi';

export default function Page4(props) {
  const { currentPage, onLogoClick } = props;
  if (currentPage === 4) {
    console.log(onLogoClick);
    return (
      <Holder page={currentPage}>
        <Navi onClick={onLogoClick} />
      </Holder>
    );
  }
  return null;
}
