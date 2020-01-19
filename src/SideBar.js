import React from 'react';
import {connect} from 'react-redux';
import './SideBar.css';
import {mapStateToProps} from "./Utility";
import {toggleSortDatabase} from './actions';

/**
 * A functional component to display data processing from the database.
 * @param beeDatabase {Object} the data of the bee
 * @param toggleSortDatabase {function} to call to enable or disable sorting
 */
const SideBar = ({beeDatabase, toggleSortDatabase}) => {
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
      <div className="check-box-container">
        <input
          type="checkbox"
          name="sort"
          value="sort"
          className="check-box"
          onChange={toggleSortDatabase}
          id="sort"
        />
        <label className="check-box-text" htmlFor="sort">Sort based on highest honey produced</label>
      </div>
      <div>
        <div className="side-bar-text">{"Amount of Honey Collected (g): " + getTotalHoney()}</div>
        <div className="side-bar-text">Nectar to Honey Convert Rate: 50%</div>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, {toggleSortDatabase})(SideBar);
