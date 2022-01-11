import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
    const data = props.data;
    return (
      <div>
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
            {data.map((pharmacy, index) => {
              return <TableRow category={pharmacy} key={index} index={index} />;
            })}
          </tbody>
        </table>

        {
            data.length < 1 ?
            <div class="div">Choose a city and category first</div>: ""

        }
        
     </div>
    );
}

export default Table;