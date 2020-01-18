import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReactModal from 'react-modal';
import {frontEndStore, frontEndReducer} from './reducers';
import App from './App';

ReactModal.setAppElement(document.getElementById('root'));
ReactDOM.render(
  <Provider store = {createStore(frontEndReducer, frontEndStore)}>
    <App />
  </Provider>,
  document.getElementById('root'));
