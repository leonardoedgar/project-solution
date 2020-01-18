export const TOGGLE_REG_MODAL_CHANNEL = 'TOGGLE_REG_MODAL';
export const TOGGLE_UPDATE_MODAL_CHANNEL = 'TOGGLE_UPDATE_MODAL';
export const TOGGLE_DELETE_MODAL_CHANNEL = 'TOGGLE_UPDATE_MODAL';
export const toggleRegModal = () => {
  return {
    type: TOGGLE_REG_MODAL_CHANNEL
  }
};

export const toggleUpdateModal = () => {
  return {
    type: TOGGLE_UPDATE_MODAL_CHANNEL
  }
};

export const toggleDeleteModal = () => {
  return {
    type: TOGGLE_DELETE_MODAL_CHANNEL
  }
};
