import React from 'react';
import {connect} from 'react-redux'
import TableRow from "./TableRow";
import InformationRow from "./InformationRow";
import {mapStateToProps} from "./Utility";

/**
 * A functional component to create table rows based on content in database.
 * @param beeDatabase {Object} represents data of bees in the Store
 */
const ContentRowCreator = ({beeDatabase, sortData}) => {
  const renderSortedBeeDatabase = () => {
    let copiedBeeDatabase = {...beeDatabase};
    let databaseArray = [];
    for (let [key, value] of Object.entries(copiedBeeDatabase)) {
      databaseArray.push([key, value["honey"]]);
    }
    databaseArray.sort(sortFunction);
    let dataToRender = [];
    console.log(databaseArray);
    for (let [id] of databaseArray) {
      dataToRender.push(
        <TableRow
          key={id}
          id = {id}
          speed={copiedBeeDatabase[id]["speed"]}
          latitude={copiedBeeDatabase[id]["latitude"]}
          longitude={copiedBeeDatabase[id]["longitude"]}
          elevation={copiedBeeDatabase[id]["elevation"]}
          nectar={copiedBeeDatabase[id]["nectar"]}
          honey={copiedBeeDatabase[id]["honey"]}
          fuel={copiedBeeDatabase[id]["fuel"]}
          health={copiedBeeDatabase[id]["health"]}
          running={copiedBeeDatabase[id]["running"]?"Yes": "No"}
        />
      )
    }
    return dataToRender;
  };

  const sortFunction = (first, second) => {
    if (first[1] < second[1]) {
      return 1;
    }
    else if (first[1] > second[1]) {
      return -1;
    }
    return 0;
  };

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
          <InformationRow text="No bee robots deployed yet!"/>:sortData?renderSortedBeeDatabase():
          renderBeeDatabase()
      }
    </span>
  );
};

export default connect(mapStateToProps, {})(ContentRowCreator);