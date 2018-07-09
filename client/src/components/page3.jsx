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
      dataForChange: sample,
      lastAnimalIndex: 0,
      currentAnimalIndex: 0,
      likedAnimals: [],
      unlikedAnimals: [],
    };
  }

  onOpinion = (type, direction) => {
    const {
      data, dataForChange, lastAnimalIndex, currentAnimalIndex, likedAnimals, unlikedAnimals,
    } = this.state;
    if (type === 'btn') {
      const newData = _.drop(dataForChange);
      this.setState({
        dataForChange: newData,
      });
    }
    if (direction === 'right') {
      const newLikedAnimals = _.concat(likedAnimals, [data[lastAnimalIndex]]);
      this.setState({
        likedAnimals: newLikedAnimals,
      });
    } else if (direction === 'left') {
      const newUnlikedAnimals = _.concat(unlikedAnimals, [data[lastAnimalIndex]]);
      this.setState({
        unlikedAnimals: newUnlikedAnimals,
      });
    }
    this.setState({
      lastAnimalIndex: lastAnimalIndex + 1,
      currentAnimalIndex: currentAnimalIndex + 1,
    });
  };

  onInfoClick = () => {
    const { info } = this.state;
    this.setState({
      info: !info,
    });
  }

  onUndoClick = () => {
    const {
      data, dataForChange, lastAnimalIndex, currentAnimalIndex,
    } = this.state;
    const newData = dataForChange.slice(0);
    const lastAnimal = data[lastAnimalIndex - 1];
    const currentAnimal = data[currentAnimalIndex];
    if (!_.isEqual(lastAnimal, currentAnimal)) {
      newData.unshift(lastAnimal);
      this.setState({
        dataForChange: newData,
        currentAnimalIndex: currentAnimalIndex - 1,
        lastAnimalIndex: lastAnimalIndex - 1,
      });
    }
  }

  render() {
    const { currentPage, onLogoClick, onHeartClick } = this.props;
    const { info, dataForChange } = this.state;
    return (
      <Holder page={currentPage}>
        <Navi
          onLogoClick={onLogoClick}
          onHeartClick={onHeartClick}
        />
        <PetCards
          onSwipe={this.onOpinion}
          data={dataForChange}
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
