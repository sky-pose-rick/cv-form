/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

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
        editable: !!editable,
      };
    } else {
      this.state = {
        company: '',
        position: '',
        startYear: '',
        endYear: '',
        editable: !!editable,
      };
    }

    this.companyFunc = this.makeOnFieldChange('company').bind(this);
    this.positionFunc = this.makeOnFieldChange('position').bind(this);
    this.startYearFunc = this.makeOnFieldChange('startYear').bind(this);
    this.endYearFunc = this.makeOnFieldChange('endYear').bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onSubmit = this.makeOnSubmit(onSubmit);
  }

  toggleEdit() {
    this.setState((state) => ({ editable: !state.editable }));
  }

  makeOnSubmit(parentFunc) {
    const onSubmit = () => {
      this.toggleEdit();

      if (parentFunc) {
        const {
          company, position, startYear, endYear,
        } = this.state;

        const obj = {
          company, position, startYear, endYear,
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

  render() {
    const {
      company, position, startYear, endYear, editable,
    } = this.state;

    const { onDelete } = this.props;

    return (
      <div className="EduItem">
        <h3>Edu Item</h3>
        <InputtableField label="Company" value={company} editable={editable} onChange={this.companyFunc} />
        <InputtableField label="Position" value={position} editable={editable} onChange={this.positionFunc} />
        <InputtableField label="Start Year" value={startYear} editable={editable} onChange={this.startYearFunc} />
        <InputtableField label="End Year" value={endYear} editable={editable} onChange={this.endYearFunc} />
        {editable && <button type="button" onClick={this.onSubmit}>Submit</button>}
        {!editable && <button type="button" onClick={this.toggleEdit}>Edit</button>}
        <button type="button" onClick={onDelete}>Delete</button>
      </div>
    );

    return (
      <div className="WorkItem">
        <h3>Work Item</h3>
      </div>
    );
  }
}

export default WorkItem;
