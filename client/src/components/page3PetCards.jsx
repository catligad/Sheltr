import React from 'react';
import Cards, { Card } from 'react-swipe-card';
import { Description, Title, NameAndAge } from './styles/page2Stylings';
import Image from './styles/imageStylings';
import noPicLogo from '../../public/icons/png/no-camera.png';
import './styles/styles.css';

export default ({
  data, info, onSwipeLeft, onSwipeRight,
}) => {
  console.log(data);
  return (
    <Cards
      onEnd={() => console.log('deck finished')}
      className="master-root"
    >
      {data.map((pet, i) => {
        let imgSrc;
        if (pet.media) {
          imgSrc = pet.media.photo[2].$t;
        } else {
          imgSrc = noPicLogo;
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
            onSwipeLeft={() => onSwipeLeft()}
            onSwipeRight={() => onSwipeRight()}
          >
            <Image
              src={imgSrc}
              type="animal"
            />
            <Description type="card">
              {desc}
            </Description>
          </Card>
        );
      })}
    </Cards>);
};
