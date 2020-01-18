const {createStore} = require('redux');
const {apiReducer} = require('./reducers');

module.exports = createStore(apiReducer, {});
