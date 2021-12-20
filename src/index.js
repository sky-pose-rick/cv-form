import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Storage from './Storage';

const stored = Storage.getFromStorage(Storage.LOCAL_KEY);
const loadedGeneral = (stored && stored.general) ? stored.general : {};
const loadedSchooling = (stored && stored.schooling) ? stored.schooling : {};
const loadedExperience = (stored && stored.experience) ? stored.experience : {};
console.log('saved object', loadedGeneral, loadedSchooling, loadedExperience);

const saveFunc = (combinedObj) => {
  console.log('super object', combinedObj);
  Storage.saveToStorage(combinedObj, Storage.LOCAL_KEY);
};

ReactDOM.render(
  <React.StrictMode>
    <App
      initGeneral={loadedGeneral}
      initSchooling={loadedSchooling}
      initExperience={loadedExperience}
      saveFunc={saveFunc}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
