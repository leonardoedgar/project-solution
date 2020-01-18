import React from 'react';
import './TextBox.css';

const TextBox = ({label, name}) => {
  return (
    <div className="text-box">
      <div>{label}</div>
      <div>
        <input
          type="text"
          name={name}
          required={true}
          placeholder="Enter here"
        />
      </div>
    </div>
  );
};

export default TextBox;