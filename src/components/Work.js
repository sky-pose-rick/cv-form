/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import uniqid from 'uniqid';

import WorkItem from './WorkItem';

class Work extends Component {
  constructor(props) {
    super(props);

    const { content } = this.props;

    if (content) {
      this.state = {
        jobs: content.jobs ? content.jobs : {},
      };
    } else {
      this.state = {
        jobs: {},
      };
    }

    this.addJob = this.addJob.bind(this);
  }

  addJob() {
    const newKey = uniqid();

    this.setState((state) => {
      const stateCopy = state;
      stateCopy.jobs[newKey] = {};
      return stateCopy;
    });
  }

  makeOnChange(parentFunc, key) {
    // have this component insert the key, let child pass the degree
    const onChange = (degree) => {
      this.setState((state) => {
        const stateCopy = state;
        stateCopy.jobs[key] = degree;
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
        delete stateCopy.jobs[key];
        // pass new state to parent
        parentFunc(stateCopy);
        return stateCopy;
      });
    };

    return onDelete;
  }

  render() {
    const { onSubmit } = this.props;
    const { jobs } = this.state;
    const degreeArray = Object.entries(jobs);

    return (
      <div className="Work">
        <h2>Work Experience</h2>
        <ul>
          {degreeArray.map((entry) => {
            const changeFunc = this.makeOnChange(onSubmit, entry[0]);
            const deleteFunc = this.makeDelete(onSubmit, entry[0]);
            return (
              <li key={entry[0]}>
                <WorkItem content={entry[1]} onSubmit={changeFunc} onDelete={deleteFunc} />
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={this.addJob}>Add</button>
      </div>
    );
  }
}

export default Work;
