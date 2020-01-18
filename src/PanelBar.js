import React from 'react';
import {connect} from 'react-redux';
import {toggleRegModal, toggleUpdateModal, toggleDeleteModal} from './actions';
import GUIButton from "./GUIButton";
import './PanelBar.css';

const PanelBar = ({toggleRegModal}) => {
  return (
    <div className="panel-bar-flex">
      <GUIButton
        callbackButtonClick={() => {
          fetch('/bee-manager/', {
            method: 'GET'
          }).then((res) => {
            return res.json();
          }).then((message) => {
            console.log(message);
          }).catch((err) => {
            console.log("Failed to retrieve current state from Express API ", err);
          });
        }}
      >Get all states</GUIButton>
      <GUIButton
        callbackButtonClick={() => {
          fetch('/bee-manager/', {
            method: 'PUT',
            body: JSON.stringify({
              id: '123',
              speed: 40,
              altitude: 60
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(() => {
            console.log("API State update successful");
          }).catch((err) => {
            console.log("Failed to update state to Express API ", err);
          })
        }}
      >Update state</GUIButton>
      <GUIButton
        callbackButtonClick={() => {
          fetch('/bee-manager/', {
            method: 'POST',
            body: JSON.stringify({
              id: '123',
              speed: 20,
              altitude: 20
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(() => {
            console.log("API State addition successful");
          }).catch((err) => {
            console.log("Failed to add new state to Express API ", err);
          })
        }}
      >Add new state</GUIButton>
      <GUIButton
        callbackButtonClick={() => {
          fetch('/bee-manager/', {
            method: 'DELETE',
            body: JSON.stringify({
              id: '123'
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(() => {
            console.log("API State deletion successful");
          }).catch((err) => {
            console.log("Failed to delete the state in Express API ", err);
          })
        }}
      >Delete state</GUIButton>
      <GUIButton
        callbackButtonClick={toggleRegModal}>Open Modal Registration</GUIButton>
    </div>
  )
};

export default connect(null, {toggleRegModal})(PanelBar);
