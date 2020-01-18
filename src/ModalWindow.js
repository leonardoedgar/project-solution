import React from 'react';
import ReactModal from 'react-modal';
import './ModalWindow.css';

const ModalWindow = ({isOpen, title, children}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="modal-window"
    >
      <div className="modal-window-text">
        <div className="modal-title">{title}</div>
        <div className="modal-content">{children}</div>
      </div>
    </ReactModal>
  );
};

export default ModalWindow;