import React from 'react';
import Cards, { Card } from 'react-swipe-card';
import {
  Image, Description, Main, Name, Age, Body,
} from './styles/petCardStylings';
import noPicLogo from '../../public/icons/png/no-camera.png';
import './styles/styles.css';

export default ({
  data, info, onSwipe,
}) => {
  const cards = data.map((pet) => {
    let imgSrc;
    let type;
    if (pet.media) {
      imgSrc = pet.media.photo[2].$t;
      type = 'animal';
    } else {
      imgSrc = noPicLogo;
      type = 'none';
    }

    let desc = '';
    if (info) {
      desc = pet.description;
    } else if (!Array.isArray(pet.breeds)) {
      desc = pet.breeds.$t;
    } else {
      pet.breeds.forEach((breed) => {
        desc += `${breed.$t} `;
      });
    }
    return (
      <Card
        key={pet.name}
        onSwipeLeft={() => onSwipe('swipe', 'left')}
        onSwipeRight={() => onSwipe('swipe', 'right')}
      >
        <Image
          src={imgSrc}
          type={type}
        />
        <Description>
          <Main>
            <Name>
              {`${pet.name},`}
            </Name>
            <Age>
              {pet.age}
            </Age>
          </Main>
          <Body>
            {desc}
          </Body>
        </Description>
      </Card>
    );
  });
  return (
    <Cards
      onEnd={() => console.log('deck finished')}
      className="master-root"
    >
      {cards}
    </Cards>
  );
};
