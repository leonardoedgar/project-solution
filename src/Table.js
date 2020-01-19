import React from 'react';
import TableRow from "./TableRow";
import ContentRowCreator from "./ContentRowCreator";
import './Table.css';

/**
 * A functional component that represents table on the UI.
 */
const Table = () => {
  return (
    <span>
      <span className="table-title-row">
        <TableRow
          id = "Id"
          speed="Speed (m/s)"
          latitude="Latitude (&#176;)"
          longitude="Longitude (&#176;)"
          elevation="Elevation (m)"
          nectar="Amount of Nectar (g)"
          honey="Amount of Honey (g)"
          fuel="Fuel Remaining (%)"
          health="Health (%)"
          running="Running?"
        />
      </span>
      <span className="content-row">
        <ContentRowCreator/>
      </span>
    </span>
  );
};

export default Table;
