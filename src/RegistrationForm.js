import React from 'react';
import InputBox from "./InputBox";
import './RegistrationForm.css';

/**
 * A functional component that represents a registration form
 */
const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <form>
        <InputBox
          boxType="text"
          label="Id"
          name="id"
        />
        <InputBox
          boxType="number"
          label="Speed (m/s)"
          name="speed"
        />
        <InputBox
          boxType="number"
          label="Latitude (&#176;)"
          name="latitude"
        />
        <InputBox
          boxType="number"
          label="Longitude (&#176;)"
          name="longitude"
        />
        <InputBox
          boxType="number"
          label="Elevation (m)"
          name="elevation"
        />
        <InputBox
          boxType="number"
          label="Fuel (%)"
          name="fuel"
        />
        <InputBox
          boxType="number"
          label="Health (%)"
          name="health"
        />
      </form>
    </div>
  );
};

export default RegistrationForm;