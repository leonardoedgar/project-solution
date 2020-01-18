const express = require('express');
const store = require('./store');
const {registerBee, updateBee, deleteBee, getAllBees} = require('./actions');
const app = express();

const routeAddress = '/bee-manager';
app.use(express.json());

/**
 * Implementation of POST API
 */
app.post(routeAddress, function (req, res) {
  store.dispatch(registerBee(req.body));
  res.send();
});

/**
 * Implementation of DELETE API
 */
app.delete(routeAddress, function(req, res) {
  store.dispatch(deleteBee(req.body));
  res.send();
});

/**
 * Implementation of PUT API
 */
app.put(routeAddress, function(req, res) {
  store.dispatch(updateBee(req.body));
  res.send();
});

/**
 * Implementation of GET API
 */
app.get(routeAddress, function (req, res) {
  res.send(store.getState());
});

module.exports = app;
