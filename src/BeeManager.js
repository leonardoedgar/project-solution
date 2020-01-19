import React from 'react';
import {connect} from 'react-redux'
import TableRow from "./TableRow";
import InformationRow from "./InformationRow";
import {mapStateToProps} from "./Utility";

const BeeManager = ({beeDatabase}) => {
  const renderBeeDatabase = () => {
    let beeToRender = [];
    Object.entries(beeDatabase).forEach(([key, value]) =>
      beeToRender.push(<TableRow
        key={key}
        id = {key}
        speed={value["speed"]}
        latitude={value["latitude"]}
        longitude={value["longitude"]}
        elevation={value["elevation"]}
        nectar={value["nectar"]}
        honey={value["honey"]}
        fuel={value["fuel"]}
        health={value["health"]}
        running={value["running"]?"Yes": "No"}
      />));
    return beeToRender;
  };
  return (
    <span>
      {
        Object.keys(beeDatabase).length === 0 && beeDatabase.constructor === Object?
          <InformationRow text="No bee robots deployed yet!"/>:renderBeeDatabase()
      }
    </span>
  );
};

export default connect(mapStateToProps, {})(BeeManager);