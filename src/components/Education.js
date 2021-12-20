/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import uniqid from 'uniqid';

import EduItem from './EduItem';
// eslint-disable-next-line no-unused-vars
import styles from '../styles/panel.css';

// eslint-disable-next-line func-names
const Education = function (props) {
  const { content, onSubmit } = props;

  const [degrees, setDegrees] = useState(content && content.degrees ? content.degrees : {});

  const addDegree = () => {
    const newKey = uniqid();
    const shallowCopy = { ...degrees };
    shallowCopy[newKey] = {};
    setDegrees(shallowCopy);
  };

  const makeDelete = (parentFunc, key) => {
    const onDelete = () => {
      const shallowCopy = { ...degrees };
      delete shallowCopy[key];
      setDegrees(shallowCopy);
      parentFunc(shallowCopy);
    };

    return onDelete;
  };

  const makeOnChange = (parentFunc, key) => {
    // have this component insert the key, let child pass the degree
    const onChange = (degree) => {
      const shallowCopy = { ...degrees };
      shallowCopy[key] = degree;
      setDegrees(shallowCopy);
      parentFunc(shallowCopy);
    };

    return onChange;
  };

  return (
    <div className="Education">
      <h2>Education</h2>
      {Object.entries(degrees).map((entry) => {
        const changeFunc = makeOnChange(onSubmit, entry[0]);
        const deleteFunc = makeDelete(onSubmit, entry[0]);
        return (
          <EduItem
            key={entry[0]}
            content={entry[1]}
            onSubmit={changeFunc}
            onDelete={deleteFunc}
          />
        );
      })}
      <div className="item-add">
        <button type="button" onClick={addDegree}>Add New Education Entry</button>
      </div>
    </div>
  );
};

export default Education;
