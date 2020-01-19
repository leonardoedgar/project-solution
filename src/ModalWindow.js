import React from 'react';
import ReactModal from 'react-modal';
import './ModalWindow.css';

/**
 * A functional component to create modal window.
 * @param isOpen {boolean} indicates whether the modal window should be opened or not
 * @param title {string} represents the title of the modal window
 * @param children {Object} represents the content inside the modal window
 */
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