/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';

class General extends Component {
  constructor(props) {
    super(props);

    const { content } = this.props;
    if (content) {
      this.state = {
        myName: content.myName,
        email: content.email,
        phoneNumber: content.phoneNumber,
      };
    } else {
      this.state = {
        myName: '',
        email: '',
        phoneNumber: '',
      };
    }

    this.nameFunc = this.makeOnFieldChange('myName').bind(this);
    this.emailFunc = this.makeOnFieldChange('myName').bind(this);
    this.phoneFunc = this.makeOnFieldChange('myName').bind(this);
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
    const { editable } = this.props;
    const { myName, email, phoneNumber } = this.state;

    return (
      <div className="General">
        <h2>General Info</h2>
        <InputtableField label="Name" value={myName} editable={editable} onChange={this.nameFunc} />
        <InputtableField label="Email" value={email} editable={editable} onChange={this.emailFunc} />
        <InputtableField label="Phone Number" value={phoneNumber} editable={editable} onChange={this.phoneFunc} />
      </div>
    );
  }
}

export default General;
