import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import './styles/styles.css';

const Wrapper = ({ data, onSwipeLeft, onSwipeRight }) => (
  <Cards onEnd={console.log("action('end')")} className="master-root">
    {data.map(item => (
      <Card
        key={item}
        onSwipeLeft={() => onSwipeLeft(item)}
        onSwipeRight={() => onSwipeRight(item)}
      >
        <h2>
          {item}
        </h2>
      </Card>
    ))}
  </Cards>
);

export default class MyCards extends Component {
  state = {
    data: ['Alexandre', 'Thomas', 'Lucien', 'Raphael', 'Donatello', 'Michelangelo', 'Leonardo'],
    liked: [],
    disliked: [],
  }

  onSwipeLeft = () => {
    const newData = this.state.data.slice(1);
    this.setState(prevState => ({ data: newData, disliked: [...prevState.disliked, prevState.data[0]] }));
  }

  onSwipeRight = () => {
    const newData = this.state.data.slice(1);
    this.setState(prevState => ({ data: newData, liked: [...prevState.liked, prevState.data[0]] }));
  }

  render() {
    return (
      <div>
        <Wrapper
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          data={this.state.data}
        />
        <ul>
Liked:
          {' '}
          {this.state.liked.map(data => (
            <li>
              {data}
            </li>
          ))}
        </ul>
        <ul>
Disliked:
          {' '}
          {this.state.disliked.map(data => (
            <li>
              {data}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
