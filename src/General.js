/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import InputtableField from './InputtableField';

class General extends Component {
  constructor(props) {
    super(props);

    const { content } = this.props;
    const { editable } = this.props;
    if (content) {
      this.state = {
        myName: content.myName,
        email: content.email,
        phoneNumber: content.phoneNumber,
        editable: !!editable,
      };
    } else {
      this.state = {
        myName: '',
        email: '',
        phoneNumber: '',
        editable: !!editable,
      };
    }

    this.nameFunc = this.makeOnFieldChange('myName').bind(this);
    this.emailFunc = this.makeOnFieldChange('email').bind(this);
    this.phoneFunc = this.makeOnFieldChange('phoneNumber').bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState((state) => ({ editable: !state.editable }));
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
      myName, email, phoneNumber, editable,
    } = this.state;

    return (
      <div className="General">
        <h2>General Info</h2>
        <InputtableField label="Name" value={myName} editable={editable} onChange={this.nameFunc} />
        <InputtableField label="Email" value={email} editable={editable} onChange={this.emailFunc} />
        <InputtableField label="Phone Number" value={phoneNumber} editable={editable} onChange={this.phoneFunc} />
        {editable && <button type="button" onClick={this.toggleEdit}>Submit</button>}
        {!editable && <button type="button" onClick={this.toggleEdit}>Edit</button>}
      </div>
    );
  }
}

export default General;
