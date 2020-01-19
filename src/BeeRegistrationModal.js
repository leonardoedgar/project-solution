import React from 'react';
import {connect} from 'react-redux';
import {toggleModal, clearInputForms, updateBeeDatabase} from './actions';
import ModalWindow from "./ModalWindow";
import BeeRegistrationForm from "./BeeRegistrationForm";
import {isInputFormCompleted, mapStateToProps} from './Utility';

const BeeRegistrationModal = ({modalWindow, inputForms, toggleModal, clearInputForms, updateBeeDatabase}) => {
  return (
    <ModalWindow
      title="Bee Registration"
      isOpen={modalWindow["registrationModalOpen"]}
    >
      <div>Enter new bee particulars</div>
      <BeeRegistrationForm/>
      <button
        className="modal-window-button"
        disabled={!isInputFormCompleted('registration', inputForms)}
        onClick={() => {
          toggleModal('registrationModalOpen');
          fetch('/bee-manager/', {
            method: 'PUT',
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

export default connect(mapStateToProps, {toggleModal, clearInputForms, updateBeeDatabase})(BeeRegistrationModal);
