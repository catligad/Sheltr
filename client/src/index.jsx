import React, { Component } from 'react';
import { render } from 'react-dom';
import { Background } from './components/styles/indexStylings';
import Page1 from './components/page1';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  render() {
    const { currentPage } = this.state;
    return (
      <Background>
        <Page1 currentPage={currentPage} />
      </Background>
    );
  }
}

render(<App />, document.getElementById('petMatcher'));
