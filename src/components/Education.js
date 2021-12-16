/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import uniqid from 'uniqid';

import EduItem from './EduItem';
// eslint-disable-next-line no-unused-vars
import styles from '../styles/panel.css';

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

    this.setState((state) => {
      const stateCopy = state;
      stateCopy.degrees[newKey] = {};
      return stateCopy;
    });
  }

  makeOnChange(parentFunc, key) {
    // have this component insert the key, let child pass the degree
    const onChange = (degree) => {
      this.setState((state) => {
        const stateCopy = state;
        stateCopy.degrees[key] = degree;
        // pass new state to parent
        parentFunc(stateCopy);
        return stateCopy;
      });
    };

    return onChange;
  }

  makeDelete(parentFunc, key) {
    const onDelete = () => {
      this.setState((state) => {
        const stateCopy = state;
        delete stateCopy.degrees[key];
        // pass new state to parent
        parentFunc(stateCopy);
        return stateCopy;
      });
    };

    return onDelete;
  }

  render() {
    const { onSubmit } = this.props;
    const { degrees } = this.state;
    const degreeArray = Object.entries(degrees);

    return (
      <div className="Education">
        <h2>Education</h2>
        {degreeArray.map((entry) => {
          const changeFunc = this.makeOnChange(onSubmit, entry[0]);
          const deleteFunc = this.makeDelete(onSubmit, entry[0]);
          return (
            <EduItem content={entry[1]} onSubmit={changeFunc} onDelete={deleteFunc} />
          );
        })}
        <div className="item-add">
          <button type="button" onClick={this.addDegree}>Add New Education Entry</button>
        </div>
      </div>
    );
  }
}

export default Education;
