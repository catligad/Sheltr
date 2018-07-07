import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Holder = styled.div`
  display: flex;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'Hello',
    };
  }

  render() {
    return (
      <Holder>
        {this.state.word}
      </Holder>
    );
  }
}

render(<App />, document.getElementById('petMatcher'));
