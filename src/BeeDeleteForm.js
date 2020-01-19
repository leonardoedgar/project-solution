import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from "./Utility";
import {updateInputForm} from './actions';
import './BeeDeleteForm.css';

const createInputBoxBasedOnDatabase = (data, onChangeCallback) => {
  let boxToRender = [];
  boxToRender.push(<option key="select" value="select">select</option>);
  Object.keys(data).forEach((key) => boxToRender.push(<option key={key} value={key}>{key}</option>));
  return (
    <select name="id" onChange={(event) => {onChangeCallback('id', event.target.value)}}>
      {boxToRender}
    </select>
  );
};

const BeeDeleteForm = ({beeDatabase, updateInputForm}) => {
  return (
    <div className="delete-box">
        {Object.entries(beeDatabase).length === 0 && beeDatabase.constructor === Object?
          "No bees deployed yet":createInputBoxBasedOnDatabase(beeDatabase, updateInputForm)}
    </div>
  );
};

export default connect(mapStateToProps, {updateInputForm})(BeeDeleteForm);
