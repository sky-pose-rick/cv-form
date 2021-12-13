/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import General from './General';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>CV form App</h1>
        <General />
        <div>Schooling</div>
        <div>Experience</div>
      </div>
    );
  }
}

export default App;
