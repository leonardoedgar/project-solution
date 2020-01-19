import React from 'react';
import {connect} from 'react-redux';
import {toggleModal, clearInputForms, updateBeeDatabase} from './actions';
import ModalWindow from "./ModalWindow";
import {isInputFormCompleted, mapStateToProps} from './Utility';
import BeeUpdateForm from "./BeeUpdateForm";

const BeeUpdateModal = ({modalWindow, inputForms, toggleModal, clearInputForms, updateBeeDatabase}) => {
  return (
    <ModalWindow
      title="Bee Update"
      isOpen={modalWindow["updateModalOpen"]}
    >
      <div>Select Bee Id to Update</div>
      <BeeUpdateForm/>
      <button
        className="modal-window-button"
        disabled={!isInputFormCompleted('update', inputForms)}
        onClick={() => {
          toggleModal('updateModalOpen');
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
          toggleModal('updateModalOpen');
          clearInputForms();
        }}
        className="modal-window-button"
      >Cancel</button>
    </ModalWindow>
  )
};

export default connect(mapStateToProps, {toggleModal, clearInputForms, updateBeeDatabase})(BeeUpdateModal);