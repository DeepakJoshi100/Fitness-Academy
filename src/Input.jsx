import React from "react";

function Input({ id, name, errors, touched, className, ...rest }) {
  return (
    <div className="relative flex flex-col w-1/2 m-1 mx-auto">
      <label htmlFor={id} className="sr-only">
        {" "}
        {name}
      </label>
      <input
        name={name}
        id={id}
        {...rest}
        className={
          "h-8 text-xs focus:border-blue-300 border-2 border-orange-300 duration-300 outline-none rounded-md px-1 " +
          className
        }
      />
      <div className="absolute text-xs text-red-500 -bottom-4 left-2">
        {touched && errors}{" "}
      </div>
    </div>
  );
}

export default Input;
