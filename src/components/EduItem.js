/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import InputtableField from './InputtableField';

// eslint-disable-next-line func-names
const EduItem = function (props) {
  const {
    content, initialEditable, onSubmit, onDelete,
  } = props;

  const [school, setSchool] = useState(content && content.school ? content.school : '');
  const [degree, setDegree] = useState(content && content.degree ? content.degree : '');
  const [startYear, setStartYear] = useState(content && content.startYear ? content.startYear : '');
  const [endYear, setEndYear] = useState(content && content.endYear ? content.endYear : '');
  const [editable, setEditable] = useState(!!initialEditable);

  const toggleEdit = () => {
    setEditable(!editable);
  };

  const makeOnSubmit = (parentFunc) => {
    const onSubmitFunc = () => {
      toggleEdit();

      if (parentFunc) {
        const obj = {
          school, degree, startYear, endYear,
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
    <div className="EduItem">
      <h3>{`${degree} at ${school}`}</h3>
      <InputtableField label="School" value={school} editable={editable} onChange={makeOnFieldChange(setSchool)} />
      <InputtableField label="Degree" value={degree} editable={editable} onChange={makeOnFieldChange(setDegree)} />
      <InputtableField label="Start Year" value={startYear} editable={editable} onChange={makeOnFieldChange(setStartYear)} />
      <InputtableField label="End Year" value={endYear} editable={editable} onChange={makeOnFieldChange(setEndYear)} />
      <div className="buttons">
        {editable && <button type="button" onClick={makeOnSubmit(onSubmit)}>Submit</button>}
        {!editable && <button type="button" onClick={toggleEdit}>Edit</button>}
        <button type="button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default EduItem;
