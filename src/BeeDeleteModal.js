import React from 'react';
import {connect} from 'react-redux';
import {toggleModal, clearInputForms, updateBeeDatabase} from './actions';
import ModalWindow from "./ModalWindow";
import {isInputFormCompleted, mapStateToProps} from './Utility';
import BeeDeleteForm from "./BeeDropdownList";

const BeeDeleteModal = ({modalWindow, inputForms, toggleModal, clearInputForms, updateBeeDatabase}) => {
  return (
    <ModalWindow
      title="Bee Removal"
      isOpen={modalWindow["deleteModalOpen"]}
    >
      <div>Select Bee Id to be removed</div>
      <BeeDeleteForm/>
      <button
        className="modal-window-button"
        disabled={!isInputFormCompleted('delete', inputForms)}
        onClick={() => {
          toggleModal('deleteModalOpen');
          fetch('/bee-manager/', {
            method: 'DELETE',
            body: JSON.stringify({id: inputForms["id"]}),
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
          toggleModal('deleteModalOpen');
          clearInputForms();
        }}
        className="modal-window-button"
      >Cancel</button>
    </ModalWindow>
  );
};

export default connect(mapStateToProps, {toggleModal, clearInputForms, updateBeeDatabase})(BeeDeleteModal);
