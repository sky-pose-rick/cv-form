/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import InputtableField from './InputtableField';
// eslint-disable-next-line no-unused-vars
import styles from '../styles/panel.css';

// eslint-disable-next-line func-names
const General = function (props) {
  const { content, initialEditable, onSubmit } = props;

  const [myName, setMyName] = useState(content && content.myName ? content.myName : '');
  const [email, setEmail] = useState(content && content.email ? content.email : '');
  const [phoneNumber, setPhoneNumber] = useState(content && content.phoneNumber ? content.phoneNumber : '');
  const [editable, setEditable] = useState(!!initialEditable);

  const toggleEdit = () => {
    setEditable(!editable);
  };

  const makeOnSubmit = (parentFunc) => {
    const onSubmitFunc = () => {
      toggleEdit();

      if (parentFunc) {
        const obj = {
          myName, email, phoneNumber,
        };
        parentFunc(obj);
      }
    };
    return onSubmitFunc;
  };

  const makeOnFieldChange = (setState) => {
    const onChange = (e) => {
      setState(e.target.value);
    };
    return onChange;
  };

  return (
    <div className="General">
      <h2>General Info</h2>
      <div className="content-panel">
        <InputtableField label="Name" value={myName} editable={editable} onChange={makeOnFieldChange(setMyName)} />
        <InputtableField label="Email" value={email} editable={editable} onChange={makeOnFieldChange(setEmail)} />
        <InputtableField label="Phone Number" value={phoneNumber} editable={editable} onChange={makeOnFieldChange(setPhoneNumber)} />
        {editable && <button type="button" onClick={makeOnSubmit(onSubmit)}>Submit</button>}
        {!editable && <button type="button" onClick={toggleEdit}>Edit</button>}
      </div>
    </div>
  );
};

export default General;
