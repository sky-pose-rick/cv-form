/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';
import EduItem from './EduItem';

class Education extends Component {
  constructor(props) {
    super(props);

    const { content } = this.props;

    if (content) {
      this.state = {
        degrees: content.degrees ? content.degrees : {},
      };
    } else {
      this.state = {
        degrees: {},
      };
    }
  }

  // addDegree(){}
  // makeOnChange(){}

  render() {
    const { degrees } = this.state;
    const degreeArray = Object.entries(degrees);

    return (
      <div className="Education">
        <h2>Education</h2>
        <ul>
          {degreeArray.map((entry) => <li key={entry[0]}><EduItem content={entry[1]} /></li>)}
        </ul>
        <button type="button">Add</button>
      </div>
    );
  }
}

export default Education;
