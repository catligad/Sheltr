import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Background } from './components/styles/indexStylings';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 3,
      animals: null,
    };
  }

  onLogoClick = () => {
    this.setState({
      currentPage: 2,
    });
  }

  onAnimalClick = (animal) => {
    const { currentPage } = this.state;
    // axios.get(`/api/pets/${animal}`)
    //   .then((response) => {
    this.setState({
      // animals: response.data.pets,
      currentPage: currentPage + 1,
    });
    // })
    // .catch(err => console.log(err));
  }

  changePage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  }

  render() {
    const { currentPage, animals } = this.state;
    let page;
    if (currentPage === 1) {
      page = (
        <Page1
          currentPage={currentPage}
          onBtnClick={this.changePage}
          onLogoClick={this.onLogoClick}
        />
      );
    } else if (currentPage === 2) {
      page = (
        <Page2
          currentPage={currentPage}
          onLogoClick={this.onLogoClick}
          onAnimalClick={this.onAnimalClick}
        />
      );
    } else if (currentPage === 3) {
      page = (
        <Page3
          currentPage={currentPage}
          onLogoClick={this.onLogoClick}
          animals={animals}
          onHeartClick={this.changePage}
        />
      );
    } else if (currentPage === 4) {
      page = (
        <Page4
          currentPage={currentPage}
          onLogoClick={this.onLogoClick}
        />
      );
    }
    return (
      <Background>
        {page}
      </Background>
    );
  }
}

render(<App />, document.getElementById('petMatcher'));
