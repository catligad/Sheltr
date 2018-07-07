import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return 'Hello';
  }
}

render(<App />, document.getElementById('petMatcher'));
