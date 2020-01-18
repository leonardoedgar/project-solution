import React from 'react';
import './InformationRow.css';
const InformationRow = ({text}) => {
  return (
    <div className="table-row-flex">
      <span className="information-row">
        <span className="information-row-text">
          {text}
        </span>
      </span>
    </div>
  );
};

export default InformationRow;