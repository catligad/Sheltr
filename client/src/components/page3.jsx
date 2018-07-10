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

    };
  }

  onInfoClick = () => {
    const { info } = this.state;
    this.setState({
      info: !info,
    });
  }

  render() {
    const {
      currentPage, onLogoClick, onHeartClick, onOpinion, onUndoClick, dataForChange,
    } = this.props;
    const { info } = this.state;
    return (
      <Holder page={currentPage}>
        <Navi
          onLogoClick={onLogoClick}
          onHeartClick={onHeartClick}
        />
        <PetCards
          onSwipe={onOpinion}
          data={dataForChange}
          info={info}
        />
        <ButtonSelection
          infoClicked={this.onInfoClick}
          undoClicked={onUndoClick}
          opinionClicked={onOpinion}
        />
      </Holder>

    );
  }
}
