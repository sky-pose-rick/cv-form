/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import General from './General';
import Education from './Education';
import Work from './Work';

// eslint-disable-next-line no-unused-vars
import styles from '../styles/app.css';

// eslint-disable-next-line func-names
const App = function (props) {
  const {
    initGeneral, initExperience, initSchooling, saveFunc,
  } = props;
  const [general, setGeneral] = useState(initGeneral);
  const [schooling, setSchooling] = useState(initSchooling);
  const [experience, setExperience] = useState(initExperience);
  const [dirty, setDirty] = useState(false);

  const makeSaveChanges = (setState) => {
    const saveChanges = (content) => {
      console.log('new content', content);
      setState(content);
      setDirty(true);
    };

    return saveChanges;
  };

  useEffect(() => {
    if (dirty) {
      const combinedObj = { general, schooling, experience };
      saveFunc(combinedObj);
      setDirty(false);
    }
  }, [dirty]);

  return (
    <div className="App">
      <h1>CV form App</h1>
      <General content={general} onSubmit={makeSaveChanges(setGeneral)} />
      <div className="columns">
        <Education content={schooling} onSubmit={makeSaveChanges(setSchooling)} />
        <Work content={experience} onSubmit={makeSaveChanges(setExperience)} />
      </div>
    </div>
  );
};

export default App;
