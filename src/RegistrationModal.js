import React from 'react';
import {connect} from 'react-redux';
import {toggleModal, clearInputForms, updateBeeDatabase} from './actions';
import ModalWindow from "./ModalWindow";
import RegistrationForm from "./RegistrationForm";
import {isInputFormCompleted, mapStateToProps} from './Utility';

/**
 * A functional component that represents the registration modal window
 * @param modalWindow {Object} represents the state of all modal windows
 * @param inputForms {Object} represents the content of the form
 * @param toggleModal {function} to toggle the modal window
 * @param clearInputForms {function} to clear the form's content
 * @param updateBeeDatabase {function} to update database from back-end data
 */
const RegistrationModal = ({modalWindow, inputForms, toggleModal, clearInputForms, updateBeeDatabase}) => {
  return (
    <ModalWindow
      title="Bee Registration"
      isOpen={modalWindow["registrationModalOpen"]}
    >
      <div>Enter new bee particulars</div>
      <div>NOTE: Registering duplicate id will overwrite the old one</div>
      <RegistrationForm/>
      <button
        className="modal-window-button"
        disabled={!isInputFormCompleted('registration', inputForms)}
        onClick={() => {
          toggleModal('registrationModalOpen');
          fetch('/bee-manager/', {
            method: 'POST',
            body: JSON.stringify(inputForms),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(() => {
            console.log("API State update successful");
            updateBeeDatabase();
          }).catch((err) => {
            console.log("Failed to update state to Express API ", err);
          });
          clearInputForms();
        }}
      >Submit</button>
      <button
        onClick={() => {
          toggleModal('registrationModalOpen');
          clearInputForms();
        }}
        className="modal-window-button"
      >Cancel</button>
    </ModalWindow>
  );
};

export default connect(mapStateToProps, {toggleModal, clearInputForms, updateBeeDatabase})(RegistrationModal);
