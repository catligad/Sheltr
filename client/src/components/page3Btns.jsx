import React from 'react';
import {
  BtnHolder, DecisionBtn,
} from './styles/btnStylings';

const images = {
  undo: require('../../public/icons/png/undo.png'),
  cancel: require('../../public/icons/png/cancel.png'),
  checked: require('../../public/icons/png/checked.png'),
  info: require('../../public/icons/png/info.png'),
};

export default ({
  infoClicked, undoClicked, opinionClicked,
}) => (
  <BtnHolder>
    <DecisionBtn
      src={images.undo}
      type="side"
      nav="undo"
      onClick={undoClicked}
    />
    <DecisionBtn
      src={images.cancel}
      type="center"
      onClick={() => opinionClicked('btn', 'left')}
    />
    <DecisionBtn
      src={images.checked}
      type="center"
      onClick={() => opinionClicked('btn', 'right')}
    />
    <DecisionBtn
      src={images.info}
      type="side"
      nav="info"
      onClick={infoClicked}
    />
  </BtnHolder>
);
