import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Background } from './components/styles/indexStylings';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 2,
      animalClicked: null,
      animals: [],
    };
  }

  onLogoClick = () => {
    this.setState({
      currentPage: 1,
    });
  }

  onAnimalClick = (animal) => {
    const { currentPage } = this.state;
    axios.get(`/api/pets/${animal}`)
      .then((response) => {
        this.setState({
          animals: response.data,
          currentPage: currentPage + 1,
          animalClicked: animal,
        });
      })
      .catch(err => console.log(err));
  }

  changePage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  }

  render() {
    const { currentPage, animalClicked, animals } = this.state;
    return (
      <Background>
        <Page1
          currentPage={currentPage}
          onBtnClick={this.changePage}
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
          animals={animals}
        />
      </Background>
    );
  }
}

render(<App />, document.getElementById('petMatcher'));
