import React from 'react';
import TableCell from "./TableCell";
import './TableRow.css';

/**
 * A functional component that represents a row in the table.
 * @param id {string} represents the id of the bee
 * @param speed {string} represents the speed of the bee
 * @param latitude {string} represents the latitude of the bee
 * @param longitude {string} represents the longitude of the bee
 * @param elevation {string} represents the elevation of the bee
 * @param nectar {string} represents the amount of nectar the bee has
 * @param honey {string} represents the amount of honey the bee has
 * @param fuel {string} represents the remaining fuel the bee has
 * @param health {string} represents the remaining health the bee has
 * @param running {string} represents whether the bee is running or not
 */
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