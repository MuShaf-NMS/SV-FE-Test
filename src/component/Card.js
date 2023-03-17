import React from "react";

function Card(props) {
  return (
    <div
      className={`bg-white rounded-md drop-shadow border p-3 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
