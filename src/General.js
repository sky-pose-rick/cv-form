/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';

class General extends Component {
  constructor() {
    super();

    this.blankFunc = this.blankFunc.bind(this);
  }

  blankFunc() {
    console.log(this);
  }

  render() {
    return (
      <div className="General">
        <h2>General Info</h2>
        <InputtableField label="Name" value="Mi" editable onChange={this.blankFunc} />
        <div>Email</div>
        <div>Phone Number</div>
      </div>
    );
  }
}

export default General;
