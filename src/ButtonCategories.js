import React from "react";

const Button = (props) => {
    return (
      <button
        onClick={(e) => props.getSelectedCategory(e.target.value)}
        value={props.category}>
        {props.category}
      </button>
    );
}

export default Button;