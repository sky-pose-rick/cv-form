/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class InputtableField extends Component {
  constructor(props) {
    super(props);
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
          <p>
            {`${label}: `}
          </p>
          <input type="text" value={value} onChange={onChange} />
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
