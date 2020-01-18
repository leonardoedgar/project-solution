import React from 'react';
import TableRow from "./TableRow";
import InformationRow from "./InformationRow";
const BeeManager = () => {
  return (
    <span>
      <TableRow/>
      <InformationRow text="No bee robots deployed yet!"/>
    </span>
  );
};

export default BeeManager;