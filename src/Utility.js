/**
 * A function to know whether the input form is completed by the user or not.
 * @param formType {string} indicates the type of form
 * @param currentData {string} indicates the current data filled in the form
 */
export const isInputFormCompleted = (formType, currentData) => {
  if (formType === 'registration') {
    for (let [key, value] of Object.entries(currentData)) {
      if ((value === undefined || value === '') && key !== 'nectar' && key !== 'honey' && key !== 'running') {
        return false;
      }
    }
    return true;
  }
  else if (formType === 'update') {
    return currentData["running"] !== undefined && currentData["id"] !== 'select';
  }
  else if (formType === 'delete') {
    return currentData["id"] !== undefined && currentData["id"] !== 'select';
  }
};

/**
 * A function to map state from Redux Store to components' props
 * @param state {Object} the state of the Redux Store
 */
export const mapStateToProps = (state) => {
  return {
    modalWindow: state["modalWindow"],
    inputForms: state["inputForms"],
    beeDatabase: state["beeDatabase"],
    sortData: state["sort"]
  }
};
