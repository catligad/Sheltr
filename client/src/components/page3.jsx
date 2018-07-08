import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import './styles/styles.css';
import {
  LogoHolder, Image, Holder, Description, BtnHolder, DecisionBtn,
} from './styles/pageStylings';
import Logo from './logo';
import noPicLogo from '../../public/icons/png/no-camera.png';
import msgLogo from '../../public/icons/png/love.png';
import settingsLogo from '../../public/icons/png/settings.png';
import undo from '../../public/icons/png/undo.png';
import cancel from '../../public/icons/png/cancel.png';
import checked from '../../public/icons/png/checked.png';
import info from '../../public/icons/png/info.png';

const Navi = ({ onLogoClick }) => (
  <LogoHolder>
    <Image
      src={settingsLogo}
      alt="Settings"
      type="nav"
      nav="settings"
    />
    <Logo onLogoClick={onLogoClick} />
    <Image
      src={msgLogo}
      alt="Liked Animals"
      type="nav"
      nav="liked"
    />
  </LogoHolder>
);

const PetCards = ({ data, onSwipeLeft, onSwipeRight }) => {
  console.log(data);
  return (
    <Cards
      onEnd={() => console.log('deck finished')}
      className="master-root"
    >
      {data.map((item, i) => {
        let imgSrc;
        if (item.media) {
          imgSrc = item.media.photo[2].$t;
        } else {
          imgSrc = noPicLogo;
        }
        return (
          <Card
            key={item.name}
            onSwipeLeft={() => onSwipeLeft()}
            onSwipeRight={() => onSwipeRight()}
          >
            <Image
              src={imgSrc}
              type="animalPic"
            />
            <Description>
          Hello
            </Description>
          </Card>
        );
      })}
    </Cards>);
};

const ButtonSelection = () => (
  <BtnHolder>
    <DecisionBtn src={undo} type="side" nav="undo" />
    <DecisionBtn src={cancel} type="center" />
    <DecisionBtn src={checked} type="center" />
    <DecisionBtn src={info} type="side" nav="info" />
  </BtnHolder>
);

export default function MyCards(props) {
  const onSwipeLeft = () => {
    console.log('swiped left');
  };

  const onSwipeRight = () => {
    console.log('swiped right');
  };

  const { currentPage, onLogoClick, animals } = props;
  if (currentPage === 3) {
    return (
      <Holder page={currentPage}>
        <Navi onLogoClick={onLogoClick} />
        <PetCards
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          data={animals}
        />
        <ButtonSelection />
      </Holder>

    );
  }
  return null;
}
