import React from 'react';
import {connect} from 'react-redux';
import BeeDropdownList from "./BeeDropdownList";
import {mapStateToProps} from "./Utility";
import {updateInputForm} from './actions';
import './BeeUpdateForm.css';

const BeeUpdateForm = ({beeDatabase, inputForms, updateInputForm}) => {
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
          />Start Process
          <input type="radio" name="status" value="finish" disabled={disableFinishBtn}
                 onChange={(event) => updateInputForm('running', !event.target.value)}
                 className="radio-button"
          />Finish Process
        </div>
      );
    }
  };

  return (
    <div>
      <BeeDropdownList/>
      {renderRadioButtons()}
    </div>
  );
};

export default connect(mapStateToProps, {updateInputForm})(BeeUpdateForm);