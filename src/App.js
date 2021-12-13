/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import General from './General';
import Storage from './Storage';

class App extends Component {
  constructor() {
    super();

    const storedObj = Storage.getFromStorage(Storage.LOCAL_KEY);

    const { general, schooling, experience } = storedObj || {};
    this.state = {
      general: general || {},
      schooling: schooling || {},
      experience: experience || {},
    };
  }

  render() {
    const { general, schooling, experience } = this.state;

    return (
      <div className="App">
        <h1>CV form App</h1>
        <General content={general} />
        <div content={schooling}>Schooling</div>
        <div content={experience}>Experience</div>
      </div>
    );
  }
}

export default App;
