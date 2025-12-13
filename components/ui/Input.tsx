"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    patriotic?: boolean;
}

const Input: React.FC<InputProps> = ({
    className = "",
    patriotic = false,
    ...props
}) => {
    const baseClasses =
        "border rounded-lg px-4 py-3 focus:outline-none transition-colors w-full";
    const patrioticClasses = patriotic
        ? "border-green-300 focus:border-green-500"
        : "border-gray-300 focus:border-primary";

    const inputClasses = `
    ${baseClasses}
    ${patrioticClasses}
    ${className}
  `.trim();

    return (
        <input
            className={inputClasses}
            {...props}
        />
    );
};

export default Input;
