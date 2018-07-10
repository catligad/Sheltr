import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
import { Background } from './components/styles/indexStylings';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import sample from './sampleData';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'cat',
      currentPage: 4,
      data: sample,
      dataForChange: sample,
      lastAnimalIndex: 0,
      currentAnimalIndex: 0,
      likedAnimals: [],
    };
  }

  onLogoClick = () => {
    this.setState({
      currentPage: 2,
    });
  }

  onAnimalClick = (animal) => {
    const { currentPage } = this.state;
    axios.get(`/api/pets/${animal}`)
      .then((response) => {
        const shuffledAnimals = _.shuffle(response.data.pets);
        this.setState({
          data: shuffledAnimals,
          dataForChange: shuffledAnimals,
          currentPage: currentPage + 1,
        });
      })
      .catch(err => console.log(err));
  }

  onHeartClick = () => {
    const { username } = this.state;
    axios.get(`/api/likedAnimals/select/${username}`)
      .then((response) => {
        this.setState({
          likedAnimals: response.data,
        }, () => this.changePage());
      })
      .catch(err => console.log(err));
  }

  onOpinion = (type, direction) => {
    const {
      data, dataForChange, lastAnimalIndex, currentAnimalIndex, likedAnimals,
    } = this.state;
    if (type === 'btn') {
      const newData = _.drop(dataForChange);
      this.setState({
        dataForChange: newData,
      });
    }
    if (direction === 'right') {
      const { username } = this.state;
      const likedAnimal = data[lastAnimalIndex];
      const id = Number(data[lastAnimalIndex].id);
      axios.post('/api/likedAnimals/insert', { username, likedAnimal, id })
        .catch((err) => {
          console.log(err);
        });
    }
    this.setState({
      lastAnimalIndex: lastAnimalIndex + 1,
      currentAnimalIndex: currentAnimalIndex + 1,
    });
  };

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

  changePage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  }

  render() {
    const { currentPage, dataForChange, likedAnimals } = this.state;
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
          onHeartClick={this.onHeartClick}
          onOpinion={this.onOpinion}
          onUndoClick={this.onUndoClick}
          dataForChange={dataForChange}
        />
      );
    } else if (currentPage === 4) {
      page = (
        <Page4
          currentPage={currentPage}
          onLogoClick={this.onLogoClick}
          likedAnimals={likedAnimals}
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
