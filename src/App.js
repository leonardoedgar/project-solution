import React from 'react';
import Table from "./Table";
import './App.css';
import PanelBar from "./PanelBar";
import Title from "./Title";
import RegistrationModal from "./RegistrationModal";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

/**
 * The main Bee Robots Manager App.
 */
const App = () => {
  return (
    <div>
      <Title/>
      <PanelBar/>
      <Table/>
      <RegistrationModal/>
      <UpdateModal/>
      <DeleteModal/>
    </div>
  );
};

export default App;
