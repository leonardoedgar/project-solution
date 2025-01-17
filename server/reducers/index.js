const {REGISTER_BEE_CHANNEL, UPDATE_BEE_CHANNEL, DELETE_BEE_CHANNEL} = require('../actions');
/**
 * A function that represents the reducer of the RESTful API.
 * @param prevState {Object} represents previous state of the redux store
 * @param action {Object} represents the new action produced by action creators
 */
const apiReducer = (prevState, action) => {
  switch(action.type) {
    case REGISTER_BEE_CHANNEL: return registerNewBeeToDatabase(prevState, action.content);
    case UPDATE_BEE_CHANNEL: return updateBeeDatabase(prevState, action.content);
    case DELETE_BEE_CHANNEL: return deleteBee(prevState, action.content);
    default: return prevState;
  }
};

/**
 * A function to handle action for registering new bees.
 * @param prevState {Object} represents previous state of the redux store
 * @param content {Object} represents the new content of the bee to register
 */
const registerNewBeeToDatabase = (prevState, content) => {
  let key = content["id"];
  delete content["id"];
  let newContent = {...content, 'honey': 0, 'nectar': 0, 'running': false};
  return {...prevState, [key]: newContent};
};

/**
 * A function to handle action for updating bees.
 * @param prevState {Object} represents previous state of the redux store
 * @param content {Object} represents the new content of the bee to update
 */
const updateBeeDatabase = (prevState, content) => {
  let id = content["id"];
  delete content["id"];
  for (let [key, value] of Object.entries(content)) {
    if (value === undefined) {
      delete content[key];
    }
  }
  if(content['running']) {
    content["nectar"] = prevState[id]["nectar"] + prevState[id]["speed"]*2;
  }
  else {
    content["honey"] = prevState[id]["honey"] + prevState[id]["nectar"]*0.5;
    content["nectar"] = 0;
  }
  return {...prevState, [id]: {...prevState[id], ...content}};
};

/**
 * A function to handle action for deleting bees.
 * @param prevState {Object} represents previous state of the redux store
 * @param content {Number} represents id of the bee to be deleted
 */
const deleteBee = (prevState, content) => {
  let {[content["id"]]: omit, ...newState} = prevState;
  return newState;
};

module.exports = {
  apiReducer,
  registerNewBeeToDatabase,
  updateBeeDatabase,
  deleteBee
};
