import React from 'react';
import Holder from './styles/holderStylings';
import Navi from './navi';

const LikedAnimalsCards = ({ likedAnimals }) => {
  console.log(likedAnimals);
  return (
    <div>
Hello
    </div>
  );
};

export default function Page4(props) {
  const { currentPage, onLogoClick, likedAnimals } = props;
  if (currentPage === 4) {
    return (
      <Holder page={currentPage}>
        <Navi onLogoClick={onLogoClick} />
        <LikedAnimalsCards likedAnimals={likedAnimals} />
      </Holder>
    );
  }
  return null;
}
