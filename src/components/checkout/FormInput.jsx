import React from "react";
import { Controller } from "react-hook-form";

const FormInput = ({ name, label, errors }) => {
  return (
    <div className="relative">
      <Controller
        name={name}
        defaultValue=""
        render={({ field }) => {
          return (
            <input
              {...field}
              placeholder={label}
              id={label}
              className={`peer h-10 w-full border-b-2 placeholder-transparent ${
                errors ? "border-secondary-light" : "border-gray-300"
              } text-gray-900 focus:outline-none ${
                errors ? "focus:border-secondary-light" : "focus:border-primary"
              }`}
            />
          );
        }}
      />
      <label
        htmlFor={label}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
