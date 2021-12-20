/* eslint-disable react/prop-types */
import React from 'react';
import uniqid from 'uniqid';

// eslint-disable-next-line no-unused-vars
import styles from '../styles/inputs.css';

// eslint-disable-next-line func-names
const InputtableField = function (props) {
  const {
    label,
    value,
    editable,
    onChange,
  } = props;

  const myId = uniqid();

  return (
    <div className="Inputtable-Field">
      {editable && (
      <label htmlFor={myId}>
        {`${label}: `}
      </label>
      )}
      {editable && <input id={myId} type="text" value={value} onChange={onChange} />}
      {!editable && <p>{`${label}: ${value}`}</p>}
    </div>
  );
};

export default InputtableField;
