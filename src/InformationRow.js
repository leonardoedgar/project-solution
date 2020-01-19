import React from 'react';
import './InformationRow.css';

/**
 * A functional component to write information in a table row.
 * @param text {string} represents information to display
 */
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