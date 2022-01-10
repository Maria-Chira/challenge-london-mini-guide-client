import React from "react";

const TableRow = (props) => {
    return (<tr>
        <td>{props.index}</td>
        <td>{props.category.name}</td>
        <td>{props.category.phone}</td>
        <td>{props.category.address}</td>
        <td>{props.category.website ? props.category.website : '' }</td>
    </tr>
    )
}

export default TableRow;