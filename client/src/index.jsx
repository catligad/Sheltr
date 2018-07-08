import React, { Component } from 'react';
import { render } from 'react-dom';
import { Background } from './components/styles/indexStylings';
import Page1 from './components/page1';
import Page2 from './components/page2';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 2,
      animalClicked: null,
    };
  }

  onLogoClick = () => {
    this.setState({
      currentPage: 1,
    });
  }

  onLogInClick = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  }

  onAnimalClick = (animal) => {
    this.setState({
      animalClicked: animal,
    });
  }

  render() {
    const { currentPage, animalClicked } = this.state;
    return (
      <Background>
        <Page1
          currentPage={currentPage}
          onBtnClick={this.onLogInClick}
          onLogoClick={this.onLogoClick}
        />
        <Page2
          currentPage={currentPage}
          onLogoClick={this.onLogoClick}
          onAnimalClick={this.onAnimalClick}
        />
        <Page3
          currentPage={currentPage}
          onLogoClick={this.onLogoClick}
          onAnimalClick={animalClicked}
        />
      </Background>
    );
  }
}

render(<App />, document.getElementById('petMatcher'));
