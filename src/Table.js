import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
    const city = props.city;
    return (
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Website</th>
            </tr>
        </thead>

        <tbody>
          {city.pharmacies.map((pharmacy, index) => {
            return <TableRow category={pharmacy} key={index} index={index} />;
          })}
        </tbody>
      </table>
    );
}

export default Table;