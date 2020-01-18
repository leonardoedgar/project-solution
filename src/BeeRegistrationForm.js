import React from 'react';
import TextBox from "./TextBox";
import './BeeRegistrationForm.css';

const BeeRegistrationForm = () => {
  return (
    <div className="bee-registration-form">
      <form>
        <TextBox
          label="Id"
          name="id"
        />
        <TextBox
          label="Speed (m/s)"
          name="speed"
        />
        <TextBox
          label="Latitude (&#176;)"
          name="latitude"
        />
        <TextBox
          label="Longitude (&#176;)"
          name="longitude"
        />
        <TextBox
          label="Elevation (m)"
          name="elevation"
        />
        <TextBox
          label="Amount of Nectar (g)"
          name="nectar"
        />
        <TextBox
          label="Amount of Honey (g)"
          name="honey"
        />
        <TextBox
          label="Fuel (%)"
          name="elevation"
        />
        <TextBox
          label="Health (%)"
          name="nectar"
        />
      </form>
    </div>
  );
};

export default BeeRegistrationForm;