/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import uniqid from 'uniqid';

import WorkItem from './WorkItem';
// eslint-disable-next-line no-unused-vars
import styles from '../styles/panel.css';

// eslint-disable-next-line func-names
const Work = function (props) {
  const { content, onSubmit } = props;

  const [jobs, setJobs] = useState(content && content.jobs ? content.jobs : {});

  const addJob = () => {
    const newKey = uniqid();
    const shallowCopy = { ...jobs };
    shallowCopy[newKey] = {};
    setJobs(shallowCopy);
  };

  const makeDelete = (parentFunc, key) => {
    const onDelete = () => {
      const shallowCopy = { ...jobs };
      delete shallowCopy[key];
      setJobs(shallowCopy);
      parentFunc(shallowCopy);
    };

    return onDelete;
  };

  const makeOnChange = (parentFunc, key) => {
    // have this component insert the key, let child pass the degree
    const onChange = (degree) => {
      const shallowCopy = { ...jobs };
      shallowCopy[key] = degree;
      setJobs(shallowCopy);
      parentFunc(shallowCopy);
    };

    return onChange;
  };

  return (
    <div className="Work">
      <h2>Work Experience</h2>
      {Object.entries(jobs).map((entry) => {
        const changeFunc = makeOnChange(onSubmit, entry[0]);
        const deleteFunc = makeDelete(onSubmit, entry[0]);
        return (
          <WorkItem
            key={entry[0]}
            content={entry[1]}
            onSubmit={changeFunc}
            onDelete={deleteFunc}
          />
        );
      })}
      <div className="item-add">
        <button type="button" onClick={addJob}>Add New Work Entry</button>
      </div>
    </div>
  );
};

export default Work;
