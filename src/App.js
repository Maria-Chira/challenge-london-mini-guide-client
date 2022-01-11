import React, { useState } from "react";
import './App.css';
import Header from "./Header.js";
import DropdownCities from "./DropdownCities";
import Button from "./ButtonCategories";
import Table from "./Table";

import harrowData from "./data/Harrow.json";

function App() {
  const [city, setCity] = useState("Harrow");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);

  function getSelectedCity(e) {
    console.log(e.target)
    setCity(e.target.value);
  }

  function getSelectedCategory(categoryParameter) {
    setCategory(categoryParameter);

    fetch(`http://localhost:3001/${city}/${categoryParameter}`).then((res) =>
      res.json()
    ).then(data => setData(data))
  }




  return (
    <div className="App">
      <Header className="App-header" />
      <DropdownCities currentCity={getSelectedCity} />
      <div>
        <Button
          category="Pharmacies"
          getSelectedCategory={getSelectedCategory}
        />
        <Button category="Colleges" getSelectedCategory={getSelectedCategory} />
        <Button
          category="Hospitals"
          getSelectedCategory={getSelectedCategory}
        />
        <Button category="Doctors" getSelectedCategory={getSelectedCategory} />
      </div>
      <Table data={data} />
    </div>
  );
}

export default App;
