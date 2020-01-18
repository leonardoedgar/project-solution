import React from 'react';
import './GUIButton.css'

const GUIButton = ({callbackButtonClick, children}) => {
  return (
    <button
      className={"main-button"}
      onClick={callbackButtonClick}
    >
      {children}
    </button>
  );
};

export default GUIButton;