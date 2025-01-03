import React from "react";

const Input = ({ type ="text", placeholder, name, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        type={type}
        // placeholder={placeholder}
        name={name} // This should match your formData property
        className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
      />
    </>
  );
};

export default Input;
