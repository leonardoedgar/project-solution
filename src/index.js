import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReactModal from 'react-modal';
import thunk from 'redux-thunk';
import {frontEndStore, frontEndReducer} from './reducers';
import App from './App';

ReactModal.setAppElement(document.getElementById('root'));
ReactDOM.render(
  <Provider store = {createStore(frontEndReducer, frontEndStore, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root'));
