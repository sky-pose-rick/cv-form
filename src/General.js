/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';

class General extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="General">
        <h2>General Info</h2>
        <InputtableField />
        <div>Email</div>
        <div>Phone Number</div>
      </div>
    );
  }
}

export default General;
