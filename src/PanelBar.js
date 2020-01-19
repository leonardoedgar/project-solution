import React from 'react';
import {connect} from 'react-redux';
import {toggleModal} from './actions';
import GUIButton from "./GUIButton";
import './PanelBar.css';

const PanelBar = ({toggleModal}) => {
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
        callbackButtonClick={() => toggleModal('registrationModalOpen')}
      >
        Register New Bee</GUIButton>
      <GUIButton
        callbackButtonClick={() => toggleModal('updateModalOpen')}
      >
        Open Update Form</GUIButton>
      <GUIButton
        callbackButtonClick={() => toggleModal('deleteModalOpen')}
      >
        Remove Bee</GUIButton>
    </div>
  )
};

export default connect(null, {toggleModal})(PanelBar);
