/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';

class EduItem extends Component {
  constructor(props) {
    super(props);

    const { content, editable, onSubmit } = this.props;

    if (content) {
      this.state = {
        school: content.school ? content.school : '',
        degree: content.degree ? content.degree : '',
        startYear: content.startYear ? content.startYear : '',
        endYear: content.endYear ? content.endYear : '',
        editable: !!editable,
      };
    } else {
      this.state = {
        school: '',
        degree: '',
        startYear: '',
        endYear: '',
        editable: !!editable,
      };
    }

    this.schoolFunc = this.makeOnFieldChange('school').bind(this);
    this.degreeFunc = this.makeOnFieldChange('degree').bind(this);
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
          school, degree, startYear, endYear,
        } = this.state;

        const obj = {
          school, degree, startYear, endYear,
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
      school, degree, startYear, endYear, editable,
    } = this.state;

    const { onDelete } = this.props;

    return (
      <div className="EduItem">
        <h3>{`${degree} at ${school}`}</h3>
        <InputtableField label="School" value={school} editable={editable} onChange={this.schoolFunc} />
        <InputtableField label="Degree" value={degree} editable={editable} onChange={this.degreeFunc} />
        <InputtableField label="Start Year" value={startYear} editable={editable} onChange={this.startYearFunc} />
        <InputtableField label="End Year" value={endYear} editable={editable} onChange={this.endYearFunc} />
        <div className="buttons">
          {editable && <button type="button" onClick={this.onSubmit}>Submit</button>}
          {!editable && <button type="button" onClick={this.toggleEdit}>Edit</button>}
          <button type="button" onClick={onDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default EduItem;
