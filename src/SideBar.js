import React from 'react';
import {connect} from 'react-redux';
import './SideBar.css';
import {mapStateToProps} from "./Utility";

/**
 * A functional component to display statistics of the database
 * @param beeDatabase {Object} the data of the bee
 */
const SideBar = ({beeDatabase}) => {
  const getTotalHoney = () => {
    let totalHoney = 0;
    for (let value of Object.values(beeDatabase)) {
      if (value.hasOwnProperty("honey")) {
        totalHoney += value["honey"];
      }
    }
    return totalHoney;
  };
  return (
    <div className="side-bar">
      <div className="side-bar-text">{"Amount of Honey Collected: " + getTotalHoney()}</div>
      <div className="side-bar-text">Nectar to Honey Convert Rate: 50%</div>
    </div>
  )
};

export default connect(mapStateToProps, {})(SideBar);