import React from 'react';
import './GUIButton.css'

/**
 * A functional component that represents UI buttons.
 * @param callbackButtonClick {function} to call when button is clicked
 * @param children {Object} represents button's content
 * @constructor
 */
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