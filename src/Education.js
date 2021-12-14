/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';
import EduItem from './EduItem';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Education">
        <h2>Education</h2>
        <button type="button">Add</button>
      </div>
    );
  }
}

export default Education;
