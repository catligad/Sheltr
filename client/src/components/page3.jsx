import React, { Component } from 'react';
import _ from 'lodash';
import Navi from './navi';
import PetCards from './page3PetCards';
import ButtonSelection from './page3Btns';
import Holder from './styles/holderStylings';
import sample from '../sampleData';

export default class MyCards extends Component {
  constructor(props) {
    super(props);
    // let { animals } = this.props;
    // animals = _.shuffle(animals);
    this.state = {
      info: false,
      data: sample,
      lastAnimal: null,
      lastAnimalIndex: 0,
    };
  }

  onSwipe = () => {
    const { data, lastAnimalIndex } = this.state;
    const lastAnimal = data[lastAnimalIndex];
    this.setState({
      lastAnimal,
      lastAnimalIndex: lastAnimalIndex + 1,
    });
  };

  onOpinion = () => {
    const { data, lastAnimalIndex } = this.state;
    const lastAnimal = data[0];
    const newData = data.slice();
    newData.splice(0, 1);
    this.setState({
      data: newData,
      lastAnimal,
      lastAnimalIndex: lastAnimalIndex + 1,
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
    return (
      <Holder page={currentPage}>
        <Navi
          onLogoClick={onLogoClick}
          onHeartClick={onHeartClick}
        />
        <PetCards
          onSwipe={this.onSwipe}
          data={data}
          info={info}
        />
        <ButtonSelection
          infoClicked={this.onInfoClick}
          undoClicked={this.onUndoClick}
          opinionClicked={this.onOpinion}
        />
      </Holder>

    );
  }
}
