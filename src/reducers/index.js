import {TOGGLE_REG_MODAL_CHANNEL, TOGGLE_UPDATE_MODAL_CHANNEL, TOGGLE_DELETE_MODAL_CHANNEL} from '../actions'

export const frontEndStore = {
  'modalWindow': {
    'registrationModalOpen': true,
    'updateModalOpen': false,
    'deleteModalOpen': false
  }
};

export const frontEndReducer = (prevState, action) => {
  switch(action.type) {
    case TOGGLE_REG_MODAL_CHANNEL: return toggleModal('registrationModalOpen', prevState);
    case TOGGLE_UPDATE_MODAL_CHANNEL: return toggleModal('updateModalOpen', prevState);
    case TOGGLE_DELETE_MODAL_CHANNEL: return toggleModal('deleteModalOpen', prevState);
    default: return prevState;
  }
};

const toggleModal = (modalStateKey, prevState) => {
  let newState = {...prevState};
  let newModalState = {...prevState['modalWindow']};
  newState["modalWindow"] = {...newModalState, [modalStateKey]: !newModalState[modalStateKey]};
  return newState;
};
