/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import uniqid from 'uniqid';

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

    this.addDegree = this.addDegree.bind(this);
  }

  addDegree() {
    const newKey = uniqid();

    this.setState({
      degrees: { [newKey]: {} },
    });
  }
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
        <button type="button" onClick={this.addDegree}>Add</button>
      </div>
    );
  }
}

export default Education;
