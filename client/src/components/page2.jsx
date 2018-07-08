import React from 'react';
import {
  Holder, ImageHolder, Image, Animal, Description, Pregunta,
} from './styles/pageStylings';
import Logo from './logo';

const images = {
  Dogs: require('../../public/icons/png/024-dog-1.png'),
  Cats: require('../../public/icons/png/025-cat.png'),
  Birds: require('../../public/icons/png/022-bird.png'),
  Reptiles: require('../../public/icons/png/013-turtle.png'),
  'Small & Furry': require('../../public/icons/png/014-hamster.png'),
  Barnyard: require('../../public/icons/png/007-hedgehog.png'),
};

const AnimalLogos = ({ onAnimalClick }) => (
  <ImageHolder>
    {Object.keys(images).map(image => (
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
    ))}
  </ImageHolder>
);

export default function Page2(props) {
  const { currentPage, onLogoClick, onAnimalClick } = props;
  if (currentPage === 2) {
    return (
      <Holder page="2">
        <Logo onLogoClick={onLogoClick} />
        <Pregunta>
          Which Animal Would You Like To Sheltr?
        </Pregunta>
        <AnimalLogos onAnimalClick={onAnimalClick} />
      </Holder>
    );
  }
  return null;
}
