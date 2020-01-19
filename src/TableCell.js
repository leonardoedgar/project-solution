import React from 'react';
import './TableCell.css';

/**
 * A functional component that represents a cell in the table.
 * @param text {string} represents the content of the cell
 */
const TableCell = ({text}) => {
  const tableCellStyling = "table-cell";
  const textStyling = 'table-cell-text';
  return (
    <span className={tableCellStyling}>
        <span className={textStyling}>
          {text}
        </span>
    </span>
  );
};

export default TableCell;