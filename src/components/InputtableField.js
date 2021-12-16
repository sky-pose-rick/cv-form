/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import uniqid from 'uniqid';

// eslint-disable-next-line no-unused-vars
import styles from '../styles/inputs.css';

class InputtableField extends Component {
  constructor(props) {
    super(props);

    this.id = uniqid();
  }

  // should have two different appearances: editing open or editing close
  render() {
    const {
      label,
      value,
      editable,
      onChange,
    } = this.props;
    // console.log(this.props);
    if (editable) {
      return (
        <div className="Inputtable-Field">
          <label htmlFor={this.id}>
            {`${label}: `}
          </label>
          <input id={this.id} type="text" value={value} onChange={onChange} />
        </div>
      );
    }

    return (
      <div className="Inputtable-Field">
        <p>{`${label}: ${value}`}</p>
      </div>
    );
  }
}

export default InputtableField;
