import React, { Component } from 'react';
import _ from 'lodash';
import Navi from './navi';
import PetCards from './page3PetCards';
import ButtonSelection from './page3Btns';
import Holder from './styles/holderStylings';

export default class MyCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false,
      data: null,
      lastAnimal: null,
    };
    console.log(this.state.data);
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
    if (!_.isEqual(newData[0], lastAnimal)) {
      newData.unshift(lastAnimal);
      this.setState({
        data: newData,
      });
    }
  }

  render() {
    const { currentPage, onLogoClick, onHeartClick } = this.props;
    const { info, data } = this.state;
    if (currentPage === 3) {
      return (
        <Holder page={currentPage}>
          <Navi
            onLogoClick={onLogoClick}
            onHeartClick={onHeartClick}
          />
          {/* <PetCards
            onSwipeLeft={this.onSwipe}
            onSwipeRight={this.onSwipe}
            data={data}
            info={info}
          /> */}
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
