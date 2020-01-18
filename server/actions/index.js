const REGISTER_BEE_CHANNEL = 'REGISTER_BEE';
const UPDATE_BEE_CHANNEL = 'UPDATE_BEE';
const DELETE_BEE_CHANNEL = 'DELETE_BEE';
const registerBee = (content) => {
  return {
    type: REGISTER_BEE_CHANNEL,
    content: content
  };
};

const updateBee = (content) => {
  return {
    type: UPDATE_BEE_CHANNEL,
    content: content
  }
};

const deleteBee = (content) => {
  return {
    type: DELETE_BEE_CHANNEL,
    content: content
  }
};

module.exports = {
  REGISTER_BEE_CHANNEL,
  UPDATE_BEE_CHANNEL,
  DELETE_BEE_CHANNEL,
  registerBee,
  updateBee,
  deleteBee,
};