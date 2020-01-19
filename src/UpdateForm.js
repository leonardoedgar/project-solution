import React from 'react';
import {connect} from 'react-redux';
import DropdownList from "./DropdownList";
import {mapStateToProps} from "./Utility";
import {updateInputForm} from './actions';
import './UpdateForm.css';

/**
 * A functional component that represents the update form.
 * @param beeDatabase {Object} represents the data of the bee
 * @param inputForms {Object} represents the content of the form
 * @param updateInputForm {function} to call to update the content of the form based on user's input
 */
const UpdateForm = ({beeDatabase, inputForms, updateInputForm}) => {
  const renderRadioButtons = () => {
    if(Object.keys(beeDatabase).length !== 0 && beeDatabase.constructor === Object) {
      const validSelection = inputForms["id"] !== 'select' && inputForms["id"] !== undefined;
      let disableStartBtn = true, disableFinishBtn = true;
      if (validSelection) {
        disableStartBtn = beeDatabase[inputForms["id"]]["running"];
        disableFinishBtn = !beeDatabase[inputForms["id"]]["running"];
      }
      return (
        <div>
          <input type="radio" name="status" value="start" disabled={disableStartBtn}
                 onChange={(event) => updateInputForm('running', event.target.value)}
                 className="radio-button"
                 id="start"
          /><label htmlFor="start" className="radio-button-text">Start Process</label>
          <input type="radio" name="status" value="finish" disabled={disableFinishBtn}
                 onChange={(event) => updateInputForm('running', !event.target.value)}
                 className="radio-button"
                 id="finish"
          /><label htmlFor="finish" className="radio-button-text">Finish Process</label>
        </div>
      );
    }
  };

  return (
    <div>
      <DropdownList/>
      {renderRadioButtons()}
    </div>
  );
};

export default connect(mapStateToProps, {updateInputForm})(UpdateForm);