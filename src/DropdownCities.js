import React from "react";

const DropdownCities = (props) => {
    return (
      <div>
        <label htmlFor="cities">Choose a city</label>
        <select onChange={props.currentCity} name="cities" id="cities">
          <option value="Harrow"> Harrow </option>
          <option value="Stratford"> Stratford </option>
          <option value="Heathrow"> Heathrow </option>
        </select>
      </div>
    );
}

export default DropdownCities;