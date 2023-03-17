import React from "react";

function Input({ methods, label, className, maxWidth, ...props }) {
  return (
    <div className={className}>
      <div className="flex relative">
        <input
          {...methods.register(props.name)}
          {...props}
          id={props.name}
          className={`border peer placeholder-transparent focus:placeholder-gray-400 ${
            methods.formState.errors[props.name]
              ? "border-[#ff5252]"
              : "border-[#00000099] focus:border-[#1867c0]"
          } focus:outline-none focus:border-2 flex-1 px-2 py-1 focus:px-[7px] focus:py-[3px] rounded-md`}
        />
        <label
          htmlFor={props.name}
          // className={`absolute peer-placeholder-shown:top-1 placeholder:text-[#00000099] transition-all duration-500 peer-placeholder-shown:opacity-0 cursor-text peer-focus:opacity-100 peer-focus:-top-[7px] -top-[7px] peer-focus:text-xs peer-focus:bg-white bg-white ${
          className={`absolute transition-all duration-500 text-[#00000099] cursor-text top-1 peer-focus:-top-[7px] peer-focus:text-xs peer-focus:bg-white left-[9px] peer-focus:left-[9px] ${
            methods.watch(props.name) && "text-xs -top-[7px] bg-white"
          } ${
            methods.formState.errors[props.name]
              ? "text-[#ff5252]"
              : "peer-focus:text-[#1867c0]"
          }`}
        >
          {label}
        </label>
      </div>
      {methods.formState.errors[props.name] && (
        <p className="text-[#ff5252] text-xs pl-2">
          {methods.formState.errors[props.name].message}
        </p>
      )}
    </div>
  );
}

export default Input;
