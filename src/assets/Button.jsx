import React from "react";

const Button = ({
  color,
  label = "Click here"
}) => {
  return (
    <button
      className={`padding-2 shadow-none hover:shadow background-light-${color} hover:background-dark-${color}`}
    >
      Click here
    </button>
  );
}

export default Button