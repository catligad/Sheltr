import React from 'react';
import uuid from 'uuid/v4';
import {
  CardHolder, Image, AllCardsHolder, Icon,
} from './styles/likedAnimalsCardsStylings';
import {
  Description, Main, Name, Age,
} from './styles/petCardStylings';
import noPicLogo from '../../public/icons/png/no-camera.png';
import cancel from '../../public/icons/png/cancel.png';

export default ({
  likedAnimals, onDeleteClick, changePage, onWriteClick,
}) => (
  <AllCardsHolder>
    {likedAnimals.map((pet, i) => {
      const id = uuid();
      let imgSrc;
      if (pet.data.media) {
        imgSrc = pet.data.media.photo[1].$t;
      } else {
        imgSrc = noPicLogo;
      }

      return (
        <CardHolder
          key={id}
        >
          <Image
            src={imgSrc}
            onClick={() => {
              changePage();
              onWriteClick(event, i);
            }}
          />
          <Description
            page4
            onClick={() => {
              changePage();
              onWriteClick(event, i);
            }}
          >
            <Main page4>
              <Name>
                {pet.data.name}
              </Name>
              <Age>
                {pet.data.age}
              </Age>
            </Main>
          </Description>
          <Icon
            src={cancel}
            onClick={() => onDeleteClick(i)}
          />
        </CardHolder>

      );
    })}
  </AllCardsHolder>
);
