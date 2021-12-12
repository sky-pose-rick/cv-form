/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class InputtableField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Inputtable-Field">
        <p>Name: Mike Ponso</p>
      </div>
    );
  }
}

export default InputtableField;
