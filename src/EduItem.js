/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';

class General extends Component {
  constructor(props) {
    super(props);

    const { content, editable } = this.props;

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
  }

  render() {
    const {
      school, degree, startYear, endYear, editable,
    } = this.state;

    return (
      <div className="EduItem">
        <h3>Edu Item</h3>
        <InputtableField label="School" value={school} editable={editable} onChange={null} />
        <InputtableField label="Degree" value={degree} editable={editable} onChange={null} />
        <InputtableField label="Start Year" value={startYear} editable={editable} onChange={null} />
        <InputtableField label="End Year" value={endYear} editable={editable} onChange={null} />
        {editable && <button type="button" onClick={null}>Submit</button>}
        {!editable && <button type="button" onClick={null}>Edit</button>}
        <button type="button" onClick={null}>Delete</button>
      </div>
    );
  }
}

export default General;
