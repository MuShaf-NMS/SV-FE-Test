import React from "react";
import { CgSpinner } from "react-icons/cg";

function Button(props) {
  return (
    <button
      type={props.type}
      className={`relative ${props.className} shadow uppercase rounded-md px-3 py-1`}
      disabled={props.disabled || props.loading}
      onClick={props.onClick}
    >
      <CgSpinner
        className={`${
          props.loading ? "visible" : "invisible"
        } absolute animate-spin inline-flex justify-center -ml-3`}
        color="white"
        size={25}
      />
      <div
        className={`${props.loading ? "invisible" : "visible"} ${
          props.block && "inline-flex justify-center"
        }`}
      >
        {props.children}
      </div>
    </button>
  );
}

export default Button;
