import React from 'react';
import './TableCell.css';

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