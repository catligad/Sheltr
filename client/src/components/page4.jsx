import React from 'react';
import Holder from './styles/holderStylings';
import Navi from './navi';

export default function Page4(props) {
  const { currentPage, onLogoClick } = props;
  if (currentPage === 4) {
    return (
      <Holder page={currentPage}>
        <Navi onLogoClick={onLogoClick} />
      </Holder>
    );
  }
  return null;
}
