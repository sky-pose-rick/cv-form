/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import uniqid from 'uniqid';
import InputtableField from './InputtableField';

// eslint-disable-next-line no-unused-vars
import styles from '../styles/lists.css';

// eslint-disable-next-line func-names
const WorkItem = function (props) {
  const {
    content, initialEditable, onSubmit, onDelete,
  } = props;

  const [company, setCompany] = useState(content && content.company ? content.company : '');
  const [position, setPosition] = useState(content && content.position ? content.position : '');
  const [startYear, setStartYear] = useState(content && content.startYear ? content.startYear : '');
  const [endYear, setEndYear] = useState(content && content.endYear ? content.endYear : '');
  const [tasks, setTasks] = useState(content && content.tasks ? content.tasks : {});
  const [editable, setEditable] = useState(!!initialEditable);
  const [nextKey, setNextKey] = useState(uniqid());
  const [nextTask, setNextTask] = useState('');

  const toggleEdit = () => {
    setEditable(!editable);
  };

  const makeOnSubmit = (parentFunc) => {
    const onSubmitFunc = () => {
      toggleEdit();

      if (parentFunc) {
        const obj = {
          company, position, startYear, endYear, tasks,
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

  const addTask = () => {
    const shallowCopy = { ...tasks };
    shallowCopy[nextKey] = nextTask;
    setTasks(shallowCopy);
    setNextKey(uniqid());
    setNextTask('');
  };

  const makeDeleteTask = (key) => {
    const deleteTask = () => {
      // make a shallow copy so that setTask detects a change
      const shallowCopy = { ...tasks };
      delete shallowCopy[key];
      setTasks(shallowCopy);
    };

    return deleteTask;
  };

  return (
    <div className="WorkItem">
      <h3>{`${position} at ${company}`}</h3>
      <InputtableField label="Company" value={company} editable={editable} onChange={makeOnFieldChange(setCompany)} />
      <InputtableField label="Position" value={position} editable={editable} onChange={makeOnFieldChange(setPosition)} />
      <InputtableField label="Start Year" value={startYear} editable={editable} onChange={makeOnFieldChange(setStartYear)} />
      <InputtableField label="End Year" value={endYear} editable={editable} onChange={makeOnFieldChange(setEndYear)} />
      {editable && <InputtableField label="Add Task" value={nextTask} editable={editable} onChange={makeOnFieldChange(setNextTask)} />}
      {editable && <button type="button" onClick={addTask}>Submit Task</button>}
      <ul>
        {
        Object.entries(tasks).map((entry) => (
          <li key={entry[0]}>
            <div className="list-item">
              <p>{entry[1]}</p>
              {editable && <button type="button" onClick={makeDeleteTask(entry[0])}>Delete Task</button>}
            </div>
          </li>
        ))
        }

      </ul>
      <div className="buttons">
        {editable && <button type="button" onClick={makeOnSubmit(onSubmit)}>Submit</button>}
        {!editable && <button type="button" onClick={toggleEdit}>Edit</button>}
        <button type="button" onClick={onDelete}>Delete Job</button>
      </div>
    </div>
  );
};

export default WorkItem;
