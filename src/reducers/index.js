import {TOGGLE_MODAL_CHANNEL, CLEAR_INPUT_FORMS_CHANNEL, UPDATE_INPUT_FORMS_CHANNEL,
  UPDATE_BEE_DATABASE_CHANNEL} from '../actions'

const defaultBeeParticulars = {
  id: undefined,
  speed: undefined,
  latitude: undefined,
  longitude: undefined,
  elevation: undefined,
  nectar: undefined,
  honey: undefined,
  fuel: undefined,
  health: undefined
};

export const frontEndStore = {
  'modalWindow': {
    'registrationModalOpen': false,
    'updateModalOpen': false,
    'deleteModalOpen': false
  },
  'inputForms': defaultBeeParticulars,
  'beeDatabase': {}
};

export const frontEndReducer = (prevState, action) => {
  switch(action.type) {
    case TOGGLE_MODAL_CHANNEL: return toggleModal(action.modalStateKey, prevState);
    case CLEAR_INPUT_FORMS_CHANNEL: return {...prevState, 'inputForms': defaultBeeParticulars};
    case UPDATE_INPUT_FORMS_CHANNEL: return updateInputForm(prevState, action.beeAttribute, action.content);
    case UPDATE_BEE_DATABASE_CHANNEL: return {...prevState, 'beeDatabase': action.content};
    default: return prevState;
  }
};

const toggleModal = (modalStateKey, prevState) => {
  let newState = {...prevState};
  let prevModalState = {...prevState['modalWindow']};
  newState["modalWindow"] = {...prevModalState, [modalStateKey]: !prevModalState[modalStateKey]};
  return newState;
};

const updateInputForm = (prevState, beeAttribute, newContent) => {
  let newState = {...prevState};
  let prevBeeAttribute = {...prevState['inputForms']};
  newState['inputForms'] = {...prevBeeAttribute, [beeAttribute]: newContent};
  return newState;
};
