/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import General from './General';
import Education from './Education';
import Work from './Work';
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

    this.generalSubmit = this.makeSaveChanges('general').bind(this);
    this.schoolingSubmit = this.makeSaveChanges('schooling').bind(this);
    this.experienceSubmit = this.makeSaveChanges('experience').bind(this);
  }

  makeSaveChanges(stateName) {
    const saveChanges = (content) => {
      this.setState((state) => {
        // updates from setState happen asychronously
        // need a current copy of state when updating local storage
        const stateCopy = state;
        stateCopy[stateName] = content;
        Storage.saveToStorage(stateCopy, Storage.LOCAL_KEY);
        return stateCopy;
      });
    };

    return saveChanges;
  }

  render() {
    const { general, schooling, experience } = this.state;

    return (
      <div className="App">
        <h1>CV form App</h1>
        <General content={general} onSubmit={this.generalSubmit} />
        <Education content={schooling} onSubmit={this.schoolingSubmit} />
        <Work content={experience} onSubmit={this.experienceSubmit} />
      </div>
    );
  }
}

export default App;
