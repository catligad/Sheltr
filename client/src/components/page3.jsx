import React, { Component } from 'react';
import Navi from './page3Navi';
import PetCards from './page3PetCards';
import ButtonSelection from './page3Btns';
import Holder from './styles/holderStylings';

export default class MyCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false,
    };
  }

  onSwipeLeft = () => {
    console.log('swiped left');
  };

  onSwipeRight = () => {
    console.log('swiped right');
  };

  onInfoClick = () => {
    const { info } = this.state;
    this.setState({
      info: !info,
    });
  }

  render() {
    const { currentPage, onLogoClick, animals } = this.props;
    const { info } = this.state;
    if (currentPage === 3) {
      return (
        <Holder page={currentPage}>
          <Navi onLogoClick={onLogoClick} />
          <PetCards
            onSwipeLeft={this.onSwipeLeft}
            onSwipeRight={this.onSwipeRight}
            data={animals}
            info={info}
          />
          <ButtonSelection
            infoClicked={this.onInfoClick}
          />
        </Holder>

      );
    }
    return null;
  }
}
