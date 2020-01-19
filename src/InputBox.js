import React from 'react';
import {connect} from 'react-redux';
import {updateInputForm} from './actions';
import './InputBox.css';

/**
 * A functional component that represents input boxes on the UI.
 * @param updateInputForm {function} to call based on user's input
 * @param boxType {string} represents the type of the input box
 * @param label {string} represents the label of the box
 * @param name {string} represents the name of the box
 */
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