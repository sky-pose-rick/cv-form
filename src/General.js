/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';

class General extends Component {
  constructor(props) {
    super(props);

    this.blankFunc = this.blankFunc.bind(this);
  }

  blankFunc() {
    console.log(this);
  }

  render() {
    const { content, editable } = this.props;
    const myName = content ? content.myName : '';
    const email = content ? content.email : '';
    const phoneNumber = content ? content.phoneNumber : '';

    return (
      <div className="General">
        <h2>General Info</h2>
        <InputtableField label="Name" value={myName} editable={editable} onChange={this.blankFunc} />
        <InputtableField label="Email" value={email} editable={editable} onChange={this.blankFunc} />
        <InputtableField label="Phone Number" value={phoneNumber} editable={editable} onChange={this.blankFunc} />
      </div>
    );
  }
}

export default General;
