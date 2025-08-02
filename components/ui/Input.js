"use client";

import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  patriotic = false,
  ...props
}) => {
  const baseClasses =
    "border rounded-lg px-4 py-3 focus:outline-none transition-colors w-full";
  const patrioticClasses = patriotic
    ? "border-green-300 focus:border-green-500"
    : "border-gray-300 focus:border-blue-500";

  const inputClasses = `
    ${baseClasses}
    ${patrioticClasses}
    ${className}
  `.trim();

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClasses}
      {...props}
    />
  );
};

export default Input;
