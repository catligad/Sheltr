import React from 'react';
import Holder from './styles/holderStylings';
import Navi from './navi';
import LikedAnimalsCards from './page4LikedAnimalsCards';

export default function Page4(props) {
  const {
    currentPage, onLogoClick, likedAnimals, onHeartClick, onDeleteClick, changePage, onWriteClick,
  } = props;
  return (
    <Holder page={currentPage}>
      <Navi
        onLogoClick={onLogoClick}
        onHeartClick={onHeartClick}
        currentPage={currentPage}
      />
      <LikedAnimalsCards
        likedAnimals={likedAnimals}
        onDeleteClick={onDeleteClick}
        changePage={() => changePage(event, 5)}
        onWriteClick={onWriteClick}
      />
    </Holder>
  );
}
