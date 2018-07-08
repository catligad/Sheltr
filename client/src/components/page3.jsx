import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import './styles/styles.css';
import {
  LogoHolder, Image, Holder, Description, NoPic, BtnHolder, DecisionBtn,
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

const PetCards = ({ data, onSwipeLeft, onSwipeRight }) => (
  <Cards onEnd={console.log("action('end')")} className="master-root">
    {data.map(item => (
      <Card
        key={item}
        onSwipeLeft={() => onSwipeLeft(item)}
        onSwipeRight={() => onSwipeRight(item)}
      >
        <NoPic
          src={noPicLogo}
          type="animal"
        />
        <Description>
          Hello
        </Description>
      </Card>
    ))}
  </Cards>
);

const ButtonSelection = () => (
  <BtnHolder>
    <DecisionBtn src={undo} type="side" nav="undo" />
    <DecisionBtn src={cancel} type="center" />
    <DecisionBtn src={checked} type="center" />
    <DecisionBtn src={info} type="side" nav="info" />
  </BtnHolder>
);

export default class MyCards extends Component {
  state = {
    data: ['Alexandre', 'Thomas', 'Lucien', 'Raphael', 'Donatello', 'Michelangelo', 'Leonardo'],
  }

  onSwipeLeft = () => {
    const newData = this.state.data.slice(1);
    this.setState({
      data: newData,
    });
  }

  onSwipeRight = () => {
    const newData = this.state.data.slice(1);
    this.setState({
      data: newData,
    });
  }

  render() {
    const { currentPage, onLogoClick } = this.props;
    if (currentPage === 3) {
      return (
        <Holder page={currentPage}>
          <Navi onLogoClick={onLogoClick} />
          <PetCards
            onSwipeLeft={this.onSwipeLeft}
            onSwipeRight={this.onSwipeRight}
            data={this.state.data}
          />
          <ButtonSelection />
        </Holder>

      );
    }
    return null;
  }
}
