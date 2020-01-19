export const TOGGLE_MODAL_CHANNEL = 'TOGGLE_MODAL';
export const CLEAR_INPUT_FORMS_CHANNEL = 'CLEAR_INPUT_FORMS';
export const UPDATE_INPUT_FORMS_CHANNEL = 'UPDATE_INPUT_FORMS';
export const UPDATE_BEE_DATABASE_CHANNEL = 'UPDATE_BEE_DATABASE';
export const toggleModal = (modalStateKey) => {
  return {
    type: TOGGLE_MODAL_CHANNEL,
    modalStateKey: modalStateKey
  }
};

export const clearInputForms = () => {
  return {
    type: CLEAR_INPUT_FORMS_CHANNEL
  }
};

export const updateInputForm = (beeAttribute, content) => {
  return {
    type: UPDATE_INPUT_FORMS_CHANNEL,
    beeAttribute: beeAttribute,
    content: content
  }
};

export const updateBeeDatabase = () => {
  return async (dispatch) => {
    fetch('/bee-manager/', {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((content) => {
      dispatch({
        type: UPDATE_BEE_DATABASE_CHANNEL,
        content: content
    });
    }).catch((err) => {
      console.log("Failed to retrieve current state from Express API ", err);
  });
}};
