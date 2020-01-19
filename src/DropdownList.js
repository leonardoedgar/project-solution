import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from "./Utility";
import {updateInputForm} from './actions';
import './DropDownList.css';

/**
 * A function to create a dropdown list.
 * @param data {Object} represents to be used as options in the drop down list
 * @param onChangeCallback {function} to call when there is a change in the option selected
 */
const createDropDownList = (data, onChangeCallback) => {
  let boxToRender = [];
  boxToRender.push(<option key="select" value="select">select</option>);
  Object.keys(data).forEach((key) => boxToRender.push(<option key={key} value={key}>{key}</option>));
  return (
    <select className="drop-down-list" name="id" onChange={(event) => {onChangeCallback('id', event.target.value)}}>
      {boxToRender}
    </select>
  );
};

/**
 * A functional component that creates drop down list.
 * @param beeDatabase {Object} represents data of bees in the Store
 * @param updateInputForm {function} to update the Store based on user's selection
 */
const DropdownList = ({beeDatabase, updateInputForm}) => {
  return (
    <div className="drop-down-container">
        {Object.entries(beeDatabase).length === 0 && beeDatabase.constructor === Object?
          "No bees deployed yet":createDropDownList(beeDatabase, updateInputForm)}
    </div>
  );
};

export default connect(mapStateToProps, {updateInputForm})(DropdownList);
