import React from 'react';
import InputBox from "./InputBox";
import './BeeRegistrationForm.css';

const BeeRegistrationForm = () => {
  return (
    <div className="bee-registration-form">
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
          label="Amount of Nectar (g)"
          name="nectar"
        />
        <InputBox
          boxType="number"
          label="Amount of Honey (g)"
          name="honey"
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

export default BeeRegistrationForm;