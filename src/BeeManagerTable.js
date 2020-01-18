import React from 'react';
import TableRow from "./TableRow";
import BeeManager from "./BeeManager";
import './BeeManagerTable.css';

const BeeManagerTable = () => {
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
        />
      </span>
      <span className="bee-managers">
        <BeeManager/>
      </span>
    </span>
  );
};

export default BeeManagerTable;
