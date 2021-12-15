/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import uniqid from 'uniqid';
import InputtableField from './InputtableField';

class WorkItem extends Component {
  constructor(props) {
    super(props);

    const { content, editable, onSubmit } = this.props;

    if (content) {
      this.state = {
        company: content.company ? content.company : '',
        position: content.position ? content.position : '',
        startYear: content.startYear ? content.startYear : '',
        endYear: content.endYear ? content.endYear : '',
        tasks: content.tasks ? content.tasks : {},
        editable: !!editable,
        nextKey: uniqid(),
        nextTask: '',
      };
    } else {
      this.state = {
        company: '',
        position: '',
        startYear: '',
        endYear: '',
        tasks: {},
        editable: !!editable,
        nextKey: uniqid(),
        nextTask: '',
      };
    }

    this.companyFunc = this.makeOnFieldChange('company').bind(this);
    this.positionFunc = this.makeOnFieldChange('position').bind(this);
    this.startYearFunc = this.makeOnFieldChange('startYear').bind(this);
    this.endYearFunc = this.makeOnFieldChange('endYear').bind(this);
    this.taskFunc = this.makeOnFieldChange('nextTask').bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onSubmit = this.makeOnSubmit(onSubmit);
    this.addTask = this.addTask.bind(this);
  }

  toggleEdit() {
    this.setState((state) => ({ editable: !state.editable }));
  }

  makeOnSubmit(parentFunc) {
    const onSubmit = () => {
      this.toggleEdit();

      if (parentFunc) {
        const {
          company, position, startYear, endYear, tasks,
        } = this.state;

        const obj = {
          company, position, startYear, endYear, tasks,
        };
        parentFunc(obj);
      }
    };

    return onSubmit;
  }

  makeOnFieldChange(stateName) {
    const onChange = (e) => {
      this.setState({
        [stateName]: e.target.value,
      });
    };
    return onChange;
  }

  addTask() {
    this.setState((state) => {
      const { tasks, nextTask, nextKey } = state;
      tasks[nextKey] = nextTask;
      return { tasks, nextTask: '', nextKey: uniqid() };
    });
  }

  makeDeleteTask(key) {
    const deleteTask = () => {
      this.setState((state) => {
        const stateCopy = state;
        delete stateCopy.tasks[key];
        return stateCopy;
      });
    };

    return deleteTask;
  }

  render() {
    const {
      company, position, startYear, endYear, editable, tasks, nextTask,
    } = this.state;
    const taskArray = Object.entries(tasks);

    const { onDelete } = this.props;

    return (
      <div className="WorkItem">
        <h3>Edu Item</h3>
        <InputtableField label="Company" value={company} editable={editable} onChange={this.companyFunc} />
        <InputtableField label="Position" value={position} editable={editable} onChange={this.positionFunc} />
        <InputtableField label="Start Year" value={startYear} editable={editable} onChange={this.startYearFunc} />
        <InputtableField label="End Year" value={endYear} editable={editable} onChange={this.endYearFunc} />
        {editable && <InputtableField label="Add Task" value={nextTask} editable={editable} onChange={this.taskFunc} />}
        {editable && <button type="button" onClick={this.addTask}>Submit Task</button>}
        <ul>
          {
          taskArray.map((entry) => (
            <li key={entry[0]}>
              <p>{entry[1]}</p>
              <button type="button" onClick={this.makeDeleteTask(entry[0]).bind(this)}>Delete Task</button>
            </li>
          ))
          }

        </ul>
        {editable && <button type="button" onClick={this.onSubmit}>Submit</button>}
        {!editable && <button type="button" onClick={this.toggleEdit}>Edit</button>}
        <button type="button" onClick={onDelete}>Delete Job</button>
      </div>
    );
  }
}

export default WorkItem;
