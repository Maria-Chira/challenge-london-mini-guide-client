import React from "react";
import './App.css';
import Header from "./Header.js";
import DropdownCities from "./DropdownCities";
import Button from "./ButtonCategories";
import Table from "./Table";

import harrowData from "./data/Harrow.json";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <DropdownCities />
      <div>
        <Button category="Pharmacies" />
        <Button category="Schools & Colleges" />
        <Button category="Hospitals" />
        <Button category="Doctors" />
      </div>
      <Table city={harrowData} />
    </div>
  );
}

export default App;
