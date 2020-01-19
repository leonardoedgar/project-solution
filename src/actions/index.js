export const TOGGLE_MODAL_CHANNEL = 'TOGGLE_MODAL';
export const CLEAR_INPUT_FORMS_CHANNEL = 'CLEAR_INPUT_FORMS';
export const UPDATE_INPUT_FORMS_CHANNEL = 'UPDATE_INPUT_FORMS';
export const UPDATE_BEE_DATABASE_CHANNEL = 'UPDATE_BEE_DATABASE';
/**
 * Action creator to toggle Modal Window.
 * @param modalStateKey {string} indicates the state name of the modal window
 */
export const toggleModal = (modalStateKey) => {
  return {
    type: TOGGLE_MODAL_CHANNEL,
    modalStateKey: modalStateKey
  }
};
/**
 * Action creator to clear input forms' content.
 */
export const clearInputForms = () => {
  return {
    type: CLEAR_INPUT_FORMS_CHANNEL
  }
};

/**
 * Action creator to update input form content based on user's input.
 * @param beeAttribute {string} represents the attribute that is modified
 * @param content {string} represents the modified content
 * @returns {{beeAttribute: *, type: *, content: *}}
 */
export const updateInputForm = (beeAttribute, content) => {
  return {
    type: UPDATE_INPUT_FORMS_CHANNEL,
    beeAttribute: beeAttribute,
    content: content
  }
};

/**
 * Async action creator to update front-end database based on back-end data.
 */
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
