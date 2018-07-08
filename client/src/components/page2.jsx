import React from 'react';
import {
  Holder, Title, ImageHolder, Image, Animal, Description, Pregunta,
} from './styles/pageStylings';
import logo from '../../public/icons/png/004-kennel.png';

const images = {
  Dogs: require('../../public/icons/png/024-dog-1.png'),
  Cats: require('../../public/icons/png/025-cat.png'),
  Birds: require('../../public/icons/png/022-bird.png'),
  Reptiles: require('../../public/icons/png/013-turtle.png'),
  'Small & Furry': require('../../public/icons/png/014-hamster.png'),
  Barnyard: require('../../public/icons/png/007-hedgehog.png'),
};

export default function Page2(props) {
  const { currentPage, onLogoClick, onAnimalClick } = props;
  if (currentPage === 2) {
    const animalLogos = Object.keys(images).map(image => (
      <Animal key={image}>
        <Image
          src={images[image]}
          alt="animal"
          type="animal"
          onClick={() => onAnimalClick(image)}
        />
        <Description>
          {image}
        </Description>
      </Animal>
    ));
    return (
      <Holder page="2">
        <Title>
          <Image
            src={logo}
            alt="logo"
            type="logo"
            onClick={onLogoClick}
          />
          Sheltr
        </Title>
        <Pregunta>
          Which Animal Would You Like To Sheltr?
        </Pregunta>
        <ImageHolder>
          {animalLogos}
        </ImageHolder>
      </Holder>
    );
  }
  return null;
}
