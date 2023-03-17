import React from "react";

function BurgerButton(props) {
  return (
    <div>
      <div>
        <button
          className="w-12 h-12 relative focus:outline-none"
          onClick={props.onClick}
        >
          <div
            className={`block w-5 absolute left-6 top-1/2 transform transition duration-500 -translate-x-1/2 -translate-y-1/2 ${
              props.open ? "rotate-90" : ""
            }`}
          >
            <span
              className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out rounded ${
                props.open ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out rounded ${
                props.open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out rounded ${
                props.open ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default BurgerButton;
