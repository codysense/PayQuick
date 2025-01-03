import React from "react";

const Input_Label = ({ name, label, type = "text", value }) => {
  return (
    <div className="mb-3">
      <div className="relative">
        <label
          htmlFor={name}
          className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-600"
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={value ? value : ""}
          readOnly
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-2 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
};

export default Input_Label;
