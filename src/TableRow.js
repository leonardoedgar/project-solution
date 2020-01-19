import React from 'react';
import TableCell from "./TableCell";
import './TableRow.css';

const TableRow = ({id="unknown", speed="unknown", latitude="unknown", longitude="unknown", elevation="unknown",
                    nectar="unknown", honey="unknown", fuel="unknown", health="unknown", running="unknown"}) => {
  return (
    <span className="table-row-flex">
      <TableCell text={id}/>
      <TableCell text={speed}/>
      <TableCell text={latitude}/>
      <TableCell text={longitude}/>
      <TableCell text={elevation}/>
      <TableCell text={nectar}/>
      <TableCell text={honey}/>
      <TableCell text={fuel}/>
      <TableCell text={health}/>
      <TableCell text={running}/>
    </span>
  );
};

export default TableRow;