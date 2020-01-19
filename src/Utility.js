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

export const mapStateToProps = (state) => {
  console.log(state);
  return {
    modalWindow: state["modalWindow"],
    inputForms: state["inputForms"],
    beeDatabase: state["beeDatabase"]
  }
};
