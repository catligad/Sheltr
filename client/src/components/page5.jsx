import React from 'react';
// import { write } from 'fs';
import Holder from './styles/holderStylings';
import Navi from './navi';
import {
  AllCardsHolder, CardHolder, Image, Input, Button,
} from './styles/likedAnimalsCardsStylings';
import {
  Description, Main, Name, Age, Body,
} from './styles/petCardStylings';

export default function Page5(props) {
  const {
    currentPage, onLogoClick, likedAnimals,
    writeAnimalIndex, onHeartClick,
  } = props;
  const animal = likedAnimals[writeAnimalIndex].data;
  console.log(animal);
  return (
    <Holder page={currentPage}>
      <Navi
        onLogoClick={onLogoClick}
        onHeartClick={onHeartClick}
        currentPage={currentPage}
      />
      <AllCardsHolder page5>
        <CardHolder page5>
          <Image
            page5
            src={animal.media.photo[2].$t}
          />
          <Description
            page5
          >
            <Main page5>
              <Name>
                {animal.name}
              </Name>
              <Age>
                {animal.age}
              </Age>
              <Body page5>
                {animal.description}
              </Body>
            </Main>
          </Description>
        </CardHolder>
        <Input type="text" placeholder="Hello, I would like to inquire about this animal." />
        <Button>
          Send
        </Button>
      </AllCardsHolder>
    </Holder>
  );
}
