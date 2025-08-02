"use client";

import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "font-semibold transition-all duration-300 rounded-lg flex items-center justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg",
    secondary:
      "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
    patriotic:
      "bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white shadow-lg",
    outline:
      "border border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledClasses : ""}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
