import React from 'react';
import {connect} from 'react-redux';
import {toggleModal} from './actions';
import GUIButton from "./GUIButton";
import './PanelBar.css';

const PanelBar = ({toggleModal}) => {
  return (
    <div className="panel-bar-flex">
      <GUIButton
        callbackButtonClick={() => toggleModal('registrationModalOpen')}
      >
        Register New Bee</GUIButton>
      <GUIButton
        callbackButtonClick={() => toggleModal('updateModalOpen')}
      >
        Update Bee Status</GUIButton>
      <GUIButton
        callbackButtonClick={() => toggleModal('deleteModalOpen')}
      >
        Remove Bee</GUIButton>
    </div>
  )
};

export default connect(null, {toggleModal})(PanelBar);
