import React from 'react';
import {connect} from 'react-redux';
import {toggleModal, clearInputForms, updateBeeDatabase} from './actions';
import ModalWindow from "./ModalWindow";
import {isInputFormCompleted, mapStateToProps} from './Utility';
import DeleteForm from "./DropdownList";

/**
 * A modal window to remove bee from database.
 * @param modalWindow {Object} represents the state of modalWindows in the App
 * @param inputForms {Object} represents the content of input form
 * @param toggleModal {function} to toggle modal window
 * @param clearInputForms {function} to clear input forms' content
 * @param updateBeeDatabase {function} to update nee database from back-end data
 */
const DeleteModal = ({modalWindow, inputForms, toggleModal, clearInputForms, updateBeeDatabase}) => {
  return (
    <ModalWindow
      title="Bee Removal"
      isOpen={modalWindow["deleteModalOpen"]}
    >
      <div>Select Bee Id to be removed</div>
      <DeleteForm/>
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

export default connect(mapStateToProps, {toggleModal, clearInputForms, updateBeeDatabase})(DeleteModal);
