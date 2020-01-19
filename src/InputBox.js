import React from 'react';
import {connect} from 'react-redux';
import {updateInputForm} from './actions';
import './InputBox.css';

const InputBox = ({updateInputForm, boxType, label, name}) => {
  return (
    <div>
      <div>{label}</div>
      <div>
        <input
          onChange={(value) => {updateInputForm(name, value.target.value)}}
          type={boxType}
          name={name}
          required={true}
          placeholder="Enter here"
          className="input-box"
        />
      </div>
    </div>
  );
};

export default connect(null, {updateInputForm})(InputBox);