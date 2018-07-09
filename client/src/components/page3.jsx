import React, { Component } from 'react';
import Navi from './page3Navi';
import PetCards from './page3PetCards';
import ButtonSelection from './page3Btns';
import Holder from './styles/holderStylings';

export default class MyCards extends Component {
  constructor(props) {
    super(props);
    const { animals } = this.props;
    this.state = {
      info: false,
      data: animals,
      lastAnimal: null,
    };
  }

  onSwipe = () => {
    const { data } = this.state;
    const lastAnimal = data[0];
    this.setState({
      lastAnimal,
    });
  };

  onOpinion = () => {
    const { data } = this.state;
    const lastAnimal = data[0];
    const newData = data.slice();
    newData.splice(0, 1);
    this.setState({
      data: newData,
      lastAnimal,
    });
  };

  onInfoClick = () => {
    const { info } = this.state;
    this.setState({
      info: !info,
    });
  }

  onUndoClick = () => {
    const { data, lastAnimal } = this.state;
    const newData = data.slice();
    newData.unshift(lastAnimal);
    this.setState({
      data: newData,
    });
  }

  render() {
    const { currentPage, onLogoClick } = this.props;
    const { info, data } = this.state;
    if (currentPage === 3) {
      return (
        <Holder page={currentPage}>
          <Navi onLogoClick={onLogoClick} />
          <PetCards
            onSwipeLeft={this.onSwipe}
            onSwipeRight={this.onSwipe}
            data={data}
            info={info}
          />
          <ButtonSelection
            infoClicked={this.onInfoClick}
            undoClicked={this.onUndoClick}
            likeClicked={this.onOpinion}
            unlikeClicked={this.onOpinion}
          />
        </Holder>

      );
    }
    return null;
  }
}
