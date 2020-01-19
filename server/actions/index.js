const REGISTER_BEE_CHANNEL = 'REGISTER_BEE';
const UPDATE_BEE_CHANNEL = 'UPDATE_BEE';
const DELETE_BEE_CHANNEL = 'DELETE_BEE';
/**
 * Action creator to register a new bee to database
 * @param content {Object} represents the details of the new bee
 */
const registerBee = (content) => {
  return {
    type: REGISTER_BEE_CHANNEL,
    content: content
  };
};

/**
 * Action creator to update a bee status
 * @param content {Object} represents status and the new value to update to
 */
const updateBee = (content) => {
  return {
    type: UPDATE_BEE_CHANNEL,
    content: content
  }
};

/**
 * Action creator to delete bee from the database
 * @param content {Object} represents bee particulars to be removed from database
 */
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