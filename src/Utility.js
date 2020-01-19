export const isInputFormCompleted = (formType, currentData) => {
  if (formType === 'registration') {
    for (let value of Object.values(currentData)) {
      if (value === undefined) {
        return false;
      }
    }
    return true;
  }
  else if (formType === 'update') {
    let noOfDefinedProps = 0;
    Object.entries(currentData).forEach(([key, value]) => {
      if (value !== undefined && key !== 'id') {
        noOfDefinedProps += 1;
      }
    });
    return currentData["id"] !== undefined && noOfDefinedProps!== 0;
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
