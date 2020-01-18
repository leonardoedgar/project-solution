import React from 'react';
import {connect} from 'react-redux';
import {toggleRegModal, toggleUpdateModal, toggleDeleteModal} from './actions';
import BeeManagerTable from "./BeeManagerTable";
import './App.css';
import PanelBar from "./PanelBar";
import Title from "./Title";
import ModalWindow from "./ModalWindow";
import BeeRegistrationForm from "./BeeRegistrationForm";

const App = ({state, toggleRegModal}) => {
  return (
    <div>
      <Title/>
      <PanelBar/>
      <BeeManagerTable/>
      <ModalWindow
        title="Bee Registration"
        isOpen={state["registrationModalOpen"]}
      >
        <div>Enter new bee particulars</div>
        <BeeRegistrationForm/>
        <button className="modal-window-button">Submit</button>
        <button
          onClick={toggleRegModal}
          className="modal-window-button"
        >Cancel</button>
      </ModalWindow>
    </div>
  );
};

const mapModalStateToProps = (state) => {
  return {
    state: state["modalWindow"]
  }
};

export default connect(mapModalStateToProps, {toggleRegModal})(App);
