import React from "react";
import "./input.css";

const ReusableInput = ({ type, name, value, onChange, placeholder, label }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
};

export default ReusableInput;
