import React from 'react';
import BeeManagerTable from "./BeeManagerTable";
import './App.css';
import PanelBar from "./PanelBar";
import Title from "./Title";
import BeeRegistrationModal from "./BeeRegistrationModal";
import BeeDeleteModal from "./BeeDeleteModal";
import BeeUpdateModal from "./BeeUpdateModal";

const App = () => {
  return (
    <div>
      <Title/>
      <PanelBar/>
      <BeeManagerTable/>
      <BeeRegistrationModal/>
      <BeeUpdateModal/>
      <BeeDeleteModal/>
    </div>
  );
};

export default App;
